import React from "react";
import Crypto from "../../interfaces/Crypto";

const CryptoCard: React.ReactNode = ({
  name,
  symbol,
  slug,
  date_added,
  max_supply,
  circulating_supply,
  total_supply,
  last_updated,
  USD,
}: Crypto) => {
  return (
    <>
      <ul>
        <li>{name}</li>
        <li>{symbol}</li>
        <li>{slug}</li>
        <li>{date_added}</li>
        <li>{max_supply}</li>
        <li>{circulating_supply}</li>
        <li>{total_supply}</li>
        <li>{last_updated}</li>
        <li>{USD.price}</li>
      </ul>
    </>
  );
};

export default CryptoCard;
