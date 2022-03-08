import Layout from "../src/components/Layout/Layout";
import { render, screen } from "@testing-library/react";

describe("Given a Layout component", () => {
  describe("When it's invoked", () => {
    test("Then it should print 'Test' in a heading", () => {
      const expectedElement = "navigation";
      render(<Layout />);

      const expectedOutput = screen.getByRole(expectedElement);
      expect(expectedOutput).toBeInTheDocument();
    });
  });
});
