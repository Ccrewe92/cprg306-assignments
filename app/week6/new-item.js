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
     <div className="form-container">
         <form onSubmit={handleSubmit}>
             <div className="input-group">
                 <label htmlFor="name">Item Name:</label>
                 <input
                     type="text"
                     id="name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     placeholder="Enter item name"
                     required
                 />
             </div>

             <div className="input-group">
                 <div className="half">
                     <label htmlFor="quantity">Quantity:</label>
                     <input
                         type="number"
                         id="quantity"
                         value={quantity}
                         onChange={(e) => setQuantity(e.target.value)}
                         required
                     />
                 </div>

                 <div className="half">
                     <label htmlFor="category">Category:</label>
                     <select
                         id="category"
                         value={category}
                         onChange={(e) => setCategory(e.target.value)}
                     >
                         <option value="produce">Produce</option>
                         <option value="dairy">Dairy</option>
                         <option value="meat">Meat</option>
                         {/* Add other categories as needed */}
                     </select>
                 </div>
             </div>

             <div className="input-group">
                 <button type="submit">Add New Item</button>
             </div>
         </form>
         <Link href="/">
             <a className="back-link">Back To Home</a>
         </Link>

         <style jsx>{`
             .form-container {
                 background-color: rgba(255, 255, 255, 0.9);
                 padding: 2rem;
                 border-radius: 8px;
                 width: 300px;
                 margin: 0 auto;
             }

             .input-group {
                 margin-bottom: 1.5rem;
             }

             .half {
                 float: left;
                 width: 50%;
                 padding: 0 0.5rem;
             }

             .back-link {
                 display: block;
                 text-align: center;
                 margin-top: 1rem;
             }
         `}</style>
     </div>
 );

export default NewItem;
