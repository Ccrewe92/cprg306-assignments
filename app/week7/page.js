import React from 'react';
import Link from 'next/link';

function BlankPage() {
    return (
        <div className="container">
            <h1>Blank Page Placeholder</h1>
            <p>This is a placeholder for the blank page.</p>

            <Link href="/">
                <a>Go back to Home</a>
            </Link>

            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    text-align: center;
                }

                h1 {
                    font-size: 24px;
                    margin-bottom: 16px;
                }

                p {
                    font-size: 18px;
                    margin-bottom: 24px;
                }

                a {
                    color: blue;
                    text-decoration: none;
                    border-bottom: 1px dashed blue;
                    padding-bottom: 2px;
                }

                a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
}

export default BlankPage;
