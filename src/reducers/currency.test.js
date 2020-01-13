import { default as currencyReducer } from "./currency";
import { currencyActionTypes } from "../actions";

const { initState, reducer } = currencyReducer;

const {
  SET_AMOUNT,
  SET_RATES,
  REMOVE_CURRENCY,
  ADD_CURRENCY
} = currencyActionTypes

test('only change amount ', () => {

  const action = {
    type: SET_AMOUNT,
    payload: 15
  }

  expect(reducer(initState, action)).toEqual({...initState, amount: 15})
});

test('only change rates', () => {
  const payload = {
    IDR: 13678.45,
    CAD: 87,
    SGD: 1.2
  }
  const action = {
    type: SET_RATES,
    payload
  }

  expect(reducer(initState, action)).toEqual({...initState, rates: payload})
});

test('remove from list currencies', () => {
  const currencies = ['SGD', 'IDR', 'EUR']
  const resultCurrencies = ['SGD', 'EUR']
  const payload = 'IDR';
  const action = {
    type: REMOVE_CURRENCY,
    payload
  }

  expect(reducer({...initState, currencies}, action)).toEqual({...initState, currencies: resultCurrencies})
});

test('add to list currencies', () => {
  const currencies = ['SGD', 'IDR', 'EUR']
  const resultCurrencies = ['SGD', 'IDR', 'EUR', 'CAD']
  const payload = 'CAD';
  const action = {
    type: ADD_CURRENCY,
    payload
  }

  expect(reducer({...initState, currencies}, action)).toEqual({...initState, currencies: resultCurrencies})
});

test('throw error', () => {
  
  const action = {
    type: "AN Action",
  }

  expect(() => reducer(initState, action)).toThrow(new Error("Action Type not valid"));
});
