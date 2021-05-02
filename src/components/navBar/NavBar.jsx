import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BlurCircularIcon from '@material-ui/icons/BlurCircular';
import styles from './NavBarStyles'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    const { classes } = props

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar variant="dense">
                <BlurCircularIcon className={classes.icon}/>
                <Typography variant="h6" className={classes.companyText}>
                    <Link className={classes.companyText} to='/'>{props.companyName}</Link>
                </Typography>
                <Typography variant="h4" className={classes.centerText}>
                    <Link className={classes.centerText} to='/register'>{props.centerText}</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(NavBar);