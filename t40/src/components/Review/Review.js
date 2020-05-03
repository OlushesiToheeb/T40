import React from 'react';

import './Review.css'

import ReactStars from 'react-stars';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class Review extends React.Component{
  state={
    ratingValue : '',
    beginDate:'',
    email:'',
    phoneNumber: '',
    customerName:'',
    from:'',
    to:'',
    operatorName:'',
    review:''
  }

  ratingChanged = (newRating) => {
    alert(newRating)
    this.setState({ratingValue : newRating})
  }

  handleDateChanged = (date) => {
    alert(date)
    this.setState({
      beginDate: date
    });
  };
  

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value });
  }


  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 content-right-offset">
            <div  style= {{marginBottom : '5px!important', paddingTop: '20px'}}></div>
            <section style={{paddingTop: '0px', paddingBottom: '0px'}}>
              <h3 style={{marginBottom:'5px', marginTop:'5px'}}>Submit Review</h3>
              <form action="">
                <div className="row">
                  <div className="col-md-6 d-flex" style={{fontSize: '18px', marginTop: '5px'}}>
                    <span>rating:</span>
                    <ReactStars 
                      className='rating-star'
                      count={5}
                      value={this.state.ratingValue}
                      onChange={this.ratingChanged}
                      size={22}
                      half={false}
                      color2={'#ffd700'}/>
                  </div>
                  <div className="col-md-6">
                  <DatePicker
                    selected={this.state.beginDate}
                    onChange={this.handleDateChanged}
                    placeholderText="Departure Date"
                    className='box form-control'
                    minDate={new Date()}
                    showDisabledMonthNavigation
                    value={this.state.beginDate}
                    name='beginDate'
                  />
                  </div>
                  <div className="col-md-6">
                    <input 
                      className="with-border" 
                      type="email" required="" 
                      name="email" 
                      placeholder="Email" 
                      value={this.state.email}
                      onChange={this.handleChange}/>
                  </div>
                  <div className="col-md-6">
                    <input 
                      className="with-border" 
                      type="tel" required="" 
                      name="phoneNumber" 
                      placeholder="Phone Number" 
                      value={this.state.phoneNumber}
                      onChange={this.handleChange}/>
                  </div>
                  <div className="col-md-6">
                    <input 
                      className="with-border form-control" 
                      required="" 
                      type="text" 
                      name="customerName" 
                      placeholder="Customer Name" 
                      value={this.state.customerName}
                      onChange={this.handleChange}/>
                  </div>
                  <div className="col-md-6">
                    <select 
                      required="" 
                      name="from" 
                      className="with-border form-control" 
                      style={{padding: '0px 1rem', height: '48px'}}
                      value={this.state.from}
                      onChange={this.handleChange}>
                        <option value="">departure location</option>
                        <option value='Abuja'>Abuja</option>
                        <option value='Ado'>Ado</option>
                        <option value='Ajase'>Ajase</option>
                        <option value='Akure'>Akure</option>
                        <option value='Benin'>Benin</option>
                        <option value='Calabar'>Calabar</option>
                        <option value='Kastina'>Kastina</option>
                        <option value='Ilorin'>Ilorin</option>
                        <option value='Ijebu-Ode'>Ijebu-Ode</option>
                        <option value='Kano'>Kano</option>

                    </select>
                  </div>
                  <div className="col-md-6">
                  <select 
                      required="" 
                      name="to" 
                      className="with-border form-control" 
                      style={{padding: '0px 1rem', height: '48px'}}
                      value={this.state.to}
                      onChange={this.handleChange}>
                        <option value="">arrival location</option>
                        <option value='Abuja'>Abuja</option>
                        <option value='Ado'>Ado</option>
                        <option value='Ajase'>Ajase</option>
                        <option value='Akure'>Akure</option>
                        <option value='Benin'>Benin</option>
                        <option value='Calabar'>Calabar</option>
                        <option value='Kastina'>Kastina</option>
                        <option value='Ilorin'>Ilorin</option>
                        <option value='Ijebu-Ode'>Ijebu-Ode</option>
                        <option value='Kano'>Kano</option>

                    </select>
                  </div>
                  <div className="col-md-6">
                    <select 
                      required="" 
                      name="operatorName" 
                      className="with-border form-control" 
                      style={{padding: '0px 1rem', height: '48px'}}
                      value={this.state.operatorName}
                      onChange={this.handleChange}>
                        <option value="">operator name</option>
                        <option value="AKTC">AKTC</option>
                        <option value="Cross Country">Cross Country</option>
                        <option value="ABC">ABC</option>
                        <option value="T40">T40</option>
                        <option value="GIGM">GIGM</option>
                        <option value="PMT">PMT</option>
                        <option value="GAM">GAM</option>
                        <option value="ChiFaith">ChiFaith</option>
                        <option value="GUO">GUO</option>
                        <option value="TYSG">TYSG</option>
                        <option value="EWT">EWT</option>
                        <option value="IGM">IGM</option>
                        <option value="ROT">ROT</option>
                        <option value="City Roller">City Roller</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <textarea 
                      className="with-border form-control" 
                      type="text" 
                      required="" 
                      name="review"
                      rows="4"
                      placeholder="Review"
                      value={this.state.review}
                      onChange={this.handleChange}></textarea>
                  </div>
                </div>
              </form>
              <div style={{marginTop:'10px'}}>
                <p style={{color: 'red'}}>
                  Please check and ensure that the email address entered is correct 
                  <br/> 
                  and valid as your e-ticket would be sent to it
                </p>                  
              </div>
            </section>
            <button 
              type="button" 
              disabled={!this.enabled} 
              className="btn text-white mb-5 btn" 
              style={{background: "rgb(252, 84, 38)"}}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}


export default Review