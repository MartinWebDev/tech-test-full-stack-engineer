import React from "react";

const IconTextPair = ({ icon, text }) => (
    <span className="icon-text-pair">
        {icon && <img src={icon} alt="" />}
        {text}
    </span>
);

const IconComponentPair = ({ icon, children }) => (
    <span className="icon-text-pair">
        {icon && <img src={icon} alt="" />}
        {children}
    </span>
);

export { IconTextPair, IconComponentPair };