import Post from "@/components/Post";

const getPosts = async (search) => {
    try {
        const response = await fetch(
            `http://localhost:3000/api/search/${search}`,
            {
                cache: "no-cache",
            }
        );

        return response.json();
    } catch (error) {
        throw new Error("There was an error.");
    }
};

export default async function page({ params }) {
    const posts = await getPosts(params.search);

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
                {posts.map((post) => (
                    <>
                        <Post key={post._id} post={post} />
                        <hr />
                    </>
                ))}
            </div>
        </section>
    );
}
