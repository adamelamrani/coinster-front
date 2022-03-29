import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateCryptoForm from "../src/pages/crypto/new-crypto";
import { wrapper } from "../src/redux/store/store";
import "whatwg-fetch";
import { ToastContainer } from "react-toastify";
import * as Router from "next/router";

describe("Given a CreateCrypto page", () => {
  describe("When it's rendered", () => {
    test("Then it should display a form", () => {
      const WrappedComponent = wrapper.withRedux(CreateCryptoForm);
      render(<WrappedComponent />);

      const expectedElement = screen.getByTitle("create-form");

      expect(expectedElement).toBeInTheDocument();
    });
  });

  describe("When the submit button is clicked", () => {
    test("Then it should call the mock function", async () => {
      const WrappedComponent = wrapper.withRedux(CreateCryptoForm);
      render(
        <>
          <ToastContainer />
          <WrappedComponent />
        </>
      );

      const expectedButton = screen.getByRole("button");
      const expectedInputs = screen.getAllByRole("textbox");
      const file = new File(["hello"], "hello.png", { type: "image/png" });

      expectedInputs.forEach((input) => {
        userEvent.type(input, "1");
      });

      const cryptoImg = screen.getByLabelText("Logo de su Cryptoactivo:");

      act(() => {
        userEvent.upload(cryptoImg, file);
      });

      userEvent.click(expectedButton);

      const findToast = await screen.findByText(`Crypto Bitcoin creada`);
      expect(findToast).toBeInTheDocument();
    });
  });
});
