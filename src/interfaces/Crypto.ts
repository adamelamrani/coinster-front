interface Crypto {
  id: string;
  name: string;
  symbol: string;
  slug: string;
  tags: Array<string>;
  max_supply: number;
  total_supply: number;
  platform: Array<string> | null;
  price: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  market_cap: number;
  img: string;
}

export default Crypto;
