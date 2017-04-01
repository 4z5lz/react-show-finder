import React, { Component } from 'react';
import Search from './Search';
import Toggle from './Toggle';

class Header extends Component {
    render () {
        
        return (
                <div>
                    <Search buttonText={'Search'} />
                    <Toggle />
                </div>
        );
    }
};

export default Header;