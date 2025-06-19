"use client";

import { Typography } from "@material-tailwind/react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/loading.png"; // Adjust the path as necessary

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="p-4 pt-10 w-full   border-t border-[#333]">
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Link href={"/"} className="flex items-center">
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
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F]">
              Cricon<span className="text-[#B026FF]">ai</span>
            </h1>
          </Link>
          <Typography className="text-gray-400 mb-4 max-w-xs text-center md:text-left">
            AI-powered tools for content creators, marketers, and social media
            professionals.
          </Typography>
          <div className="flex gap-4">
            <a
              target="_blank"
              href="https://www.facebook.com/CriconAi/"
              className="p-2 bg-[#1a1a1a]/50 border border-[#333] rounded-full hover:bg-gradient-to-r hover:from-[#00F0FF]/20 hover:to-[#FF2E9F]/20 transition-all"
            >
              <FacebookIcon className="h-5 w-5 text-white" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/criconai/"
              className="p-2 bg-[#1a1a1a]/50 border border-[#333] rounded-full hover:bg-gradient-to-r hover:from-[#00F0FF]/20 hover:to-[#FF2E9F]/20 transition-all"
            >
              <InstagramIcon className="h-5 w-5 text-white" />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/CriconAi"
              className="p-2 bg-[#1a1a1a]/50 border border-[#333] rounded-full hover:bg-gradient-to-r hover:from-[#00F0FF]/20 hover:to-[#FF2E9F]/20 transition-all"
            >
              <TwitterIcon className="h-5 w-5 text-white" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UC6UCOXsY_Y4Rm7IW34_v9Lg"
              className="p-2 bg-[#1a1a1a]/50 border border-[#333] rounded-full hover:bg-gradient-to-r hover:from-[#00F0FF]/20 hover:to-[#FF2E9F]/20 transition-all"
            >
              <YoutubeIcon className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/credits"
                  className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00F0FF] hover:to-[#FF2E9F] transition-all"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00F0FF] hover:to-[#FF2E9F] transition-all"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/HowToUse"
                  className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00F0FF] hover:to-[#FF2E9F] transition-all"
                >
                  How To Use
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/contactUs"
                  className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00F0FF] hover:to-[#FF2E9F] transition-all"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/Faq"
                  className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00F0FF] hover:to-[#FF2E9F] transition-all"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00F0FF] hover:to-[#FF2E9F] transition-all"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/TermsandCondition"
                  className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00F0FF] hover:to-[#FF2E9F] transition-all"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-[#333]">
        <Typography className="text-gray-500 text-sm">
          &copy; {currentYear}{" "}
          <a
            href="https://criconai.com"
            className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00F0FF] hover:to-[#FF2E9F]"
          >
            GK Services (Cricon Ai)
          </a>
          . All Rights Reserved.
        </Typography>

        {/* <div className="flex gap-2 text-sm text-gray-500">
          <span>Registered in India</span>
          <span>•</span>
          <span>GSTIN: XXXXXXXX</span>
        </div> */}
      </div>
    </footer>
  );
}
