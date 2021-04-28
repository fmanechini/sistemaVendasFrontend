import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import InputLabel from '@material-ui/core/InputLabel'
import styles from './DropDownMenuStyles'
import { withStyles } from '@material-ui/core/styles';

const MenuListComponent = (props) =>  {

    const [state, setState] = React.useState({
      age: '',
      name: 'hai',
    });
  
    const handleChange = (event) => {
      const name = event.target.name;
      setState({
        ...state,
        [name]: event.target.value,
      });
    };

    const { classes } = props
    return (
        <div className={classes.dropDownMenu}>
            <InputLabel shrink htmlFor="age-native-label-placeholder">
                {props.labelMessage}
            </InputLabel>
        <FormControl className={classes.formControl}>
            <NativeSelect
                className={classes.selectEmpty}
                value={state.age}
                name="age"
                onChange={handleChange}
                inputProps={{ 'aria-label': 'age' }}
            >
                <option value="" disabled>
                    {props.placeholder}
            </option>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
            </NativeSelect>
        </FormControl>
        </div>
    );
}

export default withStyles(styles)(MenuListComponent)