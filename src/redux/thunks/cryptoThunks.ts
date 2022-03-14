import { loadCoinsAction } from "../actions/actionsCreator";
import { Dispatch } from "redux";
import { Cryptos } from "../../interfaces/cryptoProps";

const url: string = `${process.env.NEXT_PUBLIC_COINSTER_API}/cryptos/list`;

export function loadCoinListThunk() {
  return async function (dispatch: Dispatch) {
    const response = await fetch(url, {
      method: "GET",
    });
    const cryptosList: Cryptos = await response.json();
    dispatch(loadCoinsAction(cryptosList));
  };
}
