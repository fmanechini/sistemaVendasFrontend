let INITIAL_STATE = {
  clientsList: [],
  sellersList: [],
  totalValue: 0,
  selectedClient: "",
  selectedSeller: ""
};
export const saleSummaryReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CLIENTS_LIST":
      return {...state, clientsList:action.payload};
    case "SET_SELLERS_LIST":
      return {...state, sellersList:action.payload};
    case "SET_TOTAL_VALUE":
      return {...state, totalValue:action.payload};
    case "SET_SELECTED_CLIENT":
      return {...state, selectedClient:action.payload};   
    case "SET_SELECTED_SELLER":
      return {...state, selectedSeller:action.payload};  
    default:
      return state;
  }
};
