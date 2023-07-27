import Image from "next/image";
import Link from "next/link";
import moment from "moment";

export default function Post({ post }) {
    const { _id, title, image, tag, body, author, username, createdAt } = post;

    return (
        <article className="xl:w-4/5 flex flex-col-reverse md:flex-row justify-between md:items-center gap-5">
            <div className="flex flex-col gap-1.5">
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
                        className="w-6 h-6 stroke-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>

                    <span className="text-xs font-semibold capitalize text-gray-700">
                        {author}
                    </span>
                </Link>
                <Link href={`/post/${_id}`} className="flex flex-col gap-1.5">
                    <h3 className="text-lg font-semibold text-gray-700">
                        {title}
                    </h3>
                    <pre className="text-sm text-gray-500 whitespace-pre-wrap">
                        {body.slice(0, 100)}...
                    </pre>
                </Link>
                <div className="flex justify-between items-center gap-0.5">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <span>{moment(createdAt).format("DD MMM, YYYY")}</span>
                        <span>.</span>
                        <Link
                            href={`/tag/${tag}`}
                            className="bg-gray-100 hover:bg-gray-200 px-2.5 py-1.5 rounded-lg"
                        >
                            {tag}
                        </Link>
                    </div>
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
            </div>

            <Link
                href={`/post/${_id}`}
                className="w-full md:w-80 h-40 flex-shrink-0 relative"
            >
                <Image
                    src={image}
                    alt="post image"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 320px"
                />
            </Link>
        </article>
    );
}
