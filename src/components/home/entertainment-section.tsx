import Image from "next/image";
import Spline from '@splinetool/react-spline';
export default function BitZinoComponent() {
    return (
        <div className="w-full bg-black text-white p-4">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">BitZino Games Reinventing</h1>
                <h2 className="text-2xl md:text-3xl font-bold">Classic Entertainment</h2>
            </div>

            {/* Card 1 */}
            <div className="bg-stone-950 rounded-lg overflow-hidden max-w-6xl p-8 mx-auto flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/2 p-8 relative">
                    <CornerImages />
                    <div className="py-12 px-4">
                        <div className="text-green-400 font-medium mb-2">BITZINO AI BOT</div>
                        <h3 className="text-2xl font-bold mb-6">A New Dimension in Online Betting</h3>
                        <p className="text-gray-300 mb-4">
                            The AI Bot in BitZino is a groundbreaking innovation, combining seamless betting with the power of AI, and hosted on platforms like Telegram for unparalleled access and engagement.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 bg-black p-4 flex items-center justify-center rounded-lg">
                    <Spline
                        scene="https://prod.spline.design/c1-bYEA8tuDF45CJ/scene.splinecode"
                    />
                </div>
            </div>

            {/* Card 2 */}
            <div className="bg-stone-950 rounded-lg overflow-hidden max-w-6xl p-8 mx-auto flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/2 p-8 relative">
                    <CornerImages />
                    <div className="py-12 px-4">
                        <div className="text-green-400 font-medium mb-2">BITZINO LIVE CASINO</div>
                        <h3 className="text-2xl font-bold mb-6">Next-Gen Gaming Experience</h3>
                        <p className="text-gray-300 mb-4">
                            Experience the thrill of real-time gaming with BitZino&apos;s live casino, blending classic table games with futuristic tech.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 bg-black p-4 flex items-center justify-center rounded-lg">
                    <Spline
                        scene="https://prod.spline.design/c1-bYEA8tuDF45CJ/scene.splinecode"
                    />
                </div>
            </div>

            {/* Card 3 */}
            <div className="bg-stone-950 rounded-lg overflow-hidden max-w-6xl p-8 mx-auto flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/2 p-8 relative">
                    <CornerImages />
                    <div className="py-12 px-4">
                        <div className="text-green-400 font-medium mb-2">BITZINO SLOT REVOLUTION</div>
                        <h3 className="text-2xl font-bold mb-6">Crypto Meets Classic</h3>
                        <p className="text-gray-300 mb-4">
                            Enjoy timeless slot gameplay now empowered with crypto rewards and lightning-fast interactions.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 bg-black p-4 flex items-center justify-center rounded-lg">
                    <Spline
                        scene="https://prod.spline.design/c1-bYEA8tuDF45CJ/scene.splinecode"
                    />
                </div>
            </div>

            {/* Card 4 */}
            <div className="bg-stone-950 rounded-lg overflow-hidden max-w-6xl p-8 mx-auto flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/2 p-8 relative">
                    <CornerImages />
                    <div className="py-12 px-4">
                        <div className="text-green-400 font-medium mb-2">BITZINO COMMUNITY</div>
                        <h3 className="text-2xl font-bold mb-6">Seamless Social Betting</h3>
                        <p className="text-gray-300 mb-4">
                            Engage with peers, share strategies, and bet in groups with BitZino’s first-of-its-kind social layer.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 bg-black p-4 flex items-center justify-center rounded-lg">
                    <Spline
                        scene="https://prod.spline.design/c1-bYEA8tuDF45CJ/scene.splinecode"
                    />
                </div>
            </div>
        </div>
    );
}

function CornerImages() {
    return (
        <>
            <div className="absolute top-0 left-0">
                <Image src="/curl-1.svg" alt="corner-image" height={40} width={40} />
            </div>
            <div className="absolute top-0 right-0">
                <Image src="/curl-2.svg" alt="corner-image" height={40} width={40} />
            </div>
            <div className="absolute bottom-0 left-0">
                <Image src="/curl-3.svg" alt="corner-image" height={40} width={40} />
            </div>
            <div className="absolute bottom-0 right-0">
                <Image src="/curl-4.svg" alt="corner-image" height={40} width={40} />
            </div>
        </>
    );
}
