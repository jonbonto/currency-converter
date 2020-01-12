import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

import { CurrencyContext } from "../contexts";
import { currencyActionTypes } from "../actions";
import { currencies as allCurrenciesOptions } from "../config";

const { ADD_CURRENCY } = currencyActionTypes;

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: "flex",
    alignItems: "center"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240,
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const AddCurrency = props => {
  const classes = useStyles();
  const { state, dispatch } = useContext(CurrencyContext)
  const [currency, setCurrency] = React.useState("");

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  const handleAdd = () => {
    dispatch({
      type: ADD_CURRENCY,
      payload: currency
    });

    setCurrency("");
  };

  const { currencies } = state;

  const options = allCurrenciesOptions.filter(
    currency => !currencies.find(cur => cur === currency)
  );

  return (
    <div className={classes.wrapper}>
      <FormControl className={classes.formControl}>
        {!currency && (
          <InputLabel id="simple-select-label">Add More Currencies</InputLabel>
        )}

        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={currency}
          onChange={handleChange}
        >
          {options.map(currency => (
            <MenuItem key={currency} value={currency}>
              {currency}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {currency && (
        <Button onClick={handleAdd}>
          Submit
        </Button>
      )}
    </div>
  );
};

export default AddCurrency;
