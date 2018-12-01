import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = (props) => {
    return (
       <nav class = "top-menu">
        <ul>
            {/* <li><NavLink exact ={true} activeClasName='active' to ='/'>Home</NavLink></li> */}
            <li><NavLink exact ={true} activeClasName='active' to ='/'>Home</NavLink></li>
            <li><NavLink exact ={true} activeClasName='active' to ='/artists'>Artists</NavLink></li>
            <li><NavLink exact ={true} activeClasName='active' to ='/book-online'>Book Online</NavLink></li>
            <li><NavLink exact ={true} activeClasName='active' to ='/gallery'>Gallery</NavLink></li>
            <li><NavLink exact ={true} activeClasName='active' to ='/contact'>Contact</NavLink></li>
            {/* <li><NavLink exact ={true} activeClasName='active' to ='/about-us'>About Us</NavLink></li> */}
            <li className="tagline">{ props.tagline }</li>
        </ul>
       </nav>
    );
};

export default Menu;