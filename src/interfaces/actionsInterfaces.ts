import Crypto from "./Crypto";

export interface ActionTypeInterface {
  type: string;
}
export interface LoadCoinsActionI extends ActionTypeInterface {
  payload: Crypto[];
}

export interface DeleteCoinsActionI extends ActionTypeInterface {
  id: string;
}
