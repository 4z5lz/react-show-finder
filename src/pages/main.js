import React, { Component } from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

// import 'bulma/css/bulma.css';
import './main.css';

class Main extends Component {
    state = {  }

    searchResults (data) {
        console.log('searchResults data', data);
    }

    render() {
        return (
            <div>
                <Header searchResults={this.searchResults.bind(this)} />
                <div className="section">
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
                <Footer />                
            </div>
        );
    }
}

export default Main;