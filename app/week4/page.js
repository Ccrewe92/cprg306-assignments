"use client"; 

import NewItem from './new-item';

function Page() {
    return (
        <main className="bg-gray-900 text-white p-8 min-h-screen">
            <h1 className="text-xl font-bold mb-6">NewItem Page</h1>
            <NewItem />
        </main>
    );
}

export default Page;