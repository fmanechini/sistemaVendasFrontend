const styles = () => ({
    root: {
        backgroundColor: "#e5e5e5",
        minWidth: "265px",
        minHeight: "80px",
        justifyContent: "center",
        borderBottom: "2px solid #d4d4d4"
    },
    centerText: {
        display: "flex",
        textTransform: "capitalize",
        justifyContent: "flex-end",
        flexGrow: 1.5,
        alignItems: "center",
        marginRight: "20px",
        color: "#000",
        fontFamily: "cabinBold",
        textDecoration: "none",
        "&:hover": {
            color: "#000",
            textDecoration: "none",
        }
    },
    companyText: {
        display: "flex",
        fontSize: "1.6em",
        fontWeight: "bold",
        flexGrow: 1,
        alignItems: "center",
        color: "#000",
        paddingTop: "8px",
        textDecoration: "none",
        "&:hover": {
            color: "#000",
            textDecoration: "none",
        }
    },
    icon: {
        fontSize: "50px",
        color: "#000",
        marginLeft: "40px",
        marginRight: "12px"
    }
});

export default styles;