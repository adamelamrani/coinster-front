import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginPage from "../src/pages/user/login";
import { wrapper } from "../src/redux/store/store";
import "whatwg-fetch";
import { ToastContainer } from "react-toastify";

const mockLocalStorage = {
  getItem: () =>
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZWxhbWNvIiwiaWF0IjoxNjQ4MDQ0MTg3fQ.al4ibxpTInhGFc7iM6j7EBPEOeN4vgN1uwIddalWzTw",
};
Object.defineProperty(window, "localStorage", { value: mockLocalStorage });

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
});
