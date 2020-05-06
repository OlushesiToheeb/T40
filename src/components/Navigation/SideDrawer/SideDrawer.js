import React from 'react';

import BackDrop from '../../UI/BackDrop/BackDrop'
import NavigationItems from '../NavigationItems/NavigationItems';
import "./SideDrawer.css";


const sideDrawer =(props)=>{
    let attachedClasses = ["SideDrawer", "close"];
    if(props.open){
        attachedClasses = ["SideDrawer", "open"];
    }
    return(
        <div>
            <BackDrop 
                open={props.open} 
                closed={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                
                <nav>
                    <NavigationItems/>
                </nav>

            </div>

        </div>
    );
}

export default sideDrawer