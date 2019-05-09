import React from 'react';
import "./styles.scss";

const Positioned = ({ children, ...props }) => {
    let className = "positioned";
    for (var key in props) {
        var value = props[key];
        var dashedKey = key.replace(/[A-Z]/g, m => "-" + m.toLowerCase());

        className += value === true ? " " + dashedKey : ` ${key}-${value}`;
    }
    
    const top = props.top || 0;
    const bottom = props.bottom || 0;
    const left = props.left || 0;
    const right = props.right || 0;

    style = { top, bottom, left, right };

    return ( 
        <div className={className.trim()} style = { style }>
            { children }
        </div>
    );
}
 
export default Positioned;