import "whatwg-fetch";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateCrypto from "../src/components/CreateCrypto/CreateCrypto";
import { wrapper } from "../src/redux/store/store";

jest.mock("next/router");

beforeAll(() => {
  jest.useFakeTimers();
});

describe("Given a CreateCrypto form", () => {
  describe("When it's invoked", () => {
    test("Then it should render itself", async () => {
      const WrappedComponent = wrapper.withRedux(CreateCrypto);
      render(<WrappedComponent />);

      const expectedOutput = await screen.getByTitle("create-form");
      expect(expectedOutput).toBeInTheDocument();
    });
  });

  describe("When the types in", () => {
    test("Then it should submit the form", async () => {
      const WrappedComponent = wrapper.withRedux(CreateCrypto);
      jest.advanceTimersByTime(1000);
      render(<WrappedComponent />);

      const input = screen.getAllByRole("textbox");
      input.map((textbox) => {
        userEvent.type(textbox, "1");
      });

      input.forEach((element) => {
        expect(element).toHaveValue("1");
      });
    });
  });
});
