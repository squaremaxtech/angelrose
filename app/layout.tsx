import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";

const playfairFont = localFont({
  src: "./fonts/Playfair.ttf",
  variable: "--playfair",
  weight: "100 900",
});

const playfairItalicFont = localFont({
  src: "./fonts/Playfair-Italic.ttf",
  variable: "--playfairItalic",
  weight: "100 500 900",
});
const frauncesFont = localFont({
  src: "./fonts/fraunces.ttf",
  variable: "--fraunces",
  // weight: "100 400 900",
});

export const metadata: Metadata = {
  title: "Angel Rose",
  description: "We offer a helpful hand and supportive guidance for senior adults who need exceptional care, as they complete their journey through retirement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairFont.variable} ${playfairItalicFont.variable} ${frauncesFont.variable} antialiased`}
      >
        <Toaster position="top-center" reverseOrder={false} />

        <Nav />

        {children}

        <Footer />
      </body>
    </html>
  );
}
