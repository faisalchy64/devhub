"use client";
import Link from "next/link";
import { useState } from "react";

export default function Tags() {
    const [select, setSelect] = useState("");

    const tags = [
        {
            id: 1,
            name: "programming",
        },
        {
            id: 2,
            name: "web development",
        },
        {
            id: 3,
            name: "ai",
        },
        {
            id: 4,
            name: "javascript",
        },
        {
            id: 5,
            name: "python",
        },
        {
            id: 6,
            name: "react.js",
        },
        {
            id: 7,
            name: "node.js",
        },
        {
            id: 8,
            name: "express.js",
        },
        {
            id: 9,
            name: "mongodb",
        },
        {
            id: 10,
            name: "next.js",
        },
    ];

    return (
        <section className="w-4/5 mx-auto my-10">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-5">
                Discover more of what matters to you
            </h1>

            <div className="flex flex-wrap items-center gap-3.5 text-sm">
                {tags.map((tag) => (
                    <Link
                        href={`/tag/${tag.name}`}
                        key={tag.id}
                        className={`${
                            select === tag.name
                                ? "text-white bg-gray-950"
                                : "text-gray-700 bg-gray-100"
                        } cursor-pointer px-2.5 py-1.5 rounded-md shadow`}
                        onClick={() => setSelect(tag.name)}
                    >
                        {tag.name}
                    </Link>
                ))}
            </div>
        </section>
    );
}
