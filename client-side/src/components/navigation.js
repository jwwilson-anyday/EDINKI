import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Vendercreate from './vendercreate';
// import Coursenew from './coursenew';
// import Venderlist from './venderlist';
// import Courselist from './courselist';
// import Container from './container';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h4>The Navigation Area</h4>
        <div className="row">
          <Switch>
            {/* <Route path="/" component={Container} />
            <Route path="/addnewprovider" component={Vendercreate} />
            <Route path="/addnewcourse" component={Coursenew} />
            <Route path="/providerlist" component={Venderlist} />
            <Route path="/courselist" component={Courselist} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}
