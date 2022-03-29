import { render, screen } from "@testing-library/react";
import FourOFour from "../src/pages/FourOFour";

describe("Given a NotFound component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a heading with 404 in it", () => {
      const element = "heading";

      render(<FourOFour />);

      const expectedElement = screen.getByRole(element, { name: "404" });

      expect(expectedElement).toBeInTheDocument();
    });
  });
});
