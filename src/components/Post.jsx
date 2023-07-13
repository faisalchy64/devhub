import Image from "next/image";
import Link from "next/link";

export default function Post() {
    return (
        <article className="flex flex-col-reverse md:flex-row md:items-center gap-5">
            <div className="flex flex-col gap-1.5">
                <Link
                    href={`/author`}
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

                    <span className="text-xs font-semibold text-gray-700">
                        Shams Karim
                    </span>
                </Link>
                <Link href={`/post`} className="flex flex-col gap-1.5">
                    <h3 className="text-lg font-semibold text-gray-700">
                        What is Next.js
                    </h3>
                    <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Corrupti, sed! Consequuntur earum fuga repudiandae
                        molestiae ut unde fugit in, voluptatem iusto odio
                        dolor...
                    </p>
                </Link>
                <div className="flex justify-between items-center gap-0.5">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <span>Jun 15, 2023</span>
                        <span>.</span>
                        <Link
                            href={`/tag`}
                            className="bg-gray-100 hover:bg-gray-200 px-2.5 py-1.5 rounded-lg"
                        >
                            Programming
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
                href={`/post`}
                className="w-full md:w-80 h-40 flex-shrink-0 relative"
            >
                <Image
                    src={
                        "https://images.pexels.com/photos/16398261/pexels-photo-16398261/free-photo-of-watermelon-slice-on-wooden-table.jpeg"
                    }
                    alt="post image"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 320px"
                />
            </Link>
        </article>
    );
}
