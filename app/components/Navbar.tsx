import Hover from "./Hover";

export default function Navbar() {
    

    return(
        <header className="z-10 fixed top-0 w-full py-4">
            <nav className="flex justify-between border-b px-15 border-gray-700 bg-black">

                <div className="flex justify-start items-center gap-3 py-4">
                    <h1 className="text-2xl font-bold text-white">Ayush Kumar</h1>
                </div>
                
                <ul className="flex justify-center items-center gap-15  text-white">
                    <li>
                        <Hover isbutton={false} href="/" text="Home"></Hover></li>
                    <li>
                        <Hover isbutton={false} href="/about" text="About"></Hover></li>
                    <li>
                        <Hover isbutton={false} href="/projects" text="Projects"></Hover></li>
                    <li>
                        <Hover isbutton={false} href="/contact" text="Contact"></Hover></li>
                </ul>
                <div className=" flex gap-5 py-4">
                    <Hover isbutton={true} href="https://github.com/DeletedUser9" text="Github"></Hover>
                    <Hover isbutton={true} href = "https://www.linkedin.com/in/ayush-kumar-2125b9294/" text="LinkedIn"></Hover>
                </div>
            </nav>
        </header>

    )


}