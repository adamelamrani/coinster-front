import "whatwg-fetch";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UpdateCrypto from "../src/pages/crypto/update-crypto/[id]";
import { wrapper } from "../src/redux/store/store";
import { act } from "react-dom/test-utils";
import { ToastContainer } from "react-toastify";
import { getStaticProps } from "../src/pages/crypto/[id]";
import { Context } from "next-redux-wrapper";

describe("Given a UpdateCrypto page", () => {
  describe("When it's rendered", () => {
    test("Then it should display a form", () => {
      const WrappedComponent = wrapper.withRedux(UpdateCrypto);
      render(<WrappedComponent />);

      const expectedElement = screen.getByTitle("create-form");

      expect(expectedElement).toBeInTheDocument();
    });
  });

  describe("When the submit button is clicked without an id", () => {
    test("Then it shouldn't call the mock function", async () => {
      const WrappedComponent = wrapper.withRedux(UpdateCrypto);
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

      const findToast = await screen.findByText("Crypto actualizada");
      expect(findToast).toBeInTheDocument();
    });
  });
});

describe("Given a getStaticProps function", () => {
  describe("When it's invoked", () => {
    test("Then it should return the props", async () => {
      const context: Context = {};
      const gsp = await getStaticProps(context);

      const expectedValue = {
        notFound: true,
        props: {
          initialState: {
            cryptosList: [],
            singleCrypto: {
              "0": "C",
              "1": "r",
              "10": "a",
              "11": "t",
              "12": "e",
              "13": "d",
              "2": "y",
              "3": "p",
              "4": "t",
              "5": "o",
              "6": " ",
              "7": "u",
              "8": "p",
              "9": "d",
            },
            tokenReducer: {},
          },
        },
      };
      expect(gsp).toEqual(expectedValue);
    });
  });
});
