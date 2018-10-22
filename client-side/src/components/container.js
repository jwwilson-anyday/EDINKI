import React from 'react';
import Venderlist from './venderlist';
import Courselist from './courselist';
import Navbar from './navbar';
import Vendercreate from './vendercreate';
import Coursenew from './coursenew';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="row">{this.state.hasLoggedIn ? <Navbar /> : null}</div>
        <div>
          <h1>Edinki! - EDucation INKed In</h1>
          <p>Search engine for Dental Continumm Education</p>
          <h2> Education Vacation</h2>
          <br />
          <Navbar />
          <br />
          <Courselist />
          <Venderlist />
          <br />
          <Vendercreate />
          <br />
          <br />
          <Coursenew />
        </div>
      </div>
    );
  }
}

export default Container;
