import React from "react";

const ClickableEmail = ({ email, text }) => (
    <span className="clickable email">
        <a href={`mailto:${email}`}>{text}</a>
    </span>
);

const ClickablePhone = ({ phone, text }) => (
    <span className="clickable phone">
        <a href={`tel:${phone}`}>{text}</a>
    </span>
);

export { ClickableEmail, ClickablePhone };