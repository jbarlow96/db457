import React, { Component } from 'react';

export default class BookOnline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNum: '',
      artist: '',
      date: '',
      responseSuccess: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  requestInfo = e => {
    e.preventDefault();
    const reservationBody = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNum: this.state.phoneNum,
      artist: this.state.artist,
      resvDate: this.state.date
    };
    fetch('http://localhost:4000/addreservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservationBody)
    })
      .then(response => response.json())
      .then(data => {
        console.log('RESPONSE: ', data);
        this.setState({ responseSuccess: data.success });
      })
      .catch(err => console.log('ERROR: ', err));
  };

  render() {
    return (
      <main>
        <section>
          <div className="page-header">
            <h2>Reservation Form</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestInfo}>
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phoneNum"
                    id="phone"
                    placeholder="###-###-####"
                    maxlength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Artist">Artist</label>
                  <select
                    className="form-control input-lg"
                    name="artist"
                    id="id"
                    required
                    onChange={this.handleChange}
                  >
                    <option value="">Please Select...</option>
                    <option value="Bullet">Bullet</option>
                    <option value="Chris">Chris</option>
                    <option value="Denny">Denny</option>
                    <option value="Tommy">Tommy</option>
                    <option value="Ned">Ned</option>
                    <option value="Walter">Walter</option>
                    <option value="Daenerys">Daenerys</option>
                    <option value="Rick">Rick</option>
                    <option value="Morty">Morty</option>
                    <option value="Peter">Peter</option>
                    <option value="Eric">Eric</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="Artist">Date</label>
                  <input
                    type="Date"
                    name="date"
                    id="date"
                    placeholder="MM/DD/YYYY"
                    maxlength="10"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Request Info
                </button>
                <h1>{this.state.responseSuccess}</h1>
              </form>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
