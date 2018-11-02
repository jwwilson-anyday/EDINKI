import React from 'react';
import Venderlist from './venderlist';
import Courselist from './courselist';
import Navbar from './navbar';
import Navigation from './navigation';
import Vendercreate from './vendercreate';
import Coursenew from './coursenew';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  providerPage = () => {
    console.log('Provider Page');
  };
  // redirect - use redirect here to route to page desired

  render() {
    return (
      <div className="container">
        <div>
          <img id="logo" src="logo.png" />
          <Navbar />
          <br />
        </div>
        <div>
          <h1 id="title">EDucation INKed In</h1>
          <p id="title">Search engine for Dental Continumm Education</p>
          <br />
          <br />
        </div>
        <div>
          <img id="picjpeg" src="travel1.jpg" />
        </div>
        <br />
        <div id="pageButton">
          <button
            className="btn btn-outline-primary"
            onClick={() => this.providerPage()}
            type="button"
          >
            Provider Page
          </button>
        </div>
        <Courselist />
        <br />
        <Venderlist />
        <br />
        <Vendercreate />
        <br />
        <Coursenew />
      </div>
    );
  }
}

export default Container;
