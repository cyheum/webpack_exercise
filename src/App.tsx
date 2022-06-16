import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RegularDeliveryContainer, Random, Test } from '@/pages';
import Layout from '@/systems/Layout/Layout';

class Routes extends Component {
  render() {
    return (
      <Router>
        {/* <Layout> */}
        <Switch>
          <Route exact path="/main" component={RegularDeliveryContainer} />
          <Route exact path="/" component={Random} />
          <Route exact path="/test" component={Test} />
        </Switch>
        {/* </Layout> */}
      </Router>
    );
  }
}

export default Routes;
