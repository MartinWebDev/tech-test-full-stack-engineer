import React from "react";

const Button = ({ children, primary, ...rest }) => {
    // const test = (e) => {
    //     const { clientX, clientY } = e;
    //     console.log(clientX, clientY);
    // };

    //onMouseMove={test} TODO: want to do something with this for some fancy design, not sure what. Will think later if have time.
    return (
        <button {...rest} className={primary ? "hp-button primary" : "hp-button"}>
            {children}
        </button>
    )
};

export default Button;