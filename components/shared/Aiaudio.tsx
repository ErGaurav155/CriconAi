"use client";

import {
  PauseIcon,
  PlayIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";
import React, { useRef, useState, useEffect, useMemo } from "react";

const Aiaudio = () => {
  type AudioName = "Alloy" | "Echo" | "Fable" | "Onyx" | "Nova" | "Shimmer";

  // Memoize the audioFiles array to prevent unnecessary re-renders
  const audioFiles = useMemo(
    () => [
      { name: "Alloy" as AudioName, src: "/assets/aiaudio/Alloy.mp3" },
      { name: "Echo" as AudioName, src: "/assets/aiaudio/echo.mp3" },
      { name: "Fable" as AudioName, src: "/assets/aiaudio/fable.mp3" },
      { name: "Onyx" as AudioName, src: "/assets/aiaudio/onyx.mp3" },
      { name: "Nova" as AudioName, src: "/assets/aiaudio/nova.mp3" },
      { name: "Shimmer" as AudioName, src: "/assets/aiaudio/shimmer.mp3" },
    ],
    []
  );

  const audioRefs = useRef<Record<AudioName, HTMLAudioElement | null>>({
    Alloy: null,
    Echo: null,
    Fable: null,
    Onyx: null,
    Nova: null,
    Shimmer: null,
  });

  const [currentPlaying, setCurrentPlaying] = useState<AudioName | null>(null);
  const [progress, setProgress] = useState<Record<AudioName, number>>({
    Alloy: 0,
    Echo: 0,
    Fable: 0,
    Onyx: 0,
    Nova: 0,
    Shimmer: 0,
  });
  const [volume, setVolume] = useState(0.7);

  // Update all audio volumes when volume changes
  useEffect(() => {
    audioFiles.forEach((audio) => {
      const audioEl = audioRefs.current[audio.name];
      if (audioEl) {
        audioEl.volume = volume;
      }
    });
  }, [volume, audioFiles]);

  const handlePlayPause = (name: AudioName) => {
    const audio = audioRefs.current[name];

    if (!audio) return;

    // Stop any currently playing audio
    if (currentPlaying && currentPlaying !== name) {
      const currentAudio = audioRefs.current[currentPlaying];
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    }

    if (audio.paused) {
      audio.play();
      setCurrentPlaying(name);
    } else {
      audio.pause();
      setCurrentPlaying(null);
    }
  };

  const handleTimeUpdate = (name: AudioName) => {
    const audio = audioRefs.current[name];
    if (!audio) return;

    const currentProgress = (audio.currentTime / audio.duration) * 100;
    setProgress((prev) => ({
      ...prev,
      [name]: isNaN(currentProgress) ? 0 : currentProgress,
    }));
  };

  const handleEnded = (name: AudioName) => {
    setCurrentPlaying(null);
    setProgress((prev) => ({ ...prev, [name]: 0 }));
  };

  return (
    <div className="w-full md:w-2/6 p-6 bg-gradient-to-br from-[#0A0A0A] to-[#0A0A0A]/90 rounded-xl border border-[#00F0FF]/30 shadow-lg shadow-[#00F0FF]/10">
      <div className="flex items-center gap-3 mb-6">
        <MusicalNoteIcon className="h-8 w-8 text-[#00F0FF]" />
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
          AI Voice Characters
        </h2>
      </div>

      {/* Volume Control */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-[#00F0FF] font-medium">Volume</span>
          <span className="text-sm text-white">
            {Math.round(volume * 100)}%
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#00F0FF]"
        />
      </div>

      {/* Audio Players */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {audioFiles.map((audio) => (
          <div
            key={audio.name}
            className={`p-4 rounded-lg border transition-all ${
              currentPlaying === audio.name
                ? "border-[#00F0FF] bg-gradient-to-r from-[#00F0FF]/10 to-[#B026FF]/10"
                : "border-[#00F0FF]/20 hover:border-[#00F0FF]/50 hover:bg-[#0A0A0A]/50"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-white">{audio.name}</span>
              <button
                onClick={() => handlePlayPause(audio.name)}
                className={`p-2 rounded-full ${
                  currentPlaying === audio.name
                    ? "bg-[#00F0FF] text-black"
                    : "bg-[#0A0A0A] border border-[#00F0FF] text-[#00F0FF] hover:bg-[#00F0FF] hover:text-black"
                }`}
              >
                {currentPlaying === audio.name ? (
                  <PauseIcon className="h-5 w-5" />
                ) : (
                  <PlayIcon className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Progress bar */}
            <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#00F0FF] to-[#B026FF] rounded-full"
                style={{ width: `${progress[audio.name]}%` }}
              ></div>
            </div>

            <audio
              ref={(el) => (audioRefs.current[audio.name] = el)}
              onTimeUpdate={() => handleTimeUpdate(audio.name)}
              onEnded={() => handleEnded(audio.name)}
              preload="metadata"
            >
              <source src={audio.src} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-gray-400">
        Preview different AI-generated voices for your content
      </p>
    </div>
  );
};

export default Aiaudio;
