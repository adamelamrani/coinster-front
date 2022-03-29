import { HYDRATE } from "next-redux-wrapper";
import tokenReducer from "../src/redux/reducers/tokenReducer";

describe("Given a tokenReducer function", () => {
  describe("When it receives the HYDRATE case", () => {
    test("Then it should return an action with property tokenReducer", () => {
      const user = {
        username: "pepe",
        password: "pepe1",
      };

      const currentState = {};

      const action = {
        type: HYDRATE,
        payload: { tokenReducer: user },
      };

      const expectedOutput = tokenReducer(currentState, action);
      expect(expectedOutput).toEqual(user);
    });
  });

  describe("When it receives a user and action type login", () => {
    test("Then it should return the new token", () => {
      const user = {
        username: "pepe",
        password: "pepe1",
      };

      const currentState = {
        username: "",
        password: "",
      };

      const action = {
        type: "log-in",
        user: user,
      };

      const expectedOutput = tokenReducer(currentState, action);
      expect(expectedOutput).toEqual(user);
    });
  });

  describe("When it receives a user and a register type", () => {
    test("Then it should return a token with the current state and the user", () => {
      const user = {
        name: "david",
        username: "pepe",
        password: "pepe1",
      };

      const currentState = {
        name: "",
        username: "",
        password: "",
      };
      const action = {
        type: "register",
        user: user,
      };

      const expectedOutput = tokenReducer(currentState, action);
      expect(expectedOutput).toEqual(user);
    });
  });
});
