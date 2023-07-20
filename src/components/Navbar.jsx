import Link from "next/link";
import Search from "./Search";
import Menu from "./Menu";

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

                <Menu />
            </div>
        </nav>
    );
}
