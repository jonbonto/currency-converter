import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

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
  const { options, onAdd } = props;
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("");

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  const handleAdd = () => {
    onAdd(currency);
    setCurrency("");
  };

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
