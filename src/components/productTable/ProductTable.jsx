import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './ProductTableStyles'


function createData(name, quantity, unitPrice, totalPrice, id) {
  return { name, quantity, unitPrice, totalPrice, id };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const ProductTable = (props) => {
  const { classes } = props
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
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.unitPrice}</TableCell>
              <TableCell align="right">{row.totalPrice}</TableCell>
              <TableCell align="right"><DeleteIcon className={classes.deleteIcon}>{row.id}</DeleteIcon></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default withStyles(styles)(ProductTable)