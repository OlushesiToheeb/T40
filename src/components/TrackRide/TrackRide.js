import React from 'react';
import bg from '../../assets/imgs/hero.jpg';
import './TrackRide.css';

class  TrackRide extends React.Component{
  state={
    inputTrack:''
  }

  handleTrackChange = (e) =>{
    this.setState({inputTrack : e.target.value})
  }

  render(){
      return(
        <div>
          <section className="Hero min-height" style={{ backgroundImage: " linear-gradient(to right bottom, rgba(252, 84, 38, 0.5), rgba(252, 84, 38, 0.8)), url(" + bg + ")" }}>
            <div className="form-wrappers">
              <div className="container">
                <form className="row">
                  <div className="mt-lg-3 mt-2 col-lg-8">
                    <p className="mb-0">Tracking Code</p>
                    <div className="form-group">
                      <input 
                      type="text" 
                      className="form-control track-input" 
                      placeholder='Add Ride Code' 
                      value={this.state.inputTrack}
                      onChange={this.handleTrackChange}/>
                      
                    </div>
                  </div>
                  <div className="mt-4 mb-md-2 col-lg-4">
                    <div className="button-cover">
                      <button type='button' className=' btn button-track' disabled={!this.state.inputTrack}>Track</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
    
          <section style={{ paddingBottom: "75px", paddingTop: '65px' }}>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-12'>
                  <div style={{ marginBottom: '35px', marginTop: ' 0', textAlign: "center" }}>
                    <h3>Tracking Results</h3>
                  </div>
                  <div style={{minHeight: '10vh'}}>
                    <p style={{textAlign: 'center', color: '#666'}}>No Tracked Rides yet</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )

  }
}

export default TrackRide