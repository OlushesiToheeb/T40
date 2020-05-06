import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Footer from '../UI/Footer/Footer';


class Layout extends React.Component{

    state ={
        showSideDrawer: false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false})
    }



    sideDrawerToggleHandler = () =>{
        this.setState((prevState) =>{ 
            return{showSideDrawer: !prevState.showSideDrawer}});
    }

    render(){
        return(
            <React.Fragment>
                <Toolbar drawToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}/>
                <main>{this.props.children}</main>
                <Footer/>
            </React.Fragment>
        )    
    }
}

export default Layout
