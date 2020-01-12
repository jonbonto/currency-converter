import React, { useState, useEffect } from "react";
import "./App.css";

import { AddCurrency, CurrencyItem, USDInput } from "./components";

import {
  currencies as allCurrenciesOptions,
  currenciesDescription
} from "./config";

import {
  getRates
} from "./helpers";

// const response = {
//   rates: {
//     CAD: 1.4498,
//     HKD: 8.6137,
//     ISK: 136.6,
//     PHP: 55.998,
//     DKK: 7.4731,
//     HUF: 333.85,
//     CZK: 25.265,
//     AUD: 1.6132,
//     RON: 4.7796,
//     SEK: 10.551,
//     IDR: 15263.99,
//     INR: 78.6915,
//     BRL: 4.5188,
//     RUB: 68.041,
//     HRK: 7.4445,
//     JPY: 121.6,
//     THB: 33.534,
//     CHF: 1.0822,
//     SGD: 1.4969,
//     PLN: 4.2462,
//     BGN: 1.9558,
//     TRY: 6.5198,
//     CNY: 7.6773,
//     NOK: 9.8745,
//     NZD: 1.6769,
//     ZAR: 15.8081,
//     USD: 1.1091,
//     MXN: 20.8634,
//     ILS: 3.8476,
//     GBP: 0.8481,
//     KRW: 1286.0,
//     MYR: 4.5212
//   },
//   base: "EUR",
//   date: "2020-01-10"
// };

function App() {

  const [amount, setAmount] = useState(10.0);
  const [currencies, setCurrencies] = useState(["IDR", "GBP", "SGD"]);
  const [rates, setRates] = useState(
    allCurrenciesOptions.reduce((acc, cur) => {
      acc[cur] = 0;
      return acc;
    }, {})
  );

  useEffect(() => {
    getRates(setRates)
  }, []);

  const addCurrency = currency => {
    setCurrencies(currencies => currencies.concat(currency));
  };

  const removeCurrency = currency => {
    setCurrencies(currencies => currencies.filter(cur => cur !== currency));
  };

  const amountChange = event => {
    setAmount(event.target.value);
  };

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
