import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
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
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <InputLabel id="simple-select-label">
          (+) Add More Currencies
        </InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={currency}
          onChange={handleChange}
        >
          {options.map(currency => (
            <MenuItem value={currency}>{currency}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {currency && (
        <IconButton onClick={handleAdd}>
          <AddIcon />
        </IconButton>
      )}
    </React.Fragment>
  );
};

export default AddCurrency;
