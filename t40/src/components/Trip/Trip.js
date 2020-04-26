import React from 'react';
import './Trip.css';
import bg from '../../assets/imgs/hero.jpg';

class Trip extends React.Component{
    render(){
        return(
            <div className="Hero" style={{backgroundImage: " linear-gradient(to right bottom, rgba(252, 84, 38, 0.5), rgba(252, 84, 38, 0.8)), url(" + bg + ")"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className = "banner-Header">
                                <h3>
                                    <strong style={{color:" rgb(255, 255, 255)"}}>Find and book car and bus rides in Nigeria</strong><br/>
                                    <span style={{color: "rgb(255, 255, 255)"}}>Search. Compare. Book. Track.</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Trip