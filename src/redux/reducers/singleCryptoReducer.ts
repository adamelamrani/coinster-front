import { HYDRATE } from "next-redux-wrapper";
import actionTypes from "../actions/actionTypes";

const singleCryptoReducer = (crypto: any = {}, action: any = {}) => {
  let currentCrypto;
  switch (action.type) {
    case HYDRATE:
      return { ...action.payload.singleCrypto };
    case actionTypes.getSingleCrypto:
      currentCrypto = { ...action.crypto };
      break;
    default:
      currentCrypto = { ...crypto };
  }
  return currentCrypto;
};

export default singleCryptoReducer;
