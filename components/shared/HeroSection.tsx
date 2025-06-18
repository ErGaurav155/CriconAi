"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden border-b border-[#333] backdrop-blur-sm">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10" />
        <div className="absolute inset-0  bg-gradient-to-b from-transparent to-[#0A0A0A] z-10" />
        <div className="w-full  h-full opacity-60">
          <Image
            src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="Cosmic background"
            fill
            className="object-cover w-full"
            priority
          />
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-6 h-6 rounded-full bg-[#00F0FF] blur-xl opacity-30 animate-pulse" />
      <div className="absolute bottom-40 left-10 w-10 h-10 rounded-full bg-[#B026FF] blur-xl opacity-20" />
      <div
        className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full bg-[#FF2E9F] blur-xl opacity-25 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 py-16 relative z-30 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl  font-bold mb-6 leading-tight">
              <span className="block text-[#00F0FF] glow-text">
                10X Boost Your
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#B026FF] to-[#FF2E9F]">
                YouTube Growth
              </span>
              <span className="block text-white">With AI Technology</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              Cricon AI Platform transforms content creation with cosmic-level
              intelligence. Experience quantum-powered tools for your
              interstellar content strategy.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/get-started"
                className="px-8 py-3 rounded-button bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-black font-bold hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer transform hover:scale-105 hover:transition-transform"
              >
                Start for free
                <i className="fas fa-arrow-right ml-2" />
              </Link>
              <button className="px-8 py-3 rounded-button bg-transparent border border-[#00F0FF] text-[#00F0FF] font-bold hover:bg-[#00F0FF]/10 transition-colors whitespace-nowrap cursor-pointer">
                <i className="fas fa-play-circle mr-2" />
                Watch Demo
              </button>
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
                <div className="text-[#00F0FF] font-bold">10,000+ Creators</div>
                <div className="text-gray-400">Across 500+ Channels</div>
              </div>
            </div>
          </div>

          {/* Right Content - Holographic AI Visualization */}
          <div className="flex justify-center">
            <div
              className="relative w-64 h-64 md:w-80 md:h-80"
              style={{ animation: "float 6s ease-in-out infinite" }}
            >
              {/* Holographic effect layers */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00F0FF]/20 to-[#B026FF]/20 animate-pulse" />
              <div
                className="absolute inset-8 rounded-full bg-gradient-to-r from-[#00F0FF]/30 to-[#B026FF]/30 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="absolute inset-16 rounded-full bg-gradient-to-r from-[#00F0FF]/40 to-[#B026FF]/40 animate-pulse"
                style={{ animationDelay: "1s" }}
              />

              {/* AI Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-[#00F0FF]/20 to-[#B026FF]/20 rounded-full blur-xl" />
                  <div className="relative w-40 h-40 md:w-48 md:h-48 gradient-border flex items-center justify-center">
                    <div className="absolute inset-4 bg-[#0A0A0A] rounded-lg flex items-center justify-center p-2">
                      <div className="text-center">
                        <div className="text-[#00F0FF] text-lg font-bold mb-2">
                          AI ASSISTANT
                        </div>
                        <div className="text-xs text-gray-400 max-w-[120px]">
                          Quantum Content Generation
                        </div>
                        <div className="mt-3 flex justify-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-[#00F0FF] to-[#B026FF] rounded-full flex items-center justify-center">
                            <i className="fas fa-brain text-xl text-black" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
