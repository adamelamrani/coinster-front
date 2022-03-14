import Crypto from "./Crypto";

export interface ActionTypeInterface {
  type: string;
}
export interface loadCoinsActionI extends ActionTypeInterface {
  payload: Crypto[];
}

export interface deleteCoinsActionI extends ActionTypeInterface {
  id: string | number;
}
