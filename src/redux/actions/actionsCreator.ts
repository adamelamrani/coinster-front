import { coinProps, cryptoProps } from "../../interfaces/cryptoProps";
import TypeOfAction from "../../interfaces/TypeOfAction";
import actionTypes from "./actionTypes";

const loadCoinsAction = (cryptos: cryptoProps): TypeOfAction => ({
  type: actionTypes.loadCoins,
  payload: cryptos,
});

export default loadCoinsAction;
