import React from "react";

export default (props) => {

  const { code, rate, description, amount, onRemove } = props;
  return (
    <div>
      <div className="currency-details">
        {code} { rate * amount }
        {code} - {description}
        1 USD = {code} {rate}
      </div>
      <button onClick={onRemove}>(-)</button>
    </div>
  );
};
