export default function Footer() {
    return (
        <footer>
            <hr />
            <ul className="flex flex-col md:flex-row md:justify-center items-center gap-3.5 text-xs text-gray-500 py-10">
                <li className="cursor-pointer">Help</li>
                <li className="cursor-pointer">Careers</li>
                <li className="cursor-pointer">Privacy</li>
                <li className="cursor-pointer">Terms</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Teams</li>
            </ul>
        </footer>
    );
}
