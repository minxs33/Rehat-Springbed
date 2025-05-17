import { TruckIcon } from "@heroicons/react/24/solid"

export default function ChooseUs(){
    return(
        <section className="bg-background-3">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center py-4">
                    <div className="bg-primary w-30 h-30 mx-auto text-center flex flex-col items-center justify-center rounded-full shadow">
                        <TruckIcon className="w-10 h-10 text-white" />
                        <p className="text-sm text-white px-4">Pelayanan Terbaik</p>
                    </div>
                    <div className="bg-primary w-30 h-30 mx-auto text-center flex flex-col items-center justify-center rounded-full shadow">
                        <TruckIcon className="w-10 h-10 text-white" />
                        <p className="text-sm text-white px-4">Pelayanan Terbaik</p>
                    </div>
                    <div className="bg-primary w-30 h-30 mx-auto text-center flex flex-col items-center justify-center rounded-full shadow">
                        <TruckIcon className="w-10 h-10 text-white" />
                        <p className="text-sm text-white px-4">Pelayanan Terbaik</p>
                    </div>
                    <div className="bg-primary w-30 h-30 mx-auto text-center flex flex-col items-center justify-center rounded-full shadow">
                        <TruckIcon className="w-10 h-10 text-white" />
                        <p className="text-sm text-white px-4">Pelayanan Terbaik</p>
                    </div>
                </div>
            </div>
        </section>
    )
}