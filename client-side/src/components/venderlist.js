import React from 'react';

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

          venders: data.vender // used in line 87 to be able to map the array
        });
      });
  }
  render() {
    return (
      <div className="container">
        <div>
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
