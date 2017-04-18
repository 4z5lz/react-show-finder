import React, { Component, PropTypes } from 'react';
import { Row } from './Row';

const chunkRows = (array) => {
    if (!array) {
        return [];
    }
    const res = [];
    let i, j, chunk = 5;
    for (i = 0, j = array.length; i < j; i += chunk) {
        res.push(array.slice(i,i+chunk));
    }
    return res;
};

const Results = ({searchResults, onTileSelect}) => (
    <div>
        <div className="columns">
            <div className="column is-8">
                <div className="title">Search results</div>
            </div>
            <div className="column is-4 has-text-right"></div>
        </div>
            
        <hr/>
        {chunkRows(searchResults).map((chunk, i) => (
            <Row
                key={`row-${i}`}
                items={chunk}
                onTileSelect={onTileSelect}
            />
        ))}
    </div> 
);
        
        /*return (
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
        );*/
    // }
// };

export default Results;