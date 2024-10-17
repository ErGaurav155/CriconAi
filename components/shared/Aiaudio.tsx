"use client";

import { PauseIcon, PlayIcon } from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";

const Aiaudio = () => {
  type AudioName = "Alloy" | "Echo" | "Fable" | "Onyx" | "Nova" | "Shimmer";

  const audioRefs: Record<AudioName, React.RefObject<HTMLAudioElement>> = {
    Alloy: useRef<HTMLAudioElement>(null),
    Echo: useRef<HTMLAudioElement>(null),
    Fable: useRef<HTMLAudioElement>(null),
    Onyx: useRef<HTMLAudioElement>(null),
    Nova: useRef<HTMLAudioElement>(null),
    Shimmer: useRef<HTMLAudioElement>(null),
  };

  const [isPlaying, setIsPlaying] = useState<Record<AudioName, boolean>>({
    Alloy: false,
    Echo: false,
    Fable: false,
    Onyx: false,
    Nova: false,
    Shimmer: false,
  });

  const handlePlayPause = (name: AudioName) => {
    const audio = audioRefs[name].current;
    if (audio) {
      if (audio.paused) {
        audio.play();
        setIsPlaying((prevState) => ({ ...prevState, [name]: true }));
      } else {
        audio.pause();
        setIsPlaying((prevState) => ({ ...prevState, [name]: false }));
      }
    }
  };

  const audioFiles: { name: AudioName; src: string }[] = [
    { name: "Alloy", src: "/assets/aiaudio/Alloy.mp3" },
    { name: "Echo", src: "/assets/aiaudio/echo.mp3" },
    { name: "Fable", src: "/assets/aiaudio/fable.mp3" },
    { name: "Onyx", src: "/assets/aiaudio/onyx.mp3" },
    { name: "Nova", src: "/assets/aiaudio/nova.mp3" },
    { name: "Shimmer", src: "/assets/aiaudio/shimmer.mp3" },
  ];

  return (
    <div className="sticky top-0 md:flex-auto h-[100vh] w-full md:w-2/6 pt-4">
      <p className=" font-semibold text-n-8 text-lg mt-2">Character Voices:</p>
      <div className="mt-5 p-5 grid grid-cols-2 gap-2">
        {audioFiles.map((audio) => (
          <div
            key={audio.name}
            className="flex gap-5 items-center justify-evenly"
          >
            <span className="font-semibold text-n-8">{audio.name}:</span>
            <audio ref={audioRefs[audio.name]}>
              <source src={audio.src} type="audio/mpeg" />
            </audio>
            <button
              onClick={() => handlePlayPause(audio.name)}
              className="p-2  rounded"
            >
              {isPlaying[audio.name] ? (
                <span>
                  <PauseIcon height={23} />
                </span> // Replace with pause icon if needed
              ) : (
                <span>
                  <PlayIcon height={23} />
                </span> // Replace with play icon if needed
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aiaudio;
