import React from 'react';
import "./BackDrop.css";

const backDrop =(props )=>(

    props.open ? <div 
    className="Backdrop"
    onClick={props.closed}></div> : null
);

export default backDrop;