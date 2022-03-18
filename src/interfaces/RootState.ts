import Crypto from "./Crypto";
import { Cryptos } from "./cryptoProps";

export interface CryptoState {
  cryptosList: Cryptos;
}

export interface SingleCryptoState {
  singleCrypto: Crypto;
}

type RootState = CryptoState;
export type RootStateSingle = SingleCryptoState;

export default RootState;
