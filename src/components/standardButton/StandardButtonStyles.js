const styles = () => ({
  greenButton: {
    backgroundColor: "#3e7a04",
    color: "#FFF",
    padding: "10px 28px",
    fontSize: "1.3em",
    fontFamily: "cabinSemiBold",
    textTransform: "initial",
    height: "2em",
    "&:hover": {
      backgroundColor: "#3e7a04",
      borderColor: "#3e7a04",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#3e7a04",
      borderColor: "#FFF",
    },
    "&:focus": {
      boxShadow: "rgba(0,0,0,.5)",
    },
  },
  blueButton: {
    backgroundColor: "#007FFF",
    color: "#FFF",
    padding: "10px 28px",
    fontSize: "1.3em",
    fontFamily: "cabinSemiBold",
    textTransform: "initial",
    height: "2em",
    "&:hover": {
      backgroundColor: "#007FFF",
      borderColor: "#007FFF",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#007FFF",
      borderColor: "#FFF",
    },
    "&:focus": {
      boxShadow: "rgba(0,0,0,.5)",
    },
  }

});
export default styles;
