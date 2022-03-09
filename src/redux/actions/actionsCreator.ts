import cryptoProps from "../../interfaces/cryptoProps";
import actionTypes from "./actionTypes";

const loadCoinsAction = (cryptos: cryptoProps) => ({
  type: actionTypes.loadCoins,
  payload: cryptos,
});

export default loadCoinsAction;
