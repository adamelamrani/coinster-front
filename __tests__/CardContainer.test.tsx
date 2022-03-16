import "whatwg-fetch";
import { render, screen } from "@testing-library/react";
import CardContainer from "../src/components/CardContainer/CardContainer";
import { wrapper } from "../src/redux/store/store";

describe("Given a CardContainer component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a list", async () => {
      const text = "Nombre";
      const WrappedComponent = wrapper.withRedux(CardContainer);
      render(<WrappedComponent />);

      const expectedOutput = await screen.findAllByText(text);
      screen.debug();
      expect(expectedOutput[0]).toBeInTheDocument();
    });
  });

  describe("", () => {
    test("", () => {});
  });
});
