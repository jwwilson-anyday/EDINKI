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
      toCourseList: false,
      toProviderlist: false
    };
  }

  searchDates=()=> {
    this.setState({ toCourseList: true });
    console.log('Search Dates');
  }
  searchLocations= ()=> {
    this.setState({ toCourseList: true });
    console.log('Search Locations');
  }

  searchCategories= ()=> {
   this.setState({ toCourseList: true });
   
    console.log('Search Categories');
  }

  searchProviders= ()=> {
    this.setState({ toProviderlist: true });
    
     console.log('Search Providers');
   }
 

  render() {
    if (this.state.toCourseList === true) {
      console.log('toCourselist = True');
      return (<Redirect to='/courselist' />);
    }
  else if (this.state.toProviderlist === true){
    console.log('toProviderlist = True');
    return (<Redirect to='/venderlist'/>);
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
                onClick={this.searchDates}
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
              <button
                className="btn btn-outline-primary nav-button"
                onClick={this.searchProviders}
                type="button"
              >
                Providers
              </button>
            </form>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
