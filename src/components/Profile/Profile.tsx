import Router, { useRouter } from "next/router";
import toastNotification from "../../utils/toastify";
import Button from "../Button/Button";
import StyledProfile from "./StyledProfile";

const ProfileComponent = (/* { user }: UserProps */): JSX.Element => {
  const router = useRouter();

  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    token ?? Router.push("/user/login");
  }

  const logOut = () => {
    toastNotification("¡Hasta la próxima!");
    localStorage.removeItem("token");
    Router.push("/");
  };
  return (
    <StyledProfile>
      <h2>Hola {/* {user.name} */}</h2>
      <div className="form-container">
        <section>
          <h2>Ajustes de perfil</h2>
          <p>Actualiza tus datos</p>
          <form>
            <div>
              <label htmlFor="name">Nombre:</label>
              <input type="text" className="name" name="name" />
            </div>
            <div>
              <label htmlFor="username">Usuario:</label>
              <input type="text" className="username" name="username" />
            </div>
            <div>
              <label htmlFor="password">Contraseña:</label>
              <input type="password" className="password" name="password" />
            </div>
          </form>
          <Button
            actionOnClick={() => {}}
            disableCondition={false}
            text={"Actualizar"}
          />
        </section>
        <section id="button-section">
          <div className="new-crypto">
            <h3>Crear una nueva Cryptomoneda</h3>
            <Button
              disableCondition={false}
              actionOnClick={() => router.push("/crypto/new-crypto")}
              text={"Crear"}
            />
          </div>
          <Button
            disableCondition={false}
            actionOnClick={() => logOut()}
            text={"Desconectar"}
          />
        </section>
      </div>
    </StyledProfile>
  );
};

export default ProfileComponent;
