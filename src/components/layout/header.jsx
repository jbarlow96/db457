import React from 'react';
import Menu from './menu';

const Header = () => {
    return (
        <header>
            <div class="title">
                <h1>Bullet's Ink</h1>
            </div>
            <div class="sub-title">
                <Menu tagline =""/>
                
               
                <div className="clearfix"></div>
                
            </div>
        </header>
    );
};

export default Header;