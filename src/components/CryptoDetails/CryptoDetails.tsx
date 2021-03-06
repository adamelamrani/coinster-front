/* eslint-disable @next/next/no-img-element */

import React, { MouseEventHandler } from "react";
import Crypto from "../../interfaces/Crypto";
import Button from "../Button/Button";
import StyledDetails from "./StyledDetails";

interface DetailsProps {
  crypto: Crypto;
  updateCrypto: MouseEventHandler<HTMLButtonElement>;
  deleteCrypto: MouseEventHandler<HTMLButtonElement>;
  actionOnClick: MouseEventHandler<HTMLButtonElement>;
}

const CryptoDetails = ({
  crypto,
  deleteCrypto,
  updateCrypto,
}: DetailsProps) => {
  return (
    <div>
      <StyledDetails>
        <div className="logo-name">
          <div>
            <img
              className="crypto-logo-img"
              width={100}
              height={100}
              src={crypto.img as string}
              alt={`Crypto ${crypto.name}`}
            />
          </div>
          <div className="heading-price">
            <h1>{crypto.name}</h1>
            <p>$ {Number(crypto.price).toFixed(2)}</p>
          </div>
          <img
            className="img-example"
            src={"/chart-example.jpg"}
            alt="chart-example"
          />
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
          <div className="buttons-div">
            <Button
              disableCondition={false}
              actionOnClick={deleteCrypto}
              text={"Eliminar"}
            />
            <Button
              disableCondition={false}
              actionOnClick={updateCrypto}
              text={"Actualizar"}
            />
          </div>
        </div>
      </StyledDetails>
    </div>
  );
};

export default CryptoDetails;
