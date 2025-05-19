import { TruckIcon } from "@heroicons/react/20/solid";

export default function WhyUs(){

    return(
      <div className="flex flex-col gap-12 px-4 py-20 lg:py-25 bg-background">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Kenapa Memilih Rehat Springbed?
        </h2>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16 place-items-center mx-auto container">
          
          <div className="bg-background-2 relative flex flex-col gap-8 items-center justify-center rounded-xl px-4 py-16 max-w-md w-full">
            <div className="w-20 h-20 absolute -top-[40px] flex items-center justify-center bg-primary rounded-full">
              <TruckIcon className="w-10 h-10 text-white" />
            </div>
            <div className="self-start text-start">
              <p className="text-sm text-foreground px-4 font-medium">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore nostrum quia perferendis voluptates eum ratione nemo autem possimus ipsam voluptas.
              </p>
            </div>
          </div>

          <div className="bg-background-2 relative flex flex-col gap-8 items-center justify-center rounded-xl px-4 py-16 max-w-md w-full">
            <div className="w-20 h-20 absolute -top-[40px] flex items-center justify-center bg-primary rounded-full">
              <TruckIcon className="w-10 h-10 text-white" />
            </div>
            <div className="self-start text-start">
              <p className="text-sm text-foreground px-4 font-medium">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore nostrum quia perferendis voluptates eum ratione nemo autem possimus ipsam voluptas.
              </p>
            </div>
          </div>
          
          <div className="bg-background-2 relative flex flex-col gap-8 items-center justify-center rounded-xl px-4 py-16 max-w-md w-full">
            <div className="w-20 h-20 absolute -top-[40px] flex items-center justify-center bg-primary rounded-full">
              <TruckIcon className="w-10 h-10 text-white" />
            </div>
            <div className="self-start text-start">
              <p className="text-sm text-foreground px-4 font-medium">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore nostrum quia perferendis voluptates eum ratione nemo autem possimus ipsam voluptas.
              </p>
            </div>
          </div>

          <div className="bg-background-2 relative flex flex-col gap-8 items-center justify-center rounded-xl px-4 py-16 max-w-md w-full">
            <div className="w-20 h-20 absolute -top-[40px] flex items-center justify-center bg-primary rounded-full">
              <TruckIcon className="w-10 h-10 text-white" />
            </div>
            <div className="self-start text-start">
              <p className="text-sm text-foreground px-4 font-medium">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore nostrum quia perferendis voluptates eum ratione nemo autem possimus ipsam voluptas.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    )
}