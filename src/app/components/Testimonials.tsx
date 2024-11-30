'use client';
import { useEffect, useState } from 'react';

interface Review {
    author_name: string;
    rating: number;
    relative_time_description: string;
    text: string;
    profile_photo_url: string;
}

export const Testimonials = () => {
    return (
        <div id="Reviews" className="p-16 bg-white my-4 font-[sans-serif] max-w-6xl max-md:max-w-lg mx-auto">
            <div className="md:mb-28 mb-12 text-center">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 text-transparent bg-clip-text">What our happy clients say</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 relative">
                <div className="bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 max-w-[65%] h-[145%] w-full -top-16 left-0 right-0 mx-auto rounded-3xl absolute max-md:hidden">
                </div>

                <div className="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md transform transition-all duration-300 hover:scale-105">
                    <div className="flex items-center space-x-3">
                        <img src="https://readymadeui.com/profile_2.webp" className="w-10 h-10 rounded-full" alt="Client 1" />
                        <div>
                            <h4 className="text-gray-800 text-sm font-bold">Sarah Johnson</h4>
                            <div className="flex items-center mt-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-4 h-4 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-600 text-sm leading-relaxed">Absolutely stunning jewelry! The craftsmanship is exceptional, and the customer service was outstanding. I found the perfect engagement ring here.</p>
                    </div>
                </div>

                <div className="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md transform transition-all duration-300 hover:scale-105">
                    <div className="flex items-center space-x-3">
                        <img src="https://readymadeui.com/profile_3.webp" className="w-10 h-10 rounded-full" alt="Client 2" />
                        <div>
                            <h4 className="text-gray-800 text-sm font-bold">Michael Chen</h4>
                            <div className="flex items-center mt-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-4 h-4 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-600 text-sm leading-relaxed">The selection of unique pieces here is amazing. I purchased a beautiful necklace for my wife's anniversary, and she absolutely loves it!</p>
                    </div>
                </div>

                <div className="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md transform transition-all duration-300 hover:scale-105">
                    <div className="flex items-center space-x-3">
                        <img src="https://readymadeui.com/profile_4.webp" className="w-10 h-10 rounded-full" alt="Client 3" />
                        <div>
                            <h4 className="text-gray-800 text-sm font-bold">Emily Rodriguez</h4>
                            <div className="flex items-center mt-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-4 h-4 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-600 text-sm leading-relaxed">Their custom design service is fantastic! They helped me create a one-of-a-kind bracelet that perfectly matches my style. Highly recommended!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;