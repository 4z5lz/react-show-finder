import React, { Component } from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

// import 'bulma/css/bulma.css';
import './main.css';

class Main extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Header />
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