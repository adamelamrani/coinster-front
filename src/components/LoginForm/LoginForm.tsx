import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/thunks/userThunks";
import Button from "../Button/Button";
import StyledLogin from "./StyledLogin";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm: React.FunctionComponent = (): JSX.Element => {
  const dispatch = useDispatch();
  const blankFields = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(blankFields);

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const submitForm = (event: any) => {
    event.preventDefault();
    dispatch(loginThunk(formData));
  };

  const isFilled = formData.username === "" && formData.password === "";

  return (
    <StyledLogin>
      <form
        autoComplete="off"
        onSubmit={(event) => event.preventDefault()}
        noValidate
      >
        <section className="login-section">
          <h2>Identifícate:</h2>
          <div>
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              id="password"
              required
            />
          </div>
          <Button
            text="Iniciar sesión"
            actionOnClick={submitForm}
            disableCondition={isFilled}
          />
          <p>
            ¿No tienes cuenta?{" "}
            <Link href={"/user/register"}>Regístrate aquí</Link>
          </p>
        </section>
        <section></section>
      </form>
    </StyledLogin>
  );
};

export default LoginForm;
