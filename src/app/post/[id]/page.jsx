import Image from "next/image";
import Link from "next/link";
import Post from "@/components/Post";

export default function page() {
    return (
        <section className="w-4/5 mx-auto my-10">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-5">
                What is Next.js?
            </h1>
            <div className="w-fit flex items-center gap-2.5">
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
                            href={`/author`}
                            className="w-fit flex items-center gap-1.5"
                        >
                            <span className="font-semibold text-gray-70 hover:underline">
                                Shams Karim
                            </span>
                        </Link>
                        <span className="text-gray-700">.</span>
                        <button className="text-lime-500">Follow</button>
                    </div>
                    <span className="text-xs text-gray-500">Jun 15, 2023</span>
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
                <Image
                    src={
                        "https://images.pexels.com/photos/16398261/pexels-photo-16398261/free-photo-of-watermelon-slice-on-wooden-table.jpeg"
                    }
                    alt="post image"
                    fill
                    priority
                />
            </div>
            <p className="text-gray-500 my-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                nemo optio! Odit nemo libero iste veritatis cum similique unde
                perferendis adipisci reprehenderit totam ratione hic, nihil
                error ducimus dicta ullam fuga non quo vel rerum dolore
                inventore consequatur quaerat eum? Deleniti nisi eaque officiis
                veritatis consequatur accusantium placeat voluptate error animi
                iure culpa aliquam est unde facilis architecto quibusdam,
                tempore aspernatur! Possimus architecto, nihil id iste debitis
                veniam illum libero consectetur vitae optio ipsam voluptates
                doloremque! Odio explicabo nemo nisi rem placeat eos sint,
                excepturi officiis temporibus quasi illum cum quia debitis dolor
                facilis obcaecati ex? Exercitationem laborum excepturi sed
                quibusdam et molestias dolorem illum officiis ea voluptate, nemo
                qui? Itaque eligendi eveniet eius facere, maiores voluptatibus.
                Veniam cumque illum repudiandae reiciendis modi eligendi aliquam
                obcaecati aspernatur voluptate et quidem accusantium maxime,
                distinctio ex necessitatibus, minus, nam vel nulla nihil
                voluptas! Culpa molestias alias magni necessitatibus placeat
                voluptatum id corrupti laborum, enim dolores recusandae quo
                architecto atque excepturi vero, maxime deleniti obcaecati.
                Aspernatur vitae harum quo libero officia perferendis
                consequuntur atque laboriosam, quia est excepturi minima ex
                accusantium nostrum facere alias suscipit dolore, esse amet
                quod? Magnam error hic, pariatur rerum ab officia animi
                obcaecati quod nulla sequi deleniti cum quaerat tempora dolorem!
                Provident labore tenetur ut minima, odit deleniti in corrupti
                sint corporis, accusantium cumque unde animi assumenda dolores
                aut cum debitis nostrum at, repellendus consequatur velit fuga
                explicabo. Perspiciatis excepturi dolorem molestiae corrupti,
                culpa consequuntur veritatis. Numquam a amet accusantium
                voluptates quia, ex, debitis illum non cumque omnis, eos odio
                sit at consectetur voluptatum eaque ipsum quam nam. Dolorem,
                minima voluptas labore voluptatum ad deleniti beatae ut
                consectetur unde dolores itaque neque ea similique nihil commodi
                aspernatur natus iure doloribus aliquam impedit hic. Minima
                provident cumque a, velit nisi aliquam aperiam? Modi, numquam
                saepe. Quia enim voluptas voluptatum exercitationem excepturi
                non quis velit, officia quo, corrupti veniam dolore. Similique
                vero voluptatibus aspernatur nesciunt, corporis magni alias
                totam quae unde excepturi molestiae necessitatibus consequuntur
                eum, culpa laudantium, ratione et suscipit animi sint deleniti
                harum!
            </p>
            <hr />
            <h3 className="text-xl font-semibold text-gray-700 my-5">
                More from Shams Karim
            </h3>

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
