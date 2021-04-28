const styles = () => ({
    root: {
        backgroundColor: "#e5e5e5",
        minWidth: "265px",
        minHeight: "80px",
        justifyContent: "center",
        borderBottom: "2px solid #d4d4d4"
    },
    centerText: {
        textTransform: "capitalize",
        display: "flex",
        flexGrow: 1.5,
        alignItems: "center",
        marginRight: "20px",
        color: "green",
        fontFamily: "cabinBold"
    },
    companyText: {
        display: "flex",
        fontSize: "1.6em",
        fontWeight: "bold",
        flexGrow: 1,
        alignItems: "center",
        color: "#000",
        paddingTop: "8px"
    },
    icon: {
        fontSize: "50px",
        color: "#000",
        marginLeft: "40px",
        marginRight: "12px"
    }
});

export default styles;