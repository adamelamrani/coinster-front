import Router, { useRouter } from "next/router";
import Button from "../Button/Button";

const ProfileComponent = (/* { user }: UserProps */): JSX.Element => {
  const router = useRouter();

  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    token ?? Router.push("/user/login");
  }

  const logOut = () => {
    localStorage.removeItem("token");
    Router.push("/");
  };
  return (
    <>
      <h2>Hola {/* {user.name} */}</h2>
      <section>
        <h2>Ajustes de perfil</h2>
        <p>Cambia los datos de identificación de tu cuenta</p>
        <form>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" className="name" name="name" />
          </div>
          <div>
            <label htmlFor="username">Nombre:</label>
            <input type="text" className="username" name="username" />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" className="password" name="password" />
          </div>
        </form>
      </section>
      <section>
        <h3>Crear una nueva Cryptomoneda</h3>
        <Button
          disableCondition={false}
          actionOnClick={() => router.push("/crypto/new-crypto")}
          text={"Crear"}
        />
        <Button
          disableCondition={false}
          actionOnClick={() => logOut()}
          text={"Desconectar"}
        />
      </section>
    </>
  );
};

export default ProfileComponent;
