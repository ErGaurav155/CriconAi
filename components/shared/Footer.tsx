"use client";

import { Typography } from "@material-tailwind/react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="p-1 w-full">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-gray-50 text-center md:justify-between">
        <div className="flex flex-row flex-wrap items-center justify-center  gap-2 md:py-2 text-3xl font-extrabold text-[#7e3caa]">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={200}
            height={200}
          />
        </div>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="/credits"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Pricing
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Services
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/contactUs"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>

          <li>
            <Typography
              as="a"
              href="/privacy-policy"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Privacy Policy
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/TermsandCondition"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Terms & Conditions
            </Typography>
          </li>
        </ul>
      </div>

      <div className="mt-3 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
        <Typography
          variant="small"
          className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
        >
          &copy; {currentYear}{" "}
          <a href="https://criconai.com">GK Services(Cricon Ai)</a>. All Rights
          Reserved.
        </Typography>
        <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
          <Typography
            as="a"
            target="_blank"
            href="https://www.facebook.com/CriconAi/"
          >
            <FacebookIcon className="h-5 w-5" />
          </Typography>
          <Typography
            as="a"
            target="_blank"
            href="https://www.instagram.com/criconai/"
          >
            <InstagramIcon className="h-5 w-5" />
          </Typography>
          <Typography
            as="a"
            target="_blank"
            href="https://twitter.com/CriconAi"
          >
            <TwitterIcon className="h-5 w-5" />
          </Typography>
          <Typography
            as="a"
            target="_blank"
            href="https://www.youtube.com/channel/UC6UCOXsY_Y4Rm7IW34_v9Lg"
          >
            <YoutubeIcon className="h-5 w-5" />
          </Typography>
        </div>
      </div>
    </footer>
  );
}
