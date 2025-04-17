// components/Footer.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 w-full">
            <div className="container mx-auto px-4 flex flex-wrap">
                <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0 pr-8">
                    <div className="mb-6">
                        <Image
                            src="/logo.svg"
                            alt="Bitzino Logo"
                            width={150}
                            height={50}
                            className="mb-6"
                            priority
                        />
                    </div>
                    <div className="text-gray-300">
                        <p className="mb-4 text-sm leading-relaxed">
                            Welcome to BitZino, the pioneer in online Bitcoin casino gaming since 2011. We are entering a new chapter in 2024, presenting an unparalleled BTC Layer 2 network that promises to redefine the essence of online betting.
                        </p>
                        <p className="text-sm leading-relaxed">
                            This is not just an online casino`&lsquo;` it s a revolution in the digital gaming arena.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/4 lg:w-1/4 pl-0 md:pl-8 mb-8 md:mb-0 md:border-l border-gray-800">
                    <h3 className="text-lg font-bold mb-6">QUICK LINKS</h3>
                    <ul>
                        {['HOME', 'ABOUT US', 'CORE VALUES', 'TOKENOMICS', 'ROADMAP', 'CONTACT US'].map((item, index) => (
                            <li key={index} className="mb-4">
                                <Link
                                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="inline-flex items-center text-white hover:text-gray-300 transition-all duration-300 hover:translate-x-1 group"
                                >
                                    <span className="inline-block mr-2 transform transition-transform duration-300 group-hover:rotate-45">↗</span>
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full md:w-1/4 lg:w-1/4 pl-0 md:pl-8 mb-8 md:mb-0 md:border-l border-gray-800">
                    <h3 className="text-lg font-bold mb-6">LEGAL PAGES</h3>
                    <ul>
                        {['TERMS OF SERVICE', 'PRIVACY POLICY', 'COOKIE POLICY', 'DISCLAIMER'].map((item, index) => (
                            <li key={index} className="mb-4">
                                <Link
                                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="inline-flex items-center text-white hover:text-gray-300 transition-all duration-300 hover:translate-x-1 group"
                                >
                                    <span className="inline-block mr-2 transform transition-transform duration-300 group-hover:rotate-45">↗</span>
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full md:w-1/4 lg:w-1/4 pl-0 md:pl-8 md:border-l border-gray-800">
                    <h3 className="text-lg font-bold mb-6">FOLLOW US</h3>
                    <ul>
                        {[
                            { name: 'TELEGRAM', url: 'https://t.me/yourusername' },
                            { name: 'INSTAGRAM', url: 'https://instagram.com/yourusername' },
                            { name: 'X', url: 'https://x.com/yourusername' },
                            { name: 'DISCORD', url: 'https://discord.gg/yourinvite' }
                        ].map((item, index) => (
                            <li key={index} className="mb-4">
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-white hover:text-gray-300 transition-all duration-300 hover:translate-x-1 group"
                                >
                                    <span className="inline-block mr-2 transform transition-transform duration-300 group-hover:rotate-45">↗</span>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center">
                <p className="text-sm">© {new Date().getFullYear()} bitzino. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;