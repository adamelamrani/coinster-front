import { deleteCoinsAction, loadCoinsAction } from "../actions/actionsCreator";
import { Dispatch } from "redux";
import { Cryptos } from "../../interfaces/cryptoProps";
import Crypto from "../../interfaces/Crypto";

export function loadCoinListThunk() {
  return async function (dispatch: Dispatch) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_COINSTER_API}/cryptos/list`,
      {
        method: "GET",
      }
    );
    const cryptosList: Cryptos = await response.json();
    dispatch(loadCoinsAction(cryptosList));
  };
}

export const deleteCryptoThunk =
  (id: number | string) => async (dispatch: Dispatch) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_COINSTER_API}/cryptos/crypto/${id}`,
      {
        method: "DELETE",
      }
    );
    const crypto: Crypto = await response.json();
    dispatch(deleteCoinsAction(crypto.id));
  };
