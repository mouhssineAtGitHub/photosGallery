export const GET_STUDENTS = payload => ({
    type: "GET_STUDENTS",
    payload
  });

  export const LOGIN = payload => ({
    type: "LOGIN",
    payload
  });
  
  export const LOGOUT = payload => ({
    type: "LOGOUT",
    payload
  });

  export const actionCreator = (type, payload) => {

    return type(payload);

  };