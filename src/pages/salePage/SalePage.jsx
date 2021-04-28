import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core";
import SaleDetails from '../../containers/saleDetails/SaleDetails'
import SaleSummary from '../../containers/saleSummary/SaleSummary'
import NavBar from '../../components/navBar/NavBar'
import styles from './SalePageStyles'

const SalePage = (props) => {
  const { classes } = props;
  return (
    <Fragment>
      <NavBar centerText="Caixa livre" companyName="logoipsum" />
      <div className={classes.page}>
        <SaleDetails />
        <SaleSummary />
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(SalePage);
