interface Crypto {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  date_added: Date | string;
  max_supply: number;
  circulating_supply: number;
  total_supply: number;
  last_updated: Date | string;
  price: number;
  percent_change_24h: number;
}

export default Crypto;
