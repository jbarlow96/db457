import React from 'react';
//import Menu from './menu';
import {NavLink} from 'react-router-dom';
//import bootstrap from '../../css/bootstrap/bootstrap.css';
//const MY_API = 'AIzaSyCftvFVQlonprlXUmTKhLMTGba1eNiiidA'
//let _url = `https://www.google.com/maps/embed/v1/place?key=${MY_API}&q=39.363312,-77.162910`

const Footer = () => {
    return (
   
    
    <section id="footer">
		<div class="container">
			<div class="row text-center text-xs-center text-sm-left text-md-left">
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5> Quick Links</h5>
					<ul class="list-unstyled quick-links">
                        <li><NavLink exact ={true} to ='/'><i class="fa fa-angle-double-right"></i> Home</NavLink></li>
                        <li><NavLink exact ={true} to ='/artists'><i class="fa fa-angle-double-right"></i> Artists</NavLink></li>
                        <li><NavLink exact ={true} to ='/book-online'><i class="fa fa-angle-double-right"></i> Book Online</NavLink></li>
                        <li><NavLink exact ={true} to ='/gallery'><i class="fa fa-angle-double-right"></i>Gallery</NavLink></li>
                        {/* <li><NavLink exact ={true} to ='/contact'><i class="fa fa-angle-double-right"></i>Contact</NavLink></li> */}
                    </ul>
				</div>
				<div class="col-xs-12 col-sm-8 col-md-8">
					<h5> Something relevant here</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
					   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					   nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
					   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					   pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
					   qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit
					   amet, consectetur adipiscing elit, 
					   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					   nisi ut aliquip ex ea commodo consequat.

					</p>
				</div>
				{/* <div class="col-xs-12 col-sm-4 col-md-4">
					<h5> Column 3</h5>
					<ul class="list-unstyled quick-links">
                        <li><NavLink exact ={true} to ='/'><i class="fa fa-angle-double-right"></i> Home</NavLink></li>
                        <li><NavLink exact ={true} to ='/artists'><i class="fa fa-angle-double-right"></i> Artists</NavLink></li>
                        <li><NavLink exact ={true} to ='/book-online'><i class="fa fa-angle-double-right"></i> Book Online</NavLink></li>
                        <li><NavLink exact ={true} to ='/gallery'><i class="fa fa-angle-double-right"></i>Gallery</NavLink></li>
						<li><NavLink exact ={true} to ='/contact'><i class="fa fa-angle-double-right"></i>Contact</NavLink></li>
					</ul>
				</div> */}
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href="https://www.facebook.com/Bullettsink/"><i class="fa fa-facebook"></i></a></li>
						{/* <li class="list-inline-item"><a href=""><i class="fa fa-twitter"></i></a></li> */}
						<li class="list-inline-item"><a href="https://www.instagram.com/explore/locations/214449204/bullets-ink?hl=en"><i class="fa fa-instagram"></i></a></li>
						{/* <li class="list-inline-item"><a href="javascript:void();"><i class="fa fa-google-plus"></i></a></li> */}
						{/* <li class="list-inline-item"><a href="javascript:void();" target="_blank"><i class="fa fa-envelope"></i></a></li> */}
					</ul>
				</div>
				<hr></hr>
			</div>	
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					{/* <p><u><a href="">Bullet's Ink</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Mount Airy, MD]</p> */}
					<p class="h6">This COSC 457 WebApp was constructed by Andrew Louder, Jude Barlow, and David Hanlon</p>
				</div>
				<hr></hr>
			</div>	
		</div>
	</section>
    
        
    );
};

export default Footer;