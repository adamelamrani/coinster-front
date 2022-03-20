interface Crypto {
  id?: string;
  name: string;
  symbol: string;
  slug: string;
  tags: string;
  max_supply: string;
  total_supply: string;
  platform: string;
  price: string;
  percent_change_1h: string;
  percent_change_24h: string;
  percent_change_7d: string;
  market_cap: string;
  img: File | string;
}

export interface CryptoId extends Crypto {
  id: string;
}

export interface FormProps {
  crypto: Crypto;
}

export default Crypto;
