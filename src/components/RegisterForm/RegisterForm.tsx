import Link from "next/link";
import Button from "../Button/Button";

const RegisterForm: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <h2>Formulario de registro:</h2>
      <form autoComplete="off" onSubmit={() => {}}>
        <section>
          <label htmlFor="name">Nombre:</label>
          <input type="text" placeholder="Juan" required />
          <label htmlFor="usuario">Nombre de usuario:</label>
          <input type="text" placeholder="usuario123" required />
          <label htmlFor="contrasena">Contraseña:</label>
          <input type="password" required />
          <Button
            actionOnClick={() => {}}
            text={"Registrarse"}
            disableCondition={false}
          />
        </section>
        <section>
          <p>
            ¿Ya estás registrado? Inicia sesión{" "}
            <Link href={"/login"}>aquí</Link>
          </p>
        </section>
      </form>
    </>
  );
};

export default RegisterForm;
