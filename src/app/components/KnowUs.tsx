import Image from "next/image";
export default function KnowUs() {
    return (

      <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#2DA092] dark:text-[#299F90] leading-none font-sans">
            Mengenal{' '}
            <span className="align-middle inline-flex items-center gap-2 text-[#1F7768] dark:text-[#75F0DB]">
              <Image
                src="/images/logo-light.png"
                alt="Rehat Springbed logo"
                width={40}
                height={40}
                className="w-12 h-12 object-contain align-middle"
                loading="lazy"
              />
            </span>
              springbed
          </h2>

          <p className="text-lg text-foreground font-semibold text-justify mb-8">
            Rehat Springbed hadir untuk membantu Anda tidur lebih berkualitas dengan springbed yang nyaman dan tahan lama. Didukung tim ahli dan peralatan modern, kami pastikan setiap springbed siap pakai dan awet digunakan. Kami percaya tidur sehat dimulai dari tempat tidur yang nyaman, sehingga kami selalu memberikan layanan terbaik untuk Anda. Bersama Rehat Springbed, wujudkan tidur nyaman dan sehat di rumah Anda.
          </p>
      </div>

    )
}

