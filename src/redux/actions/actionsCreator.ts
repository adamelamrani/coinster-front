import { Cryptos } from "../../interfaces/cryptoProps";
import {
  DeleteCoinsActionI,
  LoadCoinsActionI,
} from "../../interfaces/actionsInterfaces";
import actionTypes from "./actionTypes";

export const loadCoinsAction = (cryptos: Cryptos): LoadCoinsActionI => ({
  type: actionTypes.loadCoins,
  payload: cryptos,
});

export const deleteCoinsAction = (id: string): DeleteCoinsActionI => ({
  type: actionTypes.deleteCoin,
  id,
});
