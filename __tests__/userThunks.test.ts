import "whatwg-fetch";
import { loginThunk, registerThunk } from "../src/redux/thunks/userThunks";
jest.mock("jwt-decode", () => () => ({}));
jest.mock("next/router");

describe("Given a loginThunk", () => {
  describe("When the thunk it's invoked", () => {
    test("Then it should call the dispatch function", async () => {
      const dispatch = jest.fn();
      const user = {
        username: "Adam",
        password: "12345",
      };

      await loginThunk(user)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a registerThunk function", () => {
  describe("When it's invoked", () => {
    test("Then it should call the dispatch function", async () => {
      const dispatch = jest.fn();
      const user = {
        name: "Adam",
        username: "Adam2",
        password: "12345",
      };

      await registerThunk(user)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
