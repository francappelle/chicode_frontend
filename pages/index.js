import Head from "next/head";
import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Services from "../components/Services";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Chicode || Web Dev</title>
        <meta name="description" content="Chicode - A family man who loves to code." />
      </Head>

      <Hero />
      <About />
      <Skills />
      <Services />
      {/*<Projects />*/}
      <Contact />
    </main>
  );
}
