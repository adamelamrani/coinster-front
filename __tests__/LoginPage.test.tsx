import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginPage from "../src/pages/user/login";
import { wrapper } from "../src/redux/store/store";
import "whatwg-fetch";

describe("Given a LoginForm Page", () => {
  describe("When it's rendered", () => {
    test("Then it should display a form with 2 inputs in it", () => {
      const WrappedComponent = wrapper.withRedux(LoginPage);
      const input = "textbox";
      const title = "login-form";
      render(<WrappedComponent />);

      const expectedForm = screen.getByTitle(title);
      const expectedInput = screen.getAllByRole(input);

      expectedInput.forEach((input) => {
        expect(input).toBeInTheDocument();
      });
      expect(expectedForm).toBeInTheDocument();
    });
  });

  describe("When the submit button is clicked", () => {
    test("Then it should call the mock function", () => {
      const WrappedComponent = wrapper.withRedux(LoginPage);
      const button = "button";
      const input = "textbox";

      render(<WrappedComponent />);

      const expectedButton = screen.getByRole(button);
      const expectedInput = screen.getAllByRole(input);

      expectedInput.forEach((input) => {
        userEvent.type(input, "hola");
        expect(input).toHaveValue("hola");
      });

      userEvent.click(expectedButton);
    });
  });
});
