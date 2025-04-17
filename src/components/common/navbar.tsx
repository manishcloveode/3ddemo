// components/Navbar.jsx
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="bg-black text-white py-6">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="logo">
                    <Link href="/">
                        <span className="flex items-center">
                            <Image src="/logo.svg"
                                alt="Bitzino Logo"
                                width={120}
                                height={40} />
                        </span>
                    </Link>
                </div>

                <div className="hidden md:flex space-x-8 bg-stone-950 p-8 rounded-lg">
                    <Link href="/" className="font-medium hover:text-gray-300">HOME</Link>
                    <Link href="/about-us" className="font-medium hover:text-gray-300">ABOUT US</Link>
                    <Link href="#" className="font-medium hover:text-gray-300">CORE VALUES</Link>
                    <Link href="#" className="font-medium hover:text-gray-300">TOKENOMICS</Link>
                    <Link href="#" className="font-medium hover:text-gray-300">ROADMAP</Link>
                    <Link href="#" className="font-medium hover:text-gray-300">FARM</Link>
                </div>

                <div className="hidden md:block">
                    <Link href="#" className="px-6 py-3 rounded-full bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition">
                        CONTACT US
                    </Link>
                </div>
                <button className="md:hidden focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export { Navbar };
