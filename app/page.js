import Link from "next/link";
import StudentInfo from './StudentInfo'

export default function Page() {
  return (
    <main className="bg-gray-900 text-white p-8 min-h-screen">
        <h1 className="text-xl font-bold mb-6">
            CPRG 306: Web Development 2 - Assignments
        </h1>
        <StudentInfo />
        
        <div className="mt-6 flex flex-col space-y-0.5">
            <Link href="/week2" className="text-gray-300 hover:text-orange-500 transition-transform duration-300 transform hover:scale-104 hover:translate-x-0.5 inline-block py-1 px-2">
                Week 2
            </Link>
            <Link href="/week3" className="text-gray-300 hover:text-orange-500 transition-transform duration-300 transform hover:scale-104 hover:translate-x-0.5 inline-block py-1 px-2">
                Week 3
            </Link>
            <Link href="/week4" className="text-gray-300 hover:text-orange-500 transition-transform duration-300 transform hover:scale-104 hover:translate-x-0.5 inline-block py-1 px-2">
                Week 4
            </Link>
        </div>
    </main>
  );
}
