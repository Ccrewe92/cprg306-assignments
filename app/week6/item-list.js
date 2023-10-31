import React, { useState } from "react";
import Item from './item';

const ItemList = ({ items }) => {
    const [sortBy, setSortBy] = useState('name');

    // ... rest of the sorting and grouping logic

    return (
      <div>
        <div>
          <button
            className={`btn ${sortBy === 'name' ? 'btn-active' : ''}`}
            onClick={handleSortByName}
          >
            Sort by Name
          </button>
          <button
            className={`btn ${sortBy === 'category' ? 'btn-active' : ''}`}
            onClick={handleSortByCategory}
          >
            Sort by Category
          </button>
          {}
        </div>
        {itemComponents}
      </div>
    );
};

export default ItemList;
