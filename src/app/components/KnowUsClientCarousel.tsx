'use client'

import { Transition } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";

export default function KnowUsClientCarousel() {
    const [current, setCurrent] = useState(0);
    const [loading, setLoading] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

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

    useEffect(() => {
        if (isHovered) return;
        
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 5000);
        
        return () => clearInterval(timer);
    }, [current, isHovered]);

    const handleImageLoad = () => {
        setLoading(false);
        };

        const handlePrev = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
        };

        const handleNext = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };
    return (
        <div
        className="relative overflow-hidden md:ps-5 h-[300px] md:h-[400px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            {slides.map((slide, idx) => (
                <Transition
                key={slide.id}
                show={idx === current}
                as={Fragment}
                enter="transition-transform duration-700 ease-in-out"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition-transform duration-700 ease-in-out absolute"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
                >
                <Image
                    key={slide.id}
                    alt=""
                    src={slide.image}
                    fill
                    className={`object-cover w-full h-full ${loading ? 'animate-pulse' : ''}`}
                    onLoad={handleImageLoad}
                />
                </Transition>
            ))}
            <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white transition"
                >
                <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white transition"
                >
                <ChevronRightIcon className="w-6 h-6" />
            </button>
            <div className="absolute z-1 bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, idx) => (
                    <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? "bg-primary" : "bg-gray-300"}`}
                    />
                ))}
            </div>
        </div>
    );
}