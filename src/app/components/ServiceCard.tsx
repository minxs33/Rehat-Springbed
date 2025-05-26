import { useRef } from "react";
import Image from "next/image";

interface ServiceItem {
    title: string;
    usage: string;
    character: string;
  }
  
  interface ServiceCardProps {
    image: string;
    description: string;
    items: ServiceItem[];
  }

export default function ServiceCard({ image, description, items }: ServiceCardProps) {

    const stickyImage = useRef<HTMLDivElement | null>(null);

    return (
      <div className="space-y-4" ref={stickyImage}>
        <div className='grid lg:grid-cols-[3fr_2fr] lg:max-w-7xl mx-auto gap-4 lg:gap-8 justify-center'>
          <div className={`flex flex-col gap-4 lg:sticky top-[150px] self-start`}>
            <Image
              src={image}
              alt="Logo"
              width={100}
              height={100}
            className="w-full aspect-video rounded-2xl shadow-sm"
            />
            <h2 className="text-base sm:text-lg md:text-xl dark:text-gray-300 font-medium text-justify mx-auto md:mx-0 mb-2 ">{description}</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-8 max-w-[80%] mx-auto sm:mx-0 sm:max-w-full">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 md:flex-row rounded-2xl p-3 md:shadow-[0_0_10px_rgba(0,0,0,0.12)]"
              >
                <Image
                  src={image}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-full min-w-[100px] md:max-w-[150px] aspect-square rounded-2xl object-cover"
                />
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
          </div>
        </div>
      </div>
    );
    
  }
  