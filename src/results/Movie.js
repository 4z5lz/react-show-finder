import React, { Component, PropTypes } from 'react';

class Movie extends Component {
    
    render () {
        
        return (
                <div>
                    {this.props.item.img}
                </div>
        );
    }
};

export default Movie;