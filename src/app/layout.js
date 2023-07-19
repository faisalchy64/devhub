import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "DevHub",
    description: "A simple blog web application",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>
                    <Navbar />
                    <main className="min-h-[calc(100vh-76px)] md:min-h-[calc(100vh-80px)]">
                        {children}
                    </main>
                </AuthProvider>
                <Footer />
                <Toaster
                    toastOptions={{
                        duration: 5000,
                        style: {
                            fontSize: "0.75rem",
                        },
                    }}
                />
            </body>
        </html>
    );
}
