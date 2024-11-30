export const Navbar = () => {
    return (
        <header className="bg-white fixed w-full top-0 z-50">
            <nav className="py-4 px-8 max-w-7xl mx-auto flex justify-between items-center">
                <a href="#" className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 text-transparent bg-clip-text">
                    Gold
                </a>
                <div className="hidden md:flex items-center gap-8">
                    <a href="#About" className="text-gray-700 hover:text-amber-500 transition-colors">About</a>
                    <a href="#Gallery" className="text-gray-700 hover:text-amber-500 transition-colors">Gallery</a>
                    <a href="#Videos" className="text-gray-700 hover:text-amber-500 transition-colors">Videos</a>
                    <a href="#Testimonials" className="text-gray-700 hover:text-amber-500 transition-colors">Testimonials</a>
                    <a href="#Contact" className="text-gray-700 hover:text-amber-500 transition-colors">Contact</a>
                    <a href="#" className="bg-black text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-colors">
                        Explore More
                    </a>
                </div>
                <button className="md:hidden text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </nav>
        </header>
    );
};

export default Navbar;