import axios from 'axios'

export const registerClient = (name) => {
  if (name) {
    return (dispatch) => {
      return axios
        .post(`http://0.0.0.0:8000/sales/clients/`, { name })
        .then(response => {
          dispatch({
            type: "CALL_SNACKBAR",
            payload: {
              open: true,
              message: "Cliente cadastrado com sucesso",
              severity: "success"
            }
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
          message: "O campo não pode ser vazio",
          severity: "error"
        }
      })
    };
  }
};

export const registerSeller = (name) => {
  if (name) {
    return (dispatch) => {
      return axios
        .post(`http://0.0.0.0:8000/sales/seller/`, { name })
        .then(response => {
          dispatch({
            type: "CALL_SNACKBAR",
            payload: {
              open: true,
              message: "Vendedor cadastrado com sucesso",
              severity: "success"
            }
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
          message: "O campo não pode ser vazio",
          severity: "error"
        }
      })
    };
  }
};

export const registerProduct = (name, price, comission) => {
  if (name, price, comission) {
    return (dispatch) => {
      return axios
        .post(`http://0.0.0.0:8000/sales/product/`, { name, price, comission })
        .then(response => {
          dispatch({
            type: "CALL_SNACKBAR",
            payload: {
              open: true,
              message: "Produto cadastrado com sucesso",
              severity: "success"
            }
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
