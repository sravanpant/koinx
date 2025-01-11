import axios from 'axios'
import { CoinData, TrendingCoin } from '@/types'

const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
})

export async function getCoinData(id: string): Promise<CoinData> {
  try {
    const { data } = await api.get(`/simple/price`, {
      params: {
        ids: id,
        vs_currencies: 'usd,inr',
        include_24hr_change: true,
        include_market_cap: true,
        include_volume: true,
      },
    })

    return {
      id,
      current_price: data[id].usd,
      price_change_percentage_24h: data[id].usd_24h_change,
      market_cap: data[id].usd_market_cap,
      total_volume: data[id].usd_volume,
      inr_price: data[id].inr,
    }
  } catch (error) {
    console.error('Error fetching coin data:', error)
    throw error
  }
}

export async function getTrendingCoins(): Promise<TrendingCoin[]> {
  try {
    const { data } = await api.get('/search/trending')
    return data.coins
  } catch (error) {
    console.error('Error fetching trending coins:', error)
    throw error
  }
}

export async function getCoinPriceHistory(
  id: string,
  days: number = 7,
  interval: string = 'daily'
): Promise<{ timestamp: number; price: number }[]> {
  try {
    const { data } = await api.get(`/coins/${id}/market_chart`, {
      params: {
        vs_currency: 'usd',
        days,
        interval,
      },
    })

    return data.prices.map(([timestamp, price]: [number, number]) => ({
      timestamp,
      price,
    }))
  } catch (error) {
    console.error('Error fetching price history:', error)
    throw error
  }
}