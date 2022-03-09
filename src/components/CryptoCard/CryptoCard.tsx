import React from "react";
import Crypto from "../../interfaces/Crypto";

const CryptoCard = ({
  id,
  name,
  symbol,
  slug,
  date_added,
  max_supply,
  circulating_supply,
  total_supply,
  last_updated,
  price,
  percent_change_24h,
}: Crypto): JSX.Element => {
  return (
    <>
      <p>Nombre: {name}</p>
      <p>Symbolo: {symbol}</p>
      <p>Slug: {slug}</p>
      <p>Día que se añadió: {date_added}</p>
      <p>Stock máximo: {max_supply}</p>
      <p>Stock en circulación: {circulating_supply}</p>
      <p>Stock total: {total_supply}</p>
      <p>Última actualización: {last_updated}</p>
      <p>Precio actual {price}</p>
      <p>Variación últimas 24h: {percent_change_24h} </p>
    </>
  );
};

export default CryptoCard;
