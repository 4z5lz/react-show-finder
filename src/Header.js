import React, { Component } from 'react';
import Search from './Search';
import Toggle from './Toggle';

class Header extends Component {
    render () {
        
        return (                            
                <nav className="nav has-shadow" id="top">
                    <div className="container">
                        <div className="nav-left">
                            <Search buttonText={'Search'} />                            
                        </div>
                        <span className="nav-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <div className="nav-right nav-menu">
                            <Toggle />
                        </div>
                    </div>
                </nav>                
        );
    }
};

export default Header;