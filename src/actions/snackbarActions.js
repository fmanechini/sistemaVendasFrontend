export const handleClose = () => {
  return {
    type: "CLOSE_SNACKBAR",
    payload: false
  }
}

export const callSnackbar = (severity, message) => {
  return {
    type: "CALL_SNACKBAR",
    payload: {
      severity,
      message,
      open: true
    }
  }
}