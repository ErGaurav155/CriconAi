"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Aiimages, AiPoster, AiThumb } from "./carousel";

export default function HeroSection() {
  return (
    <section className="relative   h-auto py-10 flex items-center overflow-hidden border-b border-[#333]">
      <div className="container mx-auto md:px-4  relative z-30 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-1 lg:grid-cols-2 ">
          <div className="z-10 bg-transparent">
            <h1 className="text-4xl md:text-5xl  font-bold mb-6 leading-tight">
              <span className="block text-[#00F0FF] glow-text">
                10X Boost Your
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#B026FF] to-[#FF2E9F]">
                YouTube Growth
              </span>
              <span className="block font-bold  bg-clip-text text-transparent bg-gradient-to-r from-[#FF2E9F] to-[#B026FF]">
                with CriconAi
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              CriconAi is the AI platform that accelerates content creation
              velocity with ai tools .
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/sign-in"
                className="px-8 py-3 rounded-button bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-black font-bold hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer transform hover:scale-105 hover:transition-transform"
              >
                Start for free
                <i className="fas fa-arrow-right ml-2" />
              </Link>
              <Link
                href={"/HowToUse"}
                className="px-8 py-3 rounded-button bg-transparent border border-[#00F0FF] text-[#00F0FF] font-bold hover:bg-[#00F0FF]/10 transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="fas fa-play-circle mr-2" />
                Watch Demo
              </Link>
            </div>

            <div className="flex items-center space-x-6 mt-8">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#B026FF] flex items-center justify-center">
                  <i className="fas fa-user-astronaut text-black text-sm" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#B026FF] to-[#FF2E9F] flex items-center justify-center">
                  <i className="fas fa-robot text-black text-sm" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF2E9F] to-[#00F0FF] flex items-center justify-center">
                  <i className="fas fa-satellite text-black text-sm" />
                </div>
              </div>
              <div>
                <div className="text-[#00F0FF] font-bold">1,000+ Creators</div>
                <div className="text-gray-400">Across 500+ Channels</div>
              </div>
            </div>
          </div>
          <div className="w-full p-0">
            <div className="relative pt-5 md:pt-0   m-auto h-[15rem]  md:h-[30rem] flex  gap-2  z-10">
              <AiThumb />
              <Aiimages />
              <AiPoster />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
