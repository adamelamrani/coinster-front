import Home from "../src/pages";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../src/redux/store/store";
describe("Given a Home page component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a heading with text coinster", () => {
      const expectedElement = "heading";

      render(
        <Provider store={store}>
          <Home />
        </Provider>
      );
      const expectedOutput = screen.getByRole(expectedElement);

      expect(expectedOutput).toBeInTheDocument();
    });
  });
});
