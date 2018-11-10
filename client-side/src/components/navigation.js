import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Vendercreate from './vendercreate';
import Coursenew from './coursenew';
import Venderlist from './venderlist';
import Courselist from './courselist';
import Container from './container';
import Links from './links';
import Error from './error';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Links />
          <Switch>
            <Route path="/" exact component={Container} />
            <Route path="/courselist" component={Courselist} />
            <Route path="/venderlist" component={Venderlist} />
            <Route path="/vendercreate" component={Vendercreate} />
            {/* <Route component={Error} />     ****Needs a Path**** */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
