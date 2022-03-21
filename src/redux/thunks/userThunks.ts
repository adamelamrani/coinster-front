import { Dispatch } from "redux";
import jwtDecode from "jwt-decode";
import { loginAction } from "../actions/actionsCreator";
import Router from "next/router";

export const loginThunk = (user: any) => async (dispatch: Dispatch) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_COINSTER_API}/user/login`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  if (response.ok) {
    const token = await response.json();
    const { username }: any = await jwtDecode(token.token);
    localStorage.setItem("token", token.token);
    dispatch(loginAction({ username, token: token.token }));
    Router.push("/");
  }
};
