import React from 'react';
import {Redirect} from 'react-router-dom';

export default class Venderlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      coursename: '',
      coursepresenter: '',
      vendername: '',
      datestart: '',
      dateend: '',

      toSignInUp: false,

      venders: [] //In the data returned from the API call, the data returned  an object
    };
  }
  componentDidMount() {
    fetch('http://localhost:5000/api/venders/')
      .then(response => response.json()) //This takes json and makes it into an object
      .then(data => {
        // object is stored in the DATA
        console.log(data);
        //  console.log(data.number);
        //   console.log(data.people);

        this.setState({
          firstname: '',
          lastname: '',
          coursename: '',
          vendername: '',
          datestart: '',
          dateend: '',
          toSignInUp: false,

          venders: data.vender // used in line 87 to be able to map the array
        });
      });
  }

  signInUp = () => {
    this.setState({ toSignInUp: true });
    console.log('SignIn/SignUp');
  }

  render() {
    if (this.state.toSignInUp === true) {
      console.log('toSignInUp = True');
      return (<Redirect to='/vendercreate' />);
    }
    return (
      <div className="container">
        <div>
          <img id="logo" src="logo.png" />
          <div id="pageButton">
            <button
              className="btn btn-outline-primary"
              onClick={this.signInUp}
              type="button"
            >
              SignIn/SignUp
          </button>
          </div>
          <h3>Provider List</h3>
          <span>Number of Providers in file: {this.state.venders.length}</span>
          <ul>
            {this.state.venders.map(vender => {
              return (
                <div className="border" id="provider" key={vender._id}>
                  <li>
                    <div className="col-md-6">
                      {vender.firstname}{' '} {vender.lastname} {vender.phone}{' '}
                      {vender.email}
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
