
import Player from "./Player"
import HeroText from "./HeroText"

    
export default function Hero() {

  return (
    <section className="relative overflow-hidden mt-10 w-screen h-svh md:w-mvh lg:w-full flex justify-center md:px-15 rounded-3xl border bg-white/5 min-h-80 md:h-[70vh] md:min-h-105 md:max-h-180">
      <Player classname="relative h-64 w-64 hidden lg:block font-mono text-lg py-10 px-5 text-green-300 text-center" initialPos={{ x: 0, y: 0 }}/>
      <HeroText />
    </section>

    
    
  )
}
