"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play, Pause } from "lucide-react";

const songs = [
  { title: "Blinding Lights", artist: "The Weeknd", duration: 200, file: "/assets/audio/blinding-lights.mp3" },
  { title: "UnitedInGrief", artist: "Kendrick", duration: 185, file: "/assets/audio/levitating.mp3" },
  { title: "Stay", artist: "The Kid LAROI, Justin Bieber", duration: 150, file: "/assets/audio/stay.mp3" },
];

export default function MusicCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = songs[currentIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setProgress(audio.currentTime);
      setDuration(audio.duration || currentSong.duration);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleTimeUpdate);
    };
  }, [currentIndex, currentSong.duration]);

  const handleNext = () => {
    setProgress(0);
    setIsPlaying(false);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentIndex(nextIndex);
    setTimeout(() => {
      audioRef.current?.play();
      setIsPlaying(true);
    }, 200); // slight delay to allow src to update
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Card
      className="w-64 h-80 bg-cover bg-center relative overflow-hidden shadow-lg"
      style={{ backgroundImage: `url("/assets/default-cover.jpeg")` }}
    >
      <div className="absolute inset-0 bg-black/50" />

      {/* Hidden audio element */}
      <audio ref={audioRef} src={currentSong.file} />

      <CardContent className="relative flex flex-col justify-end h-full p-3 text-white">
        <div className="flex justify-between text-xs mb-1">
          <span>{formatTime(progress)}</span>
          <span>-{formatTime(duration - progress)}</span>
        </div>

        <Progress
          value={(progress / duration) * 100 || 0}
          className="mb-2 h-1"
        />

        <h3 className="text-sm font-semibold">{currentSong.title}</h3>
        <p className="text-xs">{currentSong.artist}</p>

        <div className="mt-2 flex justify-between items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlay}
            className="text-white hover:text-green-400 active:scale-95 transition cursor-pointer"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            className="text-white hover:text-blue-300 active:scale-95 transition cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60) || 0;
  const secs = Math.floor(seconds % 60) || 0;
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}
