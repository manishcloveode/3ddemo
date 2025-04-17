import React from 'react';
import Image from 'next/image';


export default function BitZinoCards() {
    return (
        <div className="bg-black min-h-screen p-4 flex items-center justify-center">
            <div className="flex flex-col md:flex-row gap-4 max-w-6xl w-full">
                {/* Left Card */}<div className="bg-stone-950 rounded-3xl p-20 flex-1">
                    <Image
                        src="/vision-icon.svg"
                        alt='vision-icon'
                        height={20}
                        width={20}
                        className="h-20 w-20 mb-8"
                    />

                    <h2 className="text-white text-4xl font-bold mb-8">The BitZino Vision</h2>

                    <p className="text-gray-300 text-lg mb-6">
                        Welcome to BitZino, the pioneer in online Bitcoin casino gaming since 2011. We are entering a new chapter in 2024, presenting an unparalleled BTC Layer 2 network that promises to redefine the essence of online betting.
                    </p>

                    <p className="text-gray-300 text-lg">
                        This is not just an online casino; it&apos;s a revolution in the digital gaming arena.
                    </p>
                </div>

                <div className="bg-stone-950 rounded-3xl p-20 flex-1">
                    <Image
                        src="/gamin-icons.svg"
                        alt='gamin-icons'
                        height={20}
                        width={20}
                        className="h-20 w-20 mb-8"
                    />


                    <h2 className="text-white text-4xl font-bold mb-8">Beyond Gaming</h2>

                    <p className="text-gray-300 text-lg mb-6">
                        Our mission transcends the traditional realms of gaming. BitZino strives to create a perfect symbiosis of trust, as rendered by cryptocurrency and provable fairness, with the exhilarating buzz of AI-driven gaming experiences.
                    </p>

                    <p className="text-gray-300 text-lg">
                        We&apos;re more than just a gaming platform; we&apos;re an ecosystem for players to become a key part of our intelligent, responsive network.
                    </p>
                </div>
            </div>
        </div>
    );
}