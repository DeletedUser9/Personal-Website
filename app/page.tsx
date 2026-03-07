import Hero from "./components/Hero";
import About from "./components/About/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />

      <div id = "about">
        <About />
      </div>
       
    </main>
  );
}
