/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEventHandler } from "react";
import Crypto, { CryptoId } from "../../interfaces/Crypto";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export interface CryptoCardProps {
  crypto: Crypto;
}

const CryptoCard = ({ crypto }: CryptoCardProps): JSX.Element => {
  return (
    <>
      <FontAwesomeIcon
        className="star-icon"
        icon={faStar}
        onClick={() => {
          "say hello";
        }}
      />
      <Link href={`/crypto/${(crypto as CryptoId).id}`} passHref>
        <img
          width={35}
          height={35}
          alt={`${crypto.name}-logo`}
          src={crypto.img as string}
        />
      </Link>
      <td className={`crypto crypto-name ${crypto.name}`}>
        <div className="name-mobile-block">
          <p>{crypto.name}</p>
          <p>{crypto.symbol}</p>
        </div>
      </td>
      <td className={`crypto crypto-price`}>
        ${Number(crypto.price).toFixed(5)}
      </td>
      <td className={`crypto crypto-change24`}>
        {Number(crypto.percent_change_24h).toFixed(2)}
      </td>
      <td className={`crypto crypto-change7d`}>
        {Number(crypto.percent_change_7d).toFixed(4)}
      </td>
      <td className={`crypto crypto-marketcap `}>
        ${Math.round((Number(crypto.market_cap) * 100) / 100)}
      </td>
      <td className={`crypto crypto-maxsupply`}>
        {Math.round((Number(crypto.max_supply) * 100) / 100)}
      </td>
      <td className={`crypto crypto-totalsupply `}>
        <div className="price-mobile-block">
          <p className="price-mobile">${Number(crypto.price).toFixed(5)}</p>
          <p>{Math.round((Number(crypto.total_supply) * 100) / 100)}</p>
        </div>
      </td>
    </>
  );
};

export default CryptoCard;
