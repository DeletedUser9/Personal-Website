import Player from "./Player";

export default function Hero() {
  return (
    <section className="relative mt-10 w-full flex rounded-3xl border outline-solid bg-white/5 h-[70vh] min-h-105 max-h-180">
        <Player/>
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">Welcome to my Portfolio</h1>
        
    </section>

    
    
  )
}
