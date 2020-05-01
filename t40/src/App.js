import React from 'react';
import Layout from './components/Layout/Layout'
import Trip from '../src/components/Trip/Trip';
import TrackRide from '../src/components/TrackRide/TrackRide'
import { Route , Switch} from "react-router-dom";


class APP extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Layout>
        <Switch>
            <Route exact path='/' component={Trip} />
            <Route exact path='/track' component={TrackRide} />
          </Switch>
        </Layout>
      </React.Fragment>
    );

  }
}


export default APP;
