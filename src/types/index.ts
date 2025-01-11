export interface CoinData {
  id: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  inr_price: number;
}

export interface TrendingCoin {
  item: {
    id: string;
    name: string;
    symbol: string;
    small: string;
    data: {
      price: string;
      price_change_percentage_24h: {
        usd: number;
      };
      sparkline: string;
    };
  };
}

export interface PriceHistoryData {
  timestamp: number;
  price: number;
}

export interface PriceData {
  timestamp: number;
  price: number;
}

export interface TimeRange {
  label: string;
  value: string;
  days: string;
  interval?: string;
}

export interface PriceData {
  timestamp: number;
  price: number;
}
