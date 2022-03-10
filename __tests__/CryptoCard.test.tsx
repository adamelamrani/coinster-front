import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CryptoCard from "../src/components/CryptoCard/CryptoCard";
import Crypto from "../src/interfaces/Crypto";
import store from "../src/redux/store/store";

describe("Given a CryptoCard component", () => {
  describe("When it receives the parameter name", () => {
    test("Then it should render an element with the name of the parameter", () => {
      const cryptos: Crypto = {
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
        img: "https://cryptologos.cc/logos/filecoin-fil-logo.svg?v=022",
      };

      render(
        <Provider store={store}>
          <CryptoCard
            img={cryptos.img}
            key={cryptos.id}
            id={cryptos.id}
            name={cryptos.name}
            market_cap={cryptos.market_cap}
            percent_change_1h={cryptos.percent_change_1h}
            percent_change_7d={cryptos.percent_change_7d}
            tags={cryptos.tags}
            platform={cryptos.platform}
            max_supply={cryptos.max_supply}
            slug={cryptos.slug}
            symbol={cryptos.symbol}
            percent_change_24h={cryptos.price}
            price={cryptos.price}
            total_supply={cryptos.total_supply}
          />
        </Provider>
      );

      const text = "Bitcoin";
      const expectedOutput = screen.getByText(text);

      expect(expectedOutput).toBeInTheDocument();
    });
  });
});
