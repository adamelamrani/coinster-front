import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/thunks/userThunks";

import Button from "../Button/Button";
import StyledRegister from "./StyledRegister";

const RegisterForm: React.FunctionComponent = (): JSX.Element => {
  const dispatch = useDispatch();
  const blankFields = {
    name: "",
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
    dispatch(registerThunk(formData));
  };

  const isFilled =
    formData.username === "" &&
    formData.password === "" &&
    formData.name === "";
  return (
    <StyledRegister>
      <h2>Formulario de registro</h2>
      <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
        <section>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            placeholder="Juan"
            name="name"
            id="name"
            onChange={handleChange}
            required
          />
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="usuario123"
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            required
          />
          <Button
            actionOnClick={submitForm}
            text={"Registrarse"}
            disableCondition={isFilled}
          />
        </section>
        <section>
          <p>
            ¿Ya estás registrado? Inicia sesión{" "}
            <Link href={"/user/login"}>aquí</Link>
          </p>
        </section>
      </form>
    </StyledRegister>
  );
};

export default RegisterForm;
