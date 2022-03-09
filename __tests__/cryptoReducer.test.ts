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
          symbol: "BTC",
          slug: "bitcoin",
          date_added: "08/03/2022",
          max_supply: 200000000000,
          circulating_supply: 2000000000,
          total_supply: 2200000000,
          last_updated: "08/03/2022",
          price: 325235,
          percent_change_24h: 12,
          id: 1,
        },
        {
          name: "Bitcoin",
          symbol: "BTC",
          slug: "bitcoin",
          date_added: "08/03/2022",
          max_supply: 200000000000,
          circulating_supply: 2000000000,
          total_supply: 2200000000,
          last_updated: "08/03/2022",
          price: 325235,
          percent_change_24h: 12,
          id: 2,
        },
      ];

      const currentState: Cryptos = [
        {
          name: "Bitcoin",
          symbol: "BTC",
          slug: "bitcoin",
          date_added: "08/03/2022",
          max_supply: 200000000000,
          circulating_supply: 2000000000,
          total_supply: 2200000000,
          last_updated: "08/03/2022",
          price: 325235,
          percent_change_24h: 12,
          id: 1,
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
          symbol: "BTC",
          slug: "bitcoin",
          date_added: "08/03/2022",
          max_supply: 200000000000,
          circulating_supply: 2000000000,
          total_supply: 2200000000,
          last_updated: "08/03/2022",
          price: 325235,
          percent_change_24h: 12,
          id: 1,
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
