import Link from "next/link";
import { File } from "@deemlol/next-icons"; // You can use any file icon you prefer

const Photos = () => {
  return (
    <div className="p-6">
      <div className="space-y-4">
        <Link
          href="/photos/gallery1"
          className="inline-block text-center w-full p-4 bg-white border-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 transform transition-all hover:shadow-xl cursor-pointer"
        >
          <div className="flex items-center justify-center space-x-3">
            <File size={24} color="#4A90E2" />
            <span className="font-medium text-lg text-gray-700">Gallery 1</span>
          </div>
        </Link>

        <Link
          href="/photos/gallery2"
          className="inline-block text-center w-full p-4 bg-white border-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 transform transition-all hover:shadow-xl cursor-pointer"
        >
          <div className="flex items-center justify-center space-x-3">
            <File size={24} color="#4A90E2" />
            <span className="font-medium text-lg text-gray-700">Gallery 2</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Photos;
