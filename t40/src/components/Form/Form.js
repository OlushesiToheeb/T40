import React from 'react';

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

import './Form.css';

class Form extends React.Component{
    
    state = {
        cityFro : '',
        cityTo : '',
        passengers:'',
        startDate: null
    }

    handleChange = (event) =>{
        
        const { name , value } = event.target

        this.setState({[name]: value});
    }

    handleDateChanged = date => {
        this.setState({
          startDate: date
        });
    };
    

    handleSubmit=(event) =>{
        event.preventDefault();
        const { cityFro, cityTo, startDate, passengers } = this.state;
        alert(`you selected: ${cityFro} ${cityTo} ${startDate} ${passengers}`)
        this.props.searchResultHandle(this.state)
    }

    render(){
        const {cityFro, cityTo, startDate, passengers} = this.state

        return(
            <form className='row' onSubmit={this.handleSubmit}>
                <div className='mt-lg-3 mr-lg-4 mt-2 col-lg-2'>
                    <p className = 'mb-0'> Departure</p>
                    <div className='form-group'>
                        <select 
                            // name='select'
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
                                minWidth: '175px'
                            }}
                            onChange={this.handleChange}
                            value={cityFro}
                            name="cityFro">
                            
                            <option>Select...</option>
                            <option value ='Abuja'>Abuja</option>
                            <option value ='Ado'>Ado</option>
                            <option value ='Ajase'>Ajase</option>
                            <option value ='Akure'>Akure</option>
                            <option value ='Benin'>Benin</option>
                            <option value ='Calabar'>Calabar</option>
                            <option value ='Kastina'>Kastina</option>
                            <option value ='Ilorin'>Ilorin</option>
                            <option value ='Ijebu-Ode'>Ijebu-Ode</option>
                            <option value ='Kano'>Kano</option> 
                        </select>
                    </div>
                </div>
                <div className='mt-lg-3 mr-lg-4 mt-2 col-lg-2'>

                    <p className = 'mb-0'> Destination</p>
                    <div className='form-group'>
                        <select 
                            
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
                                minWidth: '175px'
                            }}
                            onChange={this.handleChange}
                            value={cityTo}
                            name="cityTo">
                            
                            <option>Select...</option>
                            <option value ='Abuja'>Abuja</option>
                            <option value ='Ado'>Ado</option>
                            <option value ='Ajase'>Ajase</option>
                            <option value ='Akure'>Akure</option>
                            <option value ='Benin'>Benin</option>
                            <option value ='Calabar'>Calabar</option>
                            <option value ='Kastina'>Kastina</option>
                            <option value ='Ilorin'>Ilorin</option>
                            <option value ='Ijebu-Ode'>Ijebu-Ode</option>
                            <option value ='Kano'>Kano</option> 
                        </select>
                    </div>
                    
                </div>

                <div className='mt-lg-3 mr-lg-4 mt-2 col-lg-2'>
                    <p className = 'mb-0'> Date</p>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleDateChanged}
                        placeholderText="Departure Date"
                        className='box form-control'
                        minDate={new Date()}
                        showDisabledMonthNavigation
                        value={startDate}
                        name= 'startDate'
                    />
                </div>

                <div className='mt-lg-3 mt-2 col-lg-2'>

                    <p className = 'mb-0'> Passengers</p>
                    <div className='form-group'>
                        <select 
                            
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
                                minWidth: '175px'
                            }}
                            onChange={this.handleChange}
                            value={passengers}
                            name="passengers">
                            
                            <option>Select...</option>
                            <option value ='1'>1</option>
                            <option value ='2'>2</option>
                            <option value ='3'>3</option>
                            <option value ='4'>4</option>
                            <option value ='5'>5</option>
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
                                    height: '48px',
                                }}
                                 
                                >
                                    Search
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}


export default Form