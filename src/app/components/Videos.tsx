export const Videos = () => {
    const videoLinks = Array(6).fill("https://www.youtube.com/embed/8DkfZ5jI7cE");
    
    return (
        <div id="Videos" className="relative py-20 w-screen bg-gradient-to-r from-amber-50 via-yellow-100 to-amber-100 animate-gradient-flow">
            <div className="max-w-7xl mx-auto">
                <div className="md:mb-20 mb-16 text-center">
                    <h2 className="text-3xl font-bold text-[#1A202C]">
                        Our Featured Videos
                    </h2>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
                    {videoLinks.map((link, index) => (
                        <div key={index} className="relative p-3 group">
                            {/* Video Embed */}
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-[1.02]">
                                <iframe
                                    className="w-full h-full"
                                    src={link}
                                    title={`Featured Jewelry Video ${index + 1}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Videos;
