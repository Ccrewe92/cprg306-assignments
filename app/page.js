"use client";

import Link from "next/link";
import StudentInfo from './StudentInfo';

export default function Page() {
  return (
    <main className="bg-gray-900 text-white p-8 min-h-screen">
        <h1 className="text-xl font-bold mb-6">
            CPRG 306: Web Development 2 - Assignments
        </h1>
        <StudentInfo />

        <div className="mt-6 flex flex-col space-y-0.5">
            <Link href="/week2">
                <a className="text-gray-300 hover:text-orange-500 transition duration-300 ease-in-out transform hover:scale-105">
                    Week 2
                </a>
            </Link>
            <Link href="/week3">
                <a className="text-gray-300 hover:text-orange-500 transition duration-300 ease-in-out transform hover:scale-105">
                    Week 3
                </a>
            </Link>
            <Link href="/week4">
                <a className="text-gray-300 hover:text-orange-500 transition duration-300 ease-in-out transform hover:scale-105">
                    Week 4
                </a>
            </Link>
            <Link href="/week5">
                <a className="text-gray-300 hover:text-orange-500 transition duration-300 ease-in-out transform hover:scale-105">
                    Week 5
                </a>
            </Link>
            <Link href="/week6">
                <a className="text-gray-300 hover:text-orange-500 transition duration-300 ease-in-out transform hover:scale-105">
                    Week 6
                </a>
            </Link>
            <Link href="/week7">
                <a className="text-gray-300 hover:text-orange-500 transition duration-300 ease-in-out transform hover:scale-105">
                    Week 7
                </a>
            </Link>
        </div>
    </main>
  );
}
