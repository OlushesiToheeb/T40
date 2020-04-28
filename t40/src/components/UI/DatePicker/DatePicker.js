import React from 'react';

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

import './DatePicker.css'

class DatePick extends React.Component {
    state = {
      startDate:null
    };
   
    handleChange = date => {
      this.setState({
        startDate: date
      });
    };


   
    render() {
      return (
        <DatePicker
        selected={this.state.startDate}
        onChange={this.props.changed}
        value={this.props.value}
        placeholderText="Departure Date"
        className='box form-control'
        minDate={new Date()}
        showDisabledMonthNavigation
        name={this.props.name}
        />
      );
    }
  }


  export default DatePick