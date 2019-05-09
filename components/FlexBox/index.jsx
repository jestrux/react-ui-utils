import React from 'react';
import "./styles.scss";

const FlexBox = ({ children, ...props }) => {
    let className = "flexbox";
    for (var key in props) {
        var value = props[key];
        var dashedKey = key.replace(/[A-Z]/g, m => "-" + m.toLowerCase());

        className += value === true ? " " + dashedKey : ` ${key}-${value}`;
    }

    return ( 
        <div className={className.trim()}>
            { children }
        </div>
    );
}
 
export default FlexBox;