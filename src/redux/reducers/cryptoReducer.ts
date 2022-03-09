import { AnyAction } from "redux";
import Crypto from "../../interfaces/Crypto";
import actionTypes from "../actions/actionTypes";

const cryptoReducer = (coinState: Crypto[] = [], action: AnyAction) => {
  let newCryptoState;
  switch (action.type) {
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
