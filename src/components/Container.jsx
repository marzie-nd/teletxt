import React from 'react';
import "./Container.scss";

const Container = ({ title, subtitle, children }) => {
    return (
        <div className="container">
            {title && <h1 className="containerTitle">{title}</h1>}
            {subtitle && <h2 className="containerSubtitle">{subtitle}</h2>}
            <div className="containerContent">
                {children}
            </div>
        </div>
    );
};

export default Container;
