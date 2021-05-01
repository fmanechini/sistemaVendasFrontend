let INITIAL_STATE = {
  open: false,
  message: "",
  severity: "sucess"
};
export const snackbarReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CALL_SNACKBAR":
      return {...state, ...action.payload};
    case "CLOSE_SNACKBAR":
      return {...state, open:action.payload }
    default:
      return state;
  }
};
