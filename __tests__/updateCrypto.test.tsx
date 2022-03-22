import { render, screen } from "@testing-library/react";
import UpdateCrypto from "../src/pages/crypto/update-crypto/[id]";
import { wrapper } from "../src/redux/store/store";

describe("Given a UpdateCrypto page", () => {
  describe("When it's rendered", () => {
    test("Then it should display a form", () => {
      const WrappedComponent = wrapper.withRedux(UpdateCrypto);
      render(<WrappedComponent />);

      const expectedElement = screen.getByTitle("create-form");

      expect(expectedElement).toBeInTheDocument();
    });
  });
});
