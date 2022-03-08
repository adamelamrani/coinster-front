import USD from "./USD";

interface Crypto {
  name: String;
  symbol: String;
  slug: String;
  date_added: Date;
  max_supply: Number;
  circulating_supply: Number;
  total_supply: Number;
  last_updated: Date;
  USD: USD;
}

export default Crypto;
