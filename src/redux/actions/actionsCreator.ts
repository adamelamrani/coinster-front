import { Cryptos } from "../../interfaces/cryptoProps";
import {
  deleteCoinsActionI,
  loadCoinsActionI,
} from "../../interfaces/actionsInterfaces";
import actionTypes from "./actionTypes";

export const loadCoinsAction = (cryptos: Cryptos): loadCoinsActionI => ({
  type: actionTypes.loadCoins,
  payload: cryptos,
});

export const deleteCoinsAction = (id: string | number): deleteCoinsActionI => ({
  type: actionTypes.deleteCoin,
  id,
});
