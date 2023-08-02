"use client";
import { useRouter } from "next/navigation";

export default function Search({ bool }) {
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();

        if (e.target.search.value) {
            router.push(`/search/${e.target.search.value.toLowerCase()}`);
        }
    };

    return (
        <form
            className={`${
                bool
                    ? "hidden md:flex"
                    : "w-4/5 flex bg-white absolute top-[115%] left-1/2 -translate-x-1/2 z-50"
            } items-center border-2 border-gray-700 rounded overflow-hidden`}
            onSubmit={handleSearch}
        >
            <input
                type="text"
                name="search"
                placeholder="Search..."
                className="w-full px-2.5 py-1.5 outline-none"
            />
            <button type="submit" className="align-middle px-2.5 py-1.5">
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
        </form>
    );
}
