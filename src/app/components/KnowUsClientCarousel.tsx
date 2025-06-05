'use client'

import { Transition } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";

interface SlideItem {
    id: number;
    media: {
        type: string;
        src: string;
    }
    width: number;
    height: number;
}

export default function KnowUsClientCarousel({ slidesData }: { slidesData: SlideItem[] }) {
    const [current, setCurrent] = useState(0);
    const [loading, setLoading] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [direction, setDirection] = useState<'left' | 'right'>('left');

    useEffect(() => {
        if (isHovered || isVideoPlaying) return;
      
        const timer = setInterval(() => {
          setCurrent((prev) => (prev + 1) % slidesData.length);
        }, 5000);
      
        return () => clearInterval(timer);
      }, [current, isHovered, isVideoPlaying]);
    

    const handleImageLoad = () => {
        setLoading(false);
    };

    const handlePrev = () => {
        setDirection('right');
        setCurrent((prev) => (prev - 1 + slidesData.length) % slidesData.length);
    };

    const handleNext = () => {
        setDirection('left');
        setCurrent((prev) => (prev + 1) % slidesData.length);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX);
      };
      
      const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX === null) return;
      
        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchEndX - touchStartX;
      
        if (deltaX > 50) {
            handlePrev();
        } else if (deltaX < -50) {
            handleNext();
        }
      
        setTouchStartX(null);
      };


    return (
        <div
            className="relative overflow-hidden flex justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {slidesData.map((slide, idx) => (
                <Transition
                key={slide.id}
                show={idx === current}
                as={Fragment}
                enter="transition-transform duration-700 ease-in-out"
                enterFrom={direction === 'left' ? 'translate-x-full' : '-translate-x-full'}
                enterTo="translate-x-0"
                leave="transition-transform duration-700 ease-in-out absolute"
                leaveFrom="translate-x-0"
                leaveTo={direction === 'left' ? '-translate-x-full' : 'translate-x-full'}
              >              
                    {slide.media.type === 'video' ? (        
                    <video
                        key={slide.id}
                        src={slide.media.src}
                        controls
                        className={`w-full aspect-video bg-black rounded-2xl shadow-sm`}
                        onPlay={() => setIsVideoPlaying(true)}
                        onPause={() => setIsVideoPlaying(false)}
                        onEnded={() => setIsVideoPlaying(false)}
                    />
                    ) : (
                    <Image
                        key={slide.id}
                        alt=""
                        src={slide.media.src}
                        width={slide.width}
                        height={slide.height}
                        className={`object-cover w-full h-full rounded-2xl shadow-sm ${loading ? 'animate-pulse' : ''}`}
                        onLoad={handleImageLoad}
                    />
                    )}

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
                {slidesData.map((_, idx) => (
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