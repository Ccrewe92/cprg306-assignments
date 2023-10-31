"use client";

import React, { useState } from 'react';
import Link from 'next/link';

function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (e) => {
        e.preventDefault();

        const item = { name, quantity, category };
        console.log(item);

        // Call the onAddItem prop with the item details
        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-black">
            <form onSubmit={handleSubmit}>
                {/* ... rest of your form code remains unchanged ... */}
            </form>
            <Link href="/">
                <a className="text-gray-300 hover:text-orange-500 transition-transform duration-300 transform hover:scale-104 hover:translate-x-0.5 inline-block py-1 px-2 mt-2 mb-6">
                    Back To Home
                </a>
            </Link>
        </div>
    );
}

export default NewItem;
