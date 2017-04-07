import React, {Component} from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from './pages/main.js';
import Search from './pages/search/index';

class App extends Component {

    render () {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={Search} />
                </Route>
            </Router>
        );
    }
}

export default App;