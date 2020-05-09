import React from 'react';
import axios from 'axios';
import mobilePic from '../../assets/imgs/mobile.png';
import googlePlay from '../../assets/imgs/googlePlay.png'

import Form from '../Form/Form';
import bg from '../../assets/imgs/hero.jpg';
import './Trip.css';


class Trip extends React.Component {
	state = {
		searchResult: null,
		loading: true,
		inputValues: null,
		loadButton: true
	}

	

	searchResultHandler = () => {
		axios.get('https://react-t40-ced15.firebaseio.com/bookRide.json')
			.then(res => {
				console.log(res, res.data)
				this.setState({ searchResult: res.data, loading: false, loadButton :false})
				console.log(this.state.searchResult)
			})
			.catch(err => {
				console.log(err.message)
			})
	}

	childToParentHandler = (data) => {
		this.setState({inputValues: data})
		
	}


	UI = () => {
		return Object.keys(this.state.searchResult).map(result => {
			
			// this.setState({[this.state.searchResult[result].fro.city] : inputValues.cityFro})
			
			const { inputValues } = this.state

			return (
				
				<div className='task-listing-container'>
					<div className='task-listing'>
						<div className='task-listing-details'>
							<div className='task-listing-description'>
								<div className='task-tag' style={{ marginTop: '15px' }}>
									<span> From </span>
								</div>
								<h3 className='task-listing-title'>{ this.state.inputValues.cityFro}(T40)</h3>
								<ul className='task-icon'>
									<li>{this.state.searchResult[result].fro.time}</li>
									<li>{inputValues.startDate.toDateString()}</li>
								</ul>
							</div>
							<div className='task-listing-description'>
								<div className='task-tag' style={{ marginTop: '15px' }}>
									<span> To </span>
								</div>
								<h3 className='task-listing-title'>{  this.state.inputValues.cityTo }(T40)</h3>
								<ul className='task-icon'>
									<li>{this.state.searchResult[result].to.time}</li>
									<li> {inputValues.startDate.toDateString()}</li>
								</ul>
							</div>
						</div>
						<div className='task-listing-bid'>
							<div className='task-listing-bid-inner'>
								<div className='task-offer'>
									<strong>₦{this.state.searchResult[result].price} per passenger</strong>
								</div>
								<span className='button'>Book Now</span>
							</div>
						</div>
					</div>
				</div>
			)
		})
	}

	render() {



		return (
			<React.Fragment>
				<div className="Hero min-height" style={{ backgroundImage: " linear-gradient(to right bottom, rgba(252, 84, 38, 0.5), rgba(252, 84, 38, 0.8)), url(" + bg + ")" }}>
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="banner-Header">
									<h3>
										<strong style={{ color: " rgb(255, 255, 255)" }}>Find and book car and bus rides in Nigeria</strong><br />
										<span style={{ color: "rgb(255, 255, 255)" }}>Search. Compare. Book. Track.</span>
									</h3>
								</div>
							</div>
						</div>
						<div className='form-wrapper'>
							<div className="container">
								<Form
									searchResultHandle={this.searchResultHandler}
									callFromParent={this.childToParentHandler} 
									button={this.state.loadButton}/>
							</div>
						</div>

					</div>

				</div>
				<section style={{ paddingBottom: "75px", paddingTop: '65px' }}>
					<div className='container'>
						<div className='row'>
							<div className='col-xl-12'>
								<div style={{ marginBottom: '35px', marginTop: ' 0', textAlign: "center" }}>
									<h3>Search Results</h3>
								</div>
								{this.state.loading ? (<p
									style={{
										marginBottom: '35px',
										marginTop: ' 0',
										textAlign: "center",
										fontSize: '16px',
										color: '#666'
									}}>
									No available rides
								</p>) : this.UI()}
							</div>
						</div>
					</div>
				</section>
				<section className="mobile-height" style={{backgroundColor: 'rgb(254, 61, 0)'}}>
						<div className="container-fluid">
							<div className="row" style={{}}>
								<div className="col-xl-2"></div>
								<div className="col-xl-3 col-sm-12 display-none">
									<img src={mobilePic} alt="mobile phone" className="mobile-pic"/>
								</div>
								<div className="col-xl-4 col-sm-12 mobile-banner">
									<p className="mobile-text font-size-2em"style={{
										fontSize: '35px', 
										color: 'white', 
										lineHeight: '25px', 
										fontWeight: 'bolder', 
										paddingTop: '15%'
									}}>
										Search. Compare. Book. 
									</p>
									<p className="mobile-text font-size-2em"style={{
										fontSize: '35px', 
										color: 'white', 
										lineHeight: '25px', 
										fontWeight: 'bolder', 
									}}>
										On Our Mobile App 
									</p>
									<p className="mobile-text mobile-margin font-size-1-5em"style={{
										fontSize: '25px', 
										color: 'white ',
										marginTop: '3% ',
										lineHeight: '35px',
										paddingTop: '3%' 
									}}>
										Access our booking features straight from your mobile
									</p>
									<img src={googlePlay} alt="google play icon" className="adjust-play" style={{width: '30%', height: '10%'}} />
								</div>
							</div>
						</div>
					</section>
					
			</React.Fragment>
        
    )



	}
}

export default Trip