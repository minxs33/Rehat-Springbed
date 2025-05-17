'use client'
import { Fragment, useState, useEffect, useRef, forwardRef } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Rellax from 'rellax';

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

const Hero = forwardRef<HTMLElement>((props, ref) => {

  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const event = new CustomEvent("header-scroll", {
          detail: { isPassed: !entry.isIntersecting },
        });
        window.dispatchEvent(event);
      },
      { threshold: 0, rootMargin: '0px' }
    );
  
    const el = document.getElementById("home");
    if (el) observer.observe(el);
  
    return (): void => {
      const el = document.getElementById("home");
      if (el) observer.unobserve(el);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const rellax = new Rellax('[data-rellax-speed]', {
        center: false,
        round: true,
        vertical: true,
        horizontal: false,
      });

      return () => {
        rellax.destroy();
      };
    }
  }, []);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const SocialButton = ({ onClick, icon, children, className } : any) => (
    <button onClick={onClick} className={`flex items-center gap-2 rounded-full font-semibold drop-shadow-lg ${className}`}>
      {icon}
      {children}
    </button>
  );

  const handleWhatsapp = (number: string) => {
    window.open(`https://wa.me/${number}`, "_blank");
  };

  const handleInstagram = (username: string) => {
    window.open(`https://instagram.com/${username}`, "_blank");
  };

  return (
    <section id="home" ref={ref} className="bg-background-2 pt-4 pb-16 hero-trigger">
      <div className="container grid gap-8 md:gap-12 lg:gap-16 lg:justify-between lg:grid-cols-12 mx-auto relative overflow-hidden p-2 px-4">
        <div className="lg:col-span-6 flex flex-col gap-6 xl:gap-4 justify-center text-wrap lg:text-left">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight rellax" data-rellax-speed="-1">Lorem ipsum dolor sit amet consectetur, <span className="text-primary underline decoration-[--foreground]">adipisicing elit</span></h1>

          <p className="text-base sm:text-lg md:text-xl dark:text-gray-300 font-medium text-justify max-w-2xl mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse in corrupti eos non velit facilis possimus! Blanditiis neque ea culpa, ducimus obcaecati cumque qui tenetur quae impedit unde repudiandae. Vel.
          </p>

          <div className="flex justify-center gap-4 lg:justify-start">
          <SocialButton
            onClick={() => handleWhatsapp("628123456789")}
            className="whatsapp-button px-6 py-2 lg:px-8 lg:py-4 bg-[#26997A] text-white hover:bg-[#64D8B9] text-base sm:text-sm md:text-md lg:text-lg text-nowrap"
            icon={
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-[#25D366]">
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            }>
            Hubungi Kami
          </SocialButton>
            <div id="instagram-button" className="p-[2px] rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] inline-block drop-shadow-lg transition duration-300 ease-in-out">
              <SocialButton 
                onClick={() => handleInstagram("https://instagram.com/yourusername")}
                className=" bg-background-2 p-5 text-nowrap"
                icon={
                  <svg
                    className="w-6 h-6"
                    width="180"
                    height="180"
                    viewBox="0 0 24 24"
                    fill="url(#instaGradient)"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="url(#instaGradient)"
                    strokeWidth="0"
                  >
                    <defs>
                      <linearGradient id="instaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f58529" />
                        <stop offset="50%" stopColor="#dd2a7b" />
                        <stop offset="100%" stopColor="#515bd4" />
                      </linearGradient>
                    </defs>
                    <g strokeWidth="0">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                      />
                      <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                      />
                    </g>
                  </svg>
                }
                
              />

            </div>
          </div>
        </div>
        <div className="lg:col-span-6 relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-square flex flex-col justify-center items-center">
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
                  alt=""
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
    </section>
  );
})

export default Hero;

{/* <button
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
</button> */}
{/* Indicators */}
{/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
  {slides.map((_, idx) => (
    <button
      key={idx}
      onClick={() => setCurrent(idx)}
      className={`w-3 h-3 rounded-full transition-all duration-300 ${
        idx === current ? "bg-white" : "bg-white/50"
      }`}
    />
  ))}
</div> */}