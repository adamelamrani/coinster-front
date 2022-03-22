import { render, screen } from "@testing-library/react";
import CryptoDetails from "../src/components/CryptoDetails/CryptoDetails";
import { wrapper } from "../src/redux/store/store";
import "whatwg-fetch";

describe("Given a CryptoDetails component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a list of elements with a heading in it", () => {
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
      const WrappedComponent = wrapper.withRedux(CryptoDetails);
      render(<WrappedComponent crypto={crypto} />);

      const expectedHeading = screen.getByText("Bitcoin");

      expect(expectedHeading).toBeInTheDocument();
      expect(expectedHeading.textContent).toBe(crypto.name);
    });
  });

  describe("When it's rendered", () => {
    test("Then it should display a button with text 'Eliminar' in it", () => {
      const button = "button";
      const buttonText = "Eliminar";
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

      const WrappedComponent = wrapper.withRedux(CryptoDetails);
      render(<WrappedComponent crypto={crypto} />);

      const expectedElement = screen.getByRole(button, { name: buttonText });
      expect(expectedElement).toBeInTheDocument();
      expect(expectedElement.textContent).toBe(buttonText);
    });
  });

  describe("When the button is clicked", () => {
    test("Then it should call the dispatch", () => {
      const button = "button";
      const deleteButton = "Eliminar";
      const updateButton = "Actualizar";
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
      const mock = jest.fn();
      const WrappedComponent = wrapper.withRedux(CryptoDetails);
      render(
        <WrappedComponent
          updateCrypto={mock}
          deleteCrypto={mock}
          crypto={crypto}
        />
      );

      const deleteDispatch = screen.getByRole(button, { name: deleteButton });
      const updateDispatch = screen.getByRole(button, { name: updateButton });
      expect(deleteDispatch).toBeInTheDocument();
      expect(updateDispatch).toBeInTheDocument();
    });
  });
});
