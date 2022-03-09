import { combineReducers } from "redux";
import cryptoReducer from "./cryptoReducer";

const rootReducer = combineReducers({
  cryptosList: cryptoReducer,
});

export default rootReducer;
