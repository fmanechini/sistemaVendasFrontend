let INITIAL_STATE = {
  productsList: [],
  quantity: null,
  selectedProduct: {},
  saleDetailsList: []
};
export const saleDetailsReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_PRODUCTS_LIST":
      return {...state, productsList:action.payload};
    case "SET_SELECTED_PRODUCT":
      return {...state, selectedProduct:action.payload}
    case "SET_QUANTITY":
      return {...state, quantity:action.payload};
    case "ADD_PRODUCT_TO_LIST":
      return {...state, saleDetailsList:[...state.saleDetailsList, action.payload]};
    case "SET_SALE_DETAILS_LIST":
      return {...state, saleDetailsList:action.payload};
    default:
      return state;
  }
};
