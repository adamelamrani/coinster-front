import actionTypes from "../src/redux/actions/actionTypes";
import cryptoReducer from "../src/redux/reducers/cryptoReducer";

describe("Given a cryptoReducer function", () => {
  describe("When it receives an action with an array of crytos", () => {
    test("Then it should return a newCryptoState with the new array", () => {
      const newState = [
        {
          name: "Bitcoin",
          symbol: "BTC",
          slug: "bitcoin",
          date_added: "08/03/2022",
          max_supply: 200000000000,
          circulating_supply: 2000000000,
          total_supply: 2200000000,
          last_updated: "08/03/2022",
          USD: {
            price: 40000,
          },
        },
        {
          name: "Ethereum",
          symbol: "ETC",
          slug: "ethereum",
          date_added: "08/03/2022",
          max_supply: 200000000000,
          circulating_supply: 2000000000,
          total_supply: 2200000000,
          last_updated: "08/03/2022",
          USD: {
            price: 40000,
          },
        },
      ];

      const currentState = [
        {
          name: "Bitcoin",
          symbol: "BTC",
          slug: "bitcoin",
          date_added: "08/03/2022",
          max_supply: 200000000000,
          circulating_supply: 2000000000,
          total_supply: 2200000000,
          last_updated: "08/03/2022",
          USD: {
            price: 40000,
          },
        },
      ];

      const action = {
        type: actionTypes.loadCoins,
        cryptos: newState,
      };
      const expectedOutput = cryptoReducer(currentState, action);

      expect(expectedOutput).toEqual(newState);
    });
  });

  describe("When it doesn't receive a valid action", () => {
    test("Then it should return the current state with only 1 crypto", () => {
      const currentState = [
        {
          name: "Bitcoin",
          symbol: "BTC",
          slug: "bitcoin",
          date_added: "08/03/2022",
          max_supply: 200000000000,
          circulating_supply: 2000000000,
          total_supply: 2200000000,
          last_updated: "08/03/2022",
          USD: {
            price: 40000,
          },
        },
      ];

      const action = {
        type: actionTypes.loadCoins,
      };
      const expectedOutput = cryptoReducer(currentState, action);

      expect(expectedOutput).toEqual(currentState);
    });
  });
});
