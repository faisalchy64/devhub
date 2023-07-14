import Link from "next/link";
import Search from "./Search";
import ResponsiveSearch from "./ResponsiveSearch";

export default function Navbar() {
    return (
        <nav className="relative py-5">
            <div className="w-4/5 flex justify-between items-center gap-2.5 mx-auto">
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
                    <ResponsiveSearch />

                    <Link href="/login" className="hidden md:block">
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className="font-semibold text-blue-500 hover:text-white hover:bg-blue-500 px-2.5 py-1.5 border-2 border-blue-500 rounded"
                    >
                        Create account
                    </Link>
                </div>
            </div>
        </nav>
    );
}
