import Home from "../src/pages";
import { render, screen } from "@testing-library/react";
describe("Given a Home page component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a heading with text coinster", () => {
      const expectedElement = "heading";
      const expectedText = "Coinster";

      render(<Home />);
      const expectedOutput = screen.getByRole(expectedElement, {
        name: expectedText,
      });

      expect(expectedOutput.textContent).toBe(expectedText);
    });
  });
});
