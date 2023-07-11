export default function Search({ bool }) {
    return (
        <form
            className={`${
                bool ? "hidden md:flex" : "flex"
            } items-center border-2 border-gray-700 rounded overflow-hidden`}
        >
            <input
                type="text"
                placeholder="Search..."
                className="px-2.5 py-1.5 outline-none"
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
