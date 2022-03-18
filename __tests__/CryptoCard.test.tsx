import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CryptoCard from "../src/components/CryptoCard/CryptoCard";

describe("Given a CryptoCard component", () => {
  describe("When it receives the parameter name", () => {
    test("Then it should render an element with the name of the parameter", () => {
      const crypto = {
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
        id: "1",
        img: "https://cryptologos.cc/logos/filecoin-fil-logo.svg?v=022",
      };

      render(<CryptoCard crypto={crypto} />);

      const text = "Bitcoin";
      const expectedOutput = screen.getByText(text);

      expect(expectedOutput).toBeInTheDocument();
    });
  });

  describe("When it receives an action on click", () => {
    test("Then it should call the mock function", () => {
      const mock = jest.fn();
      const crypto = {
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
        id: "1",
        img: "https://cryptologos.cc/logos/filecoin-fil-logo.svg?v=022",
      };
      const cross = "cross";

      render(<CryptoCard crypto={crypto} />);
      const expectedElement = screen.getByTitle(cross);
      userEvent.click(expectedElement);

      expect(mock).toHaveBeenCalled();
    });
  });
});
