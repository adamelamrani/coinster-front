import Crypto from "./Crypto";

export interface ActionTypeInterface {
  type: string;
}
export interface LoadCoinsActionI extends ActionTypeInterface {
  payload: Crypto[];
}

export interface GetIdCoinsActionI extends ActionTypeInterface {
  id: string;
}

export interface SingleCrypto extends ActionTypeInterface {
  crypto: Crypto;
}
