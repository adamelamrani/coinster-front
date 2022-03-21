import { HYDRATE } from "next-redux-wrapper";
import actionTypes from "../actions/actionTypes";

const tokenReducer = (currentToken: any = {}, action: any = {}) => {
  let newToken;
  switch (action.type) {
    case HYDRATE:
      return { ...action.payload.tokenReducer };
    case actionTypes.login:
      newToken = { ...action.user };
      break;
    default:
      newToken = { ...currentToken };
  }
  return newToken;
};

export default tokenReducer;
