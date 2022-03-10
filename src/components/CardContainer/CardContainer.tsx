import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cryptos } from "../../interfaces/cryptoProps";
import RootState from "../../interfaces/RootState";
import { loadCoinListThunk } from "../../redux/thunks/cryptoThunks";
import CryptoCard from "../CryptoCard/CryptoCard";
import StyledCard from "../CryptoCard/CryptoCard.style";
import StyledCardContainer from "./StyledCardContainer";

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
      <StyledCardContainer>
        {cryptoList.map((crypto) => (
          <StyledCard key={crypto.id}>
            <CryptoCard
              img={crypto.img}
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
              percent_change_24h={crypto.percent_change_24h}
              price={crypto.price}
              total_supply={crypto.total_supply}
            />
          </StyledCard>
        ))}
      </StyledCardContainer>
    </>
  );
};

export default CardContainer;
