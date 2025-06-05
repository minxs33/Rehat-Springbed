import { ElementType } from 'react'
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
  menuItem: MenuItem[]
  isMobile: boolean
  showHeader: boolean
  isSticky: boolean
  onNavLinkClick: (e: React.MouseEvent, href: string) => void;
}

export default function Navigation( { menuItem, isMobile, showHeader, isSticky, onNavLinkClick } : NavigationProps) {

  const handleLogoClick = (e: React.MouseEvent) => {
    onNavLinkClick(e, '#home');
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
                <Link href="/" className="-m-1.5 p-1.5 flex items-center" onClick={handleLogoClick}>
                    <span className="sr-only ">Rehat Springbed</span>
                    <Image
                        width={100}
                        height={100}
                        alt="rehat springbed logo"
                        src="/images/logo-light.png"
                        className="h-12 w-auto"
                        loading="lazy"
                    />
                    <span className="text-md/6 font-semibold font-[Sans-Serif] leading-6 text-[#2DA092] dark:text-[#299F90] pointer-events-none">springbed</span>
                </Link>
            </div>
            <div className="flex gap-4 lg:hidden">
                <SwitchThemes />
            </div>
            <PopoverGroup className="hidden lg:flex lg:gap-x-12 items-center">
                {menuItem.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={(e) => onNavLinkClick(e, item.href)}
                        className={`transition duration-300 ease-in-out font-[Sans-Serif] ${item.current ? "text-sm/6 font-bold leading-6 text-foreground" : "text-sm/6 font-semibold leading-6 text-gray-400"}`}>
                        {item.name}
                    </Link>
                ))}
                <SwitchThemes />
            </PopoverGroup>
        </nav>
    </header>

    {/* Bottom Nav */}
    {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-2 bg-background shadow-lg">
            <div className="mx-auto max-w-9xl px-4 sm:px-6">
                <div className="flex h-16 items-center justify-between rounded-t-2xl px-4 sm:px-6">
                    <div className="flex flex-1 items-center justify-around">
                        {menuItem.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => onNavLinkClick(e, item.href)}
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
                                                loading="lazy"
                                                className={`w-7 h-7`}
                                            />
                                        ) : (
                                            <Icon.outline
                                                loading="lazy"
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
  );
}
