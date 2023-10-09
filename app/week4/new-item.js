"use client";

import React, { useState } from 'react';

function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (e) => {
        e.preventDefault();

        const item = { name, quantity, category };
        console.log(item);
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-black">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input 
                        type="text" 
                        placeholder="Item name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md text-black"
                    />
                </div>
                <div className="mb-4">
                    <input 
                        type="number" 
                        min="1" 
                        max="99"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        required
                        className="w-32 px-3 py-2 border rounded-md mr-4 text-black"
                    />
                    <select 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)}
                        className="px-3 py-2 border rounded-md text-black"
                    >
                        {/* ...all the categories as <option> elements here... */}
                    </select>
                </div>
                <button 
                    type="submit" 
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default NewItem;