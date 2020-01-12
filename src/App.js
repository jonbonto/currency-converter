import React, { useContext, useEffect } from "react";

import { AddCurrency, ListCurrencies, USDInput } from "./components";
import { CurrencyContext } from "./contexts";
import { currencyActionTypes } from "./actions";
import { getRates } from "./helpers";

import "./App.css";

const { SET_RATES } = currencyActionTypes;

function App() {
  const { dispatch } = useContext(CurrencyContext);

  useEffect(() => {
    getRates(data =>
      dispatch({
        type: SET_RATES,
        payload: data
      })
    );
  }, [dispatch]);

  return (
    <div className="App">
      <USDInput />
      <ListCurrencies />
      <AddCurrency />
    </div>
  );
}

export default App;
