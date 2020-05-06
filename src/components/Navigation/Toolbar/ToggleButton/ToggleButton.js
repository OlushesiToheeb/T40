import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import './ToggleButton.css'

const toggleButton = (props) =>(
    <FontAwesomeIcon 
    icon={faBars} 
    onClick={props.clicked}
    className="ToggleButton" 
    />
)

export default toggleButton;