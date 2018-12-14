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
      responseLocationUpdated: null,
      // Inventory
      Equip_name: '',
      Price: '',
      Equip_id: '',
      responseInventorySuccess: null,
      responseInventoryDeleted: null,
      responseInventoryUpdated: null,
      // Manager
      Man_id: '',
      Fname: '',
      Lname: '',
      Shop_id: '',
      responseManSuccess: null,
      responseManDeleted: null,
      responseManUpdated: null,
      // Manager Account
      Man_id: '',
      Uname: '',
      Passwd: '',
      responseManAccountSuccess: null,
      responseManAccountDeleted: null,
      responseManAccountUpdated: null,
      // Customer
      Cust_id: '',
      Fname: '',
      Lname: '',
      responseCustomerSuccess: null,
      responseCustomerUpdated: null,
      responseCustomerDeleted: null,
      // Customer Account
      Cust_id: '',
      Uname: '',
      Passwd: '',
      Email: '',
      Phone: '',
      responseCustAccountSuccess: null,
      responseCustAccountDeleted: null,
      responseCustAccountUpdated: null,
      // Merchandise
      Merch_id: '',
      Merch_type: '',
      Merch_name: '',
      Merch_price: '',
      Merch_count: '',
      responseMerchSuccess: null,
      responseMerchUpdated: null,
      responseMerchDeleted: null,
      // Piercing
      Pierce_no: '', 
      Cust_id: '',
      Pierce_type: '',
      Price: '',
      Equip_id: '',
      responsePiercingSuccess: null,
      responsePiercingUpdated: null,
      responsePiercingDeleted: null,
      // Tattoo
      Tat_no: '', 
      Cust_id: '',
      Color: '',
      Size: '',
      Est_time: '',
      Shop_id: '',
      Equip_id: '',
      responseTattooSuccess: null,
      responseTattooUpdated: null,
      responseTattooDeleted: null,
      // Result
      Result_id: '',
      Shop_id: '',
      Cust_id: '',
      Artist_id: '',
      Res_type: '',
      Res_date: '',
      Start_time: '',
      End_time: '',
      responseResultSuccess: null,
      responseResultUpdated: null,
      responseResultDeleted: null,
      // Waiver Policy
      Pol_id: '',
      Pol_signed: '', 
      Pol_date: '',
      Cust_id: '',
      responseWaiverPolicySuccess: null,
      responseWaiverPolicyUpdated: null,
      responseWaiverPolicyDeleted: null,
      // Cancellation Policy
      Pol_id: '',
      Pol_signed: '', 
      Pol_date: '',
      Cust_id: '',
      responseCancellationPolicySuccess: null,
      responseCancellationPolicyUpdated: null,
      responseCancellationPolicyDeleted: null,
      // Owner
      Own_id: '',
      Fname: '',
      Lname: '',
      Shop_id: '',
      responseShopOwnerSuccess: null,
      responseShopOwnerUpdated: null,
      responseShopOwnerDeleted: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // add reservation
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

      // Update Reservation
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

  // Delete Reservation
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

        // add inventory
        requestInventoryInfo = e => {
          e.preventDefault();
          const inventoryBody = {
            Equip_id: this.state.Equip_id,
            Equip_name: this.state.Equip_name,
            Price: this.state.Price
          };
          fetch('http://localhost:4000/addinventory', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(inventoryBody)
          })
            .then(response => response.json())
            .then(data => {
              console.log('RESPONSE: ', data);
              this.setState({ responseInventorySuccess: data.success });
            })
            .catch(err => console.log('ERROR: ', err));
        };

        // update inventory
        requestInventoryUpdate = e => {
          e.preventDefault();
          const inventoryBody = {
            Equip_id: this.state.Equip_id,
            Equip_name: this.state.Equip_name,
            Price: this.state.Price
          };
          fetch('http://localhost:4000/updateinventory/'+this.state.Equip_id, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(inventoryBody)
          })
            .then(response => response.json())
            .then(data => {
              console.log('RESPONSE: ', data);
              this.setState({ responseInventoryUpdated: data.success });
            })
            .catch(err => console.log('ERROR: ', err));
          };

        // delete inventory
        requestInventoryDelete = e =>{
          e.preventDefault();
        console.log('http://localhost:4000/deleteinventory/'+this.state.Equip_id);
        fetch('http://localhost:4000/deleteinventory/'+this.state.Equip_id, {
          method: 'GET',
         
          headers: {
            'Content-Type': 'application/json'
          },
          body: undefined
        })
          .then(response => response.json())
          .then(data => {
            console.log('RESPONSE: ', data);
            this.setState({ responseInventoryDeleted: data.success });
          })
          .catch(err => console.log('ERROR: ', err));
        };

        // Add Manager
        requestManInfo = e => {
            e.preventDefault();
            const managerBody = {
                Man_id: this.state.Man_id,
                Fname: this.state.Fname,
                Lname: this.state.Lname,
                Shop_id: this.state.Shop_id,
            };
            fetch('http://localhost:4000/manager', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(managerBody)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('RESPONSE: ', data);
                    this.setState({ responseManSuccess: data.success });
                })
                .catch(err => console.log('ERROR: ', err));
        };
        // Manager Update
        requestManUpdate = e => {
            e.preventDefault();
            const managerBody = {
                Man_id: this.state.Man_id,
                Fname: this.state.Fname,
                Lname: this.state.Lname,
                Shop_id: this.state.Shop_id,
            };
            fetch('http://localhost:4000/updatemanager/'+this.state.Man_id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(managerBody)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('RESPONSE: ', data);
                    this.setState({ responseManUpdated: data.success });
                })
                .catch(err => console.log('ERROR: ', err));
        };
        // Manager Deleted
        requestManDelete = e => {
            e.preventDefault();
            console.log('http://localhost:4000/deletemanager/' + this.state.Man_id);
            fetch('http://localhost:4000/deletemanager/' + this.state.Man_id, {
                method: 'GET',

                headers: {
                    'Content-Type': 'application/json'
                },
                body: undefined
            })
                .then(response => response.json())
                .then(data => {
                    console.log('RESPONSE: ', data);
                    this.setState({ responseManDeleted: data.success });
                })
                .catch(err => console.log('ERROR: ', err));
        };
        // Add Manager Account
        requestManAccountInfo = e => {
            e.preventDefault();
            const managerAccountBody = {
                Man_id: this.state.Man_id,
                Uname: this.state.Uname,
                Passwd: this.state.Passwd,
            };
            fetch('http://localhost:4000/manageraccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(managerAccountBody)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('RESPONSE: ', data);
                    this.setState({ responseManAccountSuccess: data.success });
                })
                .catch(err => console.log('ERROR: ', err));
        };
        // Manager Account Update
        requestManAccountUpdate = e => {
            e.preventDefault();
            const managerAccountBody = {
                Man_id: this.state.Man_id,
                Uname: this.state.Uname,
                Passwd: this.state.Passwd,
            };
            fetch('http://localhost:4000/updatemanageraccount/' + this.state.Man_id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(managerAccountBody)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('RESPONSE: ', data);
                    this.setState({ responseManAccountUpdated: data.success });
                })
                .catch(err => console.log('ERROR: ', err));
        };
        // Manager Account Delete
        requestManAccountDelete = e => {
            e.preventDefault();
            console.log('http://localhost:4000/deletemanageraccount/' + this.state.Man_id);
            fetch('http://localhost:4000/deletemanageraccount/' + this.state.Man_id, {
                method: 'GET',

                headers: {
                    'Content-Type': 'application/json'
                },
                body: undefined
            })
                .then(response => response.json())
                .then(data => {
                    console.log('RESPONSE: ', data);
                    this.setState({ responseManAccountDeleted: data.success });
                })
                .catch(err => console.log('ERROR: ', err));
        };
        // Add Customer
        requestCustomerInfo = e => {
            e.preventDefault();
            const customerBody = {
                Cust_id: this.state.Cust_id,
                Fname: this.state.Fname,
                Lname: this.state.Lname
            };
            fetch('http://localhost:4000/customer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(customerBody)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('RESPONSE: ', data);
                    this.setState({ responseCustomerSuccess: data.success });
                })
                .catch(err => console.log('ERROR: ', err));
         };


        // Update Customer
        requestCustomerUpdate = e => {
            e.preventDefault();
            const customerBody = {
                Cust_id: this.state.Cust_id,
                Fname: this.state.Fname,
                Lname: this.state.Lname,
            };
            fetch('http://localhost:4000/updatecustomer/' + this.state.Cust_id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(customerBody)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('RESPONSE: ', data);
                    this.setState({ responseCustomerUpdated: data.success });
                })
                .catch(err => console.log('ERROR: ', err));
        };

         // Delete Customer
        requestCustomerDelete = e => {
            e.preventDefault();
            console.log('http://localhost:4000/deletecustomer/' + this.state.Cust_id);
            fetch('http://localhost:4000/deletecustomer/' + this.state.Cust_id, {
                method: 'GET',

                headers: {
                    'Content-Type': 'application/json'
                },
                body: undefined
            })
                .then(response => response.json())
                .then(data => {
                    console.log('RESPONSE: ', data);
                    this.setState({ responseCustomerDeleted: data.success });
                })
                .catch(err => console.log('ERROR: ', err));
        };
        // Add Customer Account
        requestCustomerAccountInfo = e => {
            e.preventDefault();
            const customerAccountBody = {
                Cust_id: this.state.Cust_id,
                Uname: this.state.Uname,
                Passwd: this.state.Passwd,
                Email: this.state.Email,
                Phone: this.state.Phone
            };
            fetch('http://localhost:4000/customeraccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(customerAccountBody)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('RESPONSE: ', data);
                    this.setState({ responseCustomerAccountSuccess: data.success });
                })
                .catch(err => console.log('ERROR: ', err));
        };
        // Update Customer Account
        requestCustomerAccountUpdate = e => {
            e.preventDefault();
            const customerAccountBody = {
                Cust_id: this.state.Cust_id,
                Uname: this.state.Uname,
                Passwd: this.state.Passwd,
                Email: this.state.Email,
                Phone: this.state.Phone
            };
            fetch('http://localhost:4000/updatecustomeraccount/' + this.state.Cust_id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(customerAccountBody)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('RESPONSE: ', data);
                    this.setState({ responseCustomerAccountUpdated: data.success });
                })
                .catch(err => console.log('ERROR: ', err));
        };
        // Delete Customer Account
        requestCustomerAccountDelete = e => {
            e.preventDefault();
            console.log('http://localhost:4000/deletecustomeraccount/' + this.state.Cust_id);
            fetch('http://localhost:4000/deletecustomeraccount/' + this.state.Cust_id, {
                method: 'GET',

                headers: {
                    'Content-Type': 'application/json'
                },
                body: undefined
            })
                .then(response => response.json())
                .then(data => {
                    console.log('RESPONSE: ', data);
                    this.setState({ responseCustomerAccountDeleted: data.success });
                })
                .catch(err => console.log('ERROR: ', err));
        };
         // Add Merchandise
         requestMerchandiseInfo = e => {
          e.preventDefault();
          const merchandiseBody = {
            Merch_id: this.state.Merch_id,
            Merch_type: this.state.Merch_type,
            Merch_name: this.state.Merch_name,
            Merch_price: this.state.Merch_price,
            Merch_count: this.state.Merch_count
          };
          fetch('http://localhost:4000/merchandise', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(merchandiseBody)
          })
            .then(response => response.json())
            .then(data => {
              console.log('RESPONSE: ', data);
              this.setState({ responseMerchSuccess: data.success });
            })
            .catch(err => console.log('ERROR: ', err));
        };

          // Update Merchandise
          requestMerchandiseUpdate = e => {
            e.preventDefault();
            const merchandiseBody = {
              Merch_id: this.state.Merch_id,
              Merch_type: this.state.Merch_type,
              Merch_name: this.state.Merch_name,
              Merch_price: this.state.Merch_price,
              Merch_count: this.state.Merch_count
            };
            fetch('http://localhost:4000/updatemerchandise/'+this.state.Merch_id, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(merchandiseBody)
            })
              .then(response => response.json())
              .then(data => {
                console.log('RESPONSE: ', data);
                this.setState({ responseMerchUpdated: data.success });
              })
              .catch(err => console.log('ERROR: ', err));
          };

          // Delete Merchandise
          requestMerchandiseDelete = e =>{
            e.preventDefault();
          console.log('http://localhost:4000/deletemerchandise/'+this.state.Merch_id);
          fetch('http://localhost:4000/deletemerchandise/'+this.state.Merch_id, {
            method: 'GET',
           
            headers: {
              'Content-Type': 'application/json'
            },
            body: undefined
          })
            .then(response => response.json())
            .then(data => {
              console.log('RESPONSE: ', data);
              this.setState({ responseMerchDeleted: data.success });
            })
            .catch(err => console.log('ERROR: ', err));
          };

          // Add Piercing
          requestPiercingInfo = e => {
            e.preventDefault();
            const piercingBody = {
              Pierce_no: this.state.Pierce_no,
              Cust_id: this.state.Cust_id,
              Pierce_type: this.state.Pierce_type,
              Price: this.state.Price,
              Equip_id: this.state.Equip_id
            };
            fetch('http://localhost:4000/piercing', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(piercingBody)
            })
              .then(response => response.json())
              .then(data => {
                console.log('RESPONSE: ', data);
                this.setState({ responsePiercingSuccess: data.success });
              })
              .catch(err => console.log('ERROR: ', err));
          };

          // Update Piercing
          requestPiercingUpdate = e => {
            e.preventDefault();
            const piercingBody = {
              Pierce_no: this.state.Pierce_no,
              Cust_id: this.state.Cust_id,
              Pierce_type: this.state.Pierce_type,
              Price: this.state.Price,
              Equip_id: this.state.Equip_id
            };
            fetch('http://localhost:4000/updatepiercing/'+this.state.Pierce_no, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(piercingBody)
            })
              .then(response => response.json())
              .then(data => {
                console.log('RESPONSE: ', data);
                this.setState({ responsePiercingUpdated: data.success });
              })
              .catch(err => console.log('ERROR: ', err));
            };

            // Delete Piercing
            requestPiercingDelete = e =>{
              e.preventDefault();
            console.log('http://localhost:4000/deletepiercing/'+this.state.Pierce_no);
            fetch('http://localhost:4000/deletepiercing/'+this.state.Pierce_no, {
              method: 'GET',
             
              headers: {
                'Content-Type': 'application/json'
              },
              body: undefined
            })
              .then(response => response.json())
              .then(data => {
                console.log('RESPONSE: ', data);
                this.setState({ responsePiercingDeleted: data.success });
              })
              .catch(err => console.log('ERROR: ', err));
            };

            // Add Tattoo
            requestTattooInfo = e => {
              e.preventDefault();
              const tattooBody = {
                Tat_no: this.state.Tat_no, 
                Cust_id: this.state.Cust_id,
                Color: this.state.Color,
                Size: this.state.Size,
                Est_time: this.state.Est_time,
                Shop_id: this.state.Shop_id,
                Equip_id: this.state.Equip_id
              };
              fetch('http://localhost:4000/tattoo', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(tattooBody)
              })
                .then(response => response.json())
                .then(data => {
                  console.log('RESPONSE: ', data);
                  this.setState({ responseTattooSuccess: data.success });
                })
                .catch(err => console.log('ERROR: ', err));
              };

              // Update Tattoo
              requestTattooUpdate = e => {
                e.preventDefault();
                const tattooBody = {
                  Tat_no: this.state.Tat_no, 
                  Cust_id: this.state.Cust_id,
                  Color: this.state.Color,
                  Size: this.state.Size,
                  Est_time: this.state.Est_time,
                  Shop_id: this.state.Shop_id,
                  Equip_id: this.state.Equip_id
                };
                fetch('http://localhost:4000/updatetattoo/'+this.state.Tat_no, {
                  method: 'PATCH',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(tattooBody)
                })
                  .then(response => response.json())
                  .then(data => {
                    console.log('RESPONSE: ', data);
                    this.setState({ responseTattooUpdated: data.success });
                  })
                  .catch(err => console.log('ERROR: ', err));
                };

                // Delete Tattoo
                requestTattooDelete = e =>{
                  e.preventDefault();
                console.log('http://localhost:4000/deletetattoo/'+this.state.Tat_no);
                fetch('http://localhost:4000/deletetattoo/'+this.state.Tat_no, {
                  method: 'GET',
                 
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: undefined
                })
                  .then(response => response.json())
                  .then(data => {
                    console.log('RESPONSE: ', data);
                    this.setState({ responseTattooDeleted: data.success });
                  })
                  .catch(err => console.log('ERROR: ', err));
                };

                // Add Result
                requestResultInfo = e => {
                  e.preventDefault();
                  const resultBody = {
                    Result_id: this.state.Result_id, 
                    Shop_id: this.state.Shop_id,
                    Cust_id: this.state.Cust_id,
                    Artist_id: this.state.Artist_id,
                    Res_type: this.state.Res_type,
                    Res_date: this.state.Res_date,
                    Start_time: this.state.Start_time,
                    End_time: this.state.End_time
                  };
                  fetch('http://localhost:4000/result', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(resultBody)
                  })
                    .then(response => response.json())
                    .then(data => {
                      console.log('RESPONSE: ', data);
                      this.setState({ responseResultSuccess: data.success });
                    })
                    .catch(err => console.log('ERROR: ', err));
                  };

                // Update Result
                requestResultUpdate = e => {
                  e.preventDefault();
                  const resultBody = {
                    Result_id: this.state.Result_id, 
                    Shop_id: this.state.Shop_id,
                    Cust_id: this.state.Cust_id,
                    Artist_id: this.state.Artist_id,
                    Res_type: this.state.Res_type,
                    Res_date: this.state.Res_date,
                    Start_time: this.state.Start_time,
                    End_time: this.state.End_time
                  };
                  fetch('http://localhost:4000/updateresult/'+this.state.Result_id, {
                    method: 'PATCH',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(resultBody)
                  })
                    .then(response => response.json())
                    .then(data => {
                      console.log('RESPONSE: ', data);
                      this.setState({ responseResultUpdated: data.success });
                    })
                    .catch(err => console.log('ERROR: ', err));
                  };

                // Delete Result
                requestResultDelete = e =>{
                  e.preventDefault();
                console.log('http://localhost:4000/deleteresult/'+this.state.Result_id);
                fetch('http://localhost:4000/deleteresult/'+this.state.Result_id, {
                  method: 'GET',
                 
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: undefined
                })
                  .then(response => response.json())
                  .then(data => {
                    console.log('RESPONSE: ', data);
                    this.setState({ responseResultDeleted: data.success });
                  })
                  .catch(err => console.log('ERROR: ', err));
                };

                // add waiver policy
                requestWaiverPolicyInfo = e => {
                  e.preventDefault();
                  const waiver_policyBody = {
                    Pol_id: this.state.Pol_id, 
                    Pol_signed: this.state.Pol_signed,
                    Pol_date: this.state.Pol_date,
                    Cust_id: this.state.Cust_id
                  };
                  fetch('http://localhost:4000/waiverpolicy', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(waiver_policyBody)
                  })
                    .then(response => response.json())
                    .then(data => {
                      console.log('RESPONSE: ', data);
                      this.setState({ responseWaiverPolicySuccess: data.success });
                    })
                    .catch(err => console.log('ERROR: ', err));
                };

                // Update Waiver Policy
                requestWaiverPolicyUpdate = e => {
                  e.preventDefault();
                  const waiver_policyBody = {
                    Pol_id: this.state.Pol_id, 
                    Pol_signed: this.state.Pol_signed,
                    Pol_date: this.state.Pol_date,
                    Cust_id: this.state.Cust_id
                  };
                  fetch('http://localhost:4000/updatewaiverpolicy/'+this.state.Pol_id, {
                    method: 'PATCH',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(waiver_policyBody)
                  })
                    .then(response => response.json())
                    .then(data => {
                      console.log('RESPONSE: ', data);
                      this.setState({ responseWaiverPolicyUpdated: data.success });
                    })
                    .catch(err => console.log('ERROR: ', err));
                  };

                // Delete Waiver Policy
                requestWaiverPolicyDelete = e =>{
                  e.preventDefault();
                console.log('http://localhost:4000/deletewaiverpolicy/'+this.state.Pol_id);
                fetch('http://localhost:4000/deletewaiverpolicy/'+this.state.Pol_id, {
                  method: 'GET',
                 
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: undefined
                })
                  .then(response => response.json())
                  .then(data => {
                    console.log('RESPONSE: ', data);
                    this.setState({ responseWaiverPolicyDeleted: data.success });
                  })
                  .catch(err => console.log('ERROR: ', err));
                };

                // Add Cancellation Policy
                requestCancellationPolicyInfo = e => {
                  e.preventDefault();
                  const cancellation_policyBody = {
                    Pol_id: this.state.Pol_id, 
                    Pol_signed: this.state.Pol_signed,
                    Pol_date: this.state.Pol_date,
                    Cust_id: this.state.Cust_id
                  };
                  fetch('http://localhost:4000/addcancellationpolicy', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(cancellation_policyBody)
                  })
                    .then(response => response.json())
                    .then(data => {
                      console.log('RESPONSE: ', data);
                      this.setState({ responseCancellationPolicySuccess: data.success });
                    })
                    .catch(err => console.log('ERROR: ', err));
                };

                // Update Cancellation Policy
                requestCancellationPolicyUpdate = e => {
                  e.preventDefault();
                  const cancellation_policyBody = {
                    Pol_id: this.state.Pol_id, 
                    Pol_signed: this.state.Pol_signed,
                    Pol_date: this.state.Pol_date,
                    Cust_id: this.state.Cust_id
                  };
                  fetch('http://localhost:4000/updatecancellationpolicy/'+this.state.Pol_id, {
                    method: 'PATCH',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(cancellation_policyBody)
                  })
                    .then(response => response.json())
                    .then(data => {
                      console.log('RESPONSE: ', data);
                      this.setState({ responseCancellationPolicyUpdated: data.success });
                    })
                    .catch(err => console.log('ERROR: ', err));
                  };

                // Delete Cancellation Policy
                requestCancellationPolicyDelete = e =>{
                  e.preventDefault();
                console.log('http://localhost:4000/deletecancellationpolicy/'+this.state.Pol_id);
                fetch('http://localhost:4000/deletecancellationpolicy/'+this.state.Pol_id, {
                  method: 'GET',
                 
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: undefined
                })
                  .then(response => response.json())
                  .then(data => {
                    console.log('RESPONSE: ', data);
                    this.setState({ responseCancellationPolicyDeleted: data.success });
                  })
                  .catch(err => console.log('ERROR: ', err));
                };

                // Add Shop Owner
                requestShopOwnerInfo = e => {
                  e.preventDefault();
                  const shop_ownerBody = {
                    Own_id: this.state.Own_id,
                    Fname: this.state.Fname,
                    Lname: this.state.Lname,
                    Shop_id: this.state.Shop_id
                  };
                  fetch('http://localhost:4000/addshopowner', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(shop_ownerBody)
                  })
                    .then(response => response.json())
                    .then(data => {
                      console.log('RESPONSE: ', data);
                      this.setState({ responseShopOwnerSuccess: data.success });
                    })
                    .catch(err => console.log('ERROR: ', err));
                  };

                // Update Shop Owner
                requestShopOwnerUpdate = e => {
                  e.preventDefault();
                  const shop_ownerBody = {
                    Own_id: this.state.Own_id,
                    Fname: this.state.Fname,
                    Lname: this.state.Lname,
                    Shop_id: this.state.Shop_id
                  };
                  fetch('http://localhost:4000/updateshopowner/'+this.state.Own_id, {
                    method: 'PATCH',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(shop_ownerBody)
                  })
                    .then(response => response.json())
                    .then(data => {
                      console.log('RESPONSE: ', data);
                      this.setState({ responseShopOwnerUpdated: data.success });
                    })
                    .catch(err => console.log('ERROR: ', err));
                  };

                // Delete Shop Owner
                requestShopOwnerDelete = e =>{
                  e.preventDefault();
                console.log('http://localhost:4000/deleteshopowner/'+this.state.Own_id);
                fetch('http://localhost:4000/deleteshopowner/'+this.state.Own_id, {
                  method: 'GET',
                 
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: undefined
                })
                  .then(response => response.json())
                  .then(data => {
                    console.log('RESPONSE: ', data);
                    this.setState({ responseShopOwnerDeleted: data.success });
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


        <section>
          <div className="page-header">
            <h2>Add Inventory </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestInventoryInfo}>
              <div className="form-group">
                  <input
                    type="number"
                    name="Equip_id"
                    id="Equip_id"
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
                    name="Equip_name"
                    id="Equip_name"
                    placeholder="Equipment Name"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Price"
                    id="Price"
                    placeholder="Price"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Create Inventory
                </button>
                <h1>{this.state.responseInventorySuccess}</h1>
              </form>
            </div>
          </div>
        </section>



        <section>
          <div className="page-header">
            <h2>Update Inventory </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestInventoryUpdate}>
              <div className="form-group">
                  <input
                    type="number"
                    name="Equip_id"
                    id="Equip_id"
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
                    name="Equip_name"
                    id="Equip_name"
                    placeholder="Equipment Name"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Price"
                    id="Price"
                    placeholder="Price"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Update Inventory
                </button>
                <h1>{this.state.responseInventoryUpdated}</h1>
              </form>
            </div>
          </div>
        </section>



        <section>
          <div className="page-header">
            <h2>Delete Inventory </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestInventoryDelete}>
              <div className="form-group">
                  <label htmlFor="Inventory">Equipment ID</label>
                  <input
                    type="number"
                    name="Equip_id"
                    id="Equip_id"
                    placeholder="Equipment ID"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Delete Inventory
                </button>
                <h1>{this.state.responseInventoryDeleted}</h1>
              </form>
            </div>
          </div>
        </section>
        


            <section>
                <div className="page-header">
                    <h2>Add Manager </h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.requestManInfo}>
                            <div className="form-group">
                                <input
                                    type="number"
                                    name="Man_id"
                                    id="Man_id"
                                    placeholder="Enter Manager ID #"
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
                            <button type="submit" className="btn button btn-lg">
                                Add Manager
                </button>
                            <h1>{this.state.responseManSuccess}</h1>
                        </form>
                    </div>
                </div>
            </section>
            <section>
                <div className="page-header">
                    <h2>Update Manager </h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.requestManUpdate}>
                            <div className="form-group">
                                <input
                                    type="number"
                                    name="Man_id"
                                    id="Man_id"
                                    placeholder="Enter ID #"
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
                            <button type="submit" className="btn button btn-lg">
                                Update Manager
                </button>
                            <h1>{this.state.responseManUpdated}</h1>
                        </form>
                    </div>
                </div>
            </section>
            <section>
                <div className="page-header">
                    <h2>Delete Manager </h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.requestManDelete}>
                            <div className="form-group">
                                <label htmlFor="Manager">MANAGER ID</label>
                                <input
                                    type="number"
                                    name="Man_id"
                                    id="Man_id"
                                    placeholder="Manager ID"
                                    className="form-control input-lg"
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button type="submit" className="btn button btn-lg">
                                Delete Manager
                </button>
                            <h1>{this.state.responseManDeleted}</h1>
                        </form>
                    </div>
                </div>
            </section>
            <section>
                <div className="page-header">
                    <h2>Add Manager Account </h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.requestManAccountInfo}>
                            <div className="form-group">
                                <input
                                    type="number"
                                    name="Man_id"
                                    id="Man_id"
                                    placeholder="Enter Manager ID #"
                                    maxLength="12"
                                    className="form-control input-lg"
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="Uname"
                                    id="Uname"
                                    placeholder="Username"
                                    className="form-control input-lg"
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="Passwd"
                                    id="Passwd"
                                    placeholder="Password"
                                    className="form-control input-lg"
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button type="submit" className="btn button btn-lg">
                                Add Manager
                </button>
                            <h1>{this.state.responseManAccountSuccess}</h1>
                        </form>
                    </div>
                </div>
            </section>
            <section>
                <div className="page-header">
                    <h2>Update Manager Account</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.requestManAccountUpdate}>
                            <div className="form-group">
                                <input
                                    type="number"
                                    name="Man_id"
                                    id="Man_id"
                                    placeholder="Enter ID #"
                                    maxLength="12"
                                    className="form-control input-lg"
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="Uname"
                                    id="Uname"
                                    placeholder="First Name"
                                    className="form-control input-lg"
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="Passwd"
                                    id="Passwd"
                                    placeholder="Last Name"
                                    className="form-control input-lg"
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button type="submit" className="btn button btn-lg">
                                Update Manager Account
                </button>
                            <h1>{this.state.responseManAccountUpdated}</h1>
                        </form>
                    </div>
                </div>
            </section>
            <section>
                <div className="page-header">
                    <h2>Delete Manager Account</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.requestManAccountDelete}>
                            <div className="form-group">
                                <label htmlFor="Manager">MANAGER ID</label>
                                <input
                                    type="number"
                                    name="Man_id"
                                    id="Man_id"
                                    placeholder="Manager ID"
                                    className="form-control input-lg"
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button type="submit" className="btn button btn-lg">
                                Delete Manager Account
                </button>
                            <h1>{this.state.responseManDeleted}</h1>
                        </form>
                    </div>
                </div>
            </section>
            <section>
                <div className="page-header">
                    <h2>Add Customer </h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.requestCustomerInfo}>
                            <div className="form-group">
                                <input
                                    type="number"
                                    name="Cust_id"
                                    id="Cust_id"
                                    placeholder="Enter Customer ID #"
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
                            <button type="submit" className="btn button btn-lg">
                                Add Customer
                </button>
                            <h1>{this.state.responseCustomerSuccess}</h1>
                        </form>
                    </div>
                </div>
            </section>
            <section>
                <div className="page-header">
                    <h2>Update Customer </h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.requestCustomerUpdate}>
                            <div className="form-group">
                                <input
                                    type="number"
                                    name="Cust_id"
                                    id="Cust_id"
                                    placeholder="Enter ID #"
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
                            <button type="submit" className="btn button btn-lg">
                                Update Customer
                </button>
                            <h1>{this.state.responseCustomerUpdated}</h1>
                        </form>
                    </div>
                </div>
            </section>
            <section>
                <div className="page-header">
                    <h2>Delete Customer </h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.requestCustomerDelete}>
                            <div className="form-group">
                                <label htmlFor="Customer">CUSTOMER ID</label>
                                <input
                                    type="number"
                                    name="Cust_id"
                                    id="Cust_id"
                                    placeholder="Customer ID"
                                    className="form-control input-lg"
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button type="submit" className="btn button btn-lg">
                                Delete Customer
                </button>
                            <h1>{this.state.responseCustomerDeleted}</h1>
                        </form>
                    </div>
                </div>
            </section>
            <section>
                <div className="page-header">
                    <h2>Add Customer Account</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.requestCustomerAccountInfo}>
                            <div className="form-group">
                                <input
                                    type="number"
                                    name="Cust_id"
                                    id="Cust_id"
                                    placeholder="Enter Customer ID #"
                                    maxLength="12"
                                    className="form-control input-lg"
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="Email"
                                    id="Email"
                                    placeholder="you@example.com"
                                    className="form-control input-lg"
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="Phone"
                                    id="Phone"
                                    placeholder="Phone Number"
                                    className="form-control input-lg"
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="Uname"
                                    id="Uname"
                                    placeholder="Username"
                                    className="form-control input-lg"
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="Passwd"
                                    id="Passwd"
                                    placeholder="Password"
                                    className="form-control input-lg"
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button type="submit" className="btn button btn-lg">
                                Add Customer Account
                </button>
                            <h1>{this.state.responseCustomerAccountSuccess}</h1>
                        </form>
                    </div>
                </div>
            </section>
            <section>
                <div className="page-header">
                    <h2>Update Customer Account</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.requestCustomerAccountUpdate}>
                            <div className="form-group">
                                <input
                                    type="number"
                                    name="Cust_id"
                                    id="Cust_id"
                                    placeholder="Enter ID #"
                                    maxLength="12"
                                    className="form-control input-lg"
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="Email"
                                    id="Email"
                                    placeholder="you@example.com"
                                    className="form-control input-lg"
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="Phone"
                                    id="Phone"
                                    placeholder="Phone Number"
                                    className="form-control input-lg"
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="Uname"
                                    id="Uname"
                                    placeholder="Username"
                                    className="form-control input-lg"
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="Passwd"
                                    id="Passwd"
                                    placeholder="Password"
                                    className="form-control input-lg"
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button type="submit" className="btn button btn-lg">
                                Update Customer Account
                </button>
                            <h1>{this.state.responseCustomerAccountUpdated}</h1>
                        </form>
                    </div>
                </div>
            </section>
            <section>
                <div className="page-header">
                    <h2>Delete Customer Account </h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.requestCustomerAccountDelete}>
                            <div className="form-group">
                                <label htmlFor="Customer">CUSTOMER ID</label>
                                <input
                                    type="number"
                                    name="Cust_id"
                                    id="Cust_id"
                                    placeholder="Customer ID"
                                    className="form-control input-lg"
                                    required
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button type="submit" className="btn button btn-lg">
                                Delete Customer Account
                </button>
                            <h1>{this.state.responseCustomerAccountDeleted}</h1>
                        </form>
                    </div>
                </div>
            </section>
            <section>
          <div className="page-header">
            <h2>Add Merchandise </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestMerchandiseInfo}>
              <div className="form-group">
                  <input
                    type="number"
                    name="Merch_id"
                    id="Merch_id"
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
                    name="Merch_type"
                    id="Merch_type"
                    placeholder="Type of Merchandise"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="Merch_name"
                    id="Merch_name"
                    placeholder="Name of Merchandise"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Merch_price"
                    id="Merch_price"
                    placeholder="Price"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Merch_count"
                    id="Merch_count"
                    placeholder="Current stock"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Create Merchandise
                </button>
                <h1>{this.state.responseMerchSuccess}</h1>
              </form>
            </div>
          </div>
        </section>


        <section>
          <div className="page-header">
            <h2>Update Merchandise </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestMerchandiseUpdate}>
              <div className="form-group">
                  <input
                    type="number"
                    name="Merch_id"
                    id="Merch_id"
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
                    name="Merch_type"
                    id="Merch_type"
                    placeholder="Type of Merchandise"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="Merch_name"
                    id="Merch_name"
                    placeholder="Name of Merchandise"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Merch_price"
                    id="Merch_price"
                    placeholder="Price"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Merch_count"
                    id="Merch_count"
                    placeholder="Current stock"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Update Merchandise
                </button>
                <h1>{this.state.responseMerchUpdated}</h1>
              </form>
            </div>
          </div>
        </section>


        <section>
          <div className="page-header">
            <h2>Delete Merchandise </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestMerchandiseDelete}>
              <div className="form-group">
                  <label htmlFor="Inventory">Merchandise ID</label>
                  <input
                    type="number"
                    name="Merch_id"
                    id="Merch_id"
                    placeholder="Merchandise ID"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Delete Merchandise
                </button>
                <h1>{this.state.responseMerchDeleted}</h1>
              </form>
            </div>
          </div>
        </section>



        <section>
          <div className="page-header">
            <h2>Create Piercing </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestPiercingInfo}>
              <div className="form-group">
                  <input
                    type="number"
                    name="Pierce_no"
                    id="Pierce_no"
                    placeholder="Enter Pierce #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Cust_id"
                    id="Cust_id"
                    placeholder="Enter Cust #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Pierce_type"
                    id="Pierce_type"
                    placeholder="Enter Pierce Type #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Price"
                    id="Price"
                    placeholder="Enter Price"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Equip_id"
                    id="Equip_id"
                    placeholder="Equipment ID"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Create Piercing
                </button>
                <h1>{this.state.responsePiercingSuccess}</h1>
              </form>
            </div>
          </div>
        </section>



        <section>
          <div className="page-header">
            <h2>Update Piercing </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestPiercingUpdate}>
              <div className="form-group">
                  <input
                    type="number"
                    name="Pierce_no"
                    id="Pierce_no"
                    placeholder="Enter Pierce #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Cust_id"
                    id="Cust_id"
                    placeholder="Enter Cust #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Pierce_type"
                    id="Pierce_type"
                    placeholder="Enter Pierce Type #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Price"
                    id="Price"
                    placeholder="Enter Price"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Equip_id"
                    id="Equip_id"
                    placeholder="Equipment ID"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Update Piercing
                </button>
                <h1>{this.state.responsePiercingUpdated}</h1>
              </form>
            </div>
          </div>
        </section>



        <section>
          <div className="page-header">
            <h2>Delete Piercing </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestPiercingDelete}>
              <div className="form-group">
                  <label htmlFor="Inventory">Piercing No</label>
                  <input
                    type="number"
                    name="Pierce_no"
                    id="Pierce_no"
                    placeholder="Enter Pierce Number"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Delete Piercing
                </button>
                <h1>{this.state.responsePiercingDeleted}</h1>
              </form>
            </div>
          </div>
        </section>



        <section>
          <div className="page-header">
            <h2>Create Tattoo </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestTattooInfo}>
              <div className="form-group">
                  <input
                    type="number"
                    name="Tat_no"
                    id="Tat_no"
                    placeholder="Enter Tattoo #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Cust_id"
                    id="Cust_id"
                    placeholder="Enter Cust #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Color"
                    id="Color"
                    placeholder="Enter Color #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Size"
                    id="Size"
                    placeholder="Enter Size #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Est_time"
                    id="Est_time"
                    placeholder="EST # of hours"
                    maxLength="12"
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
                    name="Equip_id"
                    id="Equip_id"
                    placeholder="Equipment ID #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Create Tattoo
                </button>
                <h1>{this.state.responseTattooSuccess}</h1>
              </form>
            </div>
          </div>
        </section>


        <section>
          <div className="page-header">
            <h2>Update Tattoo </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestTattooUpdate}>
              <div className="form-group">
                  <input
                    type="number"
                    name="Tat_no"
                    id="Tat_no"
                    placeholder="Enter Tattoo #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Cust_id"
                    id="Cust_id"
                    placeholder="Enter Cust #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Color"
                    id="Color"
                    placeholder="Enter Color #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Size"
                    id="Size"
                    placeholder="Enter Size #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Est_time"
                    id="Est_time"
                    placeholder="EST # of hours"
                    maxLength="12"
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
                    name="Equip_id"
                    id="Equip_id"
                    placeholder="Equipment ID #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Update Tattoo
                </button>
                <h1>{this.state.responseTattooUpdated}</h1>
              </form>
            </div>
          </div>
        </section>


        <section>
          <div className="page-header">
            <h2>Delete Tattoo </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestTattooDelete}>
              <div className="form-group">
                  <label htmlFor="Inventory">Piercing No</label>
                  <input
                    type="number"
                    name="Tat_no"
                    id="Tat_no"
                    placeholder="Enter Tattoo Number"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Delete Tattoo
                </button>
                <h1>{this.state.responseTattooDeleted}</h1>
              </form>
            </div>
          </div>
        </section>


        <section>
          <div className="page-header">
            <h2>Create Result </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestResultInfo}>
              <div className="form-group">
                  <input
                    type="number"
                    name="Result_id"
                    id="Result_id"
                    placeholder="Enter Result #"
                    maxLength="12"
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
                    name="Cust_id"
                    id="Cust_id"
                    placeholder="Enter Cust #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Artist_id"
                    id="Artist_id"
                    placeholder="Enter Artist #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Res_type">Reservation Type</label>
                  <select
                    className="form-control input-lg"
                    name="Res_type"
                    id="Res_type"
                    required
                    onChange={this.handleChange}
                  >
                    <option value="">Please Select...</option>
                    <option value="Tattoo">Tattoo</option>
                    <option value="Piercing">Piercing</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="Res_date">Reservation Date</label>
                  <input
                    type="Date"
                    name="Res_date"
                    id="Res_date"
                    placeholder="MM/DD/YYYY"
                    maxLength="10"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Start_time">Start Time</label>
                  <input
                    type="time"
                    name="Start_time"
                    id="Start_time"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="End_time">End Time</label>
                  <input
                    type="time"
                    name="End_time"
                    id="End_time"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Create Result
                </button>
                <h1>{this.state.responseResultSuccess}</h1>
              </form>
            </div>
          </div>
        </section>



        <section>
          <div className="page-header">
            <h2>Update Result </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestResultUpdate}>
              <div className="form-group">
                  <input
                    type="number"
                    name="Result_id"
                    id="Result_id"
                    placeholder="Enter Result #"
                    maxLength="12"
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
                    name="Cust_id"
                    id="Cust_id"
                    placeholder="Enter Cust #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Artist_id"
                    id="Artist_id"
                    placeholder="Enter Artist #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Res_type">Reservation Type</label>
                  <select
                    className="form-control input-lg"
                    name="Res_type"
                    id="Res_type"
                    required
                    onChange={this.handleChange}
                  >
                    <option value="">Please Select...</option>
                    <option value="Tattoo">Tattoo</option>
                    <option value="Piercing">Piercing</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="Res_date">Reservation Date</label>
                  <input
                    type="Date"
                    name="Res_date"
                    id="Res_date"
                    placeholder="MM/DD/YYYY"
                    maxLength="10"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Start_time">Start Time</label>
                  <input
                    type="time"
                    name="Start_time"
                    id="Start_time"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="End_time">End Time</label>
                  <input
                    type="time"
                    name="End_time"
                    id="End_time"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Update Result
                </button>
                <h1>{this.state.responseResultUpdated}</h1>
              </form>
            </div>
          </div>
        </section>



        <section>
          <div className="page-header">
            <h2>Delete Result </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestResultDelete}>
              <div className="form-group">
                  <label htmlFor="Result">Result ID</label>
                  <input
                    type="number"
                    name="Result_id"
                    id="Result_id"
                    placeholder="Enter Result ID"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Delete Result
                </button>
                <h1>{this.state.responseResultDeleted}</h1>
              </form>
            </div>
          </div>
        </section>



        <section>
          <div className="page-header">
            <h2>Create Waiver Policy </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestWaiverPolicyInfo}>
              <div className="form-group">
                  <input
                    type="number"
                    name="Pol_id"
                    id="Pol_id"
                    placeholder="Enter Policy #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Pol_signed"
                    id="Pol_signed"
                    placeholder="Policy Sign #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                <label htmlFor="Res_date">Policy Date</label>
                  <input
                    type="date"
                    name="Pol_date"
                    id="Pol_date"
                    placeholder="MM/DD/YYYY"
                    maxLength="10"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Cust_id"
                    id="Cust_id"
                    placeholder="Cust ID #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Create Waiver Policy
                </button>
                <h1>{this.state.responseWaiverPolicySuccess}</h1>
              </form>
            </div>
          </div>
        </section>



        <section>
          <div className="page-header">
            <h2>Update Waiver Policy </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestWaiverPolicyUpdate}>
              <div className="form-group">
                  <input
                    type="number"
                    name="Pol_id"
                    id="Pol_id"
                    placeholder="Enter Policy #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Pol_signed"
                    id="Pol_signed"
                    placeholder="Policy Sign #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                <label htmlFor="Res_date">Policy Date</label>
                  <input
                    type="date"
                    name="Pol_date"
                    id="Pol_date"
                    placeholder="MM/DD/YYYY"
                    maxLength="10"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Cust_id"
                    id="Cust_id"
                    placeholder="Cust ID #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Update Waiver Policy
                </button>
                <h1>{this.state.responseWaiverPolicyUpdated}</h1>
              </form>
            </div>
          </div>
        </section>


        <section>
          <div className="page-header">
            <h2>Delete Waiver Policy </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestWaiverPolicyDelete}>
              <div className="form-group">
                  <label htmlFor="Result">Policy ID</label>
                  <input
                    type="number"
                    name="Pol_id"
                    id="Pol_id"
                    placeholder="Enter Result ID"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Delete Waiver Policy
                </button>
                <h1>{this.state.responseWaiverPolicyDeleted}</h1>
              </form>
            </div>
          </div>
        </section>



        <section>
          <div className="page-header">
            <h2>Create Cancellation Policy </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestCancellationPolicyInfo}>
              <div className="form-group">
                  <input
                    type="number"
                    name="Pol_id"
                    id="Pol_id"
                    placeholder="Enter Policy #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Pol_signed"
                    id="Pol_signed"
                    placeholder="Policy Sign #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                <label htmlFor="Res_date">Policy Date</label>
                  <input
                    type="date"
                    name="Pol_date"
                    id="Pol_date"
                    placeholder="MM/DD/YYYY"
                    maxLength="10"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Cust_id"
                    id="Cust_id"
                    placeholder="Cust ID #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Create Cancellation Policy
                </button>
                <h1>{this.state.responseCancellationPolicySuccess}</h1>
              </form>
            </div>
          </div>
        </section>



        <section>
          <div className="page-header">
            <h2>Update Cancellation Policy </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestCancellationPolicyUpdate}>
              <div className="form-group">
                  <input
                    type="number"
                    name="Pol_id"
                    id="Pol_id"
                    placeholder="Enter Policy #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Pol_signed"
                    id="Pol_signed"
                    placeholder="Policy Sign #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                <label htmlFor="Res_date">Policy Date</label>
                  <input
                    type="date"
                    name="Pol_date"
                    id="Pol_date"
                    placeholder="MM/DD/YYYY"
                    maxLength="10"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="Cust_id"
                    id="Cust_id"
                    placeholder="Cust ID #"
                    maxLength="12"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Update Cancellation Policy
                </button>
                <h1>{this.state.responseCancellationPolicyUpdated}</h1>
              </form>
            </div>
          </div>
        </section>


        <section>
          <div className="page-header">
            <h2>Delete Cancellation Policy </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestCancellationPolicyDelete}>
              <div className="form-group">
                  <label htmlFor="Result">Policy ID</label>
                  <input
                    type="number"
                    name="Pol_id"
                    id="Pol_id"
                    placeholder="Enter Result ID"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Delete Cancellation Policy
                </button>
                <h1>{this.state.responseCancellationPolicyDeleted}</h1>
              </form>
            </div>
          </div>
        </section>



        <section>
          <div className="page-header">
            <h2>Add Shop Owner </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestShopOwnerInfo}>
              <div className="form-group">
                  <input
                    type="number"
                    name="Own_id"
                    id="Own_id"
                    placeholder="Enter Unique ID #"
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
                <button type="submit" className="btn button btn-lg">
                  Create Shop Owner
                </button>
                <h1>{this.state.responseShopOwnerSuccess}</h1>
              </form>
            </div>
          </div>
        </section>



        <section>
          <div className="page-header">
            <h2>Update Shop Owner </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestShopOwnerUpdate}>
              <div className="form-group">
                  <input
                    type="number"
                    name="Own_id"
                    id="Own_id"
                    placeholder="Enter Unique ID #"
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
                <button type="submit" className="btn button btn-lg">
                  Update Shop Owner
                </button>
                <h1>{this.state.responseShopOwnerUpdated}</h1>
              </form>
            </div>
          </div>
        </section>


        <section>
          <div className="page-header">
            <h2>Delete Shop Owner </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.requestShopOwnerDelete}>
              <div className="form-group">
                  <label htmlFor="Result">Shop Owner ID</label>
                  <input
                    type="number"
                    name="Own_id"
                    id="Own_id"
                    placeholder="Enter Owner ID"
                    className="form-control input-lg"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="btn button btn-lg">
                  Delete Shop Owner
                </button>
                <h1>{this.state.responseShopOwnerDeleted}</h1>
              </form>
            </div>
          </div>
        </section>



      </main>
    );
    }
}

