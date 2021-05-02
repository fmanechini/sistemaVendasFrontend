import React, { Fragment, Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from "@material-ui/core";
import TextField from '@material-ui/core/TextField'
import NavBar from '../../components/navBar/NavBar'
import StandardButton from '../../components/standardButton/StandardButton'
import styles from './RegistryPageStyles'
import { registerClient, registerSeller, registerProduct } from '../../actions/registryPageActions'

export class RegistryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientName: "",
      sellerName: "",
      productName: "",
      price: null,
      comission: null
    }
  }

  inputListener = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <NavBar centerText="Registrar Itens" companyName="logoipsum" />
        <div className={classes.page}>
          <div className={classes.inputDiv}>
            <h1 className={classes.title}>Registrar Cliente</h1>
            <TextField
              className={classes.textField}
              variant="outlined"
              size="small"
              placeholder="nome"
              name="clientName"
              value={this.state.clientName}
              onChange={this.inputListener}
            />
          </div>
          <div>
            <StandardButton
              greenButton={false}
              onClick={() => { this.props.registerClient(this.state.clientName) }}
              buttonText="Cadastrar" />
          </div>
          <div className={classes.inputDiv}>
            <h1 className={classes.title}>Registrar Vendedor</h1>
            <TextField
              className={classes.textField}
              variant="outlined"
              size="small"
              placeholder="nome"
              name="sellerName"
              value={this.state.sellerName}
              onChange={this.inputListener}
            />
          </div>
          <div>
            <StandardButton greenButton={false}
              onClick={() => { this.props.registerSeller(this.state.sellerName) }}
              buttonText="Cadastrar" />
          </div>
          <div className={classes.block}>
            <h1 className={classes.title}>Registrar Produto</h1>
            <div className={classes.inputDiv}>
              <TextField
                className={classes.textField}
                variant="outlined"
                size="small"
                placeholder="nome"
                name="productName"
                value={this.state.productName}
                onChange={this.inputListener}
              />
            </div>
            <div className={classes.inputDiv}>
              <TextField
                className={classes.textField}
                variant="outlined"
                size="small"
                placeholder="preço unitário"
                type="number"
                name="price"
                value={this.state.price}
                onChange={this.inputListener}
              />
            </div>
            <div className={classes.inputDiv}>
              <TextField
                className={classes.textField}
                variant="outlined"
                size="small"
                placeholder="comissão"
                type="number"
                name="comission"
                value={this.state.comission}
                onChange={this.inputListener}
              />
            </div>
            <StandardButton greenButton={false}
              onClick={
                () => {
                  this.props.registerProduct(
                    this.state.productName,
                    this.state.price,
                    this.state.comission)
                }}
              buttonText="Cadastrar" />
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = dispatch => bindActionCreators({ registerClient, registerSeller, registerProduct }, dispatch)

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(RegistryPage));
