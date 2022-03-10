import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Crypto from "../../interfaces/Crypto";
import StyledCard from "./CryptoCard.style";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
      <FontAwesomeIcon className="star-icon" icon={faStar} />
      <td className={`crypto crypto-name ${name}`}>{name}</td>
      <td className={`crypto crypto-symbol ${symbol}`}>{symbol}</td>
      <td className={`crypto crypto-price ${price}`}>
        {Math.round((price * 100) / 100)}
      </td>
      <td className={`crypto crypto-change24 ${percent_change_24h}`}>
        {Math.round((percent_change_24h * 100) / 100)}
      </td>
      <td className={`crypto crypto-change7d ${percent_change_7d}`}>
        {Math.round((percent_change_7d * 100) / 100)}
      </td>
      <td className={`crypto crypto-marketcap ${market_cap}`}>
        {Math.round((market_cap * 100) / 100)}
      </td>
      <td className={`crypto crypto-maxsupply ${max_supply}`}>
        {Math.round((max_supply * 100) / 100)}
      </td>
      <td className={`crypto crypto-totalsupply ${total_supply}`}>
        {Math.round((total_supply * 100) / 100)}
      </td>
    </>
  );
};

export default CryptoCard;
