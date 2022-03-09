import { Cryptos } from "../../interfaces/cryptoProps";
import TypeOfAction from "../../interfaces/TypeOfAction";
import actionTypes from "./actionTypes";

const loadCoinsAction = (cryptos: Cryptos): TypeOfAction => ({
  type: actionTypes.loadCoins,
  payload: cryptos,
});

export default loadCoinsAction;
