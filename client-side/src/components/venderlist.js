import React from 'react';


export default class Venderlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coursename: '',
      coursepresenter: '',
      vendername: '',
      datestart: '',
      dateend: '',

      venders: [], //In the data returned from the API call, the data returned  an object
      firstname: '',
      lastname: '',

      addRidesVisible: false,
      hasInit: false,
      rideinfoVisible: false,
      createAccountVisible: true,
      usersVisible: false,
      ridesVisible: false,
      first: '',
      last: '',
      address: '',
      phone: '',
      globalUser: '',
      hasLoggedIn: true,
      show: false
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/venders/')
      .then(response => response.json()) //This takes json and makes it into an object
      .then(data => {
        // object is stored in the DATA
        console.log(data);
        console.log(data.vender[2]._id);
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

  courseSubmit = () => {
    console.log(this.state);
    console.log(this.state.coursename);
    console.log(this.state.coursepresenter);
    console.log(this.state.datestart);
    console.log(this.state.datestart);

    let newCourse = {
      coursename: this.state.coursename,
      coursepresenter: this.state.coursepresenter,
      datestart: this.state.datestart,
      dateend: this.state.datestart
    };

    fetch('http://localhost:5000/api/courses', {
      method: 'POST',
      headers: {
        Accept: 'applicatoin/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCourse)
    })
      .then(response => response.json())
      .then(coursedata => {
        console.log(coursedata);
        console.log(newCourse.coursename);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="container">
        <div>
          <h3>Provider List</h3>
          <span>Number of Providers in file: {this.state.venders.length}</span>
          <ul>
            {this.state.venders.map(vender => {
              return (
                <li key={vender._id}>
                  {vender.firstname} {vender.lastname}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h1 id="title">New Course Information</h1>
          <div className="inputForms" id="input">
            <form>
              <label> Course Title </label> <br />
              <input
                classtype="text"
                value={this.state.coursename}
                onChange={event => {
                  this.setState({ coursename: event.target.value });
                }}
                name="coursename"
              />
              <label> Primary Presenter / Moderator </label>
              <br />
              <input
                type="text"
                value={this.state.coursepresenter}
                onChange={event => {
                  this.setState({ coursepresenter: event.target.value });
                }}
                name="coursepresenter"
              />
              <label> Start Date </label> <br />
              <input
                type="text"
                value={this.state.datestart}
                onChange={event => {
                  this.setState({ datestart: event.target.value });
                }}
                name="datestart"
              />
              <label> End Date </label> <br />
              <input
                type="text"
                value={this.state.dateend}
                onChange={event => {
                  this.setState({ dateend: event.target.value });
                }}
                name="dateend"
              />
            </form>
            <button
              className="btn option-button btn-primary float-right "
              id="addButton"
              onClick={() => this.courseSubmit()}
            >
              Add Course
            </button>
          </div>
        </div>
      </div>
    );
  }
}
