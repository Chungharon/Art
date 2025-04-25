import MusicCard from "@/components/musiccard";
import React from "react";

const Masthead: React.FC = () => {
    return (
        <div className="w-full min-h-screen py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-[-1]"
            >
                <source src="/assets/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Headline */}
            <div>
               <h1 className="text-9xl sm:text-6xl md:text-7xl lg:text-9xl font-bold uppercase tracking-wide text-gray-900 dark:text-gray-100 leading-none mb-6 sm:mb-8">
                who am i?
            </h1> 
            </div>
            {/* Grid Content */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
                <div className="lg:col-span-1">
                    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        Not always "successful" <br />
                        means financially rich. Real <br />
                        success has a completely <br />
                        different meaning, which <br />
                        should be learned by every <br />
                        person who's been <br />
                        chasing long-awaited <br />
                        happiness all their life <br />
                        without realizing they <br />
                        already have it.
                    </p>
                </div>
                <div className="lg:col-span-2 flex flex-col items-end">
                    <blockquote className="text-sm sm:text-base italic text-gray-600 dark:text-gray-400">
                        Just remember that you don’t have <br />
                        to be "successful" all at once. <br />
                        It’s okay to be messy & figuring things out. <br />
                        Just don’t let it stop you in the process.
                    </blockquote>
                </div>
                <div className="min-w-screen flex flex-col items-end p-20">
                 <MusicCard />
                </div>
            </div>
        </div>
    );
};

export default Masthead;
