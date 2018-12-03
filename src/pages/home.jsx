import React, { Component } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
//import logo from './logo.svg';
//import '../../css/index.css';
//import Header from '../../components/layout/header';


const MY_API = 'AIzaSyCftvFVQlonprlXUmTKhLMTGba1eNiiidA'
let _url = `https://www.google.com/maps/embed/v1/place?key=${MY_API}&q=39.363312,-77.162910`

class Home extends Component {


  render() {
    return (

    
  <main>
      <section>
        {/* <Route path ='/' component={Header}/> */}
        {/* <section>
        <h3>Welcome to the Home Page</h3>
        </section> */}
        
        

        
        <div class = "welcome_info">
          <div class = "col-xs-12 col-sm-6 col-md-6">
            <h1>WELCOME TO BULLETT'S INK TATTOO & PIERCING</h1>
          </div>

          <div class = "col-xs-12 col-sm-6 col-md-6">
            <p> Bullett's Ink is Carrol County's one stop shop
              for all of your custom tattoo needs. One of our 
              amazing artists will work with you on an individual 
              vasis to create a custom piece of art you wont soon regret!! 
              Stop in and check us out!
             </p>
          </div>
        </div>
        
        <div class = "welcome_border"></div>


        <div class = "contact_info">
          <h2>CONTACT US</h2>
          <div>
            <h3>ADDRESS</h3>

            <div id ="bulletts_location">
 
            <a href="https://www.google.com/maps/place/1603+Ridgeside+Dr,+Mt+Airy,+MD+21771/@39.3631833,-77.1650515,17z/data=!3m1!4b1!4m5!3m4!1s0x89c82c90557b29cf:0x2542b8b2d000b65!8m2!3d39.3631833!4d-77.1628574"><span class="glyphicon glyphicon-map-marker">   1603 Ridgeside Dr, Mount Airy, MD 21771</span></a>
              
            </div>
            
            
            <div id = "contact_number">
              <a href="tel:3018298500"><span class="glyphicon glyphicon-earphone">   (301)-829-8500</span></a>
            </div>
            
            <div id ="contact_email">
              <a href="mailto: bullettsinkstaff@gmail.com"><span class="glyphicon glyphicon-envelope">    bullettsinkstaff@gmail.com</span></a>
            </div>
           
          
          </div>
        </div>

        <div class = "hours_of_operation">
          <h3>Hours of Operation</h3>
            <p>Monday:    10:00 AM - 8:00 PM</p>
            <p>Tuesday:   10:00 AM - 8:00 PM </p>
            <p>Wednesday: 12:00 PM - 8:00 PM</p>
            <p>Thursday:  10:00 AM - 8:00 PM </p>
            <p>Friday:    10:00 AM - 8:00 PM</p>
            <p>Saturday:  10:00 AM - 8:00 PM</p>
            <p>Sunday:    CLOSED</p>
          
        </div>


        {/* adding map form here */}
  
      
</section>







    <section>
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



<div id = "map_border" ></div>
<section>
  <iframe frameBorder="0" title="Location" style={{ width: "100%", height: "650"}} 
    src={_url}>
  </iframe> 
</section>
<div id = "map_border" ></div>
</main>



// </div>


//       </div>

    );
  }
}

export default Home;