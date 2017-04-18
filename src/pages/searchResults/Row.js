import React, { PropTypes } from 'react'
import Item from './Item';

const Row = ({ items, onTileSelect }) => (
    <div className="columns">
        {items.map(item => (
            <Item key={item.id} item={item} onSelect={onTileSelect}/>
        ))}
    </div>
);

Row.propTypes = {
  items: PropTypes.array,
  onTileSelect: PropTypes.func.isRequired,
};

Row.defaultProps = {
  items: [],
};

export default Row;