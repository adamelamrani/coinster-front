import "whatwg-fetch";
import actionTypes from "../src/redux/actions/actionTypes";
import {
  createCryptoThunk,
  deleteCryptoThunk,
  loadCoinListThunk,
  singleCryptoThunk,
  updateCryptoThunk,
} from "../src/redux/thunks/cryptoThunks";
import { LoadCoinsActionI } from "../src/interfaces/actionsInterfaces";
import { CryptosId } from "../src/interfaces/cryptoProps";

describe("Given a loadCryptoListThunk", () => {
  describe("When it's invoked", () => {
    test("Then it should call the dispatch function", async () => {
      const cryptos: CryptosId = [
        {
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
        },
        {
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
          id: "622cdb2eaa2f5a4e7dd16912",
          img: "https://cryptologos.cc/logos/filecoin-fil-logo.svg?v=022",
        },
      ];

      const dispatch = jest.fn();
      const action: LoadCoinsActionI = {
        type: actionTypes.loadCoins,
        payload: cryptos,
      };

      await loadCoinListThunk()(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});

describe("Given a deleteCryptoThunk", () => {
  describe("When it's invoked", () => {
    test("Then it should call the dispatch function", async () => {
      const id: string = "622cdb2eaa2f5a4e7dd16917";
      const dispatch = jest.fn();

      await deleteCryptoThunk(id)(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a singleCryptoThunk", () => {
  describe("When it's invoked", () => {
    test("Then it should call the dispatch function", async () => {
      const id: string = "622cdb2eaa2f5a4e7dd16917";
      const dispatch = jest.fn();

      await singleCryptoThunk(id)(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a createThunk", () => {
  describe("When it's invoked", () => {
    test("Then it should call the dispatch function", async () => {
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
      const dispatch = jest.fn();

      await createCryptoThunk(crypto)(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given an updateCryptoThunk", () => {
  describe("When it's invoked", () => {
    test("Then it should call the dispatch function", async () => {
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
        id: "undefined",
        img: "https://cryptologos.cc/logos/filecoin-fil-logo.svg?v=022",
      };

      const dispatch = jest.fn();

      await updateCryptoThunk(crypto.id, crypto)(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
