import { Cryptos } from "./cryptoProps";

export interface CryptoState {
  cryptosList: Cryptos;
}

type RootState = CryptoState;

export default RootState;
