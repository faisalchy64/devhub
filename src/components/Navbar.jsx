import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
    return (
        <nav className="py-5">
            <div className="w-4/5 flex justify-between items-center mx-auto">
                <div className="flex items-center gap-2.5">
                    <Link
                        href="/"
                        className="md:text-xl font-bold text-white bg-gray-950 px-2.5 py-1.5 rounded"
                    >
                        DEVHUB
                    </Link>

                    <Search bool={true} />
                </div>

                <div className="flex items-center gap-3.5 text-sm text-gray-700">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 block md:hidden"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>

                    <Link href="/login" className="hidden md:block">
                        Login
                    </Link>
                    <Link
                        href="/login"
                        className="font-semibold text-blue-500 hover:text-white hover:bg-blue-500 px-2.5 py-1.5 border-2 border-blue-500 rounded"
                    >
                        Create account
                    </Link>
                </div>
            </div>
        </nav>
    );
}
