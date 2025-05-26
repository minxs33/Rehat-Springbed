import ClientServices from './ClientServices';
import { serviceData } from '../data/serviceData';

export default function Service() {
    const initialServiceEntries = Object.entries(serviceData);

    return (
        <section className="bg-background py-15 lg:py-25" id="services">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary">Layanan Kami</h2>
                <p className="text-lg text-foreground font-semibold text-center mb-8">
                    Kami menyediakan service springbed unggulan untuk memenuhi kebutuhan tidur nyaman anda
                </p>
            </div>
            <ClientServices serviceEntries={initialServiceEntries} />
        </section>
    );
}