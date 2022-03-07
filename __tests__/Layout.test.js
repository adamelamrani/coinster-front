import { render, screen } from "@testing-library/react";

import Layout from "../src/components/Layout/Layout";

describe("Given a Layout component", () => {
  describe("When it's invoked", () => {
    test("Then it should print 'Test' in a heading", () => {
      const expectedElement = "heading";
      const expectedText = "Test";
      render(<Layout />);

      const expectedOutput = screen.getByRole(expectedElement, {
        name: "Test",
      });
      expect(expectedOutput.textContent).toBe(expectedText);
    });
  });
});
