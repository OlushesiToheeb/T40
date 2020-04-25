import React from 'react';
import './Logo.css'

import T from '../../assets/imgs/logo.png';

const Logo = (props) => {
    return(
        <div className="Logo" style={{height:props.height}}>
            <img src={T} alt="T40"/>
        </div>  
    )
}

export default Logo