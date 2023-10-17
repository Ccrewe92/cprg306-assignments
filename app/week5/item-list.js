"use client";
import React, { useState } from 'react';
import Item from './item';

const ItemList = () => {
    const [sortBy, setSortBy] = useState('name');
    const itemsData = [
        // Your item data here
    ];

    const items = [...itemsData];

    if (sortBy === 'name') {
        items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category') {
        items.sort((a, b) => a.category.localeCompare(b.category));
    }

    const handleSortByName = () => {
        setSortBy('name');
    };

    const handleSortByCategory = () => {
        setSortBy('category');
    };

    return (
        <div>
            <div>
                <button
                    onClick={handleSortByName}
                    style={{
                        backgroundColor: sortBy === 'name' ? 'lightblue' : 'white',
                    }}
                >
                    Sort by Name
                </button>
                <button
                    onClick={handleSortByCategory}
                    style={{
                        backgroundColor: sortBy === 'category' ? 'lightblue' : 'white',
                    }}
                >
                    Sort by Category
                </button>
            </div>
            <ul className="space-y-4">
                {items.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ItemList;