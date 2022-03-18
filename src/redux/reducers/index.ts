import { combineReducers } from "redux";
import cryptoReducer from "./cryptoReducer";
import singleCryptoReducer from "./singleCryptoReducer";

const rootReducer = combineReducers({
  cryptosList: cryptoReducer,
  singleCrypto: singleCryptoReducer,
});

export default rootReducer;
