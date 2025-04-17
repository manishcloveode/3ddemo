"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";

// Replace with your actual image paths (public folder or import if needed)
const cornerImages = {
    tl: "/curl-1.svg",
    tr: "/curl-2.svg",
    bl: "/curl-3.svg",
    br: "/curl-4.svg",
};

const TestnetCard = ({ year }: { year: string }) => {
    return (
        <div className="relative bg-black text-white p-6 rounded-lg w-[350px] h-[400px] flex-shrink-0 group overflow-hidden">

            <img
                src={cornerImages.tl}
                alt="top-left"
                className="absolute top-0 left-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <img
                src={cornerImages.tr}
                alt="top-right"
                className="absolute top-0 right-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <img
                src={cornerImages.bl}
                alt="bottom-left"
                className="absolute bottom-0 left-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <img
                src={cornerImages.br}
                alt="bottom-right"
                className="absolute bottom-0 right-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            <div className="text-gray-400 mb-2">{year}</div>
            <h2 className="text-2xl font-bold mb-6">
                <span className="text-white font-semibold">Bit</span>
                <span className="text-gray-400">Zino Testnet</span>
            </h2>

            <div className="space-y-4">
                {[
                    "Testnet Access Information",
                    "Testing Period Duration",
                    "Testnet Features Overview",
                    "Community Feedback",
                ].map((text, index) => (
                    <div key={index} className="flex items-center text-white">
                        <Check className="text-white mr-3 w-4 h-4" />
                        <span>{text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const CardSlider = () => {
    const cards = [
        { id: 1, year: "2024" },
        { id: 2, year: "2024" },
        { id: 3, year: "2024" },
        { id: 4, year: "2024" },
        { id: 5, year: "2024" },
        { id: 6, year: "2024" },
    ];

    const [sliderValue, setSliderValue] = useState(0);
    const cardWidth = 350;
    const gap = 20;
    const visibleCards = 3;
    const totalCards = cards.length;
    const totalWidth = (cardWidth + gap) * totalCards;
    const visibleWidth = (cardWidth + gap) * visibleCards;
    const scrollableWidth = totalWidth - visibleWidth;

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(parseFloat(e.target.value));
    };

    const translateX = -sliderValue * scrollableWidth;

    return (
        <div className="bg-black min-h-screen text-white py-12 px-4">
            <div className="container mx-auto">
                <div className="mb-8">
                    <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={sliderValue}
                        onChange={handleSliderChange}
                        className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                </div>

                <div className="overflow-hidden">
                    <div
                        className="flex gap-5 transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(${translateX}px)` }}
                    >
                        {cards.map((card) => (
                            <TestnetCard key={card.id} year={card.year} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardSlider;
