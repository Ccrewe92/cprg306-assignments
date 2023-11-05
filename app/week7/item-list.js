import React, { useState } from 'react';
import Item from './item';
import MealIdeas from './meal-ideas';

const ItemList = ({ items, onItemSelect }) => {
    const [sortBy, setSortBy] = useState('name');
    const [selectedIngredient, setSelectedIngredient] = useState(null);

    // Sort the items whenever sortBy changes
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    // Event handlers for sorting
    const handleSortByName = () => setSortBy('name');
    const handleSortByCategory = () => setSortBy('category');
    const handleItemSelect = (item) => {
        setSelectedIngredient(item.name);
        if (onItemSelect) {
            onItemSelect(item);
        }
    };

    // Styling for buttons
    const getButtonClassName = (type) => `btn ${sortBy === type ? 'btn-active' : ''}`;

    return (
        <div>
            <div>
                <button
                    className={getButtonClassName('name')}
                    onClick={handleSortByName}
                >
                    Sort by Name
                </button>
                <button
                    className={getButtonClassName('category')}
                    onClick={handleSortByCategory}
                >
                    Sort by Category
                </button>
            </div>
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
            {/* Pass the selectedIngredient to the MealIdeas component */}
            {selectedIngredient && <MealIdeas ingredient={selectedIngredient} />}
        </div>
    );
};

export default ItemList;
