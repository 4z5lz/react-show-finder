import React, { Component } from 'react';
import Header from './Header';
import Results from './results/Results';
import {searchResults} from './results/mock_data';

class App extends Component {
    render() {
        
        return (
                <section className="section">
                    <div className="container is-fluid">
                        <div className="heading">
                            <Header />
                        </div>
                        <Results items={searchResults} />
                    </div>
                </section>    
        );
    }
};

export default App;