import React from 'react';
import Venderlist from './venderlist';
import Courselist from './courselist';
import Navbar from './navbar';
import {
  Route,
  Redirect,
  NavLink,
  Link,
  browserHistory
} from 'react-router-dom';
import Navigation from './navigation';
import Vendercreate from './vendercreate';
import Coursenew from './coursenew';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toProviderList: false
    };
  }

  providerPage = () => {
    this.setState({ toProviderList: true });
    console.log('Provider Page');
  };
  // redirect - use redirect here to route to page desired

  render() {
    if (this.state.toProviderList === true) {
      console.log('toProviderlist = True');
      return <Redirect to="/venderlist" />;
    }

    return (
      <div className="container">
        <div>
          <img id="logo" src="logo.png" />

          <Navbar />
          <br />
        </div>
        <p id="title" className="advertize_one">**************** Place Advertisment Here **************</p>
        <div>
          <h1 id="title">EDucation INKed In</h1>
          <p id="title">Search Engine for Dental Continumm Education</p>
          <br />
          <br />
        </div>
        <div>
          <img id="picjpeg" src="travel1.jpg" />
        </div>
      </div>
    );
  }
}

export default Container;
