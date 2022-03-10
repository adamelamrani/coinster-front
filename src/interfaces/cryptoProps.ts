import Crypto from "./Crypto";

export type Cryptos = Crypto[];

export interface CryptoProps {
  type: string;
  payload: Crypto[];
}
