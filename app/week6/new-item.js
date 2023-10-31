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

        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-black">
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Item name"
                        required
                    />
                </div>
                <div>
                    <input
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="1"
                        required
                    />
                </div>
                <div>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Produce"
                    >
                        <option value="produce">Produce</option>
                    </select>
                </div>
                <div>
                    <button type="submit">+</button>
                </div>
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
