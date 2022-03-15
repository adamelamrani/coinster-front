import { deleteCoinsAction, loadCoinsAction } from "../actions/actionsCreator";
import { Dispatch } from "redux";
import { Cryptos } from "../../interfaces/cryptoProps";

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

export const deleteCryptoThunk = (id: string) => async (dispatch: Dispatch) => {
  await fetch(`${process.env.NEXT_PUBLIC_COINSTER_API}/cryptos/crypto/${id}`, {
    method: "DELETE",
  });
  dispatch(deleteCoinsAction(id));
};
