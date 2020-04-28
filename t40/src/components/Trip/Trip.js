import React from 'react';
import './Trip.css';
import bg from '../../assets/imgs/hero.jpg';

import axios from 'axios';
import Form from '../Form/Form';



class Trip extends React.Component{
   
    state={
        searchResult:null
    }

    searchResultHandler = () =>{
        axios.get('https://react-t40-ced15.firebaseio.com/bookRide.json')
            .then(res=>{
                console.log(res,res.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }


    render(){
        
        return(
            <React.Fragment>
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

                        <div className='form-wrapper'>
                            <div className="container">
                                <Form/>
                            </div>
                        </div>

                    </div>
                    
                </div>
                <section style={{ paddingBottom: "75px", paddingTop: '65px'}}>
                    <div className ='container'>
                        <div className='row'>
                            <div className='col-xl-12'>
                                <div style={{marginBottom: '35px', marginTop:' 0', textAlign:"center"}}>
                                    <h3>Search Results</h3>
                                </div>

                                <div className='task-listing-container'>
                                    <div className='task-listing'>
                                        <div className='task-listing-details'>
                                            <div className='task-listing-description'>
                                                <div className='task-tag' style={{marginTop: '15px'}}>
                                                    <span> From </span>
                                                </div>
                                                <h3 className='task-listing-title'>Abuja-JabiPark (T40)</h3>
                                                <ul className='task-icon'>
                                                    <li>9:00am</li>
                                                    <li>Monday, April 27th 2020</li>
                                                </ul>
                                            </div>

                                            <div className='task-listing-description'>
                                                <div className='task-tag' style={{marginTop: '15px'}}>
                                                    <span> To </span>
                                                </div>
                                                <h3 className='task-listing-title'>Akure (T40)</h3>
                                                <ul className='task-icon'>
                                                    <li>4:09am</li>
                                                    <li>Monday, April 27th 2020</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='task-listing-bid'>
                                            <div className='task-listing-bid-inner'>
                                                <div className='task-offer'>
                                                    <strong>₦3,999 per passenger</strong>
                                                </div>
                                                <span className='button'>Book Now</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        
        )


    }
}

export default Trip