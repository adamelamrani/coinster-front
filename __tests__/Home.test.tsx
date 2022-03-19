import Home, { getServerSideProps } from "../src/pages";
import { render, screen } from "@testing-library/react";
import { wrapper } from "../src/redux/store/store";
import "whatwg-fetch";

describe("Given a Home page component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a heading with text coinster", () => {
      const expectedElement = "table";
      const WrappedComponent = wrapper.withRedux(Home);
      render(<WrappedComponent />);
      const expectedOutput = screen.getByRole(expectedElement);

      expect(expectedOutput).toBeInTheDocument();
    });
  });
});

describe("Given a getServerSideProps function", () => {
  describe("When the home page is instansiated", () => {
    test("Then it should return a props object", async () => {
      const cryptosList = [
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
          id: "1",
          img: "https://cryptologos.cc/logos/filecoin-fil-logo.svg?v=022",
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
          id: "2",
          img: "https://cryptologos.cc/logos/filecoin-fil-logo.svg?v=022",
        },
      ];
      const props = {
        props: {
          cryptoList: undefined,
          initialState: { cryptosList, singleCrypto: {} },
        },
      };

      const getSSR = await getServerSideProps({} as any);
      expect(getSSR).toEqual(props);
    });
  });
});
