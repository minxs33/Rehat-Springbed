'use client'

import Hero from "./components/Hero";
import Services from "./components/Services";
import { useState, useRef, useEffect } from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Contact from "./components/Contact";
import { HomeIcon as HomeIconOutline, BriefcaseIcon as BriefcaseIconOutline, InformationCircleIcon as InfoIconOutline, ChatBubbleBottomCenterIcon as ChatIconOutline } from "@heroicons/react/24/outline";
import { HomeIcon as HomeIconSolid, BriefcaseIcon as BriefcaseIconSolid, InformationCircleIcon as InfoIconSolid, ChatBubbleBottomCenterIcon as ChatIconSolid, } from "@heroicons/react/24/solid";
import Partnership from "./components/Partnership";

export default function Home() {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [isMobile, setIsMobile] = useState(false); 

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)'); // Tailwind's `lg` is 1024px
    const handleResize = () => setIsMobile(mediaQuery.matches);
  
    handleResize();
  
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
  
      lastScrollY.current = currentScrollY;
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  const sectionRefs = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ];
  
  const menuItem = [
    {
      name: "Home",
      href: "#home",
      icon: {
        solid: HomeIconSolid,
        outline: HomeIconOutline,
      },
      current: false,
    },
    {
      name: "Jasa Kami",
      href: "#services",
      icon: {
        solid: BriefcaseIconSolid,
        outline: BriefcaseIconOutline,
      },
      current: false,
    },
    {
      name: "Tentang Kami",
      href: "#about",
      icon: {
        solid: InfoIconSolid,
        outline: InfoIconOutline,
      },
      current: false,
    },
    {
      name: "Kontak",
      href: "#contact",
      icon: {
        solid: ChatIconSolid,
        outline: ChatIconOutline,
      },
      current: false,
    },
  ];

  return (
    <>
      <Navigation sectionRefs={sectionRefs} menuItem={menuItem} isMobile={isMobile} showHeader={showHeader} setShowHeader={setShowHeader}/>
      <Hero ref={sectionRefs[0]}/>
      <Partnership />
      <Services ref={sectionRefs[1]} showHeader={showHeader}/>
      <About ref={sectionRefs[2]}/>
      <Contact />
    </>
    
  );
}
