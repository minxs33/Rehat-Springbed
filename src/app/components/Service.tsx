import ClientServices from './ClientServices';
import CreateNew from './CreateNew';
import { serviceData } from '../data/serviceData';

export default function Service() {
    const initialServiceEntries = Object.entries(serviceData);

    return (
        <section className="bg-background py-15 lg:py-25 flex-col" id="services">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary">Layanan Kami</h2>
                <p className="text-lg text-foreground font-semibold text-center mb-8">
                    Kami menyediakan service springbed unggulan untuk memenuhi kebutuhan tidur nyaman anda
                </p>
            </div>
            <div className='mb-16'>
                <ClientServices serviceEntries={initialServiceEntries} />
            </div>
            <div className="container mx-auto sm:px-4">
                
                {/* Create New Title */}
                <div className="max-w-7xl grid grid-cols-1 gap-7 lg:grid-cols-2 px-2 sm:px-8 py-12 mx-auto bg-gradient-to-b md:bg-gradient-to-tr from-[#2A9F8E] to-[#4aeed5] dark:to-[#3f6a63] dark:from-[#1F4741] rounded-2xl shadow hover:shadow-xl transition ease-in-out duration-300"> 
                    <div className="flex flex-col gap-4 justify-start mt-5 px-3">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                        Buat kasur baru
                        </h2>
                        <p className="text-white dark:text-gray-200 font-medium text-lg leading-relaxed">
                        Kami juga menyediakan layanan untuk membuat kasur baru sesuai kebutuhan anda.
                        </p>
                    </div>
                <CreateNew />
                </div>
            </div>
        </section>
    );
}