import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar = () => {
    return(
        <header className="ToolBar">
            <Logo />
            <nav className="DesktopOnly">
                <NavigationItems/>
            </nav>
        </header>
    )
}

export default Toolbar;