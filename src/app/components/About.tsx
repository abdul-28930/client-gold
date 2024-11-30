import React from "react";

export const AboutUs = () => {
    return (
        <div id="About" className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Image Section */}
                    <div className="relative h-[500px]">
                        <div className="absolute inset-0 bg-[#FFF9E5] rounded-3xl overflow-hidden">
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-[#F4B41A] mb-6">
                            Our Legacy of Excellence
                        </h2>
                        <p className="text-gray-600 mb-12">
                            With over two decades of expertise in fine jewelry, we blend traditional craftsmanship with contemporary design. Each piece tells a unique story of elegance and sophistication.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-[#FFF9E5] p-6 rounded-xl">
                                <h3 className="text-[#B87514] font-semibold mb-2">Expert Craftsmanship</h3>
                                <p className="text-gray-600 text-sm">Meticulously crafted by master artisans</p>
                            </div>
                            <div className="bg-[#FFF9E5] p-6 rounded-xl">
                                <h3 className="text-[#B87514] font-semibold mb-2">Premium Materials</h3>
                                <p className="text-gray-600 text-sm">Only the finest gems and precious metals</p>
                            </div>
                            <div className="bg-[#FFF9E5] p-6 rounded-xl">
                                <h3 className="text-[#B87514] font-semibold mb-2">Custom Design</h3>
                                <p className="text-gray-600 text-sm">Personalized pieces for unique stories</p>
                            </div>
                            <div className="bg-[#FFF9E5] p-6 rounded-xl">
                                <h3 className="text-[#B87514] font-semibold mb-2">Lifetime Warranty</h3>
                                <p className="text-gray-600 text-sm">Quality guaranteed for generations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;