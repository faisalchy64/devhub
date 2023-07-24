import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import Post from "@/components/Post";

const getPost = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/post/${id}`, {
            cache: "no-cache",
        });

        return response.json();
    } catch (error) {
        throw new Error("There was an error.");
    }
};

export default async function page({ params }) {
    const post = await getPost(params.id);
    const { _id, title, image, tag, body, author, username, createdAt } = post;

    return (
        <section className="w-4/5 mx-auto my-10">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-5">
                {title}
            </h1>
            <div className="w-fit flex items-center gap-2.5">
                <Link
                    href={`/author/${username}`}
                    className="w-fit flex items-center gap-1.5"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 stroke-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </Link>
                <div className="text-sm font-semibold">
                    <div className="flex items-center gap-1.5">
                        <Link
                            href={`/author/${username}`}
                            className="w-fit flex items-center gap-1.5"
                        >
                            <span className="font-semibold capitalize text-gray-700 hover:underline">
                                {author}
                            </span>
                        </Link>
                        <span className="text-gray-700">.</span>
                        <button className="text-lime-500">Follow</button>
                    </div>
                    <span className="text-xs text-gray-500">
                        {moment(createdAt).format("DD MMM, YYYY")}
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-2.5 text-gray-500 py-2.5 my-5 border-y">
                <button className="flex items-center gap-1.5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                    </svg>
                    <span className="text-xs">100</span>
                </button>
                <button className="flex items-center gap-1.5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                        />
                    </svg>
                    <span className="text-xs">100</span>
                </button>
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                        />
                    </svg>
                </button>
            </div>

            <div className="w-full h-40 md:h-[450px] relative">
                <Image src={image} alt="post image" fill priority />
            </div>
            <pre className="text-gray-500 whitespace-pre-wrap my-10">
                {body}
            </pre>
            <hr />
            <h3 className="text-xl font-semibold capitalize text-gray-700 my-5">
                More from {author}
            </h3>

            {/* <div className="flex flex-col gap-5">
                <Post />
                <hr />
                <Post />
                <hr />
                <Post />
                <hr />
                <Post />
            </div> */}
        </section>
    );
}
