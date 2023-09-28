import React from 'react';
import Item from './item'; 
import Link from 'next/link';

const ItemList = () => {
    // Consolidate all individual item constants into one items array
    const items = [
        {
            name: "milk, 4 L 🥛",
            quantity: 1,
            category: "dairy",
        },
        {
            name: "bread 🍞",
            quantity: 2,
            category: "bakery",
        },
        {
            name: "eggs, dozen 🥚",
            quantity: 2,
            category: "dairy",
        },
        {
            name: "bananas 🍌",
            quantity: 6,
            category: "produce",
        },
        {
            name: "broccoli 🥦",
            quantity: 3,
            category: "produce",
        },
        {
            name: "chicken breasts, 1 kg 🍗",
            quantity: 1,
            category: "meat",
        },
        {
            name: "pasta sauce 🍝",
            quantity: 3,
            category: "canned goods",
        },
        {
            name: "spaghetti, 454 g 🍝",
            quantity: 2,
            category: "dry goods",
        },
        {
            name: "toilet paper, 12 pack 🧻",
            quantity: 1,
            category: "household",
        },
        {
            name: "paper towels, 6 pack",
            quantity: 1,
            category: "household",
        },
        {
            name: "dish soap 🍽️",
            quantity: 1,
            category: "household",
        },
        {
            name: "hand soap 🧼",
            quantity: 4,
            category: "household",
        }
    ];

    return (
        <div>
            <ul className="space-y-4">
                {items.map((item, index) => (
                    <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
            </ul>
        <Link
        href="/" className="text-gray-300 hover:text-orange-500 transition-transform duration-300 transform hover:scale-104 hover:translate-x-0.5 inline-block py-1 px-2 mt-2 mb-6"
        > Back To Home </Link>
        </div>
    );
}

export default ItemList;





