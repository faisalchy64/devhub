"use client";
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
    ];

    return (
        <section className="w-4/5 mx-auto my-10">
            <div className="flex flex-wrap items-center gap-3.5 text-sm">
                {tags.map((tag) => (
                    <span
                        key={tag.id}
                        className={`${
                            select === tag.name
                                ? "text-white bg-blue-500"
                                : "text-blue-500 bg-blue-50"
                        } cursor-pointer px-2.5 py-1.5 rounded-md hover:shadow`}
                        onClick={() => setSelect(tag.name)}
                    >
                        {tag.name}
                    </span>
                ))}
            </div>
        </section>
    );
}
