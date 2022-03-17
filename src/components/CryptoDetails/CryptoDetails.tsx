/* eslint-disable @next/next/no-img-element */
import React, { MouseEventHandler } from "react";
import Crypto from "../../interfaces/Crypto";
import Button from "../Button/Button";

interface DetailsProps {
  crypto: Crypto;
  actionOnClick: MouseEventHandler<HTMLButtonElement>;
}

const CryptoDetails: React.FunctionComponent<any> = ({
  crypto,
  actionOnClick,
}: DetailsProps) => {
  if (!crypto) {
    return null;
  }
  return (
    <>
      <img src={crypto.img} alt={`Crypto ${crypto.name}`} />
      <ul>
        <li>
          <h2>{crypto.name}</h2>
        </li>
        <li>{crypto.percent_change_24h}</li>
        <li>{crypto.percent_change_1h}</li>
        <li>{crypto.price}</li>
      </ul>
      <article>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et rem
          provident voluptates minima. Beatae minima consequuntur repellat.
          Quibusdam ipsum non, ducimus iste minus deleniti error at, maxime
          perspiciatis porro necessitatibus! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vero quasi vel fugit mollitia modi
          reprehenderit, quaerat omnis aperiam sit autem qui earum distinctio
          alias libero aliquam illum exercitationem placeat sed? Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Facere dolores, error
          corporis quae ipsam placeat doloremque natus aperiam aliquid. Vero
          pariatur neque rerum vitae, nesciunt ex adipisci perspiciatis ut sint.
        </p>
      </article>
      <Button
        disableCondition={false}
        actionOnClick={actionOnClick}
        text={"Delete"}
      />
    </>
  );
};

export default CryptoDetails;
