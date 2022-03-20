import Link from "next/link";
import Button from "../Button/Button";

const LoginForm: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <h2>Identifícate:</h2>
      <form autoComplete="off" onSubmit={() => {}}>
        <section>
          <label htmlFor="usuario">Usuario:</label>
          <input type="text" required />
          <label htmlFor="contrasena">Contraseña:</label>
          <input type="password" required />
          <Button
            text="Iniciar sesión"
            actionOnClick={() => {}}
            disableCondition={true}
          />
        </section>
        <section>
          <p>
            ¿No tienes cuenta? <Link href={"/register"}>Regístrate aquí</Link>
          </p>
        </section>
      </form>
    </>
  );
};

export default LoginForm;
