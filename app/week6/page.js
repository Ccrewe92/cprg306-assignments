"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import ItemList from "./item-list";
import itemsData from "./items.json";

const Page = () => {
    const [items, setItems] = useState(itemsData);

    return (
      <main className="min-h-screen bg-gray-900 p-8">
        <h1 className="text-2xl font-bold text-white mb-6">Shopping List</h1>
        <ItemList items={items}/>
        <Link className="text-blue-400" href="/">
          Back To Home
        </Link>
      </main>
    );
};

export default Page;