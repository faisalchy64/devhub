"use client";
import { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import ResponsiveSearch from "./ResponsiveSearch";

export default function Menu() {
    const [show, setShow] = useState(false);
    const { status } = useSession();

    return (
        <div className="flex items-center gap-3.5 text-sm text-gray-700">
            <ResponsiveSearch />

            {status === "loading" ? null : status === "authenticated" ? (
                <>
                    <button onClick={() => setShow(!show)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-10 h-10 stroke-gray-400"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </button>

                    {show && (
                        <div
                            className="flex flex-col gap-2.5 bg-white absolute top-full z-50 px-5 py-2.5 rounded-sm shadow-md"
                            onClick={() => setShow(false)}
                        >
                            <Link href="/write">Write</Link>
                            <Link href="/profile">Profile</Link>
                            <Link href="/library">Library</Link>
                            <Link href="/library">Content</Link>
                            <button className="font-medium" onClick={signOut}>
                                Signout
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <Link href="/login" className="hidden md:block">
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className="font-semibold text-blue-500 hover:text-white hover:bg-blue-500 px-2.5 py-1.5 border-2 border-blue-500 rounded"
                    >
                        Create account
                    </Link>
                </>
            )}
        </div>
    );
}
