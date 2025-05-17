'use client'
import { forwardRef } from "react";
import KnowUs from "./KnowUs";
import WhyUs from "./WhyUs";


const About = forwardRef<HTMLElement>((props, ref) => {


    return (
        <section ref={ref} id="about" className="bg-background-1 py-20 lg:py-25">
            <div className="container mx-auto flex flex-col gap-32 px-4">
                <KnowUs />
                <WhyUs />
            </div>
        </section>
    )
})
About.displayName = "About";
export default About