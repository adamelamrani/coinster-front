import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cryptos } from "../../interfaces/cryptoProps";
import RootState from "../../interfaces/RootState";
import { loadCoinListThunk } from "../../redux/thunks/cryptoThunks";
import CryptoCard from "../CryptoCard/CryptoCard";

const CardContainer = (): JSX.Element => {
  const cryptoList: Cryptos = useSelector<RootState, any>(
    (state) => state.cryptosList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCoinListThunk);
  }, [dispatch]);
  return (
    <>
      <ul>
        {cryptoList.map((crypto) => {
          return (
            <li key={crypto.id}>
              <CryptoCard
                key={crypto.id}
                id={crypto.id}
                name={crypto.name}
                market_cap={crypto.market_cap}
                percent_change_1h={crypto.percent_change_1h}
                percent_change_7d={crypto.percent_change_7d}
                tags={crypto.tags}
                platform={crypto.platform}
                max_supply={crypto.max_supply}
                slug={crypto.slug}
                symbol={crypto.symbol}
                percent_change_24h={crypto.price}
                price={crypto.price}
                total_supply={crypto.total_supply}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CardContainer;
