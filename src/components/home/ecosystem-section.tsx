import React from 'react';
import Image from 'next/image';
export default function BitzTokenEcosystem() {
    return (
        <div className='bg-black'>
            <div className="relative container mx-auto min-h-screen  text-white flex flex-col items-center justify-start pt-6 px-4 overflow-hidden">
                <div className='container mx-auto'>
                    <div className="text-center mb-6">
                        <p className="text-sm font-medium tracking-wider">TOKENOMICS</p>
                        <h1 className="text-4xl font-bold mt-2">The BITZ Token Ecosystem</h1>
                        <p className="max-w-lg mx-auto text-center mt-2 text-sm opacity-80">
                            The BITZ token is central to the BitZino ecosystem, facilitating efficient transaction
                            processing, access to premium features, and a dynamic rewards system.
                        </p>
                    </div>

                    {/* Top-left corner image */}
                    <div className="absolute top-16 left-8">
                        <Image
                            src="/tokenomics-1.svg"
                            alt="curl-1"
                            width={40}
                            height={40}
                            className='h-full w-full'
                        />
                    </div>


                    <div className="relative w-full min-h-screen flex items-center justify-center">
                        <Image
                            src="/tokenomics-img.svg"
                            alt="Token Distribution"
                            width={560} // you can adjust this too
                            height={560}
                            className="w-[38rem] h-[38rem] z-10"
                        />
                    </div>



                    <div className="absolute bottom-24 left-8">
                        <Image
                            src="/tokenomics-3.svg"
                            alt="curl-1"
                            width={40}
                            height={40}
                            className='h-full w-full'
                        />
                    </div>


                    <div className="absolute bottom-36 right-8">
                        <Image
                            src="/tokenomics-2.svg"
                            alt="curl-1"
                            width={40}
                            height={40}
                            className='h-full w-full'
                        />
                    </div>


                    <div className="text-center mt-16 mb-6">
                        <p className="text-lg font-medium tracking-wider">ROADMAP</p>
                        <h2 className="text-5xl font-bold mt-2">Charting the Future</h2>
                        <p className="max-w-xl mx-auto text-center mt-4 text-lg opacity-80">
                            Our roadmap outlines strategic initiatives that combine technological advancement with player-
                            centric gaming experiences, marking significant milestones like the BITZ Public Sale, BitZino Testing,
                            and full platform launch.
                        </p>
                    </div>
                </div>
            </div >
        </div>

    );
}