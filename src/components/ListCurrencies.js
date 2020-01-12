import React, { useContext } from "react";

import CurrencyItem from "./CurrencyItem";
import { currenciesDescription } from "../config";
import { CurrencyContext } from "../contexts";
import { currencyActionTypes } from "../actions";

const {
  REMOVE_CURRENCY
} = currencyActionTypes;

export default props => {
  const { state, dispatch } = useContext(CurrencyContext);

  const removeCurrency = currency =>
    dispatch({
      type: REMOVE_CURRENCY,
      payload: currency
    });
    
  const { currencies, amount, rates } = state;
  return (
    <React.Fragment>
      {currencies.map(currency => (
        <CurrencyItem
          key={currency}
          code={currency}
          amount={amount}
          rate={rates[currency]}
          description={currenciesDescription[currency]}
          onRemove={() => removeCurrency(currency)}
        />
      ))}
    </React.Fragment>
  );
};
