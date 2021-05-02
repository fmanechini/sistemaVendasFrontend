import axios from 'axios'

export const setSelectedProduct = (value) => {
  console.log(value)
  return {
    type: "SET_SELECTED_PRODUCT",
    payload: value
  }
}

export const setQuantity = (e) => {
  return {
    type: "SET_QUANTITY",
    payload: e.target.value
  }
}

export const addProductToSaleDetails = (product, quantity, saleDetailsList) => {
  if (product && quantity > 0) {
    var valit = false
    if (saleDetailsList.length > 0) {
      saleDetailsList.forEach((elem) => {
        console.log(elem)
        if (elem.product == product) {
          valit = true
        }
      })
    }
    if (valit == false) {
      return {
        type: "ADD_PRODUCT_TO_LIST",
        payload: {
          product,
          quantity
        }
      }
    } else {
      return {
        type: "CALL_SNACKBAR",
        payload: {
          open: true,
          message: "produto já consta na lista",
          severity: "error"
        }
      }
    }
  } else {
    return {
      type: "CALL_SNACKBAR",
      payload: {
        open: true,
        message: "campos não podem ser vazios",
        severity: "error"
      }
    }
  }
}

export const removeProductOfSaleDetails = (productId, saleDetailsList) => {
  const index = saleDetailsList.map((elem) => { return elem.product.id; }).indexOf(productId);
  saleDetailsList.splice(index, 1)
  return {
    type: "SET_SALE_DETAILS_LIST",
    payload: saleDetailsList
  }
}

export const getProductByNameLike = (e) => {
  return (dispatch) => {
    return axios
      .get(`http://0.0.0.0:8000/sales/product/get_products_by_name_like/?product_name=${e.target.value}`)
      .then(response => {
        console.log(response)
        dispatch({
          type: "SET_PRODUCTS_LIST",
          payload: response.data
        })
      }
      )
      .catch((err) => {
        dispatch({
          type: "CALL_SNACKBAR",
          payload: {
            open: true,
            message: err.response.request.response,
            severity: "error"
          }
        })
      });
  };
}