import React, {Component} from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from './pages/main.js';
import SearchResults from './pages/searchResults/SearchResults';
import Show from './pages/show/Show';
import Actor from './pages/actor/Actor';

class App extends Component {

    render () {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={SearchResults} />
                    <Route path="/show/:showId" component={Show} />                
                    <Route path="/actor/:actorId" component={Actor} />                
                </Route>
            </Router>
        );
    }
} 

export default App;