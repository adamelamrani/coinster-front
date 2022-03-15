import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, EmptyObject } from "redux";
import {
  ActionTypeInterface,
  DeleteCoinsActionI,
  LoadCoinsActionI,
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
      return [...(action as AnyAction).payload.cryptosList];
    case actionTypes.loadCoins:
      newCryptoState = [...(action as LoadCoinsActionI).payload];
      break;
    case actionTypes.deleteCoin:
      newCryptoState = coinState.filter(
        (crypto) => crypto.id !== (action as DeleteCoinsActionI).id
      );

      break;
    default:
      newCryptoState = [...coinState];
  }
  return newCryptoState;
};

export default cryptoReducer;
