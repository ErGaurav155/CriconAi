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
    <div className="wrapper h-screen flex flex-col justify-between items-center ">
      <div className="max-w-3xl mx-auto px-5 md:px-10   mt-5 md:mt-10 w-full text-dark-400">
        <h2 className="font-black text-3xl text-black mb-5">Contact Us:</h2>
        <p className="mb-2 text-black">Owner- Mr. GAURAV KHIARE</p>
        <h2 className="mb-2 text-black">Business Name-GK Services</h2>
        <p className="mb-2 text-black">Email-support@criconai.com</p>
        <p className="mb-2 text-black">
          Address-Chandwad, Nashik, Maharashtra - 423104
        </p>

        <div className="font-black text-3xl text-black mb-5">Our Socials:</div>
        <div className="flex gap-4 mt-20 text-blue-gray-900 sm:justify-center">
          <Typography
            as="a"
            target="_blank"
            href="https://www.facebook.com/CriconAi/"
          >
            <FacebookIcon className="h-10 w-10" />
          </Typography>
          <Typography
            as="a"
            target="_blank"
            href="https://www.instagram.com/criconai/"
          >
            <InstagramIcon className="h-10 w-10" />
          </Typography>
          <Typography
            as="a"
            target="_blank"
            href="https://twitter.com/CriconAi"
          >
            <TwitterIcon className="h-10 w-10" />
          </Typography>
          <Typography
            as="a"
            target="_blank"
            href="https://www.youtube.com/channel/UC6UCOXsY_Y4Rm7IW34_v9Lg"
          >
            <YoutubeIcon className="h-10 w-10" />
          </Typography>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contactUs;
