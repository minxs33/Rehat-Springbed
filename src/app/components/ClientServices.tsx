'use client'

import { useState, useRef, useContext } from "react";
import { HeaderContext } from './ClientNavigation';
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Button } from "@headlessui/react";

interface ServiceItem {
    title: string;
    usage: string;
    character: string;
    image: string | null;
}

interface ServiceCategory {
    description: string;
    media: {
        type: string;
        src: string;
    }
    items: ServiceItem[];
}

interface ServicesClientProps {
    serviceEntries: [string, ServiceCategory][];
}


export default function ClientServices({ serviceEntries }: ServicesClientProps) {

    const { showHeader } = useContext(HeaderContext);

    const [activeKey, setActiveKey] = useState(0);
    const [activeItemsKey, activeItems] = serviceEntries[activeKey];

    const topOfTabs = useRef<HTMLDivElement | null>(null);

    const handleWhatsapp = (number: string, e: React.MouseEvent, type: string) => {
        e.preventDefault();
        const message = "Halo min, saya ingin " + type;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${number}/?text=${encodedMessage}`, "_blank");
      };

    const scrollTo = (e: React.MouseEvent) => {
        e.preventDefault(); 
        const el = topOfTabs.current;
        if (!el) return;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const adjustedY = el.getBoundingClientRect().top + window.scrollY - (showHeader ? 96 : 0);
                window.scrollTo({ top: adjustedY, behavior: 'smooth' });
            });
        });
    };

    return (
        <>
            <div ref={topOfTabs} className="h-0 invisible" />

            <div
                className={`sticky z-1 bg-background lg:opacity-80 shadow dark:shadow-gray-800 mb-8 flex justify-center items-center mx-auto ${
                    showHeader ? 'top-[95px]' : '-top-1'
                }`}
            >
                {serviceEntries.map(([key], i) => {
                    const isActive = i === activeKey;
                    return (
                        <button
                            key={i}
                            onClick={(e) => {
                                setActiveKey(i);
                                scrollTo(e);
                            }}
                            className={`text-base sm:text-sm py-2 px-2 mt-1 lg:px-5 flex flex-col items-center justify-center ${
                                isActive
                                    ? "text-foreground font-bold"
                                    : "text-gray-400 font-semibold hover:bg-gray-200 dark:hover:bg-gray-800"
                            }`}
                        >
                            {key
                                .replace(/([A-Z])/g, " $1")
                                .replace(/^./, (char) => char.toUpperCase())}
                            <span
                                className={`h-1 mt-1 rounded-full transition-all ${
                                    isActive ? "bg-primary w-[90%] lg:w-8" : "bg-transparent w-0"
                                }`}
                            />
                        </button>
                    );
                })}
            </div>

            <div className="container mx-auto px-4">
                <div className="space-y-4">
                    <div className='grid lg:grid-cols-[3fr_2fr] lg:max-w-7xl mx-auto gap-8 lg:gap-8 justify-center'>
                        <div className={`flex flex-col gap-4 lg:sticky top-[160px] self-start`}>
                            {activeItems.media.type === "video" ? (
                                <video
                                    src={activeItems.media.src}
                                    controls
                                    className="w-full aspect-video bg-black rounded-2xl shadow-sm"
                                />
                            ) : (
                                <Image
                                    src={activeItems.media.src}
                                    alt="Service Image"
                                    width={1000}
                                    height={600}
                                    className="w-full aspect-video rounded-2xl shadow-sm"
                                />
                            )}
                            <h2 className="text-base sm:text-lg md:text-xl dark:text-gray-300 font-medium text-justify mx-auto md:mx-0 mb-2 ">{activeItems.description}</h2>
                        </div>

                        <div>

                            <div className="border-b-2 border-muted dark:border-white/10 mb-4">
                                <h2 className="font-semibold text-base text-foreground mb-2">
                                    {activeItemsKey.replace(/^service/, "Jenis ").replace(/([A-Z])/g, " $1").trim()}
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-8 max-w-[80%] mx-auto sm:mx-0 sm:max-w-full w-full">
                                {activeItems.items.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col gap-2 md:flex-row rounded-2xl p-3 md:shadow-[0_0_10px_rgba(0,0,0,0.12)]"
                                    >
                                        {item.image && (    
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={150}
                                                height={150}
                                                className="w-full md:max-w-[150px] aspect-square rounded-2xl object-cover"
                                            />
                                        )}
                                        <div className="flex flex-col gap-2 md:p-3 md:pt-0 text-start">
                                            <h3 className="font-bold text-base sm:text-lg text-foreground">{item.title}</h3>
                                            <p className="text-sm sm:text-md font-medium text-foreground">
                                                <span className="font-semibold">Cocok untuk:</span><br />
                                                <span className="block sm:inline">{item.usage}</span>
                                            </p>
                                            <p className="text-sm sm:text-md font-medium text-foreground">
                                                <span className="block sm:inline font-semibold">Karakteristik:</span>{' '}
                                                <span className="block sm:inline">{item.character}</span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                    <div className="flex flex-col items-center justify-center gap-4 bg-[hsl(170,50%,95%)] dark:bg-[hsl(170,40%,20%)] rounded-2xl p-6 shadow-[0_0_10px_rgba(0,0,0,0.08)] text-center">
                                        <h2 className="text-lg sm:text-xl font-bold text-foreground">
                                        Sudah siap {activeItemsKey.replace(/^service/, "Service ").replace(/([A-Z])/g, " $1").trim()}?</h2>
                                        <p className="text-sm sm:text-base text-foreground font-medium">
                                        Kami siap membantu Anda. Klik tombol di bawah untuk menghubungi kami sekarang juga.
                                        </p>
                                        <Button
                                        className="px-6 py-3 text-base font-semibold rounded-full bg-[hsl(170,50%,60%)] hover:bg-[hsl(170,50%,70%)] text-white shadow-md flex items-center relative" onClick={(e) => handleWhatsapp("6282311340007",e, activeItemsKey.replace(/^service/, "Service ").replace(/([A-Z])/g, " $1").trim())}
                                        >
                                            Hubungi Kami Sekarang
                                            <PhoneArrowUpRightIcon className="ml-2 w-4 h-4" />
                                        </Button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

ClientServices.displayName = "Services";