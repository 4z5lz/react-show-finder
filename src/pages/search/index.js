import React, { Component, PropTypes } from 'react';

class Search extends Component {
    
    static propTypes = {
        buttonText: PropTypes.string
    }
    
    static defaultProps = {
        buttonText: 'Search!'
    }
    
    render () {
        
        const {buttonText} = this.props;
        
        return (
                <div>
                    <form>
                        <input type="text" />
                        <button>{buttonText}</button>
                    </form>
                </div>
        );
    }
};

export default Search;