import axios from 'axios'

export const getClients = () => {
  return (dispatch) => {
    return axios
      .get(`http://0.0.0.0:8000/sales/clients/`)
      .then(response => {
        dispatch({
          type: "SET_CLIENTS_LIST",
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
};

export const getSellers = () => {
  return (dispatch) => {
    return axios
      .get(`http://0.0.0.0:8000/sales/seller/`)
      .then(response => {
        dispatch({
          type: "SET_SELLERS_LIST",
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
};

export const setSelectedClient = (e) => {
  return {
    type: "SET_SELECTED_CLIENT",
    payload: e.target.value
  }
}

export const setSelectedSeller = (e) => {
  return {
    type: "SET_SELECTED_SELLER",
    payload: e.target.value
  }
}

export const registerSale = (client, seller, saleDetailsList) => {
  if (client, seller, saleDetailsList) {
    var items_list = []
    saleDetailsList.map((elem) => {
      items_list.push({product: elem.product.name, quantity: elem.quantity})
    })
    const json = {
      "sale_datetime": new Date().toISOString(),
      "client": client,
      "seller": seller,
      "items": items_list
  }
  const headers = {
    "Content-Type": "application/json"
}
    return (dispatch) => {
      return axios
        .post(`http://0.0.0.0:8000/sales/sale/`, json, { headers })
        .then(response => {
          dispatch({
            type: "CALL_SNACKBAR",
            payload: {
              open: true,
              message: "Venda cadastrada com sucesso",
              severity: "success"
            }
          })
          dispatch({
            type: "SET_SALE_DETAILS_LIST",
            payload: []
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
  } else {
    return (dispatch) => {
      dispatch({
        type: "CALL_SNACKBAR",
        payload: {
          open: true,
          message: "Os campos não podem ser vazios",
          severity: "error"
        }
      })
    };
  }
};

export const cancelSale = () => {
    return (dispatch) => {
          dispatch({
            type: "CALL_SNACKBAR",
            payload: {
              open: true,
              message: "Venda cancelada",
              severity: "success"
            }
          })
          dispatch({
            type: "SET_SALE_DETAILS_LIST",
            payload: []
          })
        }
      }