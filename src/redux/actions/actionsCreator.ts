import { Cryptos } from "../../interfaces/cryptoProps";
import {
  GetIdCoinsActionI,
  LoadCoinsActionI,
  SingleCrypto,
} from "../../interfaces/actionsInterfaces";
import actionTypes from "./actionTypes";
import Crypto from "../../interfaces/Crypto";

export const loadCoinsAction = (cryptos: Cryptos): LoadCoinsActionI => ({
  type: actionTypes.loadCoins,
  payload: cryptos,
});

export const deleteCoinsAction = (id: string): GetIdCoinsActionI => ({
  type: actionTypes.deleteCoin,
  id,
});

export const getSingleCryptoAction = (crypto: Crypto): SingleCrypto => ({
  type: actionTypes.getSingleCrypto,
  crypto,
});
