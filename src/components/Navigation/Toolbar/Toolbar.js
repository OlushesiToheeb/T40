import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import ToggleButton from './ToggleButton/ToggleButton'

const Toolbar = (props) => {
    return(
        <header className="ToolBar">
            <Logo />
            <nav className="DesktopOnly">
                <NavigationItems/>
            </nav>
            <ToggleButton clicked={props.drawToggleClicked}/>
        </header>
    )
}

export default Toolbar;