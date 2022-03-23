import Link from "next/link";
import Button from "../Button/Button";
import StyledRegister from "./StyledRegister";

interface RegisterProps {
  formData: any;
  handleChange: any;
  submitForm: any;
}

const RegisterForm = ({
  formData,
  handleChange,
  submitForm,
}: RegisterProps): JSX.Element => {
  const isFilled =
    formData.username === "" ||
    formData.password === "" ||
    formData.name === "";
  return (
    <StyledRegister>
      <h2>Formulario de registro</h2>
      <form
        title="register-form"
        autoComplete="off"
        onSubmit={(event) => event.preventDefault()}
      >
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
