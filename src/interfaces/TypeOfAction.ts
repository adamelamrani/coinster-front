import Crypto from "./Crypto";

interface TypeOfAction {
  type: string;
  payload: Crypto[] | Crypto | undefined;
}

export default TypeOfAction;
