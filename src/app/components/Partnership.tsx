import Link from "next/link";
import Image from "next/image";

export default function Partnership() {
  return (
    <section className="bg-background-3 py-4 lg:py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-3 font-semibold">
          <span>Mitra kami </span>
          <Link href="https://adhitamaspringbed.wordpress.com" target="_blank" className="transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/adhitama.png"
              alt="Adhitama Logo"
              width={50}
              height={50}
              className="rounded-md"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
