import { render, screen } from "@testing-library/react";
import ProfilePage from "../src/pages/user/profile";
import { wrapper } from "../src/redux/store/store";
jest.mock("next/router");
const mockLocalStorage = {
  getItem: () =>
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkZWxhbWNvIiwiaWF0IjoxNjQ4MDQ0MTg3fQ.al4ibxpTInhGFc7iM6j7EBPEOeN4vgN1uwIddalWzTw",
};
Object.defineProperty(window, "localStorage", { value: mockLocalStorage });

describe("Given a Profile Page component", () => {
  describe("When it's rendered", () => {
    test("Then it should render the profile component", () => {
      const WrappedComponent = wrapper.withRedux(ProfilePage);
      render(<WrappedComponent />);

      const buttons = screen.getAllByRole("button");
      expect(buttons).toHaveLength(3);
      buttons.forEach((button) => {
        expect(button).toBeInTheDocument();
      });
    });
  });
});
