import loadCoinsAction from "../actions/actionsCreator";
import { Dispatch } from "redux";
import { cryptoProps } from "../../interfaces/cryptoProps";

const url: string = `${process.env.NEXT_PUBLIC_COINSTER_API}/main-page/list`;

export const loadCoinListThunk = async (dispatch: Dispatch) => {
  const response = await fetch(url, {
    method: "GET",
  });
  const cryptosList: cryptoProps = await response.json();

  dispatch(loadCoinsAction(cryptosList));
};
