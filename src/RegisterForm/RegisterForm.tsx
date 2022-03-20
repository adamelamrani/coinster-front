import Link from "next/link";
import Button from "../components/Button/Button";

const RegisterForm = () => {
  return (
    <>
      <h2>Formulario de registro:</h2>
      <form autoComplete="off" onSubmit={() => {}}>
        <section>
          <label htmlFor="usuario">Nombre de usuario:</label>
          <input type="text" placeholder="usuario123" />
          <label htmlFor="contrasena">Contraseña:</label>
          <input type="password" />
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
