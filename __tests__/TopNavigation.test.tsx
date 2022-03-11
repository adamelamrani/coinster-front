import { render, screen } from "@testing-library/react";
import TopNavigation from "../src/components/Navigation/TopNavigation";

describe("Given a TopNavigation component", () => {
  describe("When it's invoked", () => {
    test("Then it should render an Image and a list", () => {
      const expectImage = "img";
      const expectedList = "list";

      render(<TopNavigation />);

      const expectedOutputImage = screen.getByRole(expectImage);
      const expectedOutputList = screen.getAllByRole(expectedList);

      expect(expectedOutputImage).toBeInTheDocument();
      expect(expectedOutputList[0]).toBeInTheDocument();
    });
  });
});
