import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CardContainer from "../src/components/CardContainer/CardContainer";
import store from "../src/redux/store/store";
import "whatwg-fetch";

describe("Given a CardContainer component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a list", () => {
      const list = "list";
      render(
        <Provider store={store}>
          <CardContainer />
        </Provider>
      );

      const expectedOutput = screen.getByRole(list);

      expect(expectedOutput).toBeInTheDocument();
    });
  });
});
