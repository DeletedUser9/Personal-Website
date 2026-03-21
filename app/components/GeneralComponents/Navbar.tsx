import Link from "next/link";
import Hover from "./Hover";
import Image from "next/image";


export default function Navbar() {

    return(
        <header className="z-10 fixed top-0 w-full py-4 backdrop-blur-lg bg-black/50" >
            <nav className="flex justify-between gap-5 md:border-b md:px-15 md:border-transparent">

                <div className="md:flex md:justify-start md:items-center gap-3 py-4">
                    <a href="/">
                        <h1 className="pixel-font text-3xl px-7 text-white">AK</h1>
                    </a>
                </div>
                
                <ul className="hidden font-mono text-xl md:flex md:justify-center md:items-center md:gap-15 md:text-white ">
                    <li>
                        <Hover isbutton={false} href="#home" text="Home"></Hover></li>
                    <li>
                        <Hover isbutton={false} href="#projects" text="Projects"></Hover></li>
                </ul>
                <div className="flex md:flex md:justify-end m-3 gap-5">
                    <Link href="https://github.com/DeletedUser9" target="_blank" rel="noopener noreferrer">
                        <Image className="invert" src="/githubicon.svg" alt="GitHub" width={50} height={30} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/ayush-kumar-2125b9294/" target="_blank" rel="noopener noreferrer">
                        <Image src="/linkedin.svg" alt="LinkedIn" width={50} height={30} />
                    </Link>
                </div>
            </nav>
        </header>

    )


}