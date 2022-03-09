import actionTypes from "../src/redux/actions/actionTypes";
import { loadCoinListThunk } from "../src/redux/thunks/cryptoThunks";
import "whatwg-fetch";
import { Cryptos } from "../src/interfaces/cryptoProps";

describe("Given a loadCryptoListThunk", () => {
  describe("When it's invoked", () => {
    test("Then it should call the dispatch function", async () => {
      const cryptos: Cryptos = [
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

      const dispatch = jest.fn();
      const action = {
        type: actionTypes.loadCoins,
        payload: cryptos,
      };

      await loadCoinListThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
