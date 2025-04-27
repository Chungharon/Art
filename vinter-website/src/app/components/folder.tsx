"use client";

import { Folder } from "@deemlol/next-icons";
import { useState } from "react";
import Link from "next/link";
import Documents from "./window_contents/documents";
import Photos from "./window_contents/photos";
import { motion, AnimatePresence } from "framer-motion";

const FloatingFolders = () => {
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false); 

  const handleOpen = (folder: string) => {
    if (!isDragging) {
        setOpenFolder(folder);
      }
  };

  const handleClose = () => {
    setOpenFolder(null);
  };

  return (
    <div className="flex items-center justify-center bg-transparent min-h-screen relative">
      {/* Folder 1 */}
      <motion.div
        drag
        dragMomentum={false}
        whileTap={{ scale: 0.95 }}
        className="absolute top-120 left-60 flex flex-col items-center cursor-pointer group"
        onClick={() => handleOpen("documents")}
        onDragStart={() => setIsDragging(true)} // Set dragging to true when drag starts
        onDragEnd={() => setIsDragging(false)} // Set dragging to false when drag ends
      
      >
        <div className="w-20 h-16 bg-gradient-to-b from-blue-300 to-blue-500 rounded-lg shadow-md relative overflow-hidden group-hover:scale-105 transform transition-all">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity" />
            <div className="absolute top-0 left-0 w-10 h-3 bg-blue-400 rounded-tl-lg rounded-tr-lg shadow-sm" />
            <div className="flex justify-center items-center h-full">
            <Folder size={32} color="#ffffff" />
          </div>
        </div>
        <p className="mt-2 text-sm font-semibold text-gray-800 group-hover:text-blue-600">
          Documents
        </p>
      </motion.div>

      {/* Folder 2 */}
      <motion.div
        drag
        dragMomentum={false}
        whileTap={{ scale: 0.95 }}
        className="absolute top-100 left-152 flex flex-col items-center cursor-pointer group"
        onClick={() => handleOpen("photos")}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        <div className="w-20 h-16 bg-gradient-to-b from-blue-300 to-blue-500 rounded-lg shadow-md relative overflow-hidden group-hover:scale-105 transform transition-all">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity" />
          <div className="absolute top-0 left-0 w-10 h-3 bg-blue-400 rounded-tl-lg rounded-tr-lg shadow-sm" />
          <div className="flex justify-center items-center h-full">
            <Folder size={32} color="#ffffff" />
          </div>
        </div>
        <p className="mt-2 text-sm font-semibold text-gray-800 group-hover:text-blue-600">
          Photos
        </p>
      </motion.div>

      {/* Folder 3 */}
      <motion.div
        drag
        dragMomentum={false}
        whileTap={{ scale: 0.95 }}
        className="absolute top-50 left-96 flex flex-col items-center cursor-pointer group"
        onClick={() => handleOpen("music")}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        <div className="w-20 h-16 bg-gradient-to-b from-blue-300 to-blue-500 rounded-lg shadow-md relative overflow-hidden group-hover:scale-105 transform transition-all">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity" />
          <div className="absolute top-0 left-0 w-10 h-3 bg-blue-400 rounded-tl-lg rounded-tr-lg shadow-sm" />
          <div className="flex justify-center items-center h-full">
            <Folder size={32} color="#ffffff" />
          </div>
        </div>
        <p className="mt-2 text-sm font-semibold text-gray-800 group-hover:text-blue-600">
          Music
        </p>
      </motion.div>
        
      {/* Window Popup */}
      <AnimatePresence>
        {openFolder && (
          <motion.div
            className="fixed top-1/4 left-1/4 w-1/2 bg-gray-100 rounded-xl shadow-2xl z-50 overflow-hidden border border-gray-300 cursor-move"
            drag
            dragConstraints={{ left: 0, right: window.innerWidth, top: 0, bottom: window.innerHeight }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {/* MacOS Top Bar */}
            <div className="flex items-center justify-start space-x-2 bg-gray-200 px-4 py-2 border-b border-gray-300">
              {/* Control Dots */}
              <div className="flex items-center space-x-2">
                {/* Red dot */}
                <button
                  onClick={handleClose}
                  className="w-3 h-3 bg-red-500 rounded-full hover:brightness-110 transition-all cursor-pointer"
                  aria-label="Close"
                  title="Close"
                ></button>
                {/* Yellow dot */}
                <button
                  onClick={handleClose}
                  className="w-3 h-3 bg-yellow-400 rounded-full hover:brightness-110 transition-all cursor-pointer"
                  aria-label="Close"
                  title="Close"
                ></button>
                {/* Green dot */}
                <button
                  onClick={handleClose}
                  className="w-3 h-3 bg-green-500 rounded-full hover:brightness-110 transition-all cursor-pointer"
                  aria-label="Close"
                  title="Close"
                ></button>
              </div>

              {/* Window Title (centered) */}
              <div className="flex-1 flex justify-center items-center">
                <h2 className="text-sm font-semibold capitalize text-gray-700">{openFolder}</h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex flex-col space-y-4">
                {openFolder === "documents" && <Documents />}
                {openFolder === "photos" && <Photos />}
                {openFolder === "music" && (
                  <>
                    <Link href="/music/playlist1" className="text-blue-600 hover:underline">
                      Playlist 1
                    </Link>
                    <Link href="/music/playlist2" className="text-blue-600 hover:underline">
                      Playlist 2
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingFolders;
