import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { wrapper } from "../src/redux/store/store";
import "whatwg-fetch";
import RegisterPage from "../src/pages/user/register";

describe("Given a Register Page", () => {
  describe("When it's rendered", () => {
    test("Then it should display a form with 3 inputs in it", () => {
      const WrappedComponent = wrapper.withRedux(RegisterPage);
      const input = "textbox";
      const title = "register-form";
      render(<WrappedComponent />);

      const expectedForm = screen.getByTitle(title);
      const expectedInput = screen.getAllByRole(input);

      expectedInput.forEach((input) => {
        expect(input).toBeInTheDocument();
      });
      screen.debug();
      expect(expectedInput).toHaveLength(2);
      expect(expectedForm).toBeInTheDocument();
    });
  });

  describe("When the submit button is clicked", () => {
    test("Then it should call the mock function", () => {
      const WrappedComponent = wrapper.withRedux(RegisterPage);
      const button = "button";
      const input = "textbox";
      const submitForm = jest.fn();

      render(<WrappedComponent submitForm={submitForm} />);

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
