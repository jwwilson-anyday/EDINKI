import React, { Component } from 'react';

export default class Courselist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coursename: '',
      coursepresenter: '',
      datestart: '',
      dateend: '',
      courses: []
    };
  }
  componentDidMount() {
    fetch('http://localhost:5000/api/courses/')
      .then(response => response.json()) //This takes json and makes it into an object
      .then(data => {
        // object is stored in the DATA
        console.log(data);
        //console.log(data.course[2]._id);
        //  console.log(data.number);
        //   console.log(data.people);

        this.setState({
          firstname: '',
          lastname: '',
          coursename: '',
          coursepresenter: '',
          datestart: '',
          dateend: '',

          courses: data.course // used in line 87 to be able to map the array
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div>
          <h3>Course List</h3>
          <span>Number of Sourses in file: {this.state.courses.length}</span>
          <ul>
            {this.state.courses.map(course => {
              return (
                <div className="border" id="course" key={course._id}>
                  <li key={course._id}>
                    <span>
                      {course._id} {course.coursename} {course.coursepresenter}{' '}
                      {course.datestart} {course.dateend}
                    </span>
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
