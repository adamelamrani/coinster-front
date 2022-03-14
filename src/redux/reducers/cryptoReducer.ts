import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, EmptyObject } from "redux";
import {
  ActionTypeInterface,
  deleteCoinsActionI,
  loadCoinsActionI,
} from "../../interfaces/actionsInterfaces";
import Crypto from "../../interfaces/Crypto";
import { Cryptos } from "../../interfaces/cryptoProps";
import actionTypes from "../actions/actionTypes";

const cryptoReducer = (
  coinState: Cryptos | undefined = [],
  action: ActionTypeInterface | EmptyObject = {}
) => {
  let newCryptoState: Crypto | Cryptos;
  switch ((action as ActionTypeInterface).type) {
    case HYDRATE:
      if ((action as AnyAction).payload.cryptosList === "init")
        delete (action as AnyAction).payload.cryptosList;
      return [...coinState, ...(action as AnyAction).payload.cryptosList];
    case actionTypes.loadCoins:
      newCryptoState = [...(action as loadCoinsActionI).payload];
      break;
    case actionTypes.deleteCoin:
      newCryptoState = (coinState as Cryptos).filter(
        (crypto) => crypto.id !== (action as deleteCoinsActionI).id
      );
      break;
    default:
      newCryptoState = [...coinState];
  }
  return newCryptoState;
};

export default cryptoReducer;
