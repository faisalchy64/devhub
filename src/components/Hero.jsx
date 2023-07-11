import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-[calc(100vh-76px)] md:min-h-[calc(100vh-80px)] relative">
            <Image
                src="https://images.pexels.com/photos/1268129/pexels-photo-1268129.jpeg"
                alt="hero image"
                fill
                priority
            />

            <div className="absolute top-1/2 left-1/2 md:left-20 -translate-x-1/2 md:translate-x-0 -translate-y-1/2">
                <h1 className="text-4xl md:text-5xl font-semibold text-amber-500 mb-1.5">
                    Keep your curiosity alive.
                </h1>
                <h5 className="md:text-lg font-semibold text-white mb-5">
                    Find the thoughts, stories, and expertise of authors on any
                    subject.
                </h5>

                <Link
                    href="/login"
                    className="text-white bg-gray-950 px-3.5 py-2.5 rounded"
                >
                    Get started
                </Link>
            </div>
        </section>
    );
}
