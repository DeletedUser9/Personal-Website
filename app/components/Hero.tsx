import Player from "./Player";
import Hover from "./Hover";

export default function Hero() {
  return (
    <section className="relative mt-10 w-full flex justify-around rounded-3xl border bg-white/5 h-[70vh] min-h-105 max-h-180">
        <Player classname="relative h-64 w-64 " />

         <div className="flex flex-col mt-10 items-start"> 
            <span className="font-medium text-6xl uppercase md:text-7xl">Ayush</span>
            <span className="font-black text-[60px] text-green-400 uppercase leading-none md:text-[120px]">Kumar</span>
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
