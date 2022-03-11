/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Crypto from "../../interfaces/Crypto";
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
  img,
}: Crypto): JSX.Element => {
  function numberWithCommas(x: number | string) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
        <>
      <FontAwesomeIcon className="star-icon" icon={faStar} />
      <img width={35} height={35} alt={`${name}-logo`} src={img} />
      <td className={`crypto crypto-name ${name}`}>
        <div className="name-mobile-block">
          <p>{name}</p>
          <p>{symbol}</p>
        </div>
      </td>
      <td className={`crypto crypto-price ${price}`}>
        ${numberWithCommas(price.toFixed(5))}
      </td>
      <td className={`crypto crypto-change24 ${percent_change_24h}`}>
        {numberWithCommas(percent_change_24h.toFixed(2))}
      </td>
      <td className={`crypto crypto-change7d ${percent_change_7d}`}>
        {numberWithCommas(percent_change_7d.toFixed(4))}
      </td>
      <td className={`crypto crypto-marketcap ${market_cap}`}>
        ${numberWithCommas(Math.round((market_cap * 100) / 100))}
      </td>
      <td className={`crypto crypto-maxsupply ${max_supply}`}>
        {numberWithCommas(Math.round((max_supply * 100) / 100))}
      </td>
      <td className={`crypto crypto-totalsupply ${total_supply}`}>
        <div className="price-mobile-block">
          <p className="price-mobile">${numberWithCommas(price.toFixed(5))}</p>
          <p>{numberWithCommas(Math.round((total_supply * 100) / 100))}</p>
        </div>
      </td>
    </>
  );
};

export default CryptoCard;
