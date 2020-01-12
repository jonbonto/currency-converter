import {
  currencies,
  api
} from "../config";


export default async (setRates, base = "USD") => {
  try {
    const finalApi = `${api}?base=${base}`
    const res = await fetch(finalApi);
    const response = await res.json();
    const newRates = currencies.reduce((acc, cur) => {
      acc[cur] = response.rates[cur];
      return acc;
    }, {});
    setRates(newRates);
  } catch (err) {
    console.log(err)
  }
}