import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import AboutUs from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { Videos } from './components/Videos'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Gallery></Gallery>
      <Features></Features>
      <Testimonials></Testimonials>
      <Videos />
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}
