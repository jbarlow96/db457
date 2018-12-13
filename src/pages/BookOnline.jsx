import React, { Component } from 'react';

export default class BookOnline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // reservation
      firstName: '',
      lastName: '',
      email: '',
      phoneNum: '',
      artist: '',
      date: '',
      Res_id: '',
      responseSuccess: null,
      responseDeleted:null,
      responseUpdated:null,
      // artist 
      Fname: '',
      Lname: '',
      Shop_id: '',
      Artist_rating: '',
      Artist_id: '',
      responseArtSuccess: null,
      responseArtDeleted: null,
      responseArtUpdated: null,
      // location
      State: '',
      City: '',
      Address: '',
      Zip: '',
      Shop_id: '',
      responseLocationSuccess: null,
      responseLocationDeleted: null,
      responseLocationUpdated: null
     
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
      //ADDING Update
      requestUpdate = e =>{
        e.preventDefault();
        const reservationBody = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          phoneNum: this.state.phoneNum,
          artist: this.state.artist,
          resvDate: this.state.date,
          Res_id: this.state.id
      };
      fetch('http://localhost:4000/updatereservation/'+this.state.Res_id, {
        method: 'PATCH',
        //mode:'CORS',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservationBody),
       // body.Res_id:JSON.stringify(reservationBody.Res_id) 
      })
        .then(response => response.json())
        .then(data => {
          console.log('RESPONSE: ', data);
          this.setState({ responseUpdated: data.success });
        })
        .catch(err => console.log('ERROR: ', err));
    };
  //---------------------------Adding-Delete----------------------
  requestDelete = e =>{
    e.preventDefault();
  //   const reservationBody = {
  //     // firstName: this.state.firstName,
  //     // lastName: this.state.lastName,
  //     // email: this.state.email,
  //     // phoneNum: this.state.phoneNum,
  //     // artist: this.state.artist,
  //     // resvDate: this.state.date,
  //     id: this.state.id
  // };
  //id:this.state.id,//just added
  // deleteA(id){

  // }
  console.log('http://localhost:4000/deletereservation/'+this.state.Res_id);
  fetch('http://localhost:4000/deletereservation/'+this.state.Res_id, {
    method: 'GET',
   
    headers: {
      'Content-Type': 'application/json'
    },
    body: undefined
  })
    .then(response => response.json())
    .then(data => {
      console.log('RESPONSE: ', data);
      this.setState({ responseDeleted: data.success });
    })
    .catch(err => console.log('ERROR: ', err));
  };
  
  // Add artist
  requestArtInfo = e => {
    e.preventDefault();
    const artistBody = {
      Artist_id: this.state.Artist_id,
      Fname: this.state.Fname,
      Lname: this.state.Lname,
      Shop_id: this.state.Shop_id,
      Artist_rating: this.state.Artist_rating
    };
    fetch('http://localhost:4000/addartist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(artistBody)
    })
      .then(response => response.json())
      .then(data => {
        console.log('RESPONSE: ', data);
        this.setState({ responseArtSuccess: data.success });
      })
      .catch(err => console.log('ERROR: ', err));
    };

    // Artist Update
    requestArtUpdate = e => {
      e.preventDefault();
      const artistBody = {
        Artist_id: this.state.Artist_id,
        Fname: this.state.Fname,
        Lname: this.state.Lname,
        Shop_id: this.state.Shop_id,
        Artist_rating: this.state.Artist_rating
      };
      fetch('http://localhost:4000/updateartist/'+this.state.Artist_id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(artistBody)
      })
        .then(response => response.json())
        .then(data => {
          console.log('RESPONSE: ', data);
          this.setState({ responseArtUpdated: data.success });
        })
        .catch(err => console.log('ERROR: ', err));
      };

      // Delete Artist
      requestArtDelete = e =>{
        e.preventDefault();
      console.log('http://localhost:4000/deleteartist/'+this.state.Artist_id);
      fetch('http://localhost:4000/deleteartist/'+this.state.Artist_id, {
        method: 'GET',
       
        headers: {
          'Content-Type': 'application/json'
        },
        body: undefined
      })
        .then(response => response.json())
        .then(data => {
          console.log('RESPONSE: ', data);
          this.setState({ responseArtDeleted: data.success });
        })
        .catch(err => console.log('ERROR: ', err));
      };

      // add location
      requestLocationInfo = e => {
        e.preventDefault();
        const locationBody = {
          Shop_id: this.state.Shop_id,
          State: this.state.State,
          City: this.state.City,
          Address: this.state.Address,
          Zip: this.state.Zip
        };
        fetch('http://localhost:4000/addlocation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(locationBody)
        })
          .then(response => response.json())
          .then(data => {
            console.log('RESPONSE: ', data);
            this.setState({ responseLocationSuccess: data.success });
          })
          .catch(err => console.log('ERROR: ', err));
      };

      // Location Update
      requestLocationUpdate = e => {
        e.preventDefault();
        const locationBody = {
          Shop_id: this.state.Shop_id,
          State: this.state.State,
          City: this.state.City,
          Address: this.state.Address,
          Zip: this.state.Zip
        };
        fetch('http://localhost:4000/updatelocation/'+this.state.Shop_id, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(locationBody)
        })
          .then(response => response.json())
          .then(data => {
            console.log('RESPONSE: ', data);
            this.setState({ responseLocationUpdated: data.success });
          })
          .catch(err => console.log('ERROR: ', err));
        };

        // Delete Location
        requestLocationDelete = e =>{
          e.preventDefault();
        console.log('http://localhost:4000/deletelocation/'+this.state.Shop_id);
        fetch('http://localhost:4000/deletelocation/'+this.state.Shop_id, {
          method: 'GET',
         
          headers: {
            'Content-Type': 'application/json'
          },
          body: undefined
        })
          .then(response => response.json())
          .then(data => {
            console.log('RESPONSE: ', data);
            this.setState({ responseLocationDeleted: data.success });
          })
          .catch(err => console.log('ERROR: ', err));
        };
  
  render() {
    return (
      <main>
        <section>
          <div className="page-header">
            <h2>Create Reservation </h2>
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
                    maxLength="12"
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
                    id="artists"
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
                    maxLength="10"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Create Reservation
                </button>
                <h1>{this.state.responseSuccess}</h1>
              </form>
            </div>
          </div>
        </section>




        <section>
          <div className="page-header">
            <h2>Update Reservation </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestUpdate}>
              <div className="form-group">
                  <input
                    type="number"
                    name="Res_id"
                    id="Res_id"
                    placeholder="Reservation ID"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
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
                    maxLength="12"
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
                    id="artist"
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
                    maxLength="10"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Update Reservation
                </button>
                <h1>{this.state.responseUpdated}</h1>
              </form>
            </div>
          </div>
        </section>


        <section>
          <div className="page-header">
            <h2>Delete Reservation </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestDelete}>
              <div className="form-group">
                  <label htmlFor="Artist">Reservation ID</label>
                  <input
                    type="number"
                    name="Res_id"
                    id="Res_id"
                    placeholder="Reservation ID"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
        
          
                <button type="submit" className="btn button btn-lg">
                  Delete Reservation
                </button>
                <h1>{this.state.responseDeleted}</h1>
              </form>
            </div>
          </div>
        </section>



        <section>
          <div className="page-header">
            <h2>Create Artist </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestArtInfo}>
              <div className="form-group">
                  <input
                    type="number"
                    name="Artist_id"
                    id="Artist_id"
                    placeholder="Enter #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="Fname"
                    id="Fname"
                    placeholder="First Name"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="Lname"
                    id="Lname"
                    placeholder="Last Name"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Shop_id">Shop_id</label>
                  <select
                    className="form-control input-lg"
                    name="Shop_id"
                    id="Shop_id"
                    required
                    onChange={this.handleChange}
                  >
                    <option value="">Please Select...</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Artist_rating"
                    id="Artist_rating"
                    placeholder="Rating #"
                    maxLength="12"
                    min = "0"
                    max = "5"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Create Artist
                </button>
                <h1>{this.state.responseArtSuccess}</h1>
              </form>
            </div>
          </div>
        </section>


        <section>
          <div className="page-header">
            <h2>Update Artist </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestArtUpdate}>
              <div className="form-group">
                  <input
                    type="number"
                    name="Artist_id"
                    id="Artist_id"
                    placeholder="Enter #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="Fname"
                    id="Fname"
                    placeholder="First Name"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="Lname"
                    id="Lname"
                    placeholder="Last Name"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Shop_id">Shop_id</label>
                  <select
                    className="form-control input-lg"
                    name="Shop_id"
                    id="Shop_id"
                    required
                    onChange={this.handleChange}
                  >
                    <option value="">Please Select...</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Artist_rating"
                    id="Artist_rating"
                    placeholder="Rating #"
                    maxLength="12"
                    min = "0"
                    max = "5"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Update Artist
                </button>
                <h1>{this.state.responseArtUpdated}</h1>
              </form>
            </div>
          </div>
        </section>


        <section>
          <div className="page-header">
            <h2>Delete Artist </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestArtDelete}>
              <div className="form-group">
                  <label htmlFor="Artist">ARTIST ID</label>
                  <input
                    type="number"
                    name="Artist_id"
                    id="Artist_id"
                    placeholder="Artist ID"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
        
          
                <button type="submit" className="btn button btn-lg">
                  Delete Artist
                </button>
                <h1>{this.state.responseArtDeleted}</h1>
              </form>
            </div>
          </div>
        </section>


        <section>
          <div className="page-header">
            <h2>Add Location </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestLocationInfo}>
              <div className="form-group">
                  <input
                    type="number"
                    name="Shop_id"
                    id="Shop_id"
                    placeholder="Enter #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              <div className="form-group">
                  <label htmlFor="State">State</label>
                  <select
                    className="form-control input-lg"
                    name="State"
                    id="State"
                    required
                    onChange={this.handleChange}
                  >
                    <option value="">Please Select...</option>
                    <option value="AL">AL</option>
                    <option value="AK">AK</option>
                    <option value="AR">AR</option>
                    <option value="AZ">AZ</option>
                    <option value="CA">CA</option>
                    <option value="CO">CO</option>
                    <option value="CT">CT</option>
                    <option value="DE">DE</option>
                    <option value="FL">FL</option>
                    <option value="GA">GA</option>
                    <option value="HI">HI</option>
                    <option value="ID">ID</option>
                    <option value="IA">IA</option>
                    <option value="IL">IL</option>
                    <option value="IN">IN</option>
                    <option value="KS">KS</option>
                    <option value="KY">KY</option>
                    <option value="LA">LA</option>
                    <option value="MA">MA</option>
                    <option value="MD">MD</option>
                    <option value="ME">ME</option>
                    <option value="MI">MI</option>
                    <option value="MN">MN</option>
                    <option value="MO">MO</option>
                    <option value="MS">MS</option>
                    <option value="MT">MT</option>
                    <option value="NC">NC</option>
                    <option value="ND">ND</option>
                    <option value="NE">NE</option>
                    <option value="NH">NH</option>
                    <option value="NJ">NJ</option>
                    <option value="NM">NM</option>
                    <option value="NV">NV</option>
                    <option value="NY">NY</option>
                    <option value="OH">OH</option>
                    <option value="OK">OK</option>
                    <option value="OR">OR</option>
                    <option value="PA">PA</option>
                    <option value="RI">RI</option>
                    <option value="SC">SC</option>
                    <option value="SD">SD</option>
                    <option value="TN">TN</option>
                    <option value="TX">TX</option>
                    <option value="UT">UT</option>
                    <option value="VT">VT</option>
                    <option value="VA">VA</option>
                    <option value="WA">WA</option>
                    <option value="WI">WI</option>
                    <option value="WV">WV</option>
                    <option value="WY">WY</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="City"
                    id="City"
                    placeholder="City"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="Address"
                    id="Address"
                    placeholder="Address"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Zip"
                    id="Zip"
                    placeholder="Zipcode"
                    maxLength="5"
                    minLength="5"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Confirm Location
                </button>
                <h1>{this.state.responseLocationSuccess}</h1>
              </form>
            </div>
          </div>
        </section>



        <section>
          <div className="page-header">
            <h2>Update Location </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestLocationUpdate}>
              <div className="form-group">
                  <input
                    type="number"
                    name="Shop_id"
                    id="Shop_id"
                    placeholder="Enter #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="State">State</label>
                  <select
                    className="form-control input-lg"
                    name="State"
                    id="State"
                    required
                    onChange={this.handleChange}
                  >
                    <option value="">Please Select...</option>
                    <option value="AL">AL</option>
                    <option value="AK">AK</option>
                    <option value="AR">AR</option>
                    <option value="AZ">AZ</option>
                    <option value="CA">CA</option>
                    <option value="CO">CO</option>
                    <option value="CT">CT</option>
                    <option value="DE">DE</option>
                    <option value="FL">FL</option>
                    <option value="GA">GA</option>
                    <option value="HI">HI</option>
                    <option value="ID">ID</option>
                    <option value="IA">IA</option>
                    <option value="IL">IL</option>
                    <option value="IN">IN</option>
                    <option value="KS">KS</option>
                    <option value="KY">KY</option>
                    <option value="LA">LA</option>
                    <option value="MA">MA</option>
                    <option value="MD">MD</option>
                    <option value="ME">ME</option>
                    <option value="MI">MI</option>
                    <option value="MN">MN</option>
                    <option value="MO">MO</option>
                    <option value="MS">MS</option>
                    <option value="MT">MT</option>
                    <option value="NC">NC</option>
                    <option value="ND">ND</option>
                    <option value="NE">NE</option>
                    <option value="NH">NH</option>
                    <option value="NJ">NJ</option>
                    <option value="NM">NM</option>
                    <option value="NV">NV</option>
                    <option value="NY">NY</option>
                    <option value="OH">OH</option>
                    <option value="OK">OK</option>
                    <option value="OR">OR</option>
                    <option value="PA">PA</option>
                    <option value="RI">RI</option>
                    <option value="SC">SC</option>
                    <option value="SD">SD</option>
                    <option value="TN">TN</option>
                    <option value="TX">TX</option>
                    <option value="UT">UT</option>
                    <option value="VT">VT</option>
                    <option value="VA">VA</option>
                    <option value="WA">WA</option>
                    <option value="WI">WI</option>
                    <option value="WV">WV</option>
                    <option value="WY">WY</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="City"
                    id="City"
                    placeholder="City"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="Address"
                    id="Address"
                    placeholder="Address"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Zip"
                    id="Zip"
                    placeholder="Zipcode"
                    maxLength="5"
                    minLength="5"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Update Location
                </button>
                <h1>{this.state.responseLocationUpdated}</h1>
              </form>
            </div>
          </div>
        </section>



        <section>
          <div className="page-header">
            <h2>Delete Location </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestLocationDelete}>
              <div className="form-group">
                  <label htmlFor="Location">SHOP ID</label>
                  <input
                    type="number"
                    name="Shop_id"
                    id="Shop_id"
                    placeholder="Shop ID"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
        
          
                <button type="submit" className="btn button btn-lg">
                  Delete Location
                </button>
                <h1>{this.state.responseLocationDeleted}</h1>
              </form>
            </div>
          </div>
        </section>


      </main>
    );
    }
}

