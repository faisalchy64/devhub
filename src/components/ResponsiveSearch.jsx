"use client";
import { useState } from "react";
import Search from "./Search";

export default function ResponsiveSearch() {
    const [show, setShow] = useState(false);

    return (
        <div className="block md:hidden">
            <button
                className="align-middle px-2.5 py-1.5"
                onClick={() => setShow(!show)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 stroke-gray-900"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
            </button>

            {show && <Search />}
        </div>
    );
}
