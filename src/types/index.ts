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

export interface TopCoin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  sparkline_in_7d: {
    price: number[];
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

export interface BitcoinData {
  market_data: {
    current_price: {
      usd: number;
    };
    high_24h: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    total_volume: {
      usd: number;
    };
    market_cap_rank: number;
  };
}