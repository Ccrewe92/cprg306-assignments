"use client";

import React, { useState, useEffect } from 'react';
import { getItems, addItem } from '../_services/shopping-list-service';
import { useUserAuth } from '../_utils/auth-context'; // Update the import path based on your project structure
import NewItem from './new-item'; // Assuming these components exist
import ItemList from './item-list';
import MealIdeas from './meal-ideas';

const Page = () => {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    const { user } = useUserAuth(); // Using the custom hook to get the user

    // Async function to load items
    const loadItems = async () => {
        if (user && user.uid) {
            const fetchedItems = await getItems(user.uid);
            setItems(fetchedItems);
        }
    };

    // Update the handleAddItem function to use addItem
    const handleAddItem = async (newItem) => {
        if (user && user.uid) {
            const newItemId = await addItem(user.uid, newItem);
            setItems(prevItems => [...prevItems, { ...newItem, id: newItemId }]);
        }
    };

    const handleItemSelect = (item) => {
        setSelectedItemName(item.name);
        // ... any other logic for handleItemSelect
    };

    // useEffect hook to load items when the component mounts
    useEffect(() => {
        loadItems();
    }, [user]); // Dependency array includes user

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
