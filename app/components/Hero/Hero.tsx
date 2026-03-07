
import Player from "./Player"
import Hover from "../GeneralComponents/Hover"
import { Press_Start_2P } from 'next/font/google'


const  pressStart2P = Press_Start_2P({
        subsets: ['latin'],
        weight: '400',
    });
    
export default function Hero() {

  return (
    <section className="relative mt-10 w-full flex justify-around rounded-3xl border bg-white/5 h-[70vh] min-h-105 max-h-180">
        <Player classname="relative h-64 w-64 " />

         <div className="flex flex-col mt-10 items-start"> 
            <span className={`${pressStart2P.className} text-xl uppercase md:text-7xl`}>Ayush</span>
            <span className={`${pressStart2P.className} text-[60px] text-green-400 uppercase leading-none md:text-[120px]`}>Kumar</span>
            <p className="text-gray-300 text-lg md:text-2xl">Computer Science Student at University of Auckland</p>
            <div className="mt-5 flex justify-center gap-10">

              <Hover classname = "text-black text-center bg-green-400 px-4 py-2 rounded-md hover:bg-green-500" isbutton = {true}   
              href="/about" text="Learn More"></Hover>

              <Hover classname = "outline-solid outline-green-300 text-white px-4 py-2 rounded-md hover:outline-white" 
              isbutton={true} href="/projects" text="Projects"></Hover>
            </div>
          </div>
        
    </section>

    
    
  )
}
