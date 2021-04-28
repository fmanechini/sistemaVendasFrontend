import React from "react";
import { withStyles } from "@material-ui/core";
import StandardButton from '../../components/standardButton/StandardButton'
import ProductTable from '../../components/productTable/ProductTable'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import styles from './SaleDetailsStyles'

const SaleDetails = (props) => {
  const { classes } = props;

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 }]
    return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.title}>Produtos</h1>
      </div>
      <div className={classes.productDiv}>
        <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField variant="outlined" {...params}/>}
          className={classes.productField}
          size="small"
        />
        <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField variant="outlined" {...params} />}
          className={classes.quantityField}
          size="small"
        />
        <StandardButton greenButton={false} onClick="" buttonText="Adicionar" />
      </div>
      <div className={classes.tableDiv}>
        <ProductTable />
      </div>
    </div>
  );
};

export default withStyles(styles)(SaleDetails);
