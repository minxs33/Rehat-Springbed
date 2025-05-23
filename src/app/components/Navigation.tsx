'use client'

import { useState, useEffect, RefObject, ElementType } from 'react'
import Image from 'next/image'
import {
  PopoverGroup,
} from '@headlessui/react'
import Link from "next/link"
import SwitchThemes from './SwitchThemes'

interface MenuItem {
  name: string;
  href: string;
  icon: {
    solid: ElementType;
    outline: ElementType;
  };
  current: boolean;
}

interface NavigationProps {
  sectionRefs: RefObject<HTMLElement | null>[] 
  menuItem: MenuItem[]
  isMobile: boolean
  showHeader: boolean
  setShowHeader: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navigation( { sectionRefs, menuItem, isMobile, showHeader, setShowHeader } : NavigationProps) {
  
  const [menuItems, setMenuItems] = useState(menuItem)
  const [isSticky, setIsSticky] = useState(false);
  const [showbottomNav, setShowBottomNav] = useState(true);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          const currentId = visibleSections[0].target.id;
          setMenuItems(prev =>
            prev.map(item => ({
              ...item,
              current: item.href === `#${currentId}`
            }))
          );
        }
      },
      {
        root: null,
        rootMargin: '-30% 0px -70% 0px',
        threshold: 0
      }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  useEffect(() => {
    const onScrollChange = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setIsSticky(detail.isPassed);
    };

    window.addEventListener("header-scroll", onScrollChange);
    return () => window.removeEventListener("header-scroll", onScrollChange);
  }, [sectionRefs]);

  useEffect(() => {
    const onScrollChange = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setShowBottomNav(detail.isPassed);
    };

    window.addEventListener("contact-scroll", onScrollChange);
    return () => window.removeEventListener("contact-scroll", onScrollChange);
  }, [sectionRefs]);

  const scrollTo = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    const el = sectionRefs[index]?.current;
    if (!el) return;
  
    if (!isMobile) {
      const headerOffset = isMobile ? 0 : (isSticky ? 84 : 40);
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      return;
    }
  
    const isGoingToTop = index === 0;

    setShowHeader(isGoingToTop);
  
    setTimeout(() => {
      const headerOffset = isMobile ? 0 : (isSticky ? 84 : 40);
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }, 0);
  };
  

  return (
    <>
    <header
      className={`z-2 transition-[transform,background-color] duration-300 ease-in-out transform
        ${isSticky ? 'sticky top-0 bg-background' : 'relative bg-background-2'}
        ${showHeader ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <nav aria-label="Global" className={`mx-auto flex gap-2 max-w-12xl ${isSticky ? 'xl:container' : ''} items-center justify-between p-6 lg:px-8 text-black dark:text-white"`}>
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center" onClick={(e) => scrollTo(0,e)}>
            <span className="sr-only">Rehat Springbed</span>
            <Image
              width={100}
              height={100}
              alt=""
              src="/images/logo-light.png"
              className="h-9 w-auto"
            />
            <span className="text-sm/6 font-semibold font-[Sans-Serif]leading-6 text-primary pointer-events-none">springbed</span>
          </Link>
        </div>
        <div className="flex gap-4 lg:hidden">
          <SwitchThemes />
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 items-center">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              onClick={
                (e) => {
                  scrollTo(menuItems.indexOf(item),e)
                }
              }
              className={`transition duration-300 ease-in-out ${item.current ? "text-sm/6 font-bold leading-6 text-foreground" : "text-sm/6 font-semibold leading-6 text-gray-400"}`}>
              {item.name}
            </Link>
          ))}
          <SwitchThemes />
        </PopoverGroup>
      </nav>
      
    </header>
    
    {/* Bottom Nav */}
    {isMobile && showbottomNav && (
      <div className="fixed bottom-0 left-0 right-0 z-2 bg-background shadow-lg">
        <div className="mx-auto max-w-9xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between rounded-t-2xl px-4 sm:px-6">
            <div className="flex flex-1 items-center justify-around">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      scrollTo(menuItems.indexOf(item), e);
                    }}
                    className="transition duration-300 ease-in-out"
                  >
                    <span
                      className={`flex items-center ${
                        item.current
                          ? "text-sm font-bold text-primary"
                          : "text-sm font-semibold text-gray-400"
                      }`}
                    >
                      {item.current ? (
                        <Icon.solid
                          className={`w-7 h-7`}
                        />
                      ) : (
                        <Icon.outline
                          className={`w-7 h-7`}
                        />
                      )}
                      
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}
