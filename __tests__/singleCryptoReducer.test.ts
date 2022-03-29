import { HYDRATE } from "next-redux-wrapper";
import singleCryptoReducer from "../src/redux/reducers/singleCryptoReducer";

describe("Given a singleCryptoReducer", () => {
  describe("When it receives an updateCrypto action", () => {
    test("Then it should return the crypto updated", () => {
      const crypto = {
        name: "Bitcoin",
        market_cap: "2000000",
        percent_change_1h: "2",
        percent_change_7d: "5",
        platform: "null",
        tags: "",
        symbol: "BTC",
        slug: "bitcoin",
        max_supply: "200000000000",
        total_supply: "2200000000",
        price: "325235",
        percent_change_24h: "12",
        id: "622cdb2eaa2f5a4e7dd16917",
        img: "https://cryptologos.cc/logos/filecoin-fil-logo.svg?v=022",
      };

      const action = {
        type: "update-crypto",
        crypto: crypto,
      };

      const expectedOutput = singleCryptoReducer(crypto, action);
      expect(expectedOutput).toStrictEqual(crypto);
    });
  });

  describe("When the action.type has Type HYDRATE", () => {
    test("Then it should return an action with property reducer with value crypto", () => {
      const crypto = {
        name: "Bitcoin",
        market_cap: "2000000",
        percent_change_1h: "2",
        percent_change_7d: "5",
        platform: "null",
        tags: "",
        symbol: "BTC",
        slug: "bitcoin",
        max_supply: "200000000000",
        total_supply: "2200000000",
        price: "325235",
        percent_change_24h: "12",
        id: "622cdb2eaa2f5a4e7dd16917",
        img: "https://cryptologos.cc/logos/filecoin-fil-logo.svg?v=022",
      };
      const currentState = {};
      const action = {
        type: HYDRATE,
        payload: { singleCrypto: crypto },
      };
      const expectedOutput = singleCryptoReducer(currentState, action);
      expect(expectedOutput).toEqual(crypto);
    });
  });
});
