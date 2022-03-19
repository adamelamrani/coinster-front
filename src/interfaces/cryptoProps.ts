import Crypto from "./Crypto";

export type Cryptos = Crypto[];

export interface CryptosId extends Cryptos {
  id?: string;
}

export interface CryptoProps {
  type: string;
  payload: Crypto[];
}
