import Hero from "./components/Hero";
import Service from "./components/Service";
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
      <Service />
      <About />
      <Contact />
      </ClientNavigation>
    </>
    
  );
}
