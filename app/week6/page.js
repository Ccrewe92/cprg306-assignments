"use client";

import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

const Page = () => {
    // Initialize items state with data from items.json
    const [items, setItems] = useState(itemsData);

    // Event handler to add a new item
    const handleAddItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    }

    return (
        <main className="min-h-screen bg-gray-900 p-8">
            <h1 className="text-2xl font-bold text-white mb-6">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />  // Pass the handleAddItem event handler as a prop
            <ItemList items={items} />  // Pass the items state as a prop
        </main>
    );
}

export default Page;
