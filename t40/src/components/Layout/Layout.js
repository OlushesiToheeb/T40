import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar'


class Layout extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Toolbar />
                <main>{this.props.children}</main>
            </React.Fragment>
        )    
    }
}

export default Layout
