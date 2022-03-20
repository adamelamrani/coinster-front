import Crypto from "../interfaces/Crypto";

interface UtilProps {
  crypto: Crypto;
}

export const cryptoToUpdate = ({ crypto }: UtilProps) => ({
  name: crypto.name,
  symbol: crypto.symbol,
  slug: crypto.slug,
  tags: crypto.tags,
  max_supply: crypto.max_supply,
  total_supply: crypto.total_supply,
  platform: crypto.platform,
  price: crypto.price,
  percent_change_1h: crypto.percent_change_1h,
  percent_change_24h: crypto.percent_change_24h,
  percent_change_7d: crypto.percent_change_7d,
  market_cap: crypto.market_cap,
  img: crypto.img,
});

export const emptyForm: any = {
  name: "",
  symbol: "",
  slug: "",
  tags: [""],
  max_supply: 0,
  total_supply: 0,
  platform: [""],
  price: 0,
  percent_change_1h: 0,
  percent_change_24h: 0,
  percent_change_7d: 0,
  market_cap: 0,
  img: "",
};
