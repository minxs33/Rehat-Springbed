import { MapPinIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 dark:border-white/10 text-sm text-black/80 dark:text-white/60 px-4 py-10 lg:py-8 lg:mb-0 mb-16 transition-colors">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between lg:gap-4 gap-8">
        <div>
          <p className="font-semibold text-black dark:text-white mb-1">Rehat Springbed</p>
          <a
            href="https://maps.app.goo.gl/wVNWNAYvuA6beWXZ8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 text-black/80 dark:text-white/60 hover:text-black dark:hover:text-white hover:underline transition-colors"
          >
            <MapPinIcon className="w-4 h-4 mt-[2px]" />
            <span className="inline">
              Jl. Kp. Setu Sela, Pasir Jambu, Sukaraja, Bogor, Jawa Barat <br />
              16710, Indonesia
              <ArrowTopRightOnSquareIcon className="w-3 h-3 inline ml-1 align-text-top" />
            </span>
          </a>
        </div>

        <div>
          <p>
            Email:{" "}
            <a
              href="mailto:rehat.springbed@gmail.com"
              className="text-black dark:text-white hover:text-black dark:hover:text-white hover:underline transition-colors"
            >
              rehat.springbed@gmail.com
            </a>
          </p>
          <p>
            Telepon:{" "}
            <a
              href="tel:+6281234567890"
              className="text-black dark:text-white hover:text-black dark:hover:text-white hover:underline transition-colors"
            >
              +62 812-3456-7890
            </a>
          </p>
          <p>
            Instagram:{" "}
            <a
              href="https://instagram.com/rehatspringbed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/80 dark:text-white hover:text-black dark:hover:text-white hover:underline transition-colors"
            >
              @rehatspringbed
            </a>
          </p>
        </div>
      </div>

      <div className="mt-12 text-center text-black/40 dark:text-white/40 text-xs transition-colors">
        © {new Date().getFullYear()} Rehat Springbed. Website by Naufal Fadhilah Alwan. All rights reserved.
      </div>
    </footer>
  );
}
