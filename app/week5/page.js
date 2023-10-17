import React from 'react';
import ItemList from './item-list';

const Page = () => {
    return (
        <main className="min-h-screen bg-gray-900 p-8">
            <h1 className="text-2xl font-bold text-white mb-6">Shopping List</h1>
            <ItemList />
        </main>
    );
}

export default Page;