import React from 'react';
import Venderlist from './venderlist';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        
    };
  }

  searchDates(e) {
    console.log('Search Dates');
  }
  searchLocations(e) {
    console.log('Search Locations');
  }

  searchCategories=()=> {
    <Venderlist/>
    console.log('Search Categories');
  }

  render() {
    return (
      <div className="container">
        <div id="myNav">
          <nav className="navbar float-right">
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
                onClick={() => this.searchCategories()}
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
