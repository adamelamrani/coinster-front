import React from "react";
import Crypto from "../../interfaces/Crypto";

const CryptoCard = ({
  id,
  name,
  symbol,
  slug,
  max_supply,
  total_supply,
  price,
  percent_change_1h,
  percent_change_24h,
  percent_change_7d,
  market_cap,
}: Crypto): JSX.Element => {
  return (
    <>
      <p>Nombre: {name}</p>
      <p>Symbolo: {symbol}</p>
      <p>Slug: {slug}</p>
      <p>Market cap: {market_cap}</p>
      <p>Stock máximo: {max_supply}</p>
      <p>Stock total: {total_supply}</p>
      <p>Precio actual {price}</p>
      <p>Porcentage de cambio 1h: {percent_change_1h}</p>
      <p>Porcentage de cambio 24h: {percent_change_24h} </p>
      <p>Porcentage de cambio 7d: {percent_change_7d}</p>
    </>
  );
};

export default CryptoCard;
