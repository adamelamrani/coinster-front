import { render, screen } from "@testing-library/react";
import DetailsPage, { getStaticProps } from "../src/pages/crypto/[id]";
import { wrapper } from "../src/redux/store/store";
import "whatwg-fetch";
import userEvent from "@testing-library/user-event";
import Router from "next/router";
import { ToastContainer } from "react-toastify";

jest.mock("next/router", () => ({
  Router: jest.fn(),
}));

jest.mock("next/router", () => {
  const router = {
    query: {
      id: "622cdb2eaa2f5a4e7dd16917",
    },
    push: jest.fn(),
  };
  return {
    useRouter: () => router,
  };
});

describe("Given a DetailsPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should render CryptoDetails component", async () => {
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

      const context: any = {
        params: {
          id: crypto.id,
        },
      };

      await getStaticProps(context);
      const heading = "heading";
      const WrappedComponent = wrapper.withRedux(DetailsPage);
      render(<WrappedComponent />);
      screen.debug();
      const expectedOutput = screen.getByRole(heading, {
        name: crypto.name,
      });
      expect(expectedOutput).toBeInTheDocument();
      expect(expectedOutput.textContent).toBe(crypto.name);
    });
  });

  describe("When it's rendered", () => {
    test("Then it should display a button with text 'Delete' in it", () => {
      const button = "button";
      const buttonText = "Eliminar";

      const WrappedComponent = wrapper.withRedux(DetailsPage);
      render(<WrappedComponent />);

      const expectedElement = screen.getByRole(button, { name: buttonText });
      expect(expectedElement).toBeInTheDocument();
      expect(expectedElement.textContent).toBe(buttonText);
    });
  });
});
