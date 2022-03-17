import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../src/components/Button/Button";

describe("Given a Button component", () => {
  describe("When it's invoked", () => {
    test("Then it should render itself", () => {
      const actionOnClick = jest.fn();
      const text = "hola";
      render(
        <Button
          disableCondition={false}
          actionOnClick={actionOnClick}
          text={text}
        />
      );

      const expectedButton = screen.getByRole("button", { name: text });

      expect(expectedButton).toBeInTheDocument();
      expect(expectedButton.textContent).toBe(text);
    });
  });

  describe("When a click is fired", () => {
    test("Then it should call the mock function", () => {
      const actionOnClick = jest.fn();
      render(
        <Button
          disableCondition={false}
          actionOnClick={actionOnClick}
          text={"text"}
        />
      );

      const button = screen.getByRole("button");
      userEvent.click(button);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
