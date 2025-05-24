"use client";

import ServiceCard from "./ServiceCard";
import { serviceData } from "../data/serviceData";
import { useState, useRef, forwardRef } from "react";

interface ServicesProps {
    showHeader: boolean;
};

const Services = forwardRef<HTMLElement, ServicesProps>((props, ref) => {
    const { showHeader } = props;

    const [activeKey, setActiveKey] = useState(0);
    const serviceEntries = Object.entries(serviceData);
    const [, activeItems] = serviceEntries[activeKey];

    const stickyTabs = useRef<HTMLDivElement | null>(null);
    const topOfTabs = useRef<HTMLDivElement | null>(null);

    const scrollTo = (e: React.MouseEvent) => {
        e.preventDefault();
        const el = topOfTabs.current;
        if (!el) return;

        const firstY = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: firstY, behavior: 'smooth' });

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const adjustedY = el.getBoundingClientRect().top + window.scrollY - (showHeader ? 80 : 0);
                window.scrollTo({ top: adjustedY, behavior: 'smooth' });
            });
        });
    };

    return (
        <section className="bg-background py-15 lg:py-25" id="services" ref={ref}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary">Layanan Kami</h2>
                <p className="text-lg text-foreground font-semibold text-center mb-8">
                    Kami menyediakan service springbed unggulan untuk memenuhi kebutuhan tidur nyaman anda
                </p>
            </div>

            <div ref={topOfTabs} className="h-0 invisible" />

            <div
                ref={stickyTabs}
                className={`sticky z-1 bg-background lg:opacity-80 shadow dark:shadow-gray-800 mb-8 flex justify-center items-center mx-auto ${
                    showHeader ? 'top-[82px]' : '-top-1'
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
                <ServiceCard
                    image={activeItems.image}
                    description={activeItems.description}
                    items={activeItems.items}
                />
            </div>
        </section>
    );
});

Services.displayName = "Services";
export default Services;
