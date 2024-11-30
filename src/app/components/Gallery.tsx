import Image from "next/image";
import Slider1 from "../slider2.jpg"; // Ensure this path is correct

export const Gallery = () => {
  return (
   <div id="ProductGallery" className="relative min-h-screen bg-gradient-to-r from-rose-100 to-teal-100 animate-gradient-flow p-7">
    <h1 className="text-center text-5xl font-extrabold text-black">Our Jewellery Product</h1>

     

    <div className="p-7  grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* First Column */}
      <div className="grid gap-4">
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <Image
            className="h-auto max-w-full rounded-lg transition-transform duration-300 group-hover:scale-110"
            src={Slider1}
            alt="Gallery Image 1"
            width={300}
            height={300}
            layout="responsive"
            />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold mb-3">
              Elegant Necklace
            </p>
            <button className="px-4 py-2 bg-yellow-400 text-black rounded-md shadow-lg hover:bg-yellow-500 transition-all">
              Contact to Purchase
            </button>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <Image
            className="h-auto max-w-full rounded-lg transition-transform duration-300 group-hover:scale-110"
            src={Slider1}
            alt="Gallery Image 2"
            width={300}
            height={300}
            layout="responsive"
            />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold mb-3">
              Diamond Ring
            </p>
            <button className="px-4 py-2 bg-yellow-400 text-black rounded-md shadow-lg hover:bg-yellow-500 transition-all">
              Contact to Purchase
            </button>
          </div>
        </div>
      </div>

      {/* Second Column */}
      <div className="grid gap-4">
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <Image
            className="h-auto max-w-full rounded-lg transition-transform duration-300 group-hover:scale-110"
            src={Slider1}
            alt="Gallery Image 3"
            width={300}
            height={300}
            layout="responsive"
            />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold mb-3">
              Golden Bracelet
            </p>
            <button className="px-4 py-2 bg-yellow-400 text-black rounded-md shadow-lg hover:bg-yellow-500 transition-all">
              Contact to Purchase
            </button>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <Image
            className="h-auto max-w-full rounded-lg transition-transform duration-300 group-hover:scale-110"
            src={Slider1}
            alt="Gallery Image 4"
            width={300}
            height={300}
            layout="responsive"
            />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold mb-3">
              Luxury Earrings
            </p>
            <button className="px-4 py-2 bg-yellow-400 text-black rounded-md shadow-lg hover:bg-yellow-500 transition-all">
              Contact to Purchase
            </button>
          </div>
        </div>
      </div>

      {/* Third Column */}
      <div className="grid gap-4">
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <Image
            className="h-auto max-w-full rounded-lg transition-transform duration-300 group-hover:scale-110"
            src={Slider1}
            alt="Gallery Image 5"
            width={300}
            height={300}
            layout="responsive"
            />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold mb-3">
              Precious Bangles
            </p>
            <button className="px-4 py-2 bg-yellow-400 text-black rounded-md shadow-lg hover:bg-yellow-500 transition-all">
              Contact to Purchase
            </button>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <Image
            className="h-auto max-w-full rounded-lg transition-transform duration-300 group-hover:scale-110"
            src={Slider1}
            alt="Gallery Image 6"
            width={300}
            height={300}
            layout="responsive"
            />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold mb-3">
              Stylish Anklet
            </p>
            <button className="px-4 py-2 bg-yellow-400 text-black rounded-md shadow-lg hover:bg-yellow-500 transition-all">
              Contact to Purchase
            </button>
          </div>
        </div>
      </div>

      {/* Fourth Column */}
      <div className="grid gap-4">
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <Image
            className="h-auto max-w-full rounded-lg transition-transform duration-300 group-hover:scale-110"
            src={Slider1}
            alt="Gallery Image 7"
            width={300}
            height={300}
            layout="responsive"
            />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold mb-3">
              Elegant Pendant
            </p>
            <button className="px-4 py-2 bg-yellow-400 text-black rounded-md shadow-lg hover:bg-yellow-500 transition-all">
              Contact to Purchase
            </button>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
          <Image
            className="h-auto max-w-full rounded-lg transition-transform duration-300 group-hover:scale-110"
            src={Slider1}
            alt="Gallery Image 8"
            width={300}
            height={300}
            layout="responsive"
            />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold mb-3">
              Precious Bracelet
            </p>
            <button className="px-4 py-2 bg-yellow-400 text-black rounded-md shadow-lg hover:bg-yellow-500 transition-all">
              Contact to Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
            </div>
    
  );
};

export default Gallery;