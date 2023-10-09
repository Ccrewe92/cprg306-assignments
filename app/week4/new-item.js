"use client";

import React, { useState } from 'react';

function NewItem() {
    // State variables
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
  
    // Form Submission Handler
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
      <div className="p-4 max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Name: </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="border p-2" />
          </div>
          <div>
            <label>Quantity: </label>
            <input type="number" min="1" max="99" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required className="border p-2" />
          </div>
          <div>
            <label>Category: </label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2">
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen">Frozen Foods</option>
              <option value="canned">Canned Goods</option>
              <option value="dry">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default NewItem;