import Post from "./Post";

const getPosts = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/post", {
            cache: "no-cache",
        });

        return response.json();
    } catch (error) {
        throw new Error("There was an error.");
    }
};

export default async function Posts() {
    const posts = await getPosts();

    return (
        <section className="w-4/5 mx-auto my-10">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-5">
                Find out what's new in insights
            </h1>

            <div className="flex flex-col gap-5">
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
