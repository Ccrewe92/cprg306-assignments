"use client";
import React, { useState } from 'react';
import Item from './item';

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

    const handleGroupByCategory = () => {
        setSortBy('groupedCategory');
    };

    const groupedItems = items.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    const sortedCategories = Object.keys(groupedItems).sort();

    const buttonStyles = `
        .btn {
            padding: 8px 16px;
            background-color: white;
            border: 1px solid #ccc;
            border-radius: 4px;
            color: #333;
            cursor: pointer;
            transition: background-color 0.3s, color 0.3s;
            margin-right: 10px; /* Adds spacing between buttons */
        }

        .btn:hover {
            background-color: lightblue;
            color: #fff;
        }

        .btn-active {
            background-color: lightblue;
            color: #fff;
        }
    `;

    return (
        <div>
            <style>{buttonStyles}</style>
            <div>
                <button
                    className={`btn ${sortBy === 'name' ? 'btn-active' : ''}`}
                    onClick={handleSortByName}
                >
                    Sort by Name
                </button>
                <button
                    className={`btn ${sortBy === 'category' ? 'btn-active' : ''}`}
                    onClick={handleSortByCategory}
                >
                    Sort by Category
                </button>
                <button
                    className={`btn ${sortBy === 'groupedCategory' ? 'btn-active' : ''}`}
                    onClick={handleGroupByCategory}
                >
                    Group by Category
                </button>
            </div>
            {sortBy === 'groupedCategory' ? (
                <div>
                    {sortedCategories.map((category) => (
                        <div key={category}>
                            <h2>{category}</h2>
                            <ul className="space-y-4">
                                {groupedItems[category].map((item) => (
                                    <Item
                                        key={item.id}
                                        name={item.name}
                                        quantity={item.quantity}
                                        category={item.category}
                                    />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
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
            )}
        </div>
    );
}

export default ItemList;