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
      <div className="p-4 max-w-xl mx-auto border border-gray-400 rounded shadow-md bg-gray-800">
          <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                  <label className="block font-bold mb-2 text-white">Name:</label>
                  <input 
                      type="text" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      required 
                      className="w-full border p-2 rounded bg-gray-700 text-white" 
                  />
              </div>
              <div>
                  <label className="block font-bold mb-2 text-white">Quantity:</label>
                  <input 
                      type="number" 
                      min="1" 
                      max="99" 
                      value={quantity} 
                      onChange={(e) => setQuantity(Number(e.target.value))} 
                      required 
                      className="w-full border p-2 rounded bg-gray-700 text-white"
                  />
              </div>
              <div>
                  <label className="block font-bold mb-2 text-white">Category:</label>
                  <select 
                      value={category} 
                      onChange={(e) => setCategory(e.target.value)} 
                      className="w-full border p-2 rounded bg-gray-700 text-white"
                  >
                      { /* Options remain the same */ }
                  </select>
              </div>
              <div>
                  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Submit</button>
              </div>
          </form>
      </div>
  );
}

export default NewItem;