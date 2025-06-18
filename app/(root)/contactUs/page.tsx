"use client";
import { Footer } from "@/components/shared/Footer";
import { Typography } from "@material-tailwind/react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";

const contactUs = () => {
  return (
    <div className="min-h-screen mt-24 text-white flex flex-col">
      <div className="max-w-3xl mx-auto px-5 md:px-10 mt-5 md:mt-10 w-full flex-1">
        <div className="relative p-6 rounded-2xl  border border-[#333] mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] opacity-0 hover:opacity-10 transition-opacity -z-10 rounded-2xl"></div>

          <h2 className="font-bold text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] mb-6">
            Contact Us
          </h2>

          <div className="space-y-4">
            <div>
              <p className="text-gray-400">Owner</p>
              <p className="font-medium">Mr. GAURAV KHIARE</p>
            </div>

            <div>
              <p className="text-gray-400">Business Name</p>
              <p className="font-medium">GK Services</p>
            </div>

            <div>
              <p className="text-gray-400">Email</p>
              <p className="font-medium">support@criconai.com</p>
            </div>

            <div>
              <p className="text-gray-400">Address</p>
              <p className="font-medium">
                Chandwad, Nashik, Maharashtra - 423104
              </p>
            </div>
          </div>
        </div>

        <div className="relative p-6 rounded-2xl  border border-[#333]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] opacity-0 hover:opacity-10 transition-opacity -z-10 rounded-2xl"></div>

          <h2 className="font-bold text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] mb-6">
            Our Socials
          </h2>

          <div className="flex gap-6 justify-center md:justify-start">
            <a
              target="_blank"
              href="https://www.facebook.com/CriconAi/"
              className="group"
            >
              <FacebookIcon className="h-10 w-10 text-[#00F0FF] group-hover:text-[#B026FF] transition-colors" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/criconai/"
              className="group"
            >
              <InstagramIcon className="h-10 w-10 text-[#00F0FF] group-hover:text-[#B026FF] transition-colors" />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/CriconAi"
              className="group"
            >
              <TwitterIcon className="h-10 w-10 text-[#00F0FF] group-hover:text-[#B026FF] transition-colors" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UC6UCOXsY_Y4Rm7IW34_v9Lg"
              className="group"
            >
              <YoutubeIcon className="h-10 w-10 text-[#00F0FF] group-hover:text-[#B026FF] transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default contactUs;
