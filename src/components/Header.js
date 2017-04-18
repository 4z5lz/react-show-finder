import React, { Component } from 'react';

import Search from '../components/Search.js';
import Toggle from '../components/Toggle.js';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    
    goToHome () {
        this.props.router.push(`/`)
    }
    
    doSearch (data) {
        this.props.searchResults(data);
    }

    render () {
        return (
            <nav className="nav has-shadow" id="top">
                <div className="container">
                    <div className="nav-left">
                        <a onClick={ this.goToHome.bind(this) } className="icon">
                            <i className="fa fa-home"></i>
                        </a>
                        <Search doSearch={this.doSearch.bind(this)} />
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