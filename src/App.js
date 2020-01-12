import React, { useReducer, useEffect } from "react";

import { AddCurrency, CurrencyItem, USDInput } from "./components";
import {
  currencies as allCurrenciesOptions,
  currenciesDescription
} from "./config";
import { currencyReducer } from "./reducers";
import { getRates } from "./helpers";

import "./App.css";

const {
  initState,
  reducer,
  SET_AMOUNT,
  SET_RATES,
  ADD_CURRENCY,
  REMOVE_CURRENCY
} = currencyReducer;

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    getRates(data =>
      dispatch({
        type: SET_RATES,
        payload: data
      })
    );
  }, []);

  const addCurrency = currency =>
    dispatch({
      type: ADD_CURRENCY,
      payload: currency
    });

  const removeCurrency = currency =>
    dispatch({
      type: REMOVE_CURRENCY,
      payload: currency
    });

  const amountChange = event =>
    dispatch({
      type: SET_AMOUNT,
      payload: event.target.value
    });

  const { amount, currencies, rates } = state;

  const currenciesOptions = allCurrenciesOptions.filter(
    currency => !currencies.find(cur => cur === currency)
  );

  return (
    <div className="App">
      <USDInput amount={amount} onChange={amountChange} />
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
      <AddCurrency options={currenciesOptions} onAdd={addCurrency} />
    </div>
  );
}

export default App;
