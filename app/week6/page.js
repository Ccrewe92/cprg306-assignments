"use client";

import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

const Page = () => {

    const [items, setItems] = useState(itemsData);


    const handleAddItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    }

    return (
        <main className="min-h-screen bg-gray-900 p-8">
            <h1 className="text-2xl font-bold text-white mb-6">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}

export default Page;
