import React, { Component } from 'react';
import {search} from '../api';

class Search extends Component {

    constructor (props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
    }

    onSearchChange(e) {
        this.setState({
            searchTerm: e.target.value
        });

        console.log('this.state.searchTerm', this.state.searchTerm);
    }

    doSearch () {
        const { searchTerm } = this.state;
        
        search(searchTerm).then(rawResults => {
            this.props.doSearch(rawResults);
        });
    }
    
    render () {
        return (
                <div className="field has-addons">
                    <p className="control">
                        <input 
                            className="input" 
                            type="text"
                            placeholder="Search movies"
                            onChange={this.onSearchChange.bind(this)} />
                        
                        <a className="button is-info"
                            onClick={this.doSearch.bind(this)}>
                            Search
                        </a>
                    </p>
                </div>                
        );
    }
};

export default Search;