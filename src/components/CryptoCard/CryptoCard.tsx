/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEventHandler } from "react";
import Crypto from "../../interfaces/Crypto";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface CryptoCardInterface extends Crypto {
  actionOnClick: MouseEventHandler;
}

const CryptoCard = ({
  crypto,
  actionOnClick,
}: CryptoCardInterface): JSX.Element => {
  return (
    <>
      <FontAwesomeIcon
        className="star-icon"
        icon={faStar}
        onClick={actionOnClick}
      />
      <img
        width={35}
        height={35}
        alt={`${crypto.name}-logo`}
        src={crypto.img}
        onClick={actionOnClick}
      />
      <td className={`crypto crypto-name ${crypto.name}`}>
        <div className="name-mobile-block">
          <p>{crypto.name}</p>
          <p>{crypto.symbol}</p>
        </div>
      </td>
      <td className={`crypto crypto-price ${crypto.price}`}>
        ${crypto.price.toFixed(5)}
      </td>
      <td className={`crypto crypto-change24 ${crypto.percent_change_24h}`}>
        {crypto.percent_change_24h.toFixed(2)}
      </td>
      <td className={`crypto crypto-change7d ${crypto.percent_change_7d}`}>
        {crypto.percent_change_7d.toFixed(4)}
      </td>
      <td className={`crypto crypto-marketcap ${crypto.market_cap}`}>
        ${Math.round((crypto.market_cap * 100) / 100)}
      </td>
      <td className={`crypto crypto-maxsupply ${crypto.max_supply}`}>
        {Math.round((crypto.max_supply * 100) / 100)}
      </td>
      <td className={`crypto crypto-totalsupply ${crypto.total_supply}`}>
        <div className="price-mobile-block">
          <p className="price-mobile">${crypto.price.toFixed(5)}</p>
          <p>{Math.round((crypto.total_supply * 100) / 100)}</p>
        </div>
      </td>
    </>
  );
};

export default CryptoCard;
