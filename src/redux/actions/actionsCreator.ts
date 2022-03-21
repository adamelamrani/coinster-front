import { Cryptos } from "../../interfaces/cryptoProps";
import {
  GetIdCoinsActionI,
  LoadCoinsActionI,
  SingleCrypto,
} from "../../interfaces/actionsInterfaces";
import actionTypes from "./actionTypes";
import Crypto from "../../interfaces/Crypto";
import UserInterface from "../../interfaces/User";

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

export const createCryptoAction = (crypto: Crypto): SingleCrypto => ({
  type: actionTypes.createCrypto,
  crypto,
});

export const updateCryptoAction = (crypto: Crypto): SingleCrypto => ({
  type: actionTypes.updateCrypto,
  crypto,
});

export const loginAction = (user: any) => ({
  type: actionTypes.login,
  user,
});
