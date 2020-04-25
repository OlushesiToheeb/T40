import React from 'react';
import Layout from './components/Layout/Layout'


class APP extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Layout>
          Toolbar, sidedrawer, main
        </Layout>
      </React.Fragment>
    );

  }
}


export default APP;
