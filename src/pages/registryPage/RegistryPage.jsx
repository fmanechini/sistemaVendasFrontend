import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core";
import TextField from '@material-ui/core/TextField'
import NavBar from '../../components/navBar/NavBar'
import StandardButton from '../../components/standardButton/StandardButton'
import styles from './RegistryPageStyles'

const RegistryPage = (props) => {
  const { classes } = props;
  return (
    <Fragment>
      <NavBar centerText="Caixa livre" companyName="logoipsum" />
      <div className={classes.page}>
        <div className={classes.inputDiv}>
          <h1 className={classes.title}>Registrar Cliente</h1>
          <TextField className={classes.textField} variant="outlined" size="small" placeholder="nome"/>
        </div>
          <div>
            <StandardButton greenButton={false} onClick="" buttonText="Cadastrar" />
          </div>
        <div className={classes.inputDiv}>
          <h1 className={classes.title}>Registrar Vendedor</h1>
          <TextField className={classes.textField} variant="outlined" size="small" placeholder="nome"/>
        </div>
          <div>
            <StandardButton greenButton={false} onClick="" buttonText="Cadastrar" />
          </div>
        <div className={classes.block}>
          <h1 className={classes.title}>Registrar Produto</h1>
          <div className={classes.inputDiv}>
            <TextField className={classes.textField} variant="outlined" size="small" placeholder="nome"/>
          </div>
          <div className={classes.inputDiv}>
            <TextField className={classes.textField} variant="outlined" size="small" placeholder="preço unitário" type="number"/>
          </div>
          <div className={classes.inputDiv}>
            <TextField className={classes.textField} variant="outlined" size="small" placeholder="comissão" type="number"/>
          </div>
          <StandardButton greenButton={false} onClick="" buttonText="Cadastrar" />
        </div>
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(RegistryPage);
