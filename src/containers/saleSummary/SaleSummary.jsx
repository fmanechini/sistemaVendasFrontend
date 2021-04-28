import React from "react";
import { withStyles } from "@material-ui/core";
import StandardButton from '../../components/standardButton/StandardButton'
import DropDownMenu from '../../components/dropDownMenu/DropDownMenu'
import styles from './SaleSummaryStyles'

const SaleSummary = (props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.title}>Dados da venda</h1>
      </div>
      <div className={classes.dropDownDiv}>
        <DropDownMenu labelMessage="Escolha um vendedor" placeholder="Selecione o nome"/>
        <DropDownMenu labelMessage="Escolha um cliente" placeholder="Selecione o nome"/>
      </div>
      <div className={classes.saleSummaryDiv}>
        <span>Valor total da venda</span>
        <span>R$ 100</span>
      </div>
      <div className={classes.buttonsDiv}>
        <StandardButton greenButton={false} onClick="" buttonText="Cancelar" />
        <StandardButton greenButton={true} onClick="" buttonText="Finalizar" />
      </div>
    </div>
  );
};

export default withStyles(styles)(SaleSummary);
