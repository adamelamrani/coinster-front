import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CryptoCard from "../src/components/CryptoCard/CryptoCard";
import store from "../src/redux/store/store";

describe("Given a CryptoCard component", () => {
  describe("When it receives the parameter name", () => {
    test("Then it should render an element with the name of the parameter", () => {
      const cryptos = {
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
      };

      render(
        <Provider store={store}>
          <CryptoCard
            name={cryptos.name}
            circulating_supply={cryptos.circulating_supply}
            date_added={cryptos.date_added}
            last_updated={cryptos.last_updated}
            max_supply={cryptos.max_supply}
            percent_change_24h={cryptos.percent_change_24h}
            price={cryptos.price}
            slug={cryptos.slug}
            symbol={cryptos.symbol}
            total_supply={cryptos.total_supply}
            id={cryptos.id}
          />
        </Provider>
      );

      const text = /nombre: bitcoin/i;
      const expectedOutput = screen.getByText(text);

      expect(expectedOutput).toBeInTheDocument();
    });
  });
});
