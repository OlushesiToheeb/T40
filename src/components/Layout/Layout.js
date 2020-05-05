import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Footer from '../UI/Footer/Footer';


class Layout extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Toolbar />
                <main>{this.props.children}</main>
                <Footer/>
            </React.Fragment>
        )    
    }
}

export default Layout
