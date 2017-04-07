import React, { Component } from 'react';
import Header from './Header';

import 'bulma/css/bulma.css';
import './main.css';

class Main extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default Main;