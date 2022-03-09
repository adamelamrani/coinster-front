import Crypto from "./Crypto";

export type Cryptos = Crypto[];

export interface cryptoProps {
  type: string;
  payload: Crypto[];
}
