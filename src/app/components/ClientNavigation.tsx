'use client'

import { createContext, useCallback, useEffect, useRef, useState } from "react";
import Navigation from "./Navigation";
import { HomeIcon as HomeIconOutline, WrenchIcon as WrenchIconOutline, InformationCircleIcon as InfoIconOutline, ChatBubbleBottomCenterIcon as ChatIconOutline } from "@heroicons/react/24/outline";
import { HomeIcon as HomeIconSolid, WrenchIcon as WrenchIconSolid, InformationCircleIcon as InfoIconSolid, ChatBubbleBottomCenterIcon as ChatIconSolid, } from "@heroicons/react/24/solid";
import { NavigationContext } from './NavigationContext';

export const HeaderContext = createContext({ showHeader: true });


interface NavigationClientProps {
    children: React.ReactNode
}

export default function NavigationClient({children}: NavigationClientProps) {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [isMobile, setIsMobile] = useState(false); 
  const [activeSection, setActiveSection] = useState('home');
  const [isSticky, setIsSticky] = useState(false);

  // initial menu
  const baseMenuItems = [
    { name: "Home", href: "#home" },
    { name: "Jasa Kami", href: "#services" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Kontak", href: "#contact" },
  ];

  // processed menu
  const processedMenuItems = baseMenuItems.map(item => {
    let iconComponents;
    if (item.href === '#home') iconComponents = { solid: HomeIconSolid, outline: HomeIconOutline };
    else if (item.href === '#services') iconComponents = { solid: WrenchIconSolid, outline: WrenchIconOutline };
    else if (item.href === '#about') iconComponents = { solid: InfoIconSolid, outline: InfoIconOutline };
    else if (item.href === '#contact') iconComponents = { solid: ChatIconSolid, outline: ChatIconOutline };
    else iconComponents = { solid: HomeIconSolid, outline: HomeIconOutline };
    return {
        ...item,
        icon: iconComponents,
        current: activeSection === item.href.substring(1),
    };
  });

  // set isMobile
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)');
    const handleResize = () => setIsMobile(mediaQuery.matches);
  
    handleResize();
  
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);
  
  // set showHeader based on scroll
  useEffect(() => {
    if (!isMobile) return;
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > lastScrollY.current && currentScrollY > 96) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
  
      lastScrollY.current = currentScrollY;
    };
    
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);
    
    useEffect(() => {
      const observerOptions = {
          root: null,
          rootMargin: '-30% 0px -70% 0px',
          threshold: 0
      };

      const observer = new IntersectionObserver((entries) => {
          const visibleSections = entries
              .filter(entry => entry.isIntersecting)
              .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

          if (visibleSections.length > 0) {
              const currentId = visibleSections[0].target.id;
              setActiveSection(currentId);
          }
      }, observerOptions);
      baseMenuItems.forEach(item => {
          if (item.href) {
              const id = item.href.substring(1);
              const element = document.getElementById(id);
              if (element) {
                  observer.observe(element);
              }
          }
      });

      return () => {
        baseMenuItems.forEach(item => {
            if (item.href) {
                const id = item.href.substring(1);
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            }
        });
      };
    }, [baseMenuItems]);

    useEffect(() => {
      const observer = new IntersectionObserver(
          ([entry]) => {
              setIsSticky(!entry.isIntersecting);
          },
          { threshold: 0, rootMargin: '0px' }
      );

      // Observe the "home" section
      const homeElement = document.getElementById("home");
      if (homeElement) {
          observer.observe(homeElement);
      }

      return (): void => {
          if (homeElement) {
              observer.unobserve(homeElement);
          }
      };
  }, []);

     // --- Scroll to section handler (adapted to use IDs and showHeader) ---
    const handleNavLinkClick = useCallback((e: React.MouseEvent, href: string) => {
      e.preventDefault();
      const id = href.substring(1);
      const targetElement = document.getElementById(id);
      if (targetElement) {
          const headerOffset = showHeader ? 96 : 0;
          const y = targetElement.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
      }
  }, [showHeader]);
    
    return (
      <HeaderContext.Provider value={{ showHeader }}>
        <NavigationContext.Provider value={{ triggerNavLinkClick: handleNavLinkClick }}>
          <Navigation
              menuItem={processedMenuItems}
              isMobile={isMobile}
              showHeader={showHeader}
              isSticky={isSticky}
              onNavLinkClick={handleNavLinkClick} 
          />
          {children}
        </NavigationContext.Provider>
      </HeaderContext.Provider>
    ) 
  
}