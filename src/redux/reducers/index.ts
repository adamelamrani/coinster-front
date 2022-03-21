import { combineReducers } from "redux";
import cryptoReducer from "./cryptoReducer";
import singleCryptoReducer from "./singleCryptoReducer";
import tokenReducer from "./userReducers";

const rootReducer = combineReducers({
  cryptosList: cryptoReducer,
  singleCrypto: singleCryptoReducer,
  tokenReducer: tokenReducer,
});

export default rootReducer;
