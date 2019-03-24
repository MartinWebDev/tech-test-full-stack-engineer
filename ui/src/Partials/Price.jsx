import React from "react";

/**
 * Accepts amount as input price, 
 * rate to allow for passing in currency coversions if required,
 * and symbol to display currency type symbol
 */
const Price = ({ amount, rate, symbol }) => (
    <React.Fragment>
        {symbol}{(amount * (rate || 1)).toFixed(2)}
    </React.Fragment>
);

export default Price;