import React from 'react';
import "./styles.scss";

const FlexBox = ({ children, ...props }) => {
    let className = "flexbox";
    for (var key in props) {
        className += props[key] === true ? " " + key : ` ${key}-${props[key]}`;
    }

    return ( 
        <div className={className.trim()}>
            { children }
        </div>
    );
}
 
export default FlexBox;