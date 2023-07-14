export default function NotFound() {
    return (
        <section className="w-4/5 flex flex-col justify-center items-center gap-3.5 bg-white absolute inset-0 m-auto">
            <h1 className="text-3xl font-medium text-gray-700">
                404, Page Not Found!
            </h1>
            <a
                href="/"
                className="font-medium text-white bg-blue-500 px-2.5 py-1.5 rounded-md"
            >
                Home
            </a>
        </section>
    );
}
