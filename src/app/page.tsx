import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import AboutUs from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
<Hero></Hero>
<AboutUs></AboutUs>
<Gallery></Gallery>
<Features></Features>
<Testimonials></Testimonials>
<Contact></Contact>
<Footer></Footer>


    </>
  );
}
