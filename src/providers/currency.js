import React, { useReducer } from "react";

import { currencyReducer } from "../reducers";
import { CurrencyContext } from "../contexts";

const { initState, reducer } = currencyReducer;

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <CurrencyContext.Provider value={{ state, dispatch }}>
      {children}
    </CurrencyContext.Provider>
  );
};