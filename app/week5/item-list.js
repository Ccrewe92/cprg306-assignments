"use client";
import React, { useState } from 'react';
import Item from './item';
import Link from 'next/link';

const ItemList = () => {
    const [sortBy, setSortBy] = useState('name');
    const itemsData = [
        {
            "id": "1h2GJKH12gkHG31h1H",
            "name": "milk, 4 L 🥛",
            "quantity": 1,
            "category": "dairy"
        },
        {
            "id": "2KJH3k2j3H1k2J3K1H",
            "name": "bread 🍞",
            "quantity": 2,
            "category": "bakery"
        },
        {
            "id": "3h2KJH3k2j3H1k2J3",
            "name": "eggs, dozen 🥚",
            "quantity": 2,
            "category": "dairy"
        },
        {
            "id": "4k2J3K1H2GJKH12gk",
            "name": "bananas 🍌",
            "quantity": 6,
            "category": "produce"
        },
        {
            "id": "5H1h1H2KJH3k2j3H",
            "name": "broccoli 🥦",
            "quantity": 3,
            "category": "produce"
        },
        {
            "id": "6H1k2J3K1H2GJKH1",
            "name": "chicken breasts, 1 kg 🍗",
            "quantity": 1,
            "category": "meat"
        },
        {
            "id": "7gkHG31h1H2KJH3k",
            "name": "pasta sauce 🍝",
            "quantity": 3,
            "category": "canned goods"
        },
        {
            "id": "8j3H1k2J3K1H2GJK",
            "name": "spaghetti, 454 g 🍝",
            "quantity": 2,
            "category": "dry goods"
        },
        {
            "id": "9H12gkHG31h1H2KJ",
            "name": "toilet paper, 12 pack 🧻",
            "quantity": 1,
            "category": "household"
        },
        {
            "id": "10H3k2j3H1k2J3K1",
            "name": "paper towels, 6 pack",
            "quantity": 1,
            "category": "household"
        },
        {
            "id": "11k2J3K1H2GJKH12",
            "name": "dish soap 🍽️",
            "quantity": 1,
            "category": "household"
        },
        {
            "id": "12GJKH12gkHG31h1",
            "name": "hand soap 🧼",
            "quantity": 4,
            "category": "household"
        }
    ];

    const [items, setItems] = useState([...itemsData]);

    const handleSortByName = () => {
        setSortBy('name');
        const sortedItems = [...items];
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        setItems(sortedItems);
    };

    const handleSortByCategory = () => {
        setSortBy('category');
        const sortedItems = [...items];
        sortedItems.sort((a, b) => a.category.localeCompare(b.category));
        setItems(sortedItems);
    };

    const handleGroupByCategory = () => {
        setSortBy('grouped category');
        const groupedItems = items.reduce((result, item) => {
            if (!result[item.category]) {
                result[item.category] = [];
            }
            result[item.category].push(item);
            return result;
        }, {});
        const sortedGroupedItems = Object.entries(groupedItems).sort((a, b) =>
            a[0].localeCompare(b[0])
        );
        setItems(sortedGroupedItems.flatMap((entry) => entry[1]));
    };

    return (
        <div>
            <div className="flex space-x-2 mb-4">
                <button
                    onClick={handleSortByName}
                    className={`btn ${sortBy === 'name' ? 'btn-active' : ''}`}
                >
                    Sort by Name
                </button>
                <button
                    onClick={handleSortByCategory}
                    className={`btn ${sortBy === 'category' ? 'btn-active' : ''}`}
                >
                    Sort by Category
                </button>
                <button
                    onClick={handleGroupByCategory}
                    className={`btn ${sortBy === 'grouped category' ? 'btn-active' : ''}`}
                >
                    Group by Category
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
            <div className="mt-6">
                <Link
                    href="/"
                    className="block text-gray-300 hover:text-orange-500 transition-transform duration-300 transform hover:scale-104 hover:translate-x-0.5 py-1 px-2"
                >
                    Back To Home
                </Link>
            </div>
        </div>
    );
}

export default ItemList;
