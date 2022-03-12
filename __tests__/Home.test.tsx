import Home from "../src/pages";
import { render, screen } from "@testing-library/react";
import { wrapper } from "../src/redux/store/store";

describe("Given a Home page component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a heading with text coinster", () => {
      const expectedElement = "heading";
      const WrappedComponent = wrapper.withRedux(Home);
      render(<WrappedComponent />);
      const expectedOutput = screen.getByRole(expectedElement);

      expect(expectedOutput).toBeInTheDocument();
    });
  });
});
