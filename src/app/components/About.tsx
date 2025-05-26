import { forwardRef } from "react";
import KnowUs from "./KnowUs";
import WhyUs from "./WhyUs";


const About = forwardRef<HTMLElement>((props, ref) => {


    return (
        <section ref={ref} id="about">
            <KnowUs />
            <WhyUs />
        </section>
    )
})
About.displayName = "About";
export default About