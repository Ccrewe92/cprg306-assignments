import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
    // Wrap the provided onSelect function to make it usable as an onClick handler
    const handleClick = () => {
        if (onSelect) {
            onSelect(name);
        }
    };

    return (
        // Attach the onClick handler to the list item
        <li className="w-1/4 border border-white p-2 rounded shadow-sm mb-2 bg-gray-800 cursor-pointer"
            onClick={handleClick}>
            <p className="font-semibold text-base mb-1 text-white leading-tight">{name}</p>
            <p className="text-gray-300 text-sm leading-snug">Quantity: {quantity}</p>
            <p className="text-gray-300 text-sm leading-snug">Category: {category}</p>
        </li>
    );
}

export default Item;
