import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="lg:w-full md:h-screen">
        <Hero />
      </section>
      <section id = "projects">
        <Projects />
      </section>
    </main>
  );
}
