import loadCoinsAction from "../src/redux/actions/actionsCreator";
import actionTypes from "../src/redux/actions/actionTypes";

describe("Given a loadCoinsAction", () => {
  describe("When it receives a list of cryptos", () => {
    test("Then it should return an object with type loadCoins and cryptos", () => {
      const cryptos = [
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
        payload: cryptos,
      };

      const expectedOutput = loadCoinsAction(cryptos);

      expect(expectedOutput).toStrictEqual(action);
    });
  });
});

export {};
