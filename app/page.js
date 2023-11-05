"use client";
import Link from "next/link";
import StudentInfo from './StudentInfo';

export default function Page() {
  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white shadow-lg backdrop-blur-lg backdrop-filter bg-opacity-60">
        <div className="container mx-auto px-4 py-2.5 flex justify-between items-center">
          {/* Logo or Branding */}
          <Link href="/">
            <a className="text-xl font-bold text-gray-900">
              CPRG 306: Web Development 2 - Assignments
            </a>
          </Link>

          {/* Navigation Links */}
          <ul className="hidden space-x-4 lg:flex">
            {[...Array(7)].map((_, i) => (
              <li key={i}>
                <Link href={`/week${i + 1}`}>
                  <a className="text-gray-900 hover:text-blue-500 font-medium">
                    Week {i + 1}
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu Icon for Mobile */}
          <button
            className="lg:hidden text-gray-900"
            type="button"
            aria-label="Toggle mobile menu"
            onClick={() => {/* function to toggle mobile menu */}}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Hidden by default) */}
        {/* You should toggle the 'hidden' class based on menu state */}
        <ul className="lg:hidden">
          {[...Array(7)].map((_, i) => (
            <li key={i} className="border-t border-gray-200">
              <Link href={`/week${i + 1}`}>
                <a className="block p-4 text-gray-700">
                  Week {i + 1}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="bg-gray-900 text-white p-8 min-h-screen">
        <StudentInfo />
        {/* ... Any other content you wish to include ... */}
      </main>
    </>
  );
}

