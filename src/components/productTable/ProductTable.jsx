import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './ProductTableStyles'
import { removeProductOfSaleDetails } from '../../actions/saleDetailsActions'


export class ProductTable extends Component {
  render() {
    const { classes } = this.props
    return (
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHead}>Produto/Serviço</TableCell>
              <TableCell align="right" className={classes.tableHead}>Quantidade</TableCell>
              <TableCell align="right" className={classes.tableHead}>Preço Unitário</TableCell>
              <TableCell align="right" className={classes.tableHead}>Total</TableCell>
              <TableCell align="right" className={classes.tableHead}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.saleDetails.saleDetailsList.map((row) => (
              <TableRow key={row.product.id}>
                <TableCell component="th" scope="row">
                  {row.product.name}
                </TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">R$ {row.product.price.toFixed(2)}</TableCell>
                <TableCell align="right">R$ {(row.quantity * row.product.price).toFixed(2)}</TableCell>
                <TableCell align="right">
                  <DeleteIcon
                    onClick={() => {
                      this.props.removeProductOfSaleDetails(
                        row.product.id,
                        this.props.saleDetails.saleDetailsList
                      )
                    }}
                    className={classes.deleteIcon}>
                    {row.product.id}
                  </DeleteIcon>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}


const mapStateToProps = (state) => ({ saleDetails: state.saleDetails });
const mapDispatchToProps = dispatch => bindActionCreators({ removeProductOfSaleDetails }, dispatch)

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProductTable));

