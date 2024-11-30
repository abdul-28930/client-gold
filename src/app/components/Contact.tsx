export const Contact = () => {
    return (
        <div id="Contact" className="w-screen bg-white text-black py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-amber-400 to-yellow-500 text-transparent bg-clip-text">Contact us</h2>
                
                <div className="flex flex-col items-center gap-8">
                    {/* Google Maps Embed with Gradient Background */}
                    <div className="relative w-full max-w-2xl mx-auto">
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-100 rounded-lg blur-xl opacity-50 transform scale-105"></div>
                        
                        {/* Map Container */}
                        <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] duration-500">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985619587854!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1679900000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    {/* WhatsApp Button Section */}
                    <div className="mt-8 animate-bounce-slow">
                        <a
                            href="https://wa.me/+919999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            <svg
                                className="w-6 h-6 fill-current animate-pulse"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                            </svg>
                            Chat with us on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;