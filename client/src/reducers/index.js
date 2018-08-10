import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

const students = (state = [], action) => {
  
  switch (action.type) {

    case "GET_STUDENTS":
      return action.payload;

    default:
      return state;
  }

};

const isLoggedIn = (state = false, action) => {

  switch (action.type) {
    
    case "LOGIN":
      return action.payload;

    case "LOGOUT":
      return action.payload;

    default:
      return state;
  }

};

export const mainReducer = combineReducers({
  students,
  isLoggedIn,
  form: reduxFormReducer
});
