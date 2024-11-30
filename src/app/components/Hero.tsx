import Image from "next/image";
import Logo from "../gold_logo.png";
import Slider1 from "../slider2.jpg"
import Slider2 from "../download (1).jpg"
import Slider3 from "../download (2).jpeg"
import Slider4 from "../hero.avif";

export const Hero = () => {
  return (
    <div className="bg-white">
      <header className="bg-[#FCF8F1] bg-opacity-30">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div>
              <Image className="mt-10" alt="Image" src={Logo} width={100} height={100} />
            </div>

            <button
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                ></path>
              </svg>

              <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a
                href="#AboutUs"
                title=""

                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
               About Us
              </a>
              <a
                href="#ProductGallery"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                Product Gallery
              </a>
              <a
                href="#Reviews"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
               Reviews
              </a>
              <a
                href="#Contact"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                Contact Us
              </a>
            </div>

            <a
              href="#"
              title=""
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
              role="button"
            >
              Explore More
            </a>
          </div>
        </div>
      </header>


      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                A WORLD OF PRECIOUS BEAUTY
              </p>
              <h1 className="mt-4 text-3xl font-bold text-black lg:mt-8 sm:text-5xl xl:text-7xl">
                Adorn Yourself with Timeless Elegance
              </h1>

              <h1 className="flex items-center text-3xl font-medium text-neutral-400 mt-4">
                Dive Into
                <span className="relative ml-3 h-[1em] w-36 overflow-hidden">
                  <span
                    className="absolute h-full w-full -translate-y-full animate-slide leading-none text-gold-500"
                  >
                 Luxury
                  </span>
                  <span
                    className="absolute h-full w-full -translate-y-full animate-slide leading-none text-gold-500 [animation-delay:0.83s]"
                  >
              Beauty
                  </span>
                  <span
                    className="absolute h-full w-full -translate-y-full animate-slide leading-none text-gold-500 [animation-delay:1.83s]"
                  >
                 Sparkle
                  </span>
                </span>
              </h1>

              <a
                href="#"
                title=""
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                role="button"
              >
                Join for free
                <svg
                  className="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>

            {/* Right Side: Replacing Image with Gallery */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={Slider1}
                  alt="Gold Image 1"
                  width={300}
                  height={300}
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={Slider2}
                  alt="Gold Image 2"
                  width={300}
                  height={300}
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={Slider3}
                  alt="Gold Image 3"
                  width={300}
                  height={300}
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={Slider4}
                  alt="Gold Image 4"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

