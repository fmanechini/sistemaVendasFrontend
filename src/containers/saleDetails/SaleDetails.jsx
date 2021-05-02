import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from "@material-ui/core";
import StandardButton from '../../components/standardButton/StandardButton'
import ProductTable from '../../components/productTable/ProductTable'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import styles from './SaleDetailsStyles'
import { setQuantity, setSelectedProduct, getProductByNameLike, addProductToSaleDetails } from '../../actions/saleDetailsActions'

export class SaleDetails extends Component {

  render() {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <div>
          <h1 className={classes.title}>Produtos</h1>
        </div>
        <div className={classes.productDiv}>
          <Autocomplete
            id="product"
            name="product"
            getOptionLabel={(option) => option.name}
            options={this.props.saleDetails.productsList}
            onInputChange={this.props.getProductByNameLike}
            onChange={(e, value) => { this.props.setSelectedProduct(value) }}
            renderInput={(params) => <TextField
              variant="outlined"
              {...params} />}
            className={classes.productField}
            size="small"
          />
          <TextField
            id="quantity"
            name="quantity"
            variant="outlined"
            className={classes.quantityField}
            value={this.props.saleDetails.quantity}
            onChange={this.props.setQuantity}
            size="small"
          />
          <StandardButton greenButton={false}
            onClick={
              () => this.props.addProductToSaleDetails(
                this.props.saleDetails.selectedProduct,
                this.props.saleDetails.quantity,
                this.props.saleDetails.saleDetailsList
              )}
            buttonText="Adicionar" />
        </div>
        <div className={classes.tableDiv}>
          <ProductTable />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({ saleDetails: state.saleDetails });
const mapDispatchToProps = dispatch => bindActionCreators({ setQuantity, setSelectedProduct, getProductByNameLike, addProductToSaleDetails }, dispatch)

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SaleDetails));

