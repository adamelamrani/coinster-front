import USD from "./USD";

interface Crypto {
  name: string;
  symbol: string;
  slug: string;
  date_added: Date;
  max_supply: number;
  circulating_supply: number;
  total_supply: number;
  last_updated: Date;
  USD: USD;
}

export default Crypto;
