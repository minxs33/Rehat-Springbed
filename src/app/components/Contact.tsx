'use client'

import { forwardRef, useEffect} from "react";
import Image from "next/image";
import SocialButton from "./SocialButton";

const Contact = forwardRef<HTMLElement>((props, ref) => {


  useEffect(() => {
    const el = document.getElementById("contact");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const event = new CustomEvent("contact-scroll", {
          detail: { isPassed: !entry.isIntersecting },
        });
        window.dispatchEvent(event);
      },
      {
        threshold: 1,
        rootMargin: "0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, []);


  return (
    <section
      ref={ref}
      id="contact"
      className="relative overflow-hidden py-15 lg:py-25 bg-background-1"
    >
      <div
        className="
          absolute
          w-[40rem] h-[40rem] -top-[50%] -left-[50%]
          sm:w-[100rem] sm:h-[100rem] sm:-top-[190%] sm:-left-[100%]
          md:w-[100rem] md:h-[140rem] md:-top-[200%] md:-left-[100%]
          lg:w-[200rem] lg:h-[100rem] lg:-top-[100%] lg:-left-[120%]
          xl:w-[200rem] xl:h-[100rem] xl:-top-[90%] xl:-left-[80%]
          pointer-events-none
          z-0
        "
        data-rellax-speed="3"
      >
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full blur-[200px] opacity-40 dark:opacity-20"
        >
          <path
            fill="var(--primary)"
            d="M45.1,-32.4C58.9,-18.6,70.9,0.1,70.2,21.3C69.6,42.5,56.4,66.1,35.8,76.9C15.3,87.8,-12.6,85.9,-29.3,73.2C-46,60.4,-51.4,36.7,-57.6,12.4C-63.7,-11.9,-70.5,-36.8,-61.1,-49.6C-51.6,-62.4,-25.8,-63.1,-5.1,-59C15.6,-54.9,31.3,-46.2,45.1,-32.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    
      <div className="relative container mx-auto px-4 z-1">
        <div className="flex flex-col gap-16 items-center justify-center">
          <Image
            src="/bed.svg"
            alt="Logo"
            width={100}
            height={100}
            className="w-full max-w-[600px] aspect-video rounded"
          />
          <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800 dark:text-white leading-tight tracking-tight">
            Wujudkan <span className="text-primary dark:text-foreground">tidur nyenyak</span> Anda bersama <br className="hidden sm:block" /><span className="text-primary underline decoration-[--foreground]">Rehat Springbed</span> sekarang juga
          </h2>

          <div className="flex gap-3 items-center justify-center">
            <SocialButton 
              onClick={() => {}} 
              icon={
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-[#25D366]">
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              }
              className="whatsapp-button px-6 py-2 lg:px-8 lg:py-4 bg-[#26997A] text-white hover:bg-[#64D8B9] text-base sm:text-sm md:text-md lg:text-lg text-nowrap"
            >
              <span className="text-sm font-semibold">Hubungi Whatsapp 1</span>
            </SocialButton>
            <SocialButton 
              onClick={() => {}} 
              icon={
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-[#25D366]">
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              }
              className="whatsapp-button px-6 py-2 lg:px-8 lg:py-4 bg-[#26997A] text-white hover:bg-[#64D8B9] text-base sm:text-sm md:text-md lg:text-lg text-nowrap"
            >
              <span className="text-sm font-semibold">Hubungi Whatsapp 2</span>
            </SocialButton>
          </div>
        </div>
      </div>
    </section>
    
  );
});

Contact.displayName = "Contact";
export default Contact;
