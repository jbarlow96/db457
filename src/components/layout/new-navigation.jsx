import React from 'react';
import {NavLink} from 'react-router-dom';
//import Menu from './menu';

const NewNavigation = () => {
    return (
        <body>

        <div class="wrapper">
           <header>
              <nav>
                 <div class="menu-icon">
                    <i class="fa fa-bars fa-2x"></i>
                 </div>
                 <div class="logo">
                    BULLETT'S INK
                 </div>
                 <div class="menu">
                    <ul>
                        <li><NavLink exact ={true} activeClasName='active' to ='/'>Home</NavLink></li>
                        <li><NavLink exact ={true} activeClasName='active' to ='/artists'>Artists</NavLink></li>
                        <li><NavLink exact ={true} activeClasName='active' to ='/book-online'>Book Online</NavLink></li>
                        <li><NavLink exact ={true} activeClasName='active' to ='/gallery'>Gallery</NavLink></li>
                        {/* <li><NavLink exact ={true} activeClasName='active' to ='/contact'>Contact</NavLink></li> */}
                       {/* <li><a href="#">Home</a></li>
                       <li><a href="#">About</a></li>
                       <li><a href="#">Blog</a></li>
                       <li><a href="#">Contact</a></li> */}

                    </ul>
                 </div>
              </nav>
           </header>
        </div>
     </body>
    );
};

export default NewNavigation;
