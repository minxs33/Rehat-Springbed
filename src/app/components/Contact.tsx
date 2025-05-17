import { forwardRef } from "react";

const Contact = forwardRef<HTMLElement>((props, ref) => {
    return(
        <section ref={ref} id="contact" className="bg-background py-20 lg:py-25">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
                    <div className="flex flex-col gap-16">
                        <h1 className="text-3xl md:text-4xl font-bold text-primary text-center">Sudah siap? Hubungi Kami</h1>
                    </div>
                </div>
            </div>
        </section>
    )
})

Contact.displayName = "Contact";
export default Contact