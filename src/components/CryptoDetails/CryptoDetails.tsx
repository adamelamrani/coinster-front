/* eslint-disable @next/next/no-img-element */
import React, { MouseEventHandler } from "react";
import Crypto from "../../interfaces/Crypto";
import Button from "../Button/Button";

interface DetailsProps {
  crypto: Crypto;
  actionOnClick: MouseEventHandler;
}

const CryptoDetails = ({
  crypto,
  actionOnClick,
}: DetailsProps): JSX.Element => {
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
          perspiciatis porro necessitatibus!
        </p>
      </article>
      <Button actionOnClick={actionOnClick} text={"Delete"} />
    </>
  );
};

export default CryptoDetails;
