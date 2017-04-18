import React, { PropTypes } from 'react'

const Item = ({ item, onSelect }) => (

    <div className="column is-3">
        <div className="panel">
            <p className="is-marginless">
                <img
                    onClick={() => onSelect(item.id)}
                    src={item.img}
                    alt={item.title}
                />
            </p>
            <div className="panel-block">
                <div className="columns">
                    <div className="column">
                        <h2>{item.name}</h2>
                        <p>{item.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

Item.propType = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
  }),
  onSelect: PropTypes.func.isRequired,
};

export default Item;