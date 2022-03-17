import { render, screen } from "@testing-library/react";
import DetailsPage from "../src/pages/crypto/[id]";

describe("Given a DetailsPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should render CryptoDetails component", () => {
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
      const heading = "heading";
      render(<DetailsPage crypto={crypto} />);

      const expectedOutput = screen.getByRole(heading, { name: crypto.name });
      expect(expectedOutput).toBeInTheDocument();
      expect(expectedOutput.textContent).toBe(crypto.name);
    });
  });
});
