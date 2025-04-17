import React from 'react';

export default function TelegramCollaborationSection() {
    return (
        <div className="flex flex-col md:flex-row  bg-blue-500 text-white p-8 h-[500px]">

            <div className="md:w-1/3 flex flex-col justify-center mb-8 md:mb-0">
                <h1 className="text-5xl font-bold mb-2">Telegram</h1>
                <h1 className="text-5xl font-bold mb-2">Collaboration</h1>
                <h1 className="text-5xl font-bold">Innovation</h1>
            </div>
            <div className="md:w-2/3 flex flex-col justify-center">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-4">Distribution via Telegram: Access Redefined</h2>
                    <p className="text-lg">
                        BitZino leverages Telegram&apos;s vast user base for distribution, bypassing
                        traditional barriers to instant engagement and maximizing accessibility and
                        user interaction.
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-4">Telegram Partnership: The New Frontier</h2>
                    <p className="text-lg">
                        Telegram stands as a vital partner in our journey, offering a platform that
                        combines high user engagement, efficient revenue models, and a robust
                        customer acquisition channel.
                    </p>
                </div>
            </div>
        </div>
    );
}