"use client";

import React, { useEffect, useState, useRef } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import logo from "@/public/assets/loading.png"; // Adjust the path as necessary
import {
  ChevronRightIcon,
  HomeIcon,
  UserIcon,
  CurrencyRupeeIcon,
  DevicePhoneMobileIcon,
  CurrencyDollarIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { InstagramIcon, SquarePenIcon, YoutubeIcon } from "lucide-react";
import Image from "next/image";

export default function MainNavbar() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeAllDropdowns = () => setOpenDropdown(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeAllDropdowns();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Star particles effect (same as original)
  useEffect(() => {
    const createStarParticles = () => {
      const starsContainer = document.getElementById("stars-container");
      if (!starsContainer) return;
      starsContainer.innerHTML = "";
      const numberOfStars = 150;
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement("div");
        star.className = "absolute rounded-full";
        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        const colors = ["#00F0FF", "#B026FF", "#FF2E9F", "#FFFFFF"];
        star.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];
        star.style.opacity = `${Math.random() * 0.8 + 0.2}`;
        star.style.animation = `twinkle ${Math.random() * 5 + 3}s infinite`;
        starsContainer.appendChild(star);
      }
    };

    createStarParticles();
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes twinkle {
        0% { opacity: 0.2; }
        50% { opacity: 1; }
        100% { opacity: 0.2; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Navbar menu data
  const menuItems = [
    {
      id: 1,
      name: "Long Videos",
      icon: <YoutubeIcon className="h-5 w-5 text-[#ff2e9f]" />,
      subItems: [
        { name: "Idea Generator", href: "/criconai/longvid/idea" },
        { name: "All-in-One", href: "/criconai/longvid/all" },
        { name: "Title", href: "/criconai/longvid/title" },
        { name: "Desc", href: "/criconai/longvid/description" },
        { name: "Tags", href: "/criconai/longvid/tags" },
        { name: "Script", href: "/criconai/longvid/script" },
        { name: "Poll Generation", href: "/criconai/longvid/poll" },
        { name: "Thumbnail", href: "/criconai/longvid/thumbnail" },
        { name: "AiImages", href: "/criconai/longvid/aiimages" },
        { name: "Prompt Generation", href: "/criconai/longvid/prompt" },
        { name: "script translator", href: "/criconai/longvid/translate" },
        { name: "Text-to-Audio", href: "/criconai/longvid/TexttoAudio" },
        { name: "Audio-to-Audio", href: "/criconai/longvid/audiotoAudio" },
        { name: "Disclamer", href: "/criconai/longvid/disclamer" },
        {
          name: "Background MusicGen",
          href: "/criconai/longvid/backgroundMusicGen",
        },
        { name: "Email", href: "/criconai/longvid/email" },
      ],
    },
    {
      id: 2,
      name: "Short Videos",
      icon: <DevicePhoneMobileIcon className="h-5 w-5 text-[#FF2E9F]" />,
      subItems: [
        { name: "Video Idea", href: "/criconai/shortvid/idea" },
        { name: "All-in-One", href: "/criconai/shortvid/all" },
        { name: "Title", href: "/criconai/shortvid/title" },
        { name: "Description", href: "/criconai/shortvid/description" },
        { name: "Tags", href: "/criconai/shortvid/tags" },
        { name: "Script", href: "/criconai/shortvid/script" },
        { name: "Poll Generation", href: "/criconai/shortvid/poll" },
        { name: "Thumbnail", href: "/criconai/shortvid/thumbnail" },
        { name: "AiImages", href: "/criconai/shortvid/aiimages" },
        { name: "Prompt Generation", href: "/criconai/shortvid/prompt" },
        { name: "script translator", href: "/criconai/shortvid/translate" },
        { name: "Text-to-Audio", href: "/criconai/shortvid/TexttoAudio" },
        { name: "Audio-to-Audio", href: "/criconai/shortvid/audiotoAudio" },
        {
          name: "Background MusicGen",
          href: "/criconai/shortvid/backgroundMusicGen",
        },
        { name: "Slogan", href: "/criconai/shortvid/slogan" },
        { name: "Facts", href: "/criconai/shortvid/facts" },
        { name: "Quote", href: "/criconai/shortvid/quote" },
        { name: "Riddle", href: "/criconai/shortvid/riddle" },
      ],
    },
    {
      id: 3,
      name: "Content Writer",
      icon: <SquarePenIcon className="h-5 w-5 text-[#FF2E9F]" />,
      subItems: [
        { name: "Idea", href: "/criconai/contentwriter/idea" },
        { name: "All-in-One", href: "/criconai/contentwriter/all" },
        { name: "Outline", href: "/criconai/contentwriter/outline" },
        { name: "Article", href: "/criconai/contentwriter/article" },
        { name: "Blog", href: "/criconai/contentwriter/blog" },
        { name: "Book", href: "/criconai/contentwriter/book" },
        { name: "Title", href: "/criconai/contentwriter/title" },
        { name: "AiImages", href: "/criconai/contentwriter/images" },
        { name: "Prompt Generation", href: "/criconai/contentwriter/prompt" },
        { name: "Summary", href: "/criconai/contentwriter/summary" },
        { name: "Expander", href: "/criconai/contentwriter/expander" },
        { name: "Slogan", href: "/criconai/contentwriter/slogan" },
        { name: "Translation", href: "/criconai/contentwriter/translation" },
        { name: "Text-to-Audio", href: "/criconai/contentwriter/TexttoAudio" },
        { name: "Book CoverImage", href: "/criconai/contentwriter/coverimage" },
        { name: "Email", href: "/criconai/contentwriter/email" },
        { name: "Tag", href: "/criconai/contentwriter/tag" },
      ],
    },
    {
      id: 4,
      name: "Social Media",
      icon: <InstagramIcon className="h-5 w-5 text-[#FF2E9F]" />,
      subItems: [
        { name: "Idea", href: "/criconai/socialmedia/idea" },
        { name: "All-in-one", href: "/criconai/socialmedia/all" },
        { name: "Images", href: "/criconai/socialmedia/images" },
        { name: "Prompt Generation", href: "/criconai/socialmedia/prompt" },
        { name: "Bio", href: "/criconai/socialmedia/bio" },
        { name: "Caption", href: "/criconai/socialmedia/caption" },
        { name: "Tags", href: "/criconai/socialmedia/tag" },
        { name: "Description", href: "/criconai/socialmedia/description" },
        { name: "Poll Generation", href: "/criconai/socialmedia/poll" },
        { name: "Comment", href: "/criconai/socialmedia/comment" },
        { name: "Tweet", href: "/criconai/socialmedia/tweet" },
        { name: "Avatar", href: "/criconai/socialmedia/avatar" },
        {
          name: "Background MusicGen",
          href: "/criconai/socialmedia/backgroundMusicGen",
        },
      ],
    },
    {
      id: 5,
      name: "Marketing",
      icon: <CurrencyDollarIcon className="h-5 w-5 text-[#FF2E9F]" />,
      subItems: [
        { name: "All", href: "/criconai/marketing/all" },
        { name: "Promotion Price Cal", href: "/criconai/marketing/calculator" },
        { name: "Promotion Email", href: "/criconai/marketing/email" },
        { name: "Sponcership Finder", href: "/criconai/marketing/finder" },
        { name: "Promotion Helper", href: "/criconai/marketing/promotion" },
      ],
    },
    {
      id: 6,
      name: "Use",
      icon: <QuestionMarkCircleIcon className="h-5 w-5 text-[#FF2E9F]" />,
      subItems: [{ name: "How To Use Criconai?", href: "/HowToUse" }],
    },
  ];

  return (
    <div className="relative">
      <div
        id="stars-container"
        className="fixed inset-0 z-1 pointer-events-none"
      ></div>
      <div className="fixed  inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A] to-[#0A0A0A]  pointer-events-none"></div>

      <div className=" top-0 left-0 right-0 fixed z-10 bg-black backdrop-blur-lg border-b border-[#00F0FF]/30 p-4 shadow-md shadow-[#00F0FF]/20">
        <div
          ref={dropdownRef}
          className="flex items-center justify-between w-full m-auto  px-5 max-w-7xl"
        >
          {/* Logo */}
          <Link href={"/"} className="flex items-center z-10">
            <div className="relative w-10 h-10 mr-3">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#B026FF] animate-pulse"></div>
              <div className="absolute inset-1 rounded-full bg-[#0A0A0A] flex items-center justify-center">
                <Image
                  src={logo}
                  alt="Cosmic background"
                  fill
                  className="object-cover w-full p-[6px]"
                  priority
                />{" "}
              </div>
            </div>
            <h1 className="text-lg xl:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F]">
              Cricon<span className="text-[#B026FF]">ai</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="relative">
                  <button
                    className={`flex items-center px-4 py-2 font-medium text-xs rounded-lg transition-all ${
                      openDropdown === item.id
                        ? "bg-gradient-to-r from-[#00F0FF]/20 to-[#FF2E9F]/20"
                        : "group-hover:bg-gradient-to-r group-hover:from-[#00F0FF]/20 group-hover:to-[#FF2E9F]/20"
                    }`}
                  >
                    {item.icon}
                    <span className="text-white ml-1">{item.name}</span>
                  </button>
                </div>

                {item.subItems && (
                  <div
                    className={`absolute top-full left-0 mt-1 w-64 bg-black border border-[#00F0FF]/30 rounded-lg shadow-xl shadow-[#00F0FF]/20 z-50 max-h-96 overflow-y-auto no-scrollbar ${
                      openDropdown === item.id
                        ? "block"
                        : "hidden group-hover:block"
                    }`}
                    onMouseEnter={() => setOpenDropdown(item.id)}
                  >
                    <div className="py-2">
                      {item.subItems.map((subItem, index) => (
                        <Link
                          key={index}
                          href={subItem.href}
                          className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gradient-to-r hover:from-[#00F0FF]/20 hover:to-[#FF2E9F]/20"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <ChevronRightIcon className="h-3 w-5 text-white mr-2" />
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            <SignedIn>
              <Link href="/profile">
                <button className="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-gradient-to-r hover:from-[#00F0FF]/20 hover:to-[#FF2E9F]/20">
                  <UserIcon className="h-5 w-5 text-white" />
                </button>
              </Link>
              <Link href="/credits">
                <button className="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-gradient-to-r hover:from-[#00F0FF]/20 hover:to-[#FF2E9F]/20">
                  <CurrencyRupeeIcon className="h-5 w-5 text-white" />
                </button>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <Button
                asChild
                className="bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] text-black font-bold hover:from-[#00F0FF]/90 hover:to-[#FF2E9F]/90 transition-all duration-300"
              >
                <span className="flex items-center w-full gap-2">
                  <i className="fas fa-user-astronaut text-black text-sm p-2" />
                  <Link href="/sign-in">Login</Link>
                </span>
              </Button>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
}
