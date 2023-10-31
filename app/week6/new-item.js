import React, { useState } from 'react';
import Link from 'next/link';

function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (e) => {
        e.preventDefault();

        const item = { name, quantity, category };
        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

     return (
            <div className="form-container">
                {/* ... [rest of the form code is unchanged] */}

                <style jsx>{`
                    .form-container {
                        background-color: rgba(20, 20, 20, 0.95);
                        color: #ffffff;
                        padding: 2rem;
                        border-radius: 8px;
                        width: 400px;
                        margin: 0 auto;
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
                    }

                    .input-group {
                        margin-bottom: 1.5rem;
                        display: flex;
                        justify-content: space-between;
                    }

                    .half {
                        flex: 0 0 48%;
                        padding: 0 0.5rem;
                    }

                    label, input, select {
                        color: #ffffff;
                    }

                    input, select {
                        background-color: #333;
                        border: 1px solid #555;
                        padding: 5px;
                        border-radius: 4px;
                        color: #fff;
                    }

                    .back-link {
                        display: block;
                        text-align: center;
                        margin-top: 1rem;
                        color: #FF5733;
                        text-decoration: underline;
                    }

                    button {
                        background-color: #FF5733;
                        color: #ffffff;
                        padding: 10px 15px;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                    }

                    button:hover {
                        background-color: #E94E1B;
                    }
                `}</style>
            </div>
        );
    }

export default NewItem;