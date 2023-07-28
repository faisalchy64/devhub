"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Loading from "@/components/Loading";

export default function Profile() {
    const router = useRouter();
    const { data, status } = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [router, status]);

    if (status === "loading") {
        return <Loading />;
    }

    if (status === "authenticated") {
        return (
            <section className="w-4/5 min-h-[calc(100vh-76px)] md:min-h-[calc(100vh-80px)] flex flex-col justify-center mx-auto">
                <div className="text-gray-700 text-center relative px-5 py-10 border rounded-md">
                    <div className="absolute -top-[40px] left-1/2 -translate-x-1/2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-20 h-20 stroke-gray-500 fill-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </div>

                    <button className="my-2.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-7 h-7 stroke-gray-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                        </svg>
                    </button>

                    <h1 className="text-3xl md:text-4xl font-medium capitalize">
                        {data.user.name}
                    </h1>
                    <h3 className="md:text-2xl font-medium text-gray-500 break-words my-1.5">
                        {data.user.email}
                    </h3>
                    <p>404 bio not found!</p>
                </div>
            </section>
        );
    }
}
