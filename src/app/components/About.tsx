import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section id="AboutUs"  className="relative bg-[#FCF8F1] py-16 sm:py-24">
      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-2xl opacity-20"></div>
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-24">
          {/* Left Side: About Us Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-black sm:text-5xl lg:text-6xl animate-fade-in-up">
              About Us
            </h2>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed animate-fade-in-up [animation-delay:0.5s]">
              For generations, we've been crafting jewelry that inspires elegance and radiates
              luxury. Our timeless designs reflect unparalleled craftsmanship, purity, and a legacy
              of trust.
            </p>
            <p   className="mt-4 text-lg text-neutral-600 animate-fade-in-up [animation-delay:1s]">
              Every piece tells a story—crafted with care, passion, and a touch of brilliance.
            </p>
            <p className="mt-4 text-lg text-neutral-600 animate-fade-in-up [animation-delay:1.5s]">
              Let us adorn you with the sparkle of forever.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 mt-6 font-semibold text-white transition-all duration-200 bg-yellow-300 rounded-full shadow-lg hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-500 animate-fade-in-up [animation-delay:2s]"
            >
              Discover Our Story
            </a>
          </div>

          {/* Right Side: Minimal Decorative Elements */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div  className="p-6 bg-white rounded-lg shadow-lg animate-fade-in-up [animation-delay:2.5s]">
              <h3 className="text-2xl font-bold text-gold-500">Our Promise</h3>
              <ul className="mt-4 space-y-4 text-neutral-600">
                <li className="flex items-center space-x-2">
                  <span className="inline-block w-3 h-3 bg-gold-500 rounded-full"></span>
                  <span>Timeless Craftsmanship</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="inline-block w-3 h-3 bg-gold-500 rounded-full"></span>
                  <span>Unparalleled Purity</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="inline-block w-3 h-3 bg-gold-500 rounded-full"></span>
                  <span>A Legacy of Trust</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;