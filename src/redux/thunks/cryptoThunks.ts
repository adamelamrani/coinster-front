import loadCoinsAction from "../actions/actionsCreator";
import { Dispatch } from "redux";

export const loadCoinListThunk = async (dispatch: Dispatch) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_COINSTER_API}main-page/list`
  );
  const cryptosList = await response.json();

  dispatch(loadCoinsAction(cryptosList));
};
