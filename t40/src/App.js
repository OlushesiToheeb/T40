import React from 'react';
import Layout from './components/Layout/Layout'
import Trip from '../src/components/Trip/Trip';
import TrackRide from '../src/components/TrackRide/TrackRide'
import { Route , Switch} from "react-router-dom";
import Review from '../src/components/Review/Review'


class APP extends React.Component {

  state={
    loadingUI:false
  }

  componentDidMount(){
		this.onLoad().then(() => this.setState({loadingUI : true}))
	}

	onLoad = () => {
		return new Promise((resolve) => setTimeout(() => resolve(), 1500));
	}

  render(){
    
    let allUI = (
      
      <Layout>
        <Switch>
          <Route exact path='/' component={Trip} />
          <Route exact path='/track' component={TrackRide} />
          <Route exact path='/review' component={Review} />
        </Switch>
      </Layout>
      
    )

    

    return (
      <React.Fragment>
        
        {this.state.loadingUI ? allUI : 
        <div className='d-flex justify-content-center' style={{marginTop:'15rem'}}>
          <div class="spinner-grow m-20" role="status" style={{color: '#FE3D00'}}>
            <span class="sr-only">Loading...</span>
          </div> 
        </div>}
        
      </React.Fragment>
    );

  }
}


export default APP;
