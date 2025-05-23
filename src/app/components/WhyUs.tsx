import { TruckIcon, CubeIcon, SparklesIcon, SwatchIcon, WrenchScrewdriverIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid";

export default function WhyUs(){

    return(
      <div className="flex flex-col gap-12 px-4 py-20 lg:py-25 bg-background">
        <div className="mx-auto container">
          <h2 className="text-3xl font-bold text-start mb-18 text-primary">
            Kenapa Memilih Rehat Springbed?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16 place-items-center">
          
            <div className="border-l-4 border-muted border-start relative flex flex-col gap-4 py-2 px-4 max-w-md w-full">
              <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-sm">
                <TruckIcon className="w-10 h-10 dark:text-white text-primary" />
              </div>
              <div className="text-sm text-foregroundmt-2 flex flex-col gap-3"> 
                <h3 className="font-semibold">Antar Jemput se-Jabodetabek</h3>
                <p className="font-medium text-black/80 dark:text-white/75">
                  Kami menyediakan layanan antar-jemput yang tepat waktu dengan fleksibilitas jadwal, menyesuaikan waktu pengantaran dan pengambilan sesuai dengan kebutuhan dan keinginan konsumen.
                </p>
              </div>
            </div>
            <div className="border-l-4 border-muted border-start relative flex flex-col gap-4 py-2 px-4 max-w-md w-full">
              <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-sm">
                <CubeIcon className="w-10 h-10 dark:text-white text-primary" />
              </div>
              <div className="text-sm text-foregroundmt-2 flex flex-col gap-3"> 
                <h3 className="font-semibold">Nyaman & Ergonomis</h3>
                <p className="font-medium text-black/80 dark:text-white/75">
                  Springbed dirancang mengikuti bentuk tubuh, sehingga tidur lebih rileks, tanpa pegal-pegal saat bangun.
                </p>
              </div>
            </div>
            <div className="border-l-4 border-muted border-start relative flex flex-col gap-4 py-2 px-4 max-w-md w-full">
              <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-sm">
                <SparklesIcon className="w-10 h-10 dark:text-white text-primary" />
              </div>
              <div className="text-sm text-foregroundmt-2 flex flex-col gap-3"> 
                <h3 className="font-semibold">Mengutamakan Kualitas</h3>
                <p className="font-medium text-black/80 dark:text-white/75">
                  Kami hanya menggunakan material terbaik—busa empuk, pegas kuat, dan kain lembut—yang nyaman dan tahan lama.
                </p>
              </div>
            </div>
            <div className="border-l-4 border-muted border-start relative flex flex-col gap-4 py-2 px-4 max-w-md w-full">
              <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-sm">
                <SwatchIcon className="w-10 h-10 dark:text-white text-primary" />
              </div>
              <div className="text-sm text-foregroundmt-2 flex flex-col gap-3"> 
                <h3 className="font-semibold">Desain Elegan & Fungsional</h3>
                <p className="font-medium text-black/80 dark:text-white/75">
                  Selain tampil menawan di kamar, desain kasur kami juga memastikan sirkulasi udara berjalan baik agar tidur tetap sejuk.
                </p>
              </div>
            </div>
            <div className="border-l-4 border-muted border-start relative flex flex-col gap-4 py-2 px-4 max-w-md w-full">
              <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-sm">
                <WrenchScrewdriverIcon className="w-10 h-10 dark:text-white text-primary" />
              </div>
              <div className="text-sm text-foregroundmt-2 flex flex-col gap-3"> 
                <h3 className="font-semibold">Layanan Profesional</h3>
                <p className="font-medium text-black/80 dark:text-white/75">
                  Kami menyediakan layanan yang dikerjakan oleh tim ahli berpengalaman untuk memastikan hasil yang rapi, cepat, dan memuaskan.
                </p>
              </div>
            </div>
            <div className="border-l-4 border-muted border-start relative flex flex-col gap-4 py-2 px-4 max-w-md w-full">
              <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-sm">
                <AdjustmentsHorizontalIcon className="w-10 h-10 dark:text-white text-primary" />
              </div>
              <div className="text-sm text-foregroundmt-2 flex flex-col gap-3"> 
                <h3 className="font-semibold">Bisa Custom Sesuai Kebutuhan</h3>
                <p className="font-medium text-black/80 dark:text-white/75">
                  Ingin kasur yang lebih empuk, lebih kokoh, atau memiliki desain khusus? Di REHAT, kamu bisa menyesuaikan setiap detail sesuai kebutuhan dan kenyamanan pribadi.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    )
}