import React, { Component } from 'react';

class SearchBox extends Component {
    render () {
        return (
                <div className="field has-addons">
                    <p className="control">
                        <input className="input" type="text" placeholder="Search movies" />
                        <a className="button is-info">
                            Search
                        </a>
                    </p>
                </div>                
        );
    }
};

export default SearchBox;