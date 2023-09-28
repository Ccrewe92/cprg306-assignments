import Link from "next/link";
import StudentInfo from "../StudentInfo";

export default function Page() {
    return (
        <main>
            <h1> WEEK 2 </h1>
            <h2>
                <Link href="/week3">WEEK 3</Link>
            </h2>
            <Link href="/">Back To Home</Link>
            <StudentInfo />
        </main>
    )
}