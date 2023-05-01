import Head from 'next/head';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Projects from '../components/projects/Projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Justin | Front-End Developer</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
