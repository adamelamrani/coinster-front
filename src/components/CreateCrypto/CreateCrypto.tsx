import React, { FormEventHandler, useState } from "react";
import Button from "../Button/Button";

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

const CreateCrypto: React.ReactNode = () => {
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
  const CreateCrypto: FormEventHandler = (
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
    <form autoComplete="off" onSubmit={() => {}}>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Introduzca un nombre"
        value={formData.name}
        onChange={CreateCrypto}
      />
      <label htmlFor="symbol">Símbolo:</label>
      <input
        type="text"
        name="symbol"
        id="symbol"
        placeholder="Introduzca un symbolo, por ejemplo: BTC>"
        value={formData.symbol}
        onChange={CreateCrypto}
      />
      <label htmlFor="slug">Slug:</label>
      <input
        type="text"
        name="Slug"
        id="Slug"
        placeholder="Introduzca algún slug..."
        value={formData.slug}
        onChange={CreateCrypto}
      />
      <label htmlFor="name">Tags:</label>
      <textarea
        name="Tags"
        id="Tags"
        placeholder="Cryptos"
        value={(formData.tags as string).split(",")}
        onChange={CreateCrypto}
      />
      <label htmlFor="max_supply">Stock máximo:</label>
      <input
        type="number"
        name="max_supply_form"
        id="max_supply_form"
        placeholder="Introduzca el stock máximo"
        value={formData.max_supply}
        onChange={CreateCrypto}
      />
      <label htmlFor="total_supply">Stock total:</label>
      <input
        type="number"
        name="total_supply_form"
        id="total_supply_form"
        placeholder="Introduzca el stock total"
        value={formData.total_supply}
        onChange={CreateCrypto}
      />
      <label htmlFor="platform">Plataformas:</label>
      <textarea
        name="platforms"
        id="platforms"
        placeholder="Plataformas, por ejemplo: BSC."
        value={(formData.platform as string).split(",")}
        onChange={CreateCrypto}
      />
      <label htmlFor="price">Precio:</label>
      <input
        type="number"
        name="price_form"
        id="price_form"
        placeholder="Introduzca el precio de la moneda:"
        value={formData.price}
        onChange={CreateCrypto}
      />
      <label htmlFor="market_cap_form">Capital de mercado:</label>
      <input
        type="number"
        name="market_cap_form"
        id="market_cap_form"
        placeholder="Introduzca el capital de mercado"
        value={formData.market_cap}
        onChange={CreateCrypto}
      />
      <label htmlFor="percent_change_1h_form">
        Porcentaje de cambio última hora:
      </label>
      <input
        type="number"
        name="percent_change_1h_form"
        id="percent_change_1h_form"
        placeholder="Variación última hora"
        value={formData.percent_change_1h}
        onChange={CreateCrypto}
      />
      <label htmlFor="percent_change_1h_form">
        Porcentaje de cambio última hora:
      </label>
      <input
        type="number"
        name="percent_change_24h_form"
        id="percent_change_24h_form"
        placeholder="Variación últimas 24 horas"
        value={formData.percent_change_24h}
        onChange={CreateCrypto}
      />
      <label htmlFor="percent_change_1h_form">
        Porcentaje de cambio últimos 7 días:
      </label>
      <input
        type="number"
        name="percent_change_7d_form"
        id="percent_change_7d_form"
        placeholder="Variación últimos 7 días"
        value={formData.percent_change_7d}
        onChange={CreateCrypto}
      />
      <label htmlFor="percent_change_1h_form">
        Porcentaje de cambio última hora:
      </label>
      <input
        type="number"
        name="percent_change_24h_form"
        id="percent_change_24h_form"
        placeholder="Variación últimas 24 horas"
        value={formData.percent_change_24h}
        onChange={CreateCrypto}
      />
      <label htmlFor="img_form">Logo de su Cryptoactivo:</label>
      <input
        type="file"
        name="img_form"
        id="img_form"
        value={formData.img}
        onChange={CreateCrypto}
      />
      <Button
        disableCondition={invalidForm}
        actionOnClick={() => {}}
        text={"Crear"}
      />
    </form>
  );
};
