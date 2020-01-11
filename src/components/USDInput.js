import React from "react";

const USDInput = props => {
  const { onChange, amount } = props;
  return (
    <div>
      USD - United States Dollars USD{" "}
      <input
        type="number"
        required
        name="price"
        min="0"
        step="any"
        value={amount}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default USDInput;
