import React from "react";
import { useSelector } from "react-redux";
import { Cryptos } from "../../interfaces/cryptoProps";
import RootState from "../../interfaces/RootState";
import CryptoCard from "../CryptoCard/CryptoCard";
import StyledCard from "../CryptoCard/StyledCard";
import StyledCardContainer from "./StyledCardContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";
import Crypto from "../../interfaces/Crypto";

const CardContainer: React.FunctionComponent = (): JSX.Element => {
  const cryptoList: Cryptos = useSelector<RootState, any>(
    (state) => state.cryptosList
  );
  return (
    <>
      <StyledCardContainer>
        <thead>
          <StyledCard>
            <FontAwesomeIcon icon={faArrowsUpDown} width={16} height={20} />
            <th className="empty"></th>
            <th className="th-name">Nombre</th>
            <th>Precio</th>
            <th>% 24h</th>
            <th>% 7d</th>
            <th>Capital de mercado</th>
            <th>Stock máximo</th>
            <th>Stock total</th>
          </StyledCard>
        </thead>
        {cryptoList.map((crypto: Crypto) => (
          <StyledCard key={crypto.id}>
            <CryptoCard
              actionOnClick={() => {}}
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
