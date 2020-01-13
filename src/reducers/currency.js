import { currencies } from "../config";
import { currencyActionTypes } from "../actions";

const initAmount = 10.0;
const initCurrencies = ["IDR", "GBP", "SGD"];
const initRates = currencies.reduce((acc, cur) => {
  acc[cur] = 0;
  return acc;
}, {});

const initState = {
  amount: initAmount,
  currencies: initCurrencies,
  rates: initRates
};

const {
  SET_AMOUNT,
  SET_RATES,
  REMOVE_CURRENCY,
  ADD_CURRENCY
} = currencyActionTypes;

const reducer = (state, action) => {
  if (action.type === SET_AMOUNT) {
    return {
      ...state,
      amount: action.payload
    };
  }

  if (action.type === ADD_CURRENCY) {
    return {
      ...state,
      currencies: state.currencies.concat(action.payload)
    };
  }

  if (action.type === REMOVE_CURRENCY) {
    return {
      ...state,
      currencies: state.currencies.filter(cur => cur !== action.payload)
    };
  }

  if (action.type === SET_RATES) {
    return {
      ...state,
      rates: action.payload
    };
  }

  throw new Error("Action Type not valid");
};

export default {
  initState,
  reducer
};
