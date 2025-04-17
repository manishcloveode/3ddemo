// components/CoreValues.jsx
import { Club, Diamond, Heart, Spade } from 'lucide-react';
import React from 'react';
const CoreValues = () => {
    return (
        <section className="bg-black text-white py-16">
            <div className="w-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold mb-4">Core Values</h2>
                    <p className="text-gray-300">
                        BitZino prioritizes game integrity through advanced provable fairness technology.
                    </p>
                </div>
                <hr className='border-gray-800 mb-10' />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mb">
                    <div className=" p-8">
                        <div className="mb-6">
                            <Heart className='h-18 w-18 text-white  stroke-[0.5]' />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Transparency</h3>
                        <p className="text-gray-400">
                            We pride ourselves on our cutting-edge provable fairness technology, ensuring crystal-clear transparency in every game.
                        </p>
                    </div>
                    <div className=" border-l border-r border-gray-800 p-8">
                        <div className="mb-6">
                            <Diamond className='h-18 w-18 text-green-500  stroke-[0.5]' />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Community Power</h3>
                        <p className="text-gray-400">
                            Our platform is designed from the ground up to build and nurture a thriving gaming community.
                        </p>
                    </div>


                    <div className=" border-r border-gray-800 p-8">
                        <div className="mb-6">
                            <Club className='h-18 w-18 text-blue-500  stroke-[0.5]' />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
                        <p className="text-gray-400">
                            We are the original innovators of Bitcoin casino gaming, and we&apos;re raising the bar with AI integration.
                        </p>
                    </div>


                    <div className=" border-gray-800 p-8">
                        <div className="mb-6">
                            <Spade className='h-18 w-18 text-orange-500  stroke-[0.5]' />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Bitcoin Commitment</h3>
                        <p className="text-gray-400">
                            Bitcoin is more than just a transaction mode for us; it&apos;s the cornerstone of our betting infrastructure.
                        </p>
                    </div>
                </div>
                <hr className='border-gray-800 mt-10' />
            </div>
        </section>
    );
};

export default CoreValues;