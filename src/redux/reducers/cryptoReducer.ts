import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import Crypto from "../../interfaces/Crypto";
import { Cryptos } from "../../interfaces/cryptoProps";
import actionTypes from "../actions/actionTypes";

const cryptoReducer = (coinState: Crypto[] = [], action: AnyAction) => {
  let newCryptoState: Cryptos;
  switch (action.type) {
    case HYDRATE:
      if (action.payload.cryptosList === "init")
        delete action.payload.cryptosList;
      return [...coinState, ...action.payload.cryptosList];
    case actionTypes.loadCoins:
      if (action.payload) {
        newCryptoState = [...action.payload];
      } else {
        newCryptoState = [...coinState];
      }
      break;
    default:
      newCryptoState = [...coinState];
  }
  return newCryptoState;
};

export default cryptoReducer;
