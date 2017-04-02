import React, { PropTypes } from 'react';

const Movie = (data) => {

        let {img, title, desc} = data.item;

        return (
            <div className="column is-one-quarter">
                <div className="card">
                    <div className="card-image">
                        <figure className="image">
                            <img src={img}/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{title}</p>
                                <p className="subtitle is-6">{desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

Movie.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired    
    })    
};

export default Movie;