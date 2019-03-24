import React from "react";

const IconTextPair = ({ icon, text }) => (
    <span>
        {icon && <img src={icon} alt="" />}
        {text}
    </span>
);

export default IconTextPair;