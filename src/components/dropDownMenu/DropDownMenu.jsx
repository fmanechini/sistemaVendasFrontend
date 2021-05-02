import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import InputLabel from '@material-ui/core/InputLabel'
import styles from './DropDownMenuStyles'
import { withStyles } from '@material-ui/core/styles';

const MenuListComponent = (props) =>  {

    const { classes } = props
    if (props.optionsList.length > 0) {
    return (
        <div className={classes.dropDownMenu}>
            <InputLabel shrink>
                {props.labelMessage}
            </InputLabel>
        <FormControl className={classes.formControl}>
            <NativeSelect
                className={classes.selectEmpty}
                value={props.selectedValue}
                name={props.name}
                onChange={props.onChange}
            >
                <option value="" disabled>
                    {props.placeholder}
                </option>
                {props.optionsList.map(
                    (elem) => {
                    return (<option value={elem.name}>{elem.name}</option>)
                    })
                }
            </NativeSelect>
        </FormControl>
        </div>
    );
} else {
    return <span>haha</span>
}
}

export default withStyles(styles)(MenuListComponent)