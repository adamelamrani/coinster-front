import Link from "next/link";
import StyledNotFound from "./StyledNotFound";

const NotFound = () => {
  return (
    <>
      <StyledNotFound className="error-contain">
        <div className="error-text">
          <h1>404</h1>
          <p>Página no encontrada</p>
          <p>Hemos buscado por todos lados...</p>
          <Link href={"/"} passHref>
            Volver a la página principal
          </Link>
        </div>
        <div className="binoculars">
          <div className="back-bino"></div>
          <div className="left-bino"></div>
          <div className="right-bino"></div>
          <div className="left-bino-lense">
            <div className="eye"></div>
          </div>
          <div className="right-bino-lense">
            <div className="eye"></div>
          </div>
        </div>
      </StyledNotFound>
    </>
  );
};

export default NotFound;
