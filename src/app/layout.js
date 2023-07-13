import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "DevHub",
    description: "A simple blog web application",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
