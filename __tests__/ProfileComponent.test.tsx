import { render, screen } from "@testing-library/react";
import ProfileComponent from "../src/components/Profile/ProfileComponent";
import "whatwg-fetch";
jest.mock("next/router");
const mockLocalStorage = {
  getItem: () =>
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZWxhbWNvIiwiaWF0IjoxNjQ4MDQ0MTg3fQ.al4ibxpTInhGFc7iM6j7EBPEOeN4vgN1uwIddalWzTw",
};
Object.defineProperty(window, "localStorage", { value: mockLocalStorage });

describe("Given a ProfileComponent", () => {
  describe("When it's rendered", () => {
    test("Then it should display 2 inputs and 3 buttons", () => {
      render(<ProfileComponent />);

      const buttons = screen.getAllByRole("button");
      const inputs = screen.getAllByRole("textbox");

      expect(buttons).toHaveLength(3);
      expect(inputs).toHaveLength(2);
    });
  });
});
