import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/GeneralComponents/Footer";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between px-24 pt-24">
        <section className="lg:w-full md:h-screen">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
      <Footer />
    </>
  );
}
