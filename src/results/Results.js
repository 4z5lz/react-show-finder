import React, { Component } from 'react';
import Movie from './Movie';

class Results extends Component {
    
    render () {
        const { items } = this.props;
        
        return (
                <div>
                    {items.map(item => (
                        <Movie key={item.id} item={item} />
                    ))}
                </div>
        );
    }
};

export default Results;