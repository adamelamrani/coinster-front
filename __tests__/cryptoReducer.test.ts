import { Cryptos } from "../src/interfaces/cryptoProps";
import actionTypes from "../src/redux/actions/actionTypes";
import cryptoReducer from "../src/redux/reducers/cryptoReducer";
import TypeOfAction from "../src/interfaces/TypeOfAction";

describe("Given a cryptoReducer function", () => {
  describe("When it receives an action with an array of crytos", () => {
    test("Then it should return a newCryptoState with the new array", () => {
      const newState: Cryptos = [
        {
          name: "Bitcoin",
          market_cap: 2000000,
          percent_change_1h: 2,
          percent_change_7d: 5,
          platform: null,
          tags: [""],
          symbol: "BTC",
          slug: "bitcoin",
          max_supply: 200000000000,
          total_supply: 2200000000,
          price: 325235,
          percent_change_24h: 12,
          id: 1,
          img: "undefined",
        },
        {
          name: "Bitcoin",
          market_cap: 2000000,
          percent_change_1h: 2,
          percent_change_7d: 5,
          platform: null,
          tags: [""],
          symbol: "BTC",
          slug: "bitcoin",
          max_supply: 200000000000,
          total_supply: 2200000000,
          price: 325235,
          percent_change_24h: 12,
          id: 2,
          img: "undefined",
        },
      ];

      const currentState: Cryptos = [
        {
          name: "Bitcoin",
          market_cap: 2000000,
          percent_change_1h: 2,
          percent_change_7d: 5,
          platform: null,
          tags: [""],
          symbol: "BTC",
          slug: "bitcoin",
          max_supply: 200000000000,
          total_supply: 2200000000,
          price: 325235,
          percent_change_24h: 12,
          id: 1,
          img: "undefined",
        },
      ];

      const action: TypeOfAction = {
        type: actionTypes.loadCoins,
        payload: newState,
      };
      const expectedOutput = cryptoReducer(currentState, action);
      expect(expectedOutput).toEqual(newState);
    });
  });

  describe("When it doesn't receive a valid action", () => {
    test("Then it should return the current state with only 1 crypto", () => {
      const currentState: Cryptos = [
        {
          name: "Bitcoin",
          market_cap: 2000000,
          percent_change_1h: 2,
          percent_change_7d: 5,
          platform: null,
          tags: [""],
          symbol: "BTC",
          slug: "bitcoin",
          max_supply: 200000000000,
          total_supply: 2200000000,
          price: 325235,
          percent_change_24h: 12,
          id: 1,
          img: "undefined",
        },
      ];

      const action: TypeOfAction = {
        type: actionTypes.loadCoins,
        payload: undefined,
      };
      const expectedOutput = cryptoReducer(currentState, action);

      expect(expectedOutput).toEqual(currentState);
    });
  });
});
