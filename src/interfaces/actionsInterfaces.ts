import Crypto from "./Crypto";

interface actionTypeInterface {
  type: string;
}
export interface loadCoinsActionI extends actionTypeInterface {
  payload: Crypto[] | Crypto | undefined;
}

export interface deleteCoinsActionI extends actionTypeInterface {
  id: string | number;
}
