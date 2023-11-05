"use client";
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas'; // Assuming this component exists
import itemsData from './items.json';

const Page = () => {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    };

    const handleItemSelect = (itemName) => {
        // Cleanup item name by removing sizes and emojis
        const cleanedName = itemName.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2600-\u26FF])/g, '');
        setSelectedItemName(cleanedName);
    };

    return (
        <main className="min-h-screen bg-gray-900 p-8 flex justify-between">
            <div className="w-1/2 space-y-6">
                <h1 className="text-2xl font-bold text-white mb-6">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="w-1/2">
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}

export default Page;
