"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const songs = [
  { title: "Blinding Lights", artist: "The Weeknd", duration: 200 },
  { title: "Levitating", artist: "Dua Lipa", duration: 185 },
  { title: "Stay", artist: "The Kid LAROI, Justin Bieber", duration: 150 },
];

export default function MusicCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const currentSong = songs[currentIndex];

  const handleNext = () => {
    setProgress(0);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <Card
      className="w-64 h-72 bg-cover bg-center relative overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url("/assets/default-cover.jpeg")`,
      }}
    >

      <div className="absolute inset-0 bg-black/50" />

      <CardContent className="relative flex flex-col justify-end h-full p-3 text-white">

        <div className="flex justify-between text-xs mb-1">
          <span>{formatTime(progress)}</span>
          <span>-{formatTime(currentSong.duration - progress)}</span>
        </div>

        <Progress
          value={(progress / currentSong.duration) * 100}
          className="mb-2 h-1"
        />

        <h3 className="text-sm font-semibold">{currentSong.title}</h3>
        <p className="text-xs">{currentSong.artist}</p>

        <div className="mt-2 flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            className="text-white hover:text-blue-300"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Helper function
function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}
