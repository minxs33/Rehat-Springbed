import { MapPinIcon, ArrowTopRightOnSquareIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 dark:border-white/10 text-sm text-black/80 dark:text-white/60 px-4 py-10 lg:py-8 lg:mb-0 mb-16 transition-colors">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between lg:gap-4 gap-8">
        <div>
          <p className="font-semibold text-black dark:text-white mb-2">Lokasi Rehat Springbed</p>
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

        <div className="flex flex-col">
          <p className="font-semibold text-black dark:text-white mb-2 text-start lg:text-end">Ikuti Kami</p>
          <div className="flex-row flex gap-2">
            <a
              href="https://www.instagram.com/rehatspringbed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/80 dark:text-white/60 hover:text-black dark:hover:text-white hover:underline transition-colors"
            >
            <svg
              className="w-6 h-6 fill-black/80 dark:fill-white/60 hover:fill-black dark:hover:fill-white transition-colors"
              width="180"
              height="180"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeWidth="0">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                />
                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                />
              </g>
            </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61576885467495"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/80 dark:text-white/60 hover:text-black dark:hover:text-white hover:underline transition-colors"
            >
            <svg
              className="w-6 h-6 fill-black/80 dark:fill-white/60 hover:fill-black dark:hover:fill-white transition-colors"
              width="180"
              height="180"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>facebook</title> <path d="M30.996 16.091c-0.001-8.281-6.714-14.994-14.996-14.994s-14.996 6.714-14.996 14.996c0 7.455 5.44 13.639 12.566 14.8l0.086 0.012v-10.478h-3.808v-4.336h3.808v-3.302c-0.019-0.167-0.029-0.361-0.029-0.557 0-2.923 2.37-5.293 5.293-5.293 0.141 0 0.281 0.006 0.42 0.016l-0.018-0.001c1.199 0.017 2.359 0.123 3.491 0.312l-0.134-0.019v3.69h-1.892c-0.086-0.012-0.185-0.019-0.285-0.019-1.197 0-2.168 0.97-2.168 2.168 0 0.068 0.003 0.135 0.009 0.202l-0.001-0.009v2.812h4.159l-0.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814v-0z"></path> </g>
            </svg>
            </a>
            <a
              href="mailto:rehatspringbed@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/80 dark:text-white/60 hover:text-black dark:hover:text-white hover:underline transition-colors"
            >
            <EnvelopeIcon className="w-6 h-6 fill-black/80 dark:fill-white/60 hover:fill-black dark:hover:fill-white transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-black/40 dark:text-white/40 text-xs transition-colors">
        © {new Date().getFullYear()} Rehat Springbed. Website by Naufal Fadhilah Alwan. All rights reserved.
      </div>
    </footer>
  );
}
