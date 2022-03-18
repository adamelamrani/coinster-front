/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { MouseEventHandler } from "react";
import { useDispatch } from "react-redux";
import Crypto from "../../interfaces/Crypto";
import { deleteCryptoThunk } from "../../redux/thunks/cryptoThunks";
import StyledBody from "../../styles/StyledBody";
import Button from "../Button/Button";
import StyledDetails from "./StyledDetails";

interface DetailsProps {
  crypto: Crypto;
  actionOnClick: MouseEventHandler<HTMLButtonElement>;
}

const CryptoDetails: React.FunctionComponent<any> = ({
  crypto,
}: DetailsProps) => {
  const router = useRouter();

  const dispatch = useDispatch();
  const deleteCrypto = (id: string) => {
    dispatch(deleteCryptoThunk(id));
    router.push("/");
  };
  if (!crypto) {
    return null;
  }

  return (
    <StyledBody>
      <StyledDetails>
        <div className="logo-name">
          <img src={crypto.img} alt={`Crypto ${crypto.name}`} />
          <h1>{crypto.name}</h1>
          <ul>
            <li>Precio actual: {crypto.price}</li>
            <li>Últimas 24 horas: {crypto.percent_change_24h}</li>
            <li>Última hora: {crypto.percent_change_1h}</li>
          </ul>
        </div>
        <div className="info-block">
          <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et rem
            provident voluptates minima. Beatae minima consequuntur repellat.
            Quibusdam ipsum non, ducimus iste minus deleniti error at, maxime
            perspiciatis porro necessitatibus! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vero quasi vel fugit mollitia modi
            reprehenderit, quaerat omnis aperiam sit autem qui earum distinctio
            alias libero aliquam illum exercitationem placeat sed? Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Facere dolores, error
            corporis quae ipsam placeat doloremque natus aperiam aliquid. Vero
            pariatur neque rerum vitae, nesciunt ex adipisci perspiciatis ut
            sint. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
            rem provident voluptates minima. Beatae minima consequuntur
            repellat. Quibusdam ipsum non, ducimus iste minus deleniti error at,
            maxime perspiciatis porro necessitatibus! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vero quasi vel fugit mollitia modi
            reprehenderit, quaerat omnis aperiam sit autem qui earum distinctio
            alias libero aliquam illum exercitationem placeat sed? Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Facere dolores, error
            corporis quae ipsam placeat doloremque natus aperiam aliquid. Vero
            pariatur neque rerum vitae, nesciunt ex adipisci perspiciatis ut
            sint. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
            rem provident voluptates minima. Beatae minima consequuntur
            repellat. Quibusdam ipsum non, ducimus iste minus deleniti error at,
            maxime perspiciatis porro necessitatibus! Lorem ipsum dolor sit amet
            consectetur adipisicing elit sint. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Et rem provident voluptates minima.
            Beatae minima consequuntur repellat. Quibusdam ipsum non, ducimus
            iste minus deleniti error at, maxime perspiciatis porro
            necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Vero quasi vel fugit mollitia modi reprehenderit, quaerat
            omnis aperiam sit autem qui earum distinctio alias libero aliquam
            illum exercitationem placeat sed? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Facere dolores, error corporis quae
            ipsam placeat doloremque natus aperiam aliquid. Vero pariatur neque
            rerum vitae, nesciunt ex adipisci perspiciatis ut sint. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Et rem provident
            voluptates minima. Beatae minima consequuntur repellat. Quibusdam
            ipsum non, ducimus iste minus deleniti error at, maxime perspiciatis
            porro necessitatibus! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vero quasi vel fugit mollitia modi reprehenderit,
            quaerat omnis aperiam sit autem qui earum distinctio alias libero
            aliquam illum exercitationem placeat sed? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Facere dolores, error corporis quae
            ipsam placeat doloremque natus aperiam aliquid. Vero pariatur neque
            rerum vitae, nesciunt ex adipisci perspiciatis ut sint. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Et rem provident
            voluptates minima. Beatae minima consequuntur repellat. Quibusdam
            ipsum non, ducimus iste minus deleniti error at, maxime perspiciatis
            porro necessitatibus! Lorem ipsum dolor sit amet consectetur
            adipisicing elit sint. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Et rem provident voluptates minima. Beatae minima
            consequuntur repellat. Quibusdam ipsum non, ducimus iste minus
            deleniti error at, maxime perspiciatis porro necessitatibus! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Vero quasi vel
            fugit mollitia modi reprehenderit, quaerat omnis aperiam sit autem
            qui earum distinctio alias libero aliquam illum exercitationem
            placeat sed? Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Facere dolores, error corporis quae ipsam placeat doloremque
            natus aperiam aliquid. Vero pariatur neque rerum vitae, nesciunt ex
            adipisci perspiciatis ut sint. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Et rem provident voluptates minima.
            Beatae minima consequuntur repellat. Quibusdam ipsum non, ducimus
            iste minus deleniti error at, maxime perspiciatis porro
            necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Vero quasi vel fugit mollitia modi reprehenderit, quaerat
            omnis aperiam sit autem qui earum distinctio alias libero aliquam
            illum exercitationem placeat sed? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Facere dolores, error corporis quae
            ipsam placeat doloremque natus aperiam aliquid. Vero pariatur neque
            rerum vitae, nesciunt ex adipisci perspiciatis ut sint. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Et rem provident
            voluptates minima. Beatae minima consequuntur repellat. Quibusdam
            ipsum non, ducimus iste minus deleniti error at, maxime perspiciatis
            porro necessitatibus! Lorem ipsum dolor sit amet consectetur
            adipisicing elit sint.
          </article>
          <Button
            disableCondition={false}
            actionOnClick={() => deleteCrypto(crypto.id)}
            text={"Delete"}
          />
        </div>
      </StyledDetails>
    </StyledBody>
  );
};

export default CryptoDetails;
