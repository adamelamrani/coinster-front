import actionTypes from "../actions/actionTypes";

const tokenReducer = (currentToken: any = {}, action: any = {}) => {
  let newToken;
  switch (action.type) {
    case actionTypes.login:
      newToken = { ...action.user };
      break;
    default:
      newToken = { ...currentToken };
  }
  return newToken;
};

export default tokenReducer;
