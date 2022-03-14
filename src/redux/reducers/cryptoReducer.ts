import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import {
  ActionTypeInterface,
  deleteCoinsActionI,
  loadCoinsActionI,
} from "../../interfaces/actionsInterfaces";
import Crypto from "../../interfaces/Crypto";
import { Cryptos } from "../../interfaces/cryptoProps";
import actionTypes from "../actions/actionTypes";

const cryptoReducer = (
  coinState: Crypto[] | undefined = [],
  action?: ActionTypeInterface
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
      newCryptoState = coinState.filter(
        (crypto) => crypto.id !== (action as deleteCoinsActionI).id
      );
    default:
      newCryptoState = [...coinState];
  }
  return newCryptoState;
};

export default cryptoReducer;
