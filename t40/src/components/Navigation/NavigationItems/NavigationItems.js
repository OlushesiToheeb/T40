import React from 'react';
import "./NavigationItems.css"
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/" exact> Book </NavigationItem>
            <NavigationItem link='/track'> Track</NavigationItem>
            <NavigationItem link='/review'> Review </NavigationItem>
        </ul>
    )
}


export default NavigationItems