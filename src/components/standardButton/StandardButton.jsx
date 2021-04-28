import React from "react";
import { Button, withStyles } from "@material-ui/core";
import styles from "./StandardButtonStyles";

const StandardButton = (props) => {
  const { classes } = props;
  return (
    <Button
      variant="contained"
      className={ props.greenButton ? classes.greenButton : classes.blueButton }
      onClick={props.onClick}
    >
      {props.buttonText}
    </Button>
  );
};

export default withStyles(styles)(StandardButton);
