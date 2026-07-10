import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/GeneralComponents/Footer";
import Reveal from "./components/GeneralComponents/Reveal";

export default function Home() {
  return (
    <>
      <main
        id="home"
        className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-8 lg:px-24 pt-24"
      >
        <Reveal className="w-full lg:w-full md:h-screen">
          <section>
            <Hero />
          </section>
        </Reveal>
        <Reveal className="w-full">
          <section id="projects">
            <Projects />
          </section>
        </Reveal>
      </main>
      <Reveal className="w-full">
        <Footer />
      </Reveal>
    </>
  );
}
