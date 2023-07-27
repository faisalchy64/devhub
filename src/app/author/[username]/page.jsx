import Post from "@/components/Post";

const getData = async (username) => {
    try {
        const response = await fetch(
            `http://localhost:3000/api/author/${username}`,
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
    const data = await getData(params.username);

    if (data.message) {
        return (
            <section className="w-4/5 mx-auto py-10">{data.message}</section>
        );
    }

    const { author, posts } = data;

    if (author) {
        return (
            <section className="w-4/5 mx-auto my-10">
                <div className="flex items-center gap-2.5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-20 h-20 stroke-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold capitalize text-gray-700">
                            {author.name}
                        </h1>
                        <h5 className="text-sm font-semibold text-gray-500">
                            {author.followers.length <= 1
                                ? `${author.followers.length} Follower`
                                : `${author.followers.length} Followers`}
                        </h5>
                    </div>
                </div>
                <p className="text-sm text-gray-500 px-2.5 my-2.5">
                    {author.about}
                </p>
                <button className="text-sm text-white bg-lime-500 hover:bg-lime-600 px-3.5 py-1.5 mx-2.5 mb-3.5 rounded-md">
                    Follow
                </button>
                <hr />

                <div className="flex flex-col gap-5 my-5">
                    {posts.length
                        ? posts.map((post) => (
                              <Post key={post._id} post={post} />
                          ))
                        : `${author.name} hasn't written any posts yet.`}
                </div>
            </section>
        );
    }
}
