'use client'
import { Fragment, useState, useEffect } from "react";
import { Button, Transition } from "@headlessui/react";
import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import { useNavigationTrigger } from './NavigationContext'; 

const slides = [
  {
    id: 1,
    image: "/images/example-banner.jpg",
    width: 585,
    height: 1024,
  },
  {
    id: 2,
    image: "/images/example-banner-2.png",
    width: 585,
    height: 1024,
  }
];

export default function Hero() {
  const { triggerNavLinkClick } = useNavigationTrigger();
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="container grid gap-8 md:gap-12 lg:gap-16 lg:justify-between grid-cols-1 lg:grid-cols-2 mx-auto relative overflow-hidden p-2 px-4">
      <div className="flex flex-col gap-6 xl:gap-4 justify-center text-wrap lg:text-left">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">Tidur nyenyak, hidup lebih bertenaga, semua dimulai dari <span className="text-[#1F7768] dark:text-[#75F0DB] underline decoration-[--foreground]">Rehat Springbed</span></h1>

        <p className="text-base sm:text-lg md:text-xl dark:text-gray-300 font-medium text-justify max-w-2xl mx-auto md:mx-0 mb-3">
        Kasur dari Rehat Springbed hadir dengan kenyamanan dan daya tahan maksimal. Nggak heran jadi pilihan utama banyak orang Indonesia. Penasaran kenapa REHAT begitu diandalkan? Yuk, temukan kasur impianmu sekarang!

        </p>

        <div className="flex justify-center gap-2 lg:gap-4 lg:justify-start">
          <Button
            onClick={(e) => triggerNavLinkClick(e, '#services')}
            className="whatsapp-button flex items-center justify-center gap-1 px-6 py-4 lg:px-8 bg-[#26997A] text-white hover:bg-[#6fcdb4] text-base sm:text-sm md:text-md lg:text-lg text-nowrap rounded-full group"
            >
            Mulai Sekarang <ArrowRightCircleIcon className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 mt-1"/>
          </Button>
          <Button
            onClick={(e) => triggerNavLinkClick(e, '#contact')}
            className="flex items-center justify-center gap-1 px-4 md:px-6 py-2 lg:px-8 lg:py-4 bg-transparent border-2 border-primary text-[#26997A]
              hover:bg-[#26997A] hover:text-white hover:border-[#26997A] text-base sm:text-sm md:text-md lg:text-lg text-nowrap rounded-full
              transition-all duration-300 ease-in-out"
            >
            <ChatBubbleBottomCenterIcon className="w-6 h-6"/> 
            <span className="hidden md:block">Kontak Kami</span>
          </Button>

        </div>
      </div>
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-square flex flex-col justify-center items-center">
        {slides.map((slide, idx) => (
          <Transition
            key={slide.id}
            show={idx === current}
            enter="transition-opacity duration-3000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-3000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as={Fragment}
          >
              <Image
                alt="Hero Images of Springbed"
                loading="lazy"
                src={slide.image}
                width={slide.width}
                height={slide.height}
                className={`absolute inset-0 object-cover w-full h-full ${loading ? 'animate-pulse' : ''}`}
                onLoad={handleImageLoad}
              />
          </Transition>
        ))}
      </div>
    </div>
  );
}
Hero.displayName = "Hero";