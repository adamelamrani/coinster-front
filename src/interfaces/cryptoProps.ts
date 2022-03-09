import Crypto from "./Crypto";

export type cryptoProps = Crypto[];

export interface coinProps {
  cryptos: cryptoProps;
}
