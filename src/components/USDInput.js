import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const USDInput = props => {
  const { onChange, amount } = props;

  const classes = useStyles();

  return (
    <FormControl fullWidth className={classes.margin}>
      <InputLabel htmlFor="usd-amount">USD - United States Dollars</InputLabel>
      <Input
        id="usd-amount"
        type="number"
        inputProps={{ 
          'aria-label': 'usd-amount',
          required: true,
          min: 0,
          step: "any"
        }} 
        value={amount}
        onChange={onChange}
        startAdornment={<InputAdornment position="start">USD</InputAdornment>}
      />
    </FormControl>
  );
};

export default USDInput;
