import React from 'react';
import Layout from './components/Layout/Layout'
import BookRide from './containers/bookRide'
import { Route , Switch} from "react-router-dom";


class APP extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Layout>
        <Switch>
            <Route exact path='/' component={BookRide} />  
          </Switch>
        </Layout>
      </React.Fragment>
    );

  }
}


export default APP;
