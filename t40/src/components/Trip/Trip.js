import React from 'react';
import './Trip.css';
import bg from '../../assets/imgs/hero.jpg';

class Trip extends React.Component{
    render(){
        return(
            <div className="Hero" style={{backgroundImage: " linear-gradient(to right bottom, rgba(252, 84, 38, 0.5), rgba(252, 84, 38, 0.8)), url(" + bg + ")"}}>

            </div>
        )
    }
}

export default Trip