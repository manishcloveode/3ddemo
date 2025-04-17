"use client";
import Link from 'next/link';
import Image from 'next/image';
import Spline from '@splinetool/react-spline';
const HeroSection = () => {
    return (
        <div className="bg-black text-white py-16 md:py-24 relative overflow-hidden">
            {/* Background grid lines */}
            <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full border-gray-700 grid grid-cols-3 md:grid-cols-6">
                    <div className="border-r border-gray-700 h-full"></div>
                    <div className="border-r border-gray-700 h-full"></div>
                    <div className="border-r border-gray-700 h-full"></div>
                    <div className="border-r border-gray-700 h-full hidden md:block"></div>
                    <div className="border-r border-gray-700 h-full hidden md:block"></div>
                </div>
                <div className="absolute inset-0 grid grid-rows-3 md:grid-rows-6">
                    <div className="border-b border-gray-700 w-full"></div>
                    <div className="border-b border-gray-700 w-full"></div>
                    <div className="border-b border-gray-700 w-full"></div>
                    <div className="border-b border-gray-700 w-full hidden md:block"></div>
                    <div className="border-b border-gray-700 w-full hidden md:block"></div>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Bitzino is back

                        the

                        GambleFi

                        chain
                    </h1>
                    <p className="text-xl md:text-2xl mb-12 text-gray-300">
                        own $bitz —print like never before crypto poker & casino, og since 2011
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
                        <Link href="/watch" className="px-6 py-4 bg-zinc-800 rounded-full flex items-center justify-center gap-2 hover:bg-zinc-700 transition">
                            <span>WATCH THE FILM</span>
                            <Image
                                src="/btn-arrow.svg"
                                alt='btn-arrow'
                                height={20}
                                width={20}
                                className="h-8 w-8"
                            />
                        </Link>
                        <Link href="/whitepaper" className="px-6 py-4 bg-zinc-800 rounded-full flex items-center justify-center gap-2 hover:bg-zinc-700 transition">
                            <span>VIEW WHITEPAPER</span>
                            <Image
                                src="/btn-arrow.svg"
                                alt='btn-arrow'
                                height={20}
                                width={20}
                                className="h-8 w-8"
                            />
                        </Link>
                    </div>

                    <Spline
                        scene="https://prod.spline.design/Fc06Q4-Zy8G6H9pG/scene.splinecode"
                        className=' rounded-3xl w-full h-[40rem] '
                    />

                </div>
            </div>

        </div>
    );
};

export { HeroSection };