import USD from "./USD";

interface Crypto {
  name: string;
  symbol: string;
  slug: string;
  date_added: Date | string;
  max_supply: number;
  circulating_supply: number;
  total_supply: number;
  last_updated: Date | string;
  USD: USD;
}

export default Crypto;
