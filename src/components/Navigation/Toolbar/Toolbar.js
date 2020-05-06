import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import ToggleButton from './ToggleButton/ToggleButton'

const Toolbar = () => {
    return(
        <header className="ToolBar">
            <Logo />
            <nav className="DesktopOnly">
                <NavigationItems/>
            </nav>
            <ToggleButton />
        </header>
    )
}

export default Toolbar;