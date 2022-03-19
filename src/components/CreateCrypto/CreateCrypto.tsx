import React, { FormEventHandler, useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import StyledFormular from "./StyledFormular";

interface Form {
  name: string;
  symbol: string;
  slug: string;
  tags: string | Array<string>;
  max_supply: number;
  total_supply: number;
  platform: string | Array<string>;
  price: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  market_cap: number;
  img: string;
}

const StyledBox = styled.div`
  border-radius: 20px;
  margin: 20px;
  padding: 30px;
  background-color: rgb(24, 41, 88);
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 70vw;

  @media (max-width: 450px) {
    border-radius: 20px;
    padding: 30px;
    background-color: rgb(24, 41, 88);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    display: flex;
    flex-direction: column;
    margin: 0px;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
`;

const CreateCrypto: React.FunctionComponent = (): JSX.Element => {
  const emptyForm: Form = {
    name: "",
    symbol: "",
    slug: "",
    tags: [""],
    max_supply: 0,
    total_supply: 0,
    platform: [""],
    price: 0,
    percent_change_1h: 0,
    percent_change_24h: 0,
    percent_change_7d: 0,
    market_cap: 0,
    img: "",
  };

  const [formData, setFormData] = useState(emptyForm);
  const createCryptoEvent: FormEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const invalidForm =
    formData.name === "" ||
    formData.symbol === "" ||
    formData.slug === "" ||
    formData.tags === [] ||
    formData.max_supply === 0 ||
    formData.total_supply === 0 ||
    formData.platform === [] ||
    formData.price === 0 ||
    formData.percent_change_1h === 0 ||
    formData.percent_change_24h === 0 ||
    formData.percent_change_7d === 0 ||
    formData.market_cap === 0 ||
    formData.img === "";

  return (
    <StyledBox>
      <StyledFormular autoComplete="off" onSubmit={() => {}}>
        <div className="form-blocks">
          <div className="first-block">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Introduzca un nombre"
              value={formData.name}
              onChange={createCryptoEvent}
            />
            <label htmlFor="symbol">Símbolo:</label>
            <input
              type="text"
              name="symbol"
              id="symbol"
              placeholder="Introduzca un symbolo, por ejemplo: BTC>"
              value={formData.symbol}
              onChange={createCryptoEvent}
            />
            <label htmlFor="slug">Slug:</label>
            <input
              type="text"
              name="slug"
              id="slug"
              placeholder="Introduzca algún slug..."
              value={formData.slug}
              onChange={createCryptoEvent}
            />
            <label htmlFor="tags">Tags:</label>
            <textarea
              name="tags"
              id="tags"
              placeholder="Cryptos"
              value={formData.tags}
              onChange={createCryptoEvent}
            />
            <label htmlFor="max_supply">Stock máximo:</label>
            <input
              type="number"
              name="max_supply"
              id="max_supply"
              placeholder="Introduzca el stock máximo"
              value={formData.max_supply}
              onChange={createCryptoEvent}
            />
            <label htmlFor="total_supply">Stock total:</label>
            <input
              type="number"
              name="total_supply"
              id="total_supply"
              placeholder="Introduzca el stock total"
              value={formData.total_supply}
              onChange={createCryptoEvent}
            />
          </div>
          <div className="second-block">
            <label htmlFor="platform">Plataformas:</label>
            <textarea
              name="platform"
              id="platform"
              placeholder="Plataformas, por ejemplo: BSC."
              value={formData.platform}
              onChange={createCryptoEvent}
            />
            <label htmlFor="price">Precio:</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Introduzca el precio de la moneda:"
              value={formData.price}
              onChange={createCryptoEvent}
            />
            <label htmlFor="market_cap">Capital de mercado:</label>
            <input
              type="number"
              name="market_cap"
              id="market_cap"
              placeholder="Introduzca el capital de mercado"
              value={formData.market_cap}
              onChange={createCryptoEvent}
            />
            <label htmlFor="percent_change_1h">
              Porcentaje de cambio última hora:
            </label>
            <input
              type="number"
              name="percent_change_1h"
              id="percent_change_1h"
              placeholder="Variación última hora"
              value={formData.percent_change_1h}
              onChange={createCryptoEvent}
            />
            <label htmlFor="percent_change_24h">
              Porcentaje de cambio últimas 24 horas:
            </label>
            <input
              type="number"
              name="percent_change_24h_"
              id="percent_change_24h"
              placeholder="Variación últimas 24 horas"
              value={formData.percent_change_24h}
              onChange={createCryptoEvent}
            />
            <label htmlFor="percent_change_7d">
              Porcentaje de cambio últimos 7 días:
            </label>
            <input
              type="number"
              name="percent_change_7d"
              id="percent_change_7d"
              placeholder="Variación últimos 7 días"
              value={formData.percent_change_7d}
              onChange={createCryptoEvent}
            />
          </div>
          <div className="img-form">
            <label className="img-label" htmlFor="img">
              Logo de su Cryptoactivo:
            </label>
            <input
              type="file"
              name="img"
              id="img"
              value={formData.img}
              onChange={createCryptoEvent}
            />
          </div>
        </div>
        <Button
          disableCondition={invalidForm}
          actionOnClick={() => {}}
          text={"Crear"}
        />
      </StyledFormular>
    </StyledBox>
  );
};

export default CreateCrypto;
