import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";

import { CurrencyContext } from "../contexts";
import { currencyActionTypes } from "../actions";

const { SET_AMOUNT } = currencyActionTypes;

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const USDInput = props => {
  
  const classes = useStyles();
  
  const { state, dispatch } = useContext(CurrencyContext);
  
  const onChange = event =>
    dispatch({
      type: SET_AMOUNT,
      payload: event.target.value
    });

  const { amount } = state;

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
