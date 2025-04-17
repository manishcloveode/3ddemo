import React from 'react';

export default function TelegramJoinBanner() {
    return (
        <div className='bg-gradient-to-r from-blue-500 to-black '>
            <div className="container mx-auto py-10 relative">
                <div className="relative z-10 container mx-auto px-4 flex items-center gap-6">
                    <div className="bg-black rounded-full p-3 flex items-center justify-center w-16 h-16">
                        <svg
                            className="w-20 h-20 text-white"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="currentColor"
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.4-1.08.39-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"
                            />
                        </svg>
                    </div>
                    <h2 className="text-white text-5xl font-bold">
                        Join us on telegram
                    </h2>
                </div>
            </div>
        </div>

    );
}