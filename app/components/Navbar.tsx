import React from "react";
import Link from "next/link";

export default function Navbar() {

    return(
        <nav className="fixed top-0 w-full flex justify-center gap-20 py-5 px-24 border-b border-gray-700 bg-black text-white">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
        </nav>

    )


}