import KnowUs from "./KnowUs";
import KnowUsClientCarousel from "./KnowUsClientCarousel";
import WhyUs from "./WhyUs";

export default function About(){
    return (
        <section id="about">    
            <div className="py-20 lg:py-25 bg-background-1 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-auto container">
                    <KnowUsClientCarousel />
                    <KnowUs />
                </div>
            </div>
            <WhyUs />
        </section>
    )
}
About.displayName = "About";