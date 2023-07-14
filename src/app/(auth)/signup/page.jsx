"use client";
import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Signup() {
    const [show, setShow] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = (data) => {
        console.table(data);
        reset();
    };

    return (
        <section className="w-4/5 min-h-[calc(100vh-76px)] md:min-h-[calc(100vh-80px)] flex justify-center items-center mx-auto">
            <div className="w-full md:w-80 px-3.5 py-5 bg-white rounded-md shadow">
                <h1 className="text-2xl font-medium text-center text-gray-700">
                    Signup
                </h1>
                <form
                    className="flex flex-col gap-2.5 text-sm text-gray-500 my-2.5"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="px-2.5 py-1.5 border outline-none rounded-md"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required",
                                },
                                pattern: {
                                    value: /^[a-zA-Z\s]{3,}$/,
                                    message: "Please enter a valid name.",
                                },
                            })}
                        />
                        {errors && errors.name && (
                            <p className="text-[10px] text-rose-500 bg-rose-100 px-1.5 py-0.5 rounded">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            placeholder="Your username"
                            className="px-2.5 py-1.5 border outline-none rounded-md"
                            {...register("username", {
                                required: {
                                    value: true,
                                    message: "Username is required",
                                },
                                pattern: {
                                    value: /^@([a-zA-Z]{3,})(\d{0,3})$/,
                                    message:
                                        "Please enter a valid username (example: @abc).",
                                },
                            })}
                        />
                        {errors && errors.username && (
                            <p className="text-[10px] text-rose-500 bg-rose-100 px-1.5 py-0.5 rounded">
                                {errors.username.message}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-2.5 py-1.5 border outline-none rounded-md"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required",
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Please enter a valid email.",
                                },
                            })}
                        />
                        {errors && errors.email && (
                            <p className="text-[10px] text-rose-500 bg-rose-100 px-1.5 py-0.5 rounded">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="password">Password</label>
                        <div className="relative">
                            <input
                                type={show ? "text" : "password"}
                                placeholder="Your password"
                                className="w-full px-2.5 py-1.5 border outline-none rounded-md"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required",
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                        message:
                                            "Minimum 8 characters neeeded (at least one letter, one digit and one special character).",
                                    },
                                })}
                            />
                            <span
                                className="text-[10px] font-medium absolute top-1/2 -translate-y-1/2 right-2.5 cursor-pointer"
                                onClick={() => setShow(!show)}
                            >
                                {show ? "Hide" : "Show"}
                            </span>
                        </div>
                        {errors && errors.password && (
                            <p className="text-[10px] leading-4 text-rose-500 bg-rose-100 px-1.5 py-0.5 rounded">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div className="w-fit flex flex-col gap-0.5 text-xs text-blue-700">
                        <Link href="/login">Already have an account?</Link>
                    </div>

                    <button
                        type="submit"
                        className="font-semibold text-white bg-gray-700 px-2.5 py-1.5 rounded-md"
                    >
                        Submit
                    </button>
                </form>
                <button className="w-full text-sm font-semibold text-blue-500 bg-blue-100 px-2.5 py-1.5 rounded-md">
                    Continue with Google
                </button>
            </div>
        </section>
    );
}
