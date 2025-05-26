import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Partnership from "./components/Partnership";
import ClientNavigation from "./components/ClientNavigation";
import Sections from "./components/Sections";

export default function Home() {
 
 

  return (
    <>
      <ClientNavigation>
      
      <Sections id="home" className="bg-background-2 pt-4 pb-16 hero-trigger">
        <Hero />
      </Sections>
      <Partnership />
      <Sections className="bg-background py-15 lg:py-25" id="services">
        <Services />
      </Sections>
      <About />
      <Contact />
      </ClientNavigation>
    </>
    
  );
}
