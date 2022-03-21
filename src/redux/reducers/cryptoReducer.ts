import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, EmptyObject } from "redux";
import {
  ActionTypeInterface,
  GetIdCoinsActionI,
  LoadCoinsActionI,
  SingleCrypto,
} from "../../interfaces/actionsInterfaces";
import Crypto, { CryptoId } from "../../interfaces/Crypto";
import { Cryptos } from "../../interfaces/cryptoProps";
import actionTypes from "../actions/actionTypes";

const cryptoReducer = (
  coinState: Cryptos = [],
  action: ActionTypeInterface | EmptyObject = {}
) => {
  let newCryptoState;
  switch ((action as ActionTypeInterface).type) {
    case HYDRATE:
      return [...(action as AnyAction).payload.cryptosList];
    case actionTypes.loadCoins:
      newCryptoState = [...(action as LoadCoinsActionI).payload];
      break;
    case actionTypes.deleteCoin:
      newCryptoState = coinState.filter(
        (crypto) => (crypto as CryptoId).id !== (action as GetIdCoinsActionI).id
      );
      break;
    case actionTypes.createCrypto:
      newCryptoState = [...coinState, ...(action as AnyAction).crypto];
      break;
    default:
      newCryptoState = [...coinState];
  }
  return newCryptoState;
};

export default cryptoReducer;
