import React from 'react';
import './Trip.css';
import bg from '../../assets/imgs/hero.jpg';
import DatePicker from '../UI/DatePicker/DatePicker'


class Trip extends React.Component{
   
    state={
        searchResult:null
    }

    searchResultHandler = () =>{


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
                                <div className='row'>
                                    <div className='mt-lg-3 mr-lg-4 mt-2 col-lg-2'>
                                        <p className = 'mb-0'> Departure</p>
                                        <div className='form-group'>
                                            <select 
                                                name='select' 
                                                className='form-control' 
                                                style={{
                                                    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 3px 0px', 
                                                    paddingTop: '0px', 
                                                    margin:' 0px 10px 0px 0px', 
                                                    height: '48px', 
                                                    border: '0px', 
                                                    outline: 'none', 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center', 
                                                    minWidth: '175px;'
                                                }}>
                                                
                                                <option>Select...</option>
                                                <option value ='NGABV'>Abuja</option>
                                                <option value ='NGAEK'>Ado</option>
                                                <option value ='NGAJA'>Ajase</option>
                                                <option value ='NGAKR'>Akure</option>
                                                <option value ='NGBNI'>Benin</option>
                                                <option value ='NGCBQ'>Calabar</option>
                                                <option value ='NGDKA'>Kastina</option>
                                                <option value ='NGILR'>Ilorin</option>
                                                <option value ='NGIOD'>Ijebu-Ode</option>
                                                <option value ='NGKAN'>Kano</option> 
                                            </select>
                                        </div>
                                    </div>
                                    <div className='mt-lg-3 mr-lg-4 mt-2 col-lg-2'>

                                        <p className = 'mb-0'> Destination</p>
                                        <div className='form-group'>
                                            <select 
                                                name='select' 
                                                className='form-control' 
                                                style={{
                                                    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 3px 0px', 
                                                    paddingTop: '0px', 
                                                    margin:' 0px 10px 0px 0px', 
                                                    height: '48px', 
                                                    border: '0px', 
                                                    outline: 'none', 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center', 
                                                    minWidth: '175px;'
                                                }}>
                                                
                                                <option>Select...</option>
                                                <option value ='NGABV'>Abuja</option>
                                                <option value ='NGAEK'>Ado</option>
                                                <option value ='NGAJA'>Ajase</option>
                                                <option value ='NGAKR'>Akure</option>
                                                <option value ='NGBNI'>Benin</option>
                                                <option value ='NGCBQ'>Calabar</option>
                                                <option value ='NGDKA'>Kastina</option>
                                                <option value ='NGILR'>Ilorin</option>
                                                <option value ='NGIOD'>Ijebu-Ode</option>
                                                <option value ='NGKAN'>Kano</option> 
                                            </select>
                                        </div>
                                        
                                    </div>

                                    <div className='mt-lg-3 mr-lg-4 mt-2 col-lg-2'>
                                        <p className = 'mb-0'> Date</p>
                                        <DatePicker/> 
                                    </div>

                                    <div className='mt-lg-3 mt-2 col-lg-2'>

                                        <p className = 'mb-0'> Passengers</p>
                                        <div className='form-group'>
                                            <select 
                                                name='select' 
                                                className='form-control' 
                                                style={{
                                                    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 3px 0px', 
                                                    paddingTop: '0px', 
                                                    margin:' 0px 10px 0px 0px', 
                                                    height: '48px', 
                                                    border: '0px', 
                                                    outline: 'none', 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center', 
                                                    minWidth: '175px;'
                                                }}>
                                                
                                                <option>Select...</option>
                                                <option value ='1'>1</option>
                                                <option value ='2'>2</option>
                                                <option value ='3'>3</option>
                                                <option value ='4'>4</option>
                                                <option value ='5'></option>
                                                <option value ='6'>6</option>
                                                <option value ='7'>7</option>
                                                <option value ='8'>8</option>
                                                <option value ='9'>9</option>
                                            </select>
                                        </div>
                                        
                                    </div>

                                    <div className='mt-4 mb-md-2 col-lg-3'>
                                        <div className='button-wrapper'>
                                            <div className='button'>
                                                <button 
                                                    className='btn ' 
                                                    type='submit'
                                                    style={{
                                                        background:'rgb(252, 84, 38)', 
                                                        border: 'rgb(252, 84, 38)', 
                                                        color: 'rgb(255, 255, 255)', 
                                                        padding: '0.7rem 1.5rem',
                                                        fontSize: '1.1rem', 
                                                        width: '150px', 
                                                        height: '48px;'
                                                    }}>
                                                        Search
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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