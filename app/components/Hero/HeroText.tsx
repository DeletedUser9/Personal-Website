import { Press_Start_2P } from 'next/font/google'
import Hover from '../GeneralComponents/Hover'


const pressStart2P = Press_Start_2P({
        subsets: ['latin'],
        weight: '400',
    });
export default function HeroText() {
    return(
        <div className="flex flex-col justify-center items-center md:mt-10 md:items-center "> 
            <span className={`${pressStart2P.className} text-5xl uppercase md:text-7xl`}>Ayush</span>
            <span className={`${pressStart2P.className} text-7xl text-green-400 uppercase leading-none md:text-[7rem]`}>Kumar</span>
            <p className="text-lg text-center font-mono md:block md:text-2xl md:text-gray-300">Computer Science Student at University of Auckland</p>
            <div className="mt-5 flex-row md:flex md:justify-center md:gap-10">

              <Hover className = "inline-flex py-5 md:py-2 w-45 md:min-w-45 text-black font-mono text-2xl bg-green-400 px-4 rounded-md hover:bg-green-500" isbutton = {true}   
              href="/about" text="Learn More"></Hover>
              <Hover className = "hidden md:inline-flex md:min-w-45 text-2xl outline-solid justify-center outline-green-300 text-white px-4 md:py-2 rounded-md hover:outline-white" 
              isbutton={true} href="#projects" text="Projects"></Hover>
            </div>
          </div>
    )
}