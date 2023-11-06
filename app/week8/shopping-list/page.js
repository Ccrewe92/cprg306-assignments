import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Import useRouter
import { useUserAuth } from '../_utils/auth-context'; // Update the import path based on your project structure
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

const Page = () => {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');
    const { user } = useUserAuth(); // Using the custom hook to get the user
    const router = useRouter(); // Hook to control routing

    // Redirect if not logged in
    useEffect(() => {
        // If there is no user, redirect to the login page
        if (!user) {
            router.push('/week8/page'); // Adjust this to the route of your login page
        }
    }, [user, router]);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const handleItemSelect = (item) => {
        // Existing code for handleItemSelect
    };

    // If the user is not logged in, return null or a loader
    if (!user) return null;

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
