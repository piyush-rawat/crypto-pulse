export type Coin = {
  id: string;
  market_cap_rank: number;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  circulating_supply: number;
  total_volume: number;
  sparkline_in_7d: { price: number[] };
};

export type CoinData = {};

export type TrendingCoin = {
  item: {
    id: string;
    name: string;
    market_cap_rank: number;
    thumb: string;
    symbol: string;
    data: {
      price: number;
      price_change_percentage_24h: {
        usd: number
      };
      market_cap: string;
      total_volume: number;
      sparkline: string;
    };
  };
};
