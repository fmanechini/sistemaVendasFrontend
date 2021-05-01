import React, { Component } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { withStyles } from '@material-ui/core/styles';
import styles from './SnackbarStyles'
import { handleClose } from '../../actions/snackbarActions'

export class CustomizedSnackbar extends Component {

  render() {
    const { classes } = this.props
  return (
    <div className={classes.root}>
      <Snackbar open={this.props.snackbar.open} autoHideDuration={6000} onClose={this.props.handleClose}>
        <Alert onClose={this.props.handleClose} severity={this.props.snackbar.severity}>
          {this.props.snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  )
}
}

const mapStateToProps = (state) => ({ snackbar: state.snackbar});
const mapDispatchToProps = dispatch => bindActionCreators({ handleClose }, dispatch)

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CustomizedSnackbar));
