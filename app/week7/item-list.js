import React, { useState } from 'react';
import Item from './item';
import MealIdeas from './MealIdeas';

const ItemList = ({ items }) => {
    const [sortBy, setSortBy] = useState('name');
    const [selectedIngredient, setSelectedIngredient] = useState(null);

    let sortedItems = [...items];
    if (sortBy === 'name') {
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category') {
        sortedItems.sort((a, b) => a.category.localeCompare(b.category));
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

    const handleItemSelect = (item) => {
        setSelectedIngredient(item.name); // Set the selected ingredient for meal ideas
    };

    const groupedItems = sortBy === 'groupedCategory' ? sortedItems.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {}) : {};

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
                                        onSelect={() => handleItemSelect(item)}
                                    />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                <ul className="space-y-4">
                    {sortedItems.map((item) => (
                        <Item
                            key={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            category={item.category}
                            onSelect={() => handleItemSelect(item)}
                        />
                    ))}
                </ul>
            )}
            {/* Add the MealIdeas component below your items list */}
            {selectedIngredient && <MealIdeas ingredient={selectedIngredient} />}
        </div>
    );
};

export default ItemList;
