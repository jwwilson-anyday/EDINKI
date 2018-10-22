import React, { Component } from 'react';

export default class Coursenew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coursename: '',
      coursepresenter: '',
      vendername: '',
      datestart: '',
      dateend: ''
    };
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
      dateend: this.state.dateend
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
    );
  }
}
