import "whatwg-fetch";
import { render, screen } from "@testing-library/react";
import CreateCrypto from "../src/components/CreateCrypto/CreateCrypto";

jest.mock("next/router");

beforeAll(() => {
  jest.useFakeTimers();
});

describe("Given a CreateCrypto form", () => {
  describe("When it's invoked", () => {
    test("Then it should render itself", async () => {
      const mock = jest.fn();
      render(
        <CreateCrypto
          changeFile={mock}
          createCryptoEvent={mock}
          formData={mock}
          submitCrypto={mock}
          text={"Crear"}
        />
      );

      const expectedOutput = await screen.getByTitle("create-form");
      expect(expectedOutput).toBeInTheDocument();
    });
  });

  describe("When the types in", () => {
    test("Then it should submit the form", async () => {
      const mock = jest.fn();
      const formDataText: any = {
        name: "a",
        symbol: "a",
        slug: "a",
        tags: "a",
        max_supply: "0",
        total_supply: "0",
        platform: "a",
        price: "0",
        percent_change_1h: "0",
        percent_change_24h: "0",
        percent_change_7d: "0",
        market_cap: "0",
        img: "",
      };
      render(
        <CreateCrypto
          changeFile={mock}
          createCryptoEvent={mock}
          formData={formDataText}
          submitCrypto={mock}
          text={"Crear"}
        />
      );
      const input = screen.getAllByRole("textbox");
      input.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
  });
});
