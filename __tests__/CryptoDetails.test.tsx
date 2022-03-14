import { render, screen } from "@testing-library/react";
import CryptoDetails from "../src/components/CryptoDetails/CryptoDetails";

describe("Given a CryptoDetails component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a list of elements with a heading in it", () => {
      const list = "list";
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
        id: 1,
        img: "https://cryptologos.cc/logos/filecoin-fil-logo.svg?v=022",
      };

      render(<CryptoDetails actionOnClick={() => {}} crypto={crypto} />);

      const expectedList = screen.getByRole(list);
      const expectedHeading = screen.getByRole("heading", {
        name: crypto.name,
      });

      expect(expectedList).toBeInTheDocument();
      expect(expectedHeading).toBeInTheDocument();
      expect(expectedHeading.textContent).toBe(crypto.name);
    });
  });

  describe("When it's rendered", () => {
    test("Then it should display a button with text 'Delete' in it", () => {
      const button = "button";
      const buttonText = "Delete";
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
        id: 1,
        img: "https://cryptologos.cc/logos/filecoin-fil-logo.svg?v=022",
      };

      render(<CryptoDetails actionOnClick={() => {}} crypto={crypto} />);

      const expectedElement = screen.getByRole(button, { name: buttonText });
      expect(expectedElement).toBeInTheDocument();
      expect(expectedElement.textContent).toBe(buttonText);
    });
  });
});
