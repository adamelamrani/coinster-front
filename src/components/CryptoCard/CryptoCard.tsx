import React from "react";
import cryptoProps from "../../interfaces/cryptoProps";

const CryptoCard: React.ReactNode = ({ cryptos }: cryptoProps) => {
  return (
    <>
      <ul>
        <li>{cryptos[0].name}</li>
        <li>{cryptos[0].symbol}</li>
        <li>{cryptos[0].slug}</li>
        <li>{cryptos[0].date_added}</li>
        <li>{cryptos[0].max_supply}</li>
        <li>{cryptos[0].circulating_supply}</li>
        <li>{cryptos[0].total_supply}</li>
        <li>{cryptos[0].last_updated}</li>
        <li>{cryptos[0].USD.price}</li>
      </ul>
    </>
  );
};

export default CryptoCard;
