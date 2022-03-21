import {
  createCryptoAction,
  deleteCoinsAction,
  getSingleCryptoAction,
  loadCoinsAction,
  updateCryptoAction,
} from "../actions/actionsCreator";
import { Dispatch } from "redux";
import { Cryptos } from "../../interfaces/cryptoProps";
import Crypto from "../../interfaces/Crypto";

export function loadCoinListThunk() {
  return async function (dispatch: Dispatch) {
    const response: Response = await fetch(
      `${process.env.NEXT_PUBLIC_COINSTER_API}/cryptos/list`,
      {
        method: "GET",
      }
    );
    const cryptosList: Cryptos = await response.json();
    dispatch(loadCoinsAction(cryptosList));
  };
}

export const deleteCryptoThunk = (id: string) => async (dispatch: Dispatch) => {
  await fetch(`${process.env.NEXT_PUBLIC_COINSTER_API}/cryptos/crypto/${id}`, {
    method: "DELETE",
  });
  dispatch(deleteCoinsAction(id));
};

export const singleCryptoThunk = (id: string) => async (dispatch: Dispatch) => {
  const response: Response = await fetch(
    `${process.env.NEXT_PUBLIC_COINSTER_API}/cryptos/crypto/${id}`,
    { method: "GET" }
  );
  const crypto = await response.json();
  const cryptoJSON = JSON.stringify(crypto);
  const parseJSON = JSON.parse(cryptoJSON);
  dispatch(getSingleCryptoAction(parseJSON));
};

export const createCryptoThunk =
  (formData: Crypto) => async (dispatch: Dispatch) => {
    const data = new FormData();
    data.append("img", formData.img);
    data.append("name", formData.name);
    data.append("symbol", formData.symbol);
    data.append("slug", formData.slug);
    data.append("tags", formData.tags);
    data.append("max_supply", formData.max_supply);
    data.append("total_supply", formData.total_supply);
    data.append("platform", formData.platform);
    data.append("price", formData.price);
    data.append("percent_change_1h", formData.percent_change_1h);
    data.append("percent_change_24h", formData.percent_change_24h);
    data.append("percent_change_7d", formData.percent_change_7d);
    data.append("market_cap", formData.market_cap);
    const response: Response = await fetch(
      `${process.env.NEXT_PUBLIC_COINSTER_API}/cryptos/new-crypto`,
      {
        method: "POST",
        body: data,
      }
    );
    if (response.ok) {
      const crypto: Crypto = await response.json();
      dispatch(createCryptoAction(crypto));
    } else {
      throw new Error("Error al crear un nuevo activo.");
    }
  };

export const updateCryptoThunk =
  (id: string, crypto: Crypto) => async (dispatch: Dispatch) => {
    const data = new FormData();
    data.append("img", crypto.img);
    data.append("name", crypto.name);
    data.append("symbol", crypto.symbol);
    data.append("slug", crypto.slug);
    data.append("tags", crypto.tags);
    data.append("max_supply", crypto.max_supply);
    data.append("total_supply", crypto.total_supply);
    data.append("platform", crypto.platform);
    data.append("price", crypto.price);
    data.append("percent_change_1h", crypto.percent_change_1h);
    data.append("percent_change_24h", crypto.percent_change_24h);
    data.append("percent_change_7d", crypto.percent_change_7d);
    data.append("market_cap", crypto.market_cap);
    const response: Response = await fetch(
      `${process.env.NEXT_PUBLIC_COINSTER_API}/cryptos/crypto/${id}`,
      {
        method: "PATCH",
        body: data,
      }
    );
    if (response.ok) {
      const updatedCrypto: Crypto = await response.json();
      dispatch(updateCryptoAction(updatedCrypto));
    }
  };
