import cryptoProps from "../../interfaces/cryptoProps";
import actionTypes from "./actionTypes";

const loadCoinsAction = (cryptos: cryptoProps): Object => ({
  type: actionTypes.loadCoins,
  cryptos,
});

export default loadCoinsAction;
