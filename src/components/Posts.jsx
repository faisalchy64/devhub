import Post from "./Post";

export default function Posts() {
    return (
        <section className="w-4/5 mx-auto my-10">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-5">
                Find out what's new in insights
            </h1>

            <div className="flex flex-col gap-5">
                <Post />
                <hr />
                <Post />
                <hr />
                <Post />
                <hr />
                <Post />
            </div>
        </section>
    );
}
