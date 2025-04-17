import React from 'react';

export default function VisionSection() {
    return (
        <div className="relative w-full bg-black py-16">
            {/* Grid background */}
            <div className="absolute inset-0 grid  grid-cols-12 gap-1">
                {Array.from({ length: 12 * 10 }).map((_, index) => (
                    <div key={index} className="h-10  rounded-lg bg-stone-950" />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                <h3 className="text-white uppercase text-sm font-medium mb-4">OUR VISION</h3>

                <h2 className="text-white text-4xl md:text-5xl font-bold mb-8">
                    Leading the Online<br />
                    Betting Evolution
                </h2>

                <p className="text-gray-300 text-sm md:text-base mb-6 max-w-2xl mx-auto">
                    BitZino is at the forefront of a new era in online betting, blending the reliability of blockchain
                    with the dynamism of AI. We are not just a platform, we are a community where technology
                    harmonizes with tradition, and every player finds their place in the future of gaming.
                </p>

                <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
                    Join us in the journey, where every bet is a new adventure, every game a discovery, and every
                    moment shared with a global community of players.
                </p>
            </div>
        </div>
    );
}