import React, { useState } from 'react';
import Item from './item';
import MealIdeas from './meal-ideas';

const ItemList = ({ items }) => {
    const [sortBy, setSortBy] = useState('name');
    const [selectedIngredient, setSelectedIngredient] = useState(null);

    // Sorting logic
    let sortedItems = [...items];
    if (sortBy === 'name') {
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category') {
        sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }

    // Event handlers
    const handleSortByName = () => setSortBy('name');
    const handleSortByCategory = () => setSortBy('category');
    const handleGroupByCategory = () => setSortBy('groupedCategory');
    const handleItemSelect = (name) => setSelectedIngredient(name);

    // Group by category logic
    let groupedItems = {};
    if (sortBy === 'groupedCategory') {
        groupedItems = sortedItems.reduce((acc, item) => {
            if (!acc[item.category]) acc[item.category] = [];
            acc[item.category].push(item);
            return acc;
        }, {});
    }

    // Sorted categories for grouped view
    const sortedCategories = Object.keys(groupedItems).sort();

    // Styling for buttons
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
                sortedCategories.map((category) => (
                    <div key={category}>
                        <h2>{category}</h2>
                        <ul className="space-y-4">
                            {groupedItems[category].map((item) => (
                                <Item
                                    key={item.id}
                                    name={item.name}
                                    quantity={item.quantity}
                                    category={item.category}
                                    onSelect={() => handleItemSelect(item.name)}
                                />
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <ul className="space-y-4">
                    {sortedItems.map((item) => (
                        <Item
                            key={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            category={item.category}
                            onSelect={() => handleItemSelect(item.name)}
                        />
                    ))}
                </ul>
            )}
            {/* Pass the selectedIngredient to the MealIdeas component */}
            {selectedIngredient && <MealIdeas ingredient={selectedIngredient} />}
        </div>
    );
};

export default ItemList;
