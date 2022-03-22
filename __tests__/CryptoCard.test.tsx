import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CryptoCard from "../src/components/CryptoCard/CryptoCard";

describe("Given a CryptoCard component", () => {
  describe("When it receives the parameter name", () => {
    test("Then it should render an element with the name of the parameter", () => {
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
        id: "2",
        img: "/undefined",
      };

      render(<CryptoCard crypto={crypto} />);

      const text = "Bitcoin";
      const expectedOutput = screen.getByText(text);

      expect(expectedOutput).toBeInTheDocument();
    });
  });
});
