import jwtDecode from "jwt-decode";
import Router, { useRouter } from "next/router";
import toastNotification from "../../utils/toastNotification";
import Button from "../Button/Button";
import StyledProfile from "./StyledProfile";

interface Token {
  iat: number;
  username: string;
}

const ProfileComponent = (): JSX.Element => {
  const router = useRouter();

  const getUserNameFromToken = () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      const { username }: Token = jwtDecode(token as string);
      return username;
    }
  };

  const logOut = () => {
    toastNotification("¡Hasta la próxima!");
    localStorage.removeItem("token");
    Router.push("/");
  };
  return (
    <StyledProfile>
      <div className="form-container">
        <section>
          <h2>¡Hola {getUserNameFromToken()}!</h2>
          <p>Actualiza tus datos</p>
          <form>
            <div>
              <label htmlFor="name">Nombre: </label>
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
            actionOnClick={() => null}
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
