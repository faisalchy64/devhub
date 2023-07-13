import Post from "@/components/Post";

export default function page({ params }) {
    return (
        <section className="w-4/5 mx-auto my-10">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-700">
                {params.tag}
            </h1>
            <button className="text-sm text-white bg-lime-500 hover:bg-lime-600 px-3.5 py-1.5 my-3.5 rounded-md">
                Follow
            </button>
            <hr />
            <div className="flex flex-col gap-5 my-10">
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
