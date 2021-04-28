const styles = () => ({
  container: {
    backgroundColor: "#ececec",
    flexGrow: 3,
    paddingRight: "50px",
    paddingLeft: "100px",
    paddingBottom: "50px"
  },
  title: {
    fontSize: "2em",
  },
  productDiv: {
    display: "flex",
    width:"100%",
    alignItems: "center",
    height: "20%"
  },
  root: {
    padding: 0
  },
  productField: {
    width:"60%",
    minWidth: 120,
    border: "1px solid #aba6a6",
    borderRadius: "5px",
    marginRight: "20px"
  },
  quantityField: {
    width:"30%",
    minWidth: 120,
    border: "1px solid #aba6a6",
    borderRadius: "5px",
    marginRight: "20px"
  },
  input: {
    height: "100px"
  }
});

export default styles;