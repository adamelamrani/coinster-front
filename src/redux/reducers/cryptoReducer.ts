import Crypto from "../../interfaces/Crypto";
import TypeOfAction from "../../interfaces/TypeOfAction";
import actionTypes from "../actions/actionTypes";

const cryptoReducer = (coinState: Crypto[] = [], action: TypeOfAction = {}) => {
  let newCryptoState;
  switch (action.type) {
    case actionTypes.loadCoins:
      if (action.cryptos) {
        newCryptoState = [...action.cryptos];
      } else {
        newCryptoState = [...coinState];
      }
      break;
  }
  return newCryptoState;
};

export default cryptoReducer;
