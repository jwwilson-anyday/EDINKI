import React, { Component } from 'react';

export default class Vendercreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      website: '',
      vendername: '',
      companyname: '',
      companyaddress1: '',
      companyaddress2: '',
      companycity: '',
      companystate: '',
      companyzipcode: ''
    };
  }
  providerSubmit = () => {
    console.log(this.state);
    console.log(this.state.firstname);
    console.log(this.state.lastname);
    console.log(this.state.phone);
    console.log(this.state.email);

    let newProvider = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone,
      email: this.state.email
    };

    fetch('http://localhost:5000/api/venders', {
      method: 'POST',
      headers: {
        Accept: 'applicatoin/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProvider)
    })
      .then(response => response.json())
      .then(providerdata => {
        console.log(providerdata);
        console.log(newProvider.firstname);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div>
        <img id="logo" src="logo.png" />
        <h1 id="title">New Provider Information</h1>
        <div className="inputForms" id="input">
          <form>
            <label>Provider Name </label> <br />
            <input
              classtype="text"
              value={this.state.firstname}
              onChange={event => {
                this.setState({ firstname: event.target.value });
              }}
              name="firstname"
            /><br/>
            <label>Contact Person </label>
            <br />
            <input
              type="text"
              value={this.state.lastname}
              onChange={event => {
                this.setState({ lastname: event.target.value });
              }}
              name="lastname"
            /><br/>
            <label>Phone Number </label> <br />
            <input
              type="text"
              value={this.state.phone}
              onChange={event => {
                this.setState({ phone: event.target.value });
              }}
              name="phone"
            /><br/>
            <label>Email Address</label> <br />
            <input
              type="text"
              value={this.state.email}
              onChange={event => {
                this.setState({ email: event.target.value });
              }}
              name="email"
            />
          </form>
          <button
            className="btn option-button btn-primary float-left "
            id="addButton"
            onClick={() => this.providerSubmit()}
          >
            Add Provider
          </button>
        </div>
      </div>
    );
  }
}
