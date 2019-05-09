import React from 'react';

const Spacer = (props) => {
    const width = props.width || 0;
    const height = props.height || 0;
    const flex = props.flex || 'none';
    
    const style = { width: `${width}`, height: `${height}`, flex: `${flex}` };
    return ( 
        <div style={style}></div>
    );
}
 
export default Spacer;