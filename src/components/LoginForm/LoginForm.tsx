import Link from "next/link";
import Button from "../Button/Button";
import StyledLogin from "./StyledLogin";

interface LoginProps {
  formData: any;
  submitForm: any;
  handleChange: any;
}

const LoginForm = ({
  handleChange,
  submitForm,
  formData,
}: LoginProps): JSX.Element => {
  const isFilled = formData.username === "" && formData.password === "";
  return (
    <StyledLogin>
      <form
        title="login-form"
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
