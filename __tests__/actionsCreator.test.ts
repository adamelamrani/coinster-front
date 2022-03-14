import { loadCoinsActionI } from "../src/interfaces/actionsInterfaces";
import { Cryptos } from "../src/interfaces/cryptoProps";
import {
  deleteCoinsAction,
  loadCoinsAction,
} from "../src/redux/actions/actionsCreator";
import actionTypes from "../src/redux/actions/actionTypes";

describe("Given a loadCoinsAction", () => {
  describe("When it receives a list of cryptos", () => {
    test("Then it should return an object with type loadCoins and cryptos", () => {
      const cryptos: Cryptos = [
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
          id: 1,
          img: "undefined",
        },
      ];

      const action: loadCoinsActionI = {
        type: actionTypes.loadCoins,
        payload: cryptos,
      };

      const expectedOutput = loadCoinsAction(cryptos);

      expect(expectedOutput).toStrictEqual(action);
    });
  });
});

describe("Given a deleteCoinsAction", () => {
  describe("When it receives a valid id", () => {
    test("Then it should return an action with the type and the id of the crypto to remove", () => {
      const id = 1;
      const expectedOutput = { type: "delete-coin", id: id };
      const expectedAction = deleteCoinsAction(id);

      expect(expectedAction).toEqual(expectedOutput);
    });
  });
});
