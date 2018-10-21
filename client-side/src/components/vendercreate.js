import React,{Component} from 'react';

export default class Vendercreate extends Component {
constructor(props){
super(props);
this.state ={};
}

// let newPost = {
//     title: "hello world",
//     body: "That's really something"
// }

// fetch('http://localhost:5000/api/venders/', {
//     method: 'post',
//     body: JSON.stringify(newPost)
// })
// .then(response => response.json())
// .then(data =>{
//     console.log('post request response data: ', data)

// })
render(){

    return(
        <div>
            <h4>Hi from Vender Create</h4>
            <h1 id="title">New Provider Information</h1>
          <div className="inputForms" id="input">
            <form>
              <label>Provider Name </label> <br />
              <input
                classtype="text"
                value={this.state.coursename}
                onChange={event => {
                  this.setState({ coursename: event.target.value });
                }}
                name="coursename"
              />
              <label>Contact Person </label>
              <br />
              <input
                type="text"
                value={this.state.coursepresenter}
                onChange={event => {
                  this.setState({ coursepresenter: event.target.value });
                }}
                name="coursepresenter"
              />
              <label>Phone Number </label> <br />
              <input
                type="text"
                value={this.state.datestart}
                onChange={event => {
                  this.setState({ datestart: event.target.value });
                }}
                name="datestart"
              />
              <label>Email Address</label> <br />
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
              Add Provider
            </button>
          </div>
        </div>
    )
}
}
