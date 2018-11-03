import React from 'react';
import Venderlist from './venderlist';
import {
  Route,
  Redirect,
  NavLink,
  Link,
  browserHistory
} from 'react-router-dom';
import Links from './links';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toVendorList: false
    };
  }

  searchDates(e) {
    console.log('Search Dates');
  }
  searchLocations() {
    console.log('Search Locations');
  }

  searchCategories= ()=> {
    //browserHistory.push('/venderlist');
    //this.setState({ toVendorList: true });
    //<Link to='/venderlist'></Link>
    //<Route path='/venderlist' component={Venderlist}  />
    //<Redirect to='/venderlist' />;
    console.log('Search Categories');
  }

  render() {
    if (this.state.toVendorList === true) {
      console.log('toVenderlist = True');
      <Redirect to='/venderlist' />;
    }

    return (
      <div className="container">
        <div id="myNav">
          <nav>
            <form className="form-inline">
              <button
                className="btn btn-outline-primary nav-button"
                onClick={this.searchLocations}
                type="button"
              >
                Locations
              </button>
              <button
                className="btn btn-outline-primary nav-button"
                onClick={() => this.searchDates()}
                type="button"
              >
                Dates
              </button>
              <button
                className="btn btn-outline-primary nav-button"
                onClick={this.searchCategories}
                type="button"
              >
                Categories
              </button>
            </form>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
