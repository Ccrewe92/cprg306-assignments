"use client";

import React, { useState } from 'react';
import { useUserAuth } from '../_utils/auth-context'; // Update the import path based on your project structure
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

const Page = () => {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');
    const { user } = useUserAuth(); // Using the custom hook to get the user

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const handleItemSelect = (item) => {
        setSelectedItemName(item.name);
        // ... any other logic for handleItemSelect
    };

    // Display a message if the user is not logged in
    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl text-white">You must be logged in to view this page.</p>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-900 p-8">
            <h1 className="text-2xl font-bold text-white mb-6">Shopping List</h1>
            <div className="flex">
                <div className="flex-1">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="flex-1">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
};

export default Page;