import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
    // Add an onClick handler to the list item that calls the onSelect prop
    return (
        <li
            className="w-1/4 border border-white p-2 rounded shadow-sm mb-2 bg-gray-800 cursor-pointer"
            onClick={() => onSelect(name)}
        >
            <p className="font-semibold text-base mb-1 text-white leading-tight">{name}</p>
            <p className="text-gray-300 text-sm leading-snug">Quantity: {quantity}</p>
            <p className="text-gray-300 text-sm leading-snug">Category: {category}</p>
        </li>
    );
};

// Export the updated Item component
export default Item;
