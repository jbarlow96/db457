import React, { Component } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
//import logo from './logo.svg';
//import '../../css/index.css';
//import Header from '../../components/layout/header';

class Home extends Component {


  render() {
    return (

    
  <main>
    <section>
        {/* <Route path ='/' component={Header}/> */}
        {/* <section>
        <h3>Welcome to the Home Page</h3>
        </section> */}
        
        

        
        <div>
          <h2>WELCOME TO BULLET'S INK TATTOO & PIERCING</h2>
          <p> Bullet's Innk is Carrol County's one stop shop
             for all of your custom tattoo needs. One of our 
             amazing artists will work with you on an individual 
             vasis to create a custom piece of art you wont soon regret!! 
             Stop in and check us out!
          </p>
        </div>
        <div>
          <h2>Hours of Operation</h2>
          <ul>
            <li>Monday:    10:00 AM - 8:00 PM </li>
            <li>Tuesday:   10:00 AM - 8:00 PM </li>
            <li>Wednesday: 12:00 PM - 8:00 PM</li>
            <li>Thursday:  10:00 AM - 8:00 PM </li>
            <li>Friday:    10:00 AM - 8:00 PM </li>
            <li>Saturday:  10:00 AM - 8:00 PM </li>
            <li>Sunday:    CLOSED</li>
          </ul>
        </div>


        {/* adding contact form here */}
      
        <div class="container">
	<div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="well well-sm">
          <form class="form-horizontal" action="" method="post">
          <fieldset>
            <legend class="text-center">Contact us</legend>
    

            <div class="form-group">
              <label class="col-md-3 control-label" for="name">Name</label>
              <div class="col-md-9">
                <input id="name" name="name" type="text" placeholder="Your name" class="form-control"/>
              </div>
            </div>
    
       
            <div class="form-group">
              <label class="col-md-3 control-label" for="email">Your E-mail</label>
              <div class="col-md-9">
                <input id="email" name="email" type="text" placeholder="Your email" class="form-control"/>
              </div>
            </div>
    
   
            <div class="form-group">
              <label class="col-md-3 control-label" for="message">Your message</label>
              <div class="col-md-9">
                <textarea class="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>
              </div>
            </div>
    
          
            <div class="form-group">
              <div class="col-md-12 text-right">
                <button type="submit" class="btn btn-primary btn-lg">Submit</button>
              </div>
            </div>
          </fieldset>
          </form>
        </div>
      </div>
	</div>
</div>
        
</section>
</main>



// </div>


//       </div>

    );
  }
}

export default Home;