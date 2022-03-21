import { useRouter } from "next/router";
import UserInterface from "../../interfaces/User";
import Button from "../Button/Button";

type User = UserInterface;

interface UserProps {
  user: User;
}

const ProfileComponent = (/* { user }: UserProps */): JSX.Element => {
  const router = useRouter();

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
      </section>
    </>
  );
};

export default ProfileComponent;
