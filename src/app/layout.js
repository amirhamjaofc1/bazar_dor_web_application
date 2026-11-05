import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navlinks from "@/components/Navlinks";
import Marquee from "@/components/marquee";
import Footer from "@/components/Footer";
import ToastNotifications from "@/components/ToastNotifications";
import { Suspense } from "react";

const geistSans = Noto_Sans_Bengali({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Noto_Sans_Bengali({
  subsets: ["latin , bengali"],
});

export const metadata = {
  title: "Bazar Dor",
  description: "Bazar Dor - Your one-stop shop for all your needs",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ToastNotifications />
        <Navbar />
        <Navlinks />

        <Marquee />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
