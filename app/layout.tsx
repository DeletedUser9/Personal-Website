import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { pressStart2P } from "../lib/fonts";
import "./globals.css";
import Overlay from "./components/GeneralComponents/Overlay";
import Navbar from "./components/GeneralComponents/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayush Kumar",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en" className={`${pressStart2P.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Navbar />
        {children}
        <Overlay />
      </body>
    </html>
  );
}