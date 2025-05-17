'use client'
import { useState, useRef } from "react";
import Image from "next/image";

interface ServiceItem {
    title: string;
    usage: string;
    character: string;
  }
  
  interface ServiceCardProps {
    title: string;
    image: string;
    description: string;
    items: ServiceItem[];
  }

export default function ServiceCard({ title, image, description, items }: ServiceCardProps) {
    const [isLoading, setIsLoading] = useState(true);

    const stickyImage = useRef<HTMLDivElement | null>(null);

    return (
      <div className="space-y-4" ref={stickyImage}>
        {isLoading ? (
          <div className="animate-pulse w-[100%] h-[100px] bg-gray-300 rounded-xl" />
        ) : (
          <div className='grid lg:grid-cols-12 gap-4 lg:gap-16 justify-center'>
            <div className={`lg:col-span-5 flex flex-col gap-4 lg:sticky top-[150px] self-start`}>
              <Image
                src={image}
                alt="Logo"
                width={100}
                height={100}
              className="w-full aspect-video rounded"
              />
              <h2 className="text-base sm:text-lg md:text-xl dark:text-gray-300 font-medium text-justify max-w-2xl mx-auto md:mx-0 mb-2  ">{description}</h2>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-4">
              <h2 className="text-xl font-bold text-foreground">Jenis {title.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase())}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 max-w-[80%] mx-auto sm:mx-0 sm:max-w-full">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:flex-row rounded-xl border border-gray-200 dark:border-gray-800"
                  >
                    <Image
                      src={image}
                      alt="Logo"
                      width={100}
                      height={100}
                      className="w-full min-w-[100px] md:max-w-[150px] aspect-square rounded-t-xl md:rounded-s-xl object-cover"
                      onLoadingComplete={() => setIsLoading(false)}
                    />
                    <div className="flex flex-col gap-2 p-3 md:pt-0 text-justify">
                      <h3 className="font-bold text-base sm:text-lg text-foreground">{item.title}</h3>
                      <p className="text-sm sm:text-md font-medium text-foreground">
                        <span className="font-semibold">Cocok untuk:</span>{' '}
                        <span className="block sm:inline">{item.usage}</span>
                      </p>
                      <p className="text-sm sm:text-md font-medium text-foreground">
                        <span className="block sm:inline font-semibold">Karakteristik:</span>{' '}
                        <span className="block sm:inline">{item.character}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}
      </div>
    );
    
  }
  