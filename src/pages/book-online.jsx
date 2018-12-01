import React, { Component } from 'react';

//import nodemailer from 'config.js';
const BookOnline = () => {
    return (
        <main>
            <section>
                <div className="page-header"> 
                    <h2>Reservation Form</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form action="/api/requests" method="post" >
                            <div className="form-group">
                                <input type="text" name="firstName" id="firstName" placeholder="First Name" className="form-control input-lg" required/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="lastName" id="lastName" placeholder="Last Name" className="form-control input-lg" required/>
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" id="email" placeholder="Email Address" className="form-control input-lg" onChange={validateEmail} required/>
                            </div>
                            <div className="form-group">
                                <input type="tel" name="phone" id="phone" placeholder="###-###-####" maxlength="12" className="form-control input-lg" onChange={validatePhone}required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Artist">Artist</label>
                                <select className="form-control input-lg" name="artist" id="id" required>
                                    <option value="" >Please Select...</option>
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
                                <input type="Date" name="date" id="date" placeholder="MM/DD/YYYY" maxlength="10" className="form-control input-lg" required/>
                            </div>
                            <button type="submit" className="btn button btn-lg" onclick={validate}>Request Info</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
       
    );



    function validateEmail() {
        var email = document.getElementById('email')
        var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        email.addEventListener("input", function (event) {
            if(email.value.match(mailFormat)) {
                email.setCustomValidity("");
                return true;
            }
            else {
                email.setCustomValidity("You have entered an invalid email address");
                return false;
            }
        });
  
    }
    function validatePhone(){
        var phone = document.getElementById('phone')
        var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        phone.addEventListener("input", function (event) {
            if(phone.value.match(phoneNum)) {
                phone.setCustomValidity("");
                return true;
            }
            else {
                phone.setCustomValidity("You have entered an invalid phone number");
                return false;
            }
        });
     
    }
    function validate(){
 
        validateEmail();
        validatePhone();
    }
};

export default BookOnline;
