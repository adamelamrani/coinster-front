/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEventHandler } from "react";
import Crypto from "../../interfaces/Crypto";
import { faStar, faCross } from "@fortawesome/free-solid-svg-icons";

export interface CryptoCardProps {
  crypto: Crypto;
  actionOnClick: MouseEventHandler;
}

const CryptoCard = ({
  crypto,
  actionOnClick,
}: CryptoCardProps): JSX.Element => {
  return (
    <>
      <FontAwesomeIcon
        className="star-icon"
        icon={faStar}
        onClick={() => {
          "say hello";
        }}
      />
      <FontAwesomeIcon
        className="star-icon"
        icon={faCross}
        onClick={actionOnClick}
      />
      <img
        width={35}
        height={35}
        alt={`${crypto.name}-logo`}
        src={crypto.img}
        onClick={() => {}}
      />
      <td className={`crypto crypto-name ${crypto.name}`}>
        <div className="name-mobile-block">
          <p>{crypto.name}</p>
          <p>{crypto.symbol}</p>
        </div>
      </td>
      <td className={`crypto crypto-price`}>${crypto.price.toFixed(5)}</td>
      <td className={`crypto crypto-change24`}>
        {crypto.percent_change_24h.toFixed(2)}
      </td>
      <td className={`crypto crypto-change7d`}>
        {crypto.percent_change_7d.toFixed(4)}
      </td>
      <td className={`crypto crypto-marketcap `}>
        ${Math.round((crypto.market_cap * 100) / 100)}
      </td>
      <td className={`crypto crypto-maxsupply`}>
        {Math.round((crypto.max_supply * 100) / 100)}
      </td>
      <td className={`crypto crypto-totalsupply `}>
        <div className="price-mobile-block">
          <p className="price-mobile">${crypto.price.toFixed(5)}</p>
          <p>{Math.round((crypto.total_supply * 100) / 100)}</p>
        </div>
      </td>
    </>
  );
};

export default CryptoCard;
