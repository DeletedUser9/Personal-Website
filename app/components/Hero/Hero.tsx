
import Player from "./Player"
import Hover from "../GeneralComponents/Hover"
import { Press_Start_2P } from 'next/font/google'


const pressStart2P = Press_Start_2P({
        subsets: ['latin'],
        weight: '400',
    });
    
export default function Hero() {

  return (
    <section className="relative mt-10 w-full flex justify-around rounded-3xl border bg-white/5 
    min-h-80 
    md:h-[70vh] md:min-h-105 md:max-h-180">
        <Player classname="relative h-64 w-64 hidden md:block" />

         <div className="flex flex-col mt-10 items-start "> 
            <span className={`${pressStart2P.className} text-lg uppercase md:text-7xl`}>Ayush</span>
            <span className={`${pressStart2P.className} text-xl text-green-400 uppercase leading-none md:text-[8rem]`}>Kumar</span>
            <p className=" hidden md:text-2xl text-gray-300">Computer Science Student at University of Auckland</p>
            <div className="mt-5 flex-row md:flex md:justify-center md:gap-10">

              <Hover className = "inline-flex md:min-w-45 text-black justify-center bg-green-400 px-4 py-2 rounded-md hover:bg-green-500" isbutton = {true}   
              href="/about" text="Learn More"></Hover>

              <Hover className = "inline-flex md:min-w-45 outline-solid justify-center outline-green-300 text-white px-4 py-2 rounded-md hover:outline-white" 
              isbutton={true} href="/projects" text="Projects"></Hover>
            </div>
          </div>
        
    </section>

    
    
  )
}
