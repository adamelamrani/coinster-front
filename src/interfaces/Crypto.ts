interface Crypto {
  id: string;
  name: string;
  symbol: string;
  slug: string;
  tags: Array<string>;
  max_supply: number | string;
  total_supply: number | string;
  platform: Array<string> | null;
  price: number;
  percent_change_1h: number | string;
  percent_change_24h: number | string;
  percent_change_7d: number | string;
  market_cap: number | string;
  img: string;
}

export default Crypto;
