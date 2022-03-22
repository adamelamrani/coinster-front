import { Dispatch } from "redux";
import jwtDecode from "jwt-decode";
import { loginAction, registerAction } from "../actions/actionsCreator";
import Router from "next/router";
import toastNotification from "../../utils/toastify";

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

  try {
    const { token } = await response.json();
    const { username }: any = await jwtDecode(token.token);
    localStorage.setItem("token", token.token);
    toastNotification(`Bienvenido ${username}`, "success");
    dispatch(loginAction({ username, token: token.token }));
    Router.push("/");
  } catch {
    toastNotification("Datos incorrectos", "warning");
  }
};

export const registerThunk = (user: any) => async (dispatch: Dispatch) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_COINSTER_API}/user/register`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  if (response.ok) {
    toastNotification("Registro con éxito", "success");
    dispatch(registerAction(user));

    Router.push("/user/login");
  } else {
    toastNotification("Error en el registro", "error");
  }
};
