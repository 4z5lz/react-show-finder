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
                    <div className="columns">
                        <div className="column is-8">
                            <div className="title">Search results</div>
                        </div>
                        <div className="column is-4 has-text-right"></div>
                    </div>
                        
                    <hr/>

                    <div className="columns">
                        
                        <div className="column is-3">
                            <div className="panel">
                                <p className="is-marginless">
                                    <img src="https://placehold.it/300x300"/>
                                </p>
                                <div className="panel-block">
                                    <div className="columns">
                                        <div className="column">
                                            dddd
                                        </div>
                                        <div className="column has-text-right">
                                            jjj
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
        );
    }
};

export default Search;