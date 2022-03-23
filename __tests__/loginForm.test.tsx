import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../src/components/LoginForm/LoginForm";

describe("Given a LoginForm page component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a form", () => {
      const mock = jest.fn();
      render(
        <LoginForm formData={mock} handleChange={mock} submitForm={mock} />
      );
      const form = screen.getByTitle("login-form");
      expect(form).toBeInTheDocument();
    });
  });

  describe("When the submit button is clicked", () => {
    test("Then it should call the mock function on submit", () => {
      const mock = jest.fn();
      render(
        <LoginForm formData={mock} handleChange={mock} submitForm={mock} />
      );
      const button = screen.getByRole("button");
      userEvent.click(button);
      expect(button).toBeInTheDocument();
      expect(mock).toHaveBeenCalled();
    });
  });

  describe("If the input fields are not filed", () => {
    test("Then the button must be disabled", () => {
      const mock = jest.fn();
      const form = {
        username: "",
        password: "",
      };
      render(
        <LoginForm formData={form} handleChange={mock} submitForm={mock} />
      );
      const button = screen.getByRole("button");
      userEvent.click(button);
      expect(button).toBeDisabled();
    });
  });
});
