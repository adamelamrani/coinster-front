import { render, screen } from "@testing-library/react";
import CreateCryptoForm from "../src/pages/crypto/new-crypto";
import { wrapper } from "../src/redux/store/store";

describe("Given a CreateCrypto page", () => {
  describe("When it's rendered", () => {
    test("Then it should display a form", () => {
      const WrappedComponent = wrapper.withRedux(CreateCryptoForm);
      render(<WrappedComponent />);

      const expectedElement = screen.getByTitle("create-form");

      expect(expectedElement).toBeInTheDocument();
    });
  });
});
