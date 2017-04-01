import React, { Component } from 'react';
import Header from './Header';
import Results from './results/Results';
import {searchResults} from './results/mock_data';

class App extends Component {
    render() {
        
        return (
                <div>
                    <Header />
                    <Results items={searchResults} />
                </div>
        );
    }
};

export default App;