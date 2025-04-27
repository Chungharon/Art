import MusicCard from "@/components/musiccard";
import React from "react";
import FloatingFolders from "./folder";

const Masthead: React.FC = () => {
    return (
        <div className="relative w-full min-h-screen py-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/assets/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content goes here */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center text-white">

                {/* Headline */}
                <div className="w-full px-auto py-auto flex flex-col items-start">
                <h1 className="text-9xl sm:text-6xl md:text-7xl lg:text-9xl font-bold uppercase tracking-wide text-gray-900 dark:text-gray-100 leading-none mb-6 sm:mb-8">
                    who am i?
                </h1> 
                </div>
                {/* Grid Content */}

                <div className="w-full flex flex-wrap py-2 px-2 bg-transparent">
                    <div className="w-1/2 p-2 bg-transparent flex flex-col items-start">
                        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Not always &quote;successful&quote; <br />
                            means financially rich. Real <br />
                            success has a completely <br />
                            different meaning, which <br />
                            should be learned by every <br />
                            person who&apos;s been <br />
                            chasing long-awaited <br />
                            happiness all their life <br />
                            without realizing they <br />
                            already have it.
                        </p>
                    </div>
                    <div className="w-1/2 p-2 bg-transparent flex flex-col items-end">
                        <blockquote className="text-sm sm:text-base italic text-gray-600 dark:text-gray-400">
                            Just remember that you don’t have <br />
                            to be &quot;successful&quot; all at once. <br />
                            It’s okay to be messy & figuring things out. <br />
                            Just don’t let it stop you in the process.
                        </blockquote>
                    </div>
                    <div className="w-full p-2 bg-transparent flex flex-col items-end">
                    <MusicCard />
                    </div>
                </div>
            </div>
            {/* Floating Folders */}
            <div className="absolute z-20 top-0 left-0 w-full min-h-screen">
                <FloatingFolders />
            </div>
            
        </div>
    );
};

export default Masthead;
