"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import items from './items';

function ItemList() {
  const [sortBy, setSortBy] = useState('name');
  const [groupedItems, setGroupedItems] = useState(null);

  const sortedItems = [...items];

  if (sortBy === 'name') {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'category') {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  const handleSortByName = () => {
    setSortBy('name');
    setGroupedItems(null);
  };

  const handleSortByCategory = () => {
    setSortBy('category');
    setGroupedItems(null);
  };

  const handleGroupByCategory = () => {
    const groupedItems = items.reduce((acc, item) => {
      const { category } = item;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});

    const sortedCategories = Object.keys(groupedItems).sort();

    const sortedItemsByCategory = {};
    sortedCategories.forEach((category) => {
      sortedItemsByCategory[category] = groupedItems[category].sort(
        (a, b) => a.name.localeCompare(b.name)
      );
    });

    setGroupedItems(sortedItemsByCategory);
    setSortBy('category');
  };

  return (
    <div>
      <div>
        <button
          onClick={handleSortByName}
          style={{
            backgroundColor: sortBy === 'name' ? 'lightblue' : 'white',
          }}
        >
          Sort by Name
        </button>
        <button
          onClick={handleSortByCategory}
          style={{
            backgroundColor: sortBy === 'category' ? 'lightblue' : 'white',
          }}
        >
          Sort by Category
        </button>
        <button
          onClick={handleGroupByCategory}
          style={{
            backgroundColor: sortBy === 'category' && groupedItems ? 'lightblue' : 'white',
          }}
        >
          Group by Category
        </button>
      </div>
      {groupedItems ? (
        Object.keys(groupedItems).map((category) => (
          <div key={category}>
            <h2 className="text-lg font-semibold text-white mt-4 mb-2">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>
            <ul className="space-y-2">
              {groupedItems[category].map((item, index) => (
                <Item
                  key={index}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul className="space-y-4">
          {sortedItems.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      )}
      <Link
        href="/" className="text-gray-300 hover:text-orange-500 transition-transform duration-300 transform hover:scale-104 hover:translate-x-0.5 inline-block py-1 px-2 mt-2 mb-6"
      >
        Back To Home
      </Link>
    </div>
  );
}

export default ItemList;