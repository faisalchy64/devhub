"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Write() {
    const router = useRouter();
    const { data, status } = useSession();

    const handleSubmit = (e) => {
        e.preventDefault();

        const post = {
            title: e.target.title.value,
            image: e.target.image.value,
            tag: e.target.tag.value,
            body: e.target.body.value,
            name: data.user.name,
            author: data.user.username,
        };

        e.target.reset();
    };

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [router, status]);

    if (status === "authenticated") {
        return (
            <section className="w-4/5 min-h-[calc(100vh-76px)] md:min-h-[calc(100vh-80px)] flex justify-center items-center mx-auto">
                <div className="w-full md:w-[500px] bg-white px-3.5 py-5 mx-auto rounded-md shadow">
                    <form
                        className="flex flex-col gap-2.5 text-sm text-gray-500 my-2.5"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                name="title"
                                required
                                placeholder="Your content title"
                                className="px-2.5 py-1.5 border outline-none rounded-md"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="image">Image</label>
                            <input
                                type="url"
                                name="image"
                                required
                                placeholder="Your image url"
                                className="px-2.5 py-1.5 border outline-none rounded-md"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="tag">Tag</label>
                            <input
                                type="text"
                                name="tag"
                                required
                                placeholder="Your content tag"
                                className="px-2.5 py-1.5 border outline-none rounded-md"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="content">Content</label>
                            <textarea
                                name="body"
                                rows="5"
                                required
                                placeholder="Write your content here..."
                                className="px-2.5 py-1.5 resize-none border outline-none rounded-md"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="font-semibold text-white bg-gray-700 px-2.5 py-1.5 rounded-md"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        );
    }
}
