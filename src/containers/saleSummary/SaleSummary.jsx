import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from "@material-ui/core";
import StandardButton from '../../components/standardButton/StandardButton'
import DropDownMenu from '../../components/dropDownMenu/DropDownMenu'
import styles from './SaleSummaryStyles'
import { 
  getClients, 
  getSellers, 
  setSelectedClient, 
  setSelectedSeller, 
  registerSale,
  cancelSale
} from '../../actions/saleSummaryActions'

export class SaleSummary extends Component {

  componentDidMount = async () => {
    this.props.getClients()
    this.props.getSellers()
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div>
          <h1 className={classes.title}>Dados da venda</h1>
        </div>
        <div className={classes.dropDownDiv}>
          <DropDownMenu
            labelMessage="Escolha um client"
            placeholder="Selecione o nome"
            optionsList={this.props.saleSummary.clientsList}
            name="client"
            onChange={this.props.setSelectedClient}
            selectedValue={this.props.saleSummary.selectedClient} />
          <DropDownMenu
            labelMessage="Escolha um vendedor"
            placeholder="Selecione o nome"
            optionsList={this.props.saleSummary.sellersList}
            name="seller"
            onChange={this.props.setSelectedSeller}
            selectedValue={this.props.saleSummary.selectedSeller} />
        </div>
        <div className={classes.saleSummaryDiv}>
          <span>Valor total da venda</span>
          <span>
            R$ {this.props.saleDetails.saleDetailsList.reduce(
            (total, elem) => {
              console.log(total, elem.product.quantity)
              return total + (elem.product.price * elem.quantity)
            }, 0)
            }
          </span>
        </div>
        <div className={classes.buttonsDiv}>
          <StandardButton 
          greenButton={false} 
          onClick={this.props.cancelSale}
          buttonText="Cancelar" 
          />
          <StandardButton
            greenButton={true}
            onClick={() => {
              this.props.registerSale(
                this.props.saleSummary.selectedClient,
                this.props.saleSummary.selectedSeller,
                this.props.saleDetails.saleDetailsList
              )
            }}
            buttonText="Finalizar" 
            />
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({ saleSummary: state.saleSummary, saleDetails: state.saleDetails });
const mapDispatchToProps = dispatch => bindActionCreators({ getClients, getSellers, setSelectedClient, setSelectedSeller, registerSale, cancelSale }, dispatch)

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SaleSummary));

