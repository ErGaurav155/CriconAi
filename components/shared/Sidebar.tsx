"use client";

import React, { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import {
  ChevronRightIcon,
  ChevronDownIcon,
  HomeIcon,
  UserIcon,
  CurrencyRupeeIcon,
  DevicePhoneMobileIcon,
  CurrencyDollarIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { InstagramIcon, SquarePenIcon, YoutubeIcon } from "lucide-react";

export function Sidebar() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
      <Card className="hidden min-h-screen h-screen bg-gray-50  text-gray-600 lg:flex  w-full max-w-[19rem] p-4 shadow-xl font-sans overflow-y-auto no-scrollbar  shadow-blue-100 ">
        <div className=" flex items-center">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={400}
            height={400}
          />
        </div>

        <List className="flex flex-col justify-between h-full ">
          <div>
            <Link href="/">
              <ListItem className="font-medium hover:bg-sky-100 focus:bg-sky-100 active:bg-sky-100 text-sm">
                <ListItemPrefix>
                  <HomeIcon className="h-5 w-5" />
                </ListItemPrefix>
                Home
              </ListItem>
            </Link>

            <Accordion
              open={open === 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform  ${
                    open === 1 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0 " selected={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3 focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 "
                >
                  <ListItemPrefix>
                    <YoutubeIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="mr-auto text-sm font-medium"
                  >
                    Long Videos
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1 ">
                <List className="pl-4 ">
                  <Link href="/criconai/longvid/idea">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Idea Generator
                    </ListItem>
                  </Link>
                  <Link href="/criconai/longvid/all">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      All-in-One
                    </ListItem>
                  </Link>
                  <Link href="/criconai/longvid/title">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Title
                    </ListItem>
                  </Link>
                  <Link href="/criconai/longvid/description">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Desc
                    </ListItem>
                  </Link>
                  <Link href="/criconai/longvid/tags">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Tags
                    </ListItem>
                  </Link>
                  <Link href="/criconai/longvid/keyword">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Keyword
                    </ListItem>
                  </Link>
                  <Link href="/criconai/longvid/script">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Script
                    </ListItem>
                  </Link>
                  <Link href="/criconai/longvid/poll">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Poll Generation
                    </ListItem>
                  </Link>
                  <Link href="/criconai/longvid/thumbnail">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Thumbnail
                    </ListItem>
                  </Link>
                  <Link href="/criconai/longvid/aiimages">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      AiImages
                    </ListItem>
                  </Link>
                  <Link href="/criconai/longvid/prompt">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Prompt Generation
                    </ListItem>
                  </Link>
                  <Link href="/criconai/longvid/translate">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      script translator
                    </ListItem>
                  </Link>
                  <Link href="/criconai/longvid/TexttoAudio">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Text-to-Audio
                    </ListItem>
                  </Link>
                  <Link href="/criconai/longvid/audiotoAudio">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Audio-to-Audio
                    </ListItem>
                  </Link>
                  <Link href="/criconai/longvid/disclamer">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Disclamer
                    </ListItem>
                  </Link>
                  <Link href="/criconai/longvid/backgroundMusicGen">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Background MusicGen
                    </ListItem>
                  </Link>
                  <Link href="/criconai/longvid/email">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Email
                    </ListItem>
                  </Link>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 2 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="border-b-0 p-3 focus:bg-sky-100 active:bg-sky-100 hover:bg-sky-100 "
                >
                  <ListItemPrefix>
                    <DevicePhoneMobileIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="mr-auto font-medium text-sm"
                  >
                    Short Videos
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="pl-4">
                  <Link href="/criconai/shortvid/idea">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Video Idea
                    </ListItem>
                  </Link>
                  <Link href="/criconai/shortvid/all">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      All-in-One
                    </ListItem>
                  </Link>
                  <Link href="/criconai/shortvid/title">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Title
                    </ListItem>
                  </Link>
                  <Link href="/criconai/shortvid/description">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Description
                    </ListItem>
                  </Link>
                  <Link href="/criconai/shortvid/tags">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Tags
                    </ListItem>
                  </Link>
                  <Link href="/criconai/shortvid/script">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Script
                    </ListItem>
                  </Link>
                  <Link href="/criconai/shortvid/poll">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Poll Generation
                    </ListItem>
                  </Link>
                  <Link href="/criconai/shortvid/thumbnail">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Thumbnail
                    </ListItem>
                  </Link>
                  <Link href="/criconai/shortvid/aiimages">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      AiImages
                    </ListItem>
                  </Link>
                  <Link href="/criconai/shortvid/prompt">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Prompt Generation
                    </ListItem>
                  </Link>
                  <Link href="/criconai/shortvid/translate">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      script translator
                    </ListItem>
                  </Link>
                  <Link href="/criconai/shortvid/TexttoAudio">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Text-to-Audio
                    </ListItem>
                  </Link>
                  <Link href="/criconai/shortvid/audiotoAudio">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Audio-to-Audio
                    </ListItem>
                  </Link>
                  <Link href="/criconai/shortvid/backgroundMusicGen">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Background MusicGen
                    </ListItem>
                  </Link>
                  <Link href="/criconai/shortvid/slogan">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Slogan
                    </ListItem>
                  </Link>
                  <Link href="/criconai/shortvid/facts">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Facts
                    </ListItem>
                  </Link>
                  <Link href="/criconai/shortvid/quote">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Quote
                    </ListItem>
                  </Link>
                  <Link href="/criconai/shortvid/riddle">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Riddle
                    </ListItem>
                  </Link>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 3 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 3}>
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className="border-b-0 p-3 focus:bg-sky-100  active:bg-sky-100 hover:bg-sky-100 "
                >
                  <ListItemPrefix>
                    <SquarePenIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="mr-auto font-medium text-sm"
                  >
                    Content Writer
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="pl-4">
                  <Link href="/criconai/contentwriter/idea">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Idea
                    </ListItem>
                  </Link>
                  <Link href="/criconai/contentwriter/all">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      All-in-One
                    </ListItem>
                  </Link>
                  <Link href="/criconai/contentwriter/outline">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Outline
                    </ListItem>
                  </Link>
                  <Link href="/criconai/contentwriter/article">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Article
                    </ListItem>
                  </Link>
                  <Link href="/criconai/contentwriter/blog">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Blog
                    </ListItem>
                  </Link>
                  <Link href="/criconai/contentwriter/book">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Book
                    </ListItem>
                  </Link>
                  <Link href="/criconai/contentwriter/title">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Title
                    </ListItem>
                  </Link>
                  <Link href="/criconai/contentwriter/images">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      AiImages
                    </ListItem>
                  </Link>
                  <Link href="/criconai/contentwriter/prompt">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Prompt Generation
                    </ListItem>
                  </Link>
                  <Link href="/criconai/contentwriter/summary">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Summary
                    </ListItem>
                  </Link>
                  <Link href="/criconai/contentwriter/expander">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Expander
                    </ListItem>
                  </Link>
                  <Link href="/criconai/contentwriter/slogan">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Slogan
                    </ListItem>
                  </Link>
                  <Link href="/criconai/contentwriter/translation">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Translation
                    </ListItem>
                  </Link>
                  <Link href="/criconai/contentwriter/TexttoAudio">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Text-to-Audio
                    </ListItem>
                  </Link>
                  <Link href="/criconai/contentwriter/coverimage">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Book CoverImage
                    </ListItem>
                  </Link>
                  <Link href="/criconai/contentwriter/email">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Email
                    </ListItem>
                  </Link>
                  <Link href="/criconai/contentwriter/tag">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Tag
                    </ListItem>
                  </Link>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 4}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 4 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 4}>
                <AccordionHeader
                  onClick={() => handleOpen(4)}
                  className="border-b-0 p-3 focus:bg-sky-100 active:bg-sky-100 hover:bg-sky-100 "
                >
                  <ListItemPrefix>
                    <InstagramIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="mr-auto font-medium text-sm"
                  >
                    Social Media
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="pl-4">
                  <Link href="/criconai/socialmedia/idea">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Idea
                    </ListItem>
                  </Link>
                  <Link href="/criconai/socialmedia/all">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      All-in-one
                    </ListItem>
                  </Link>
                  <Link href="/criconai/socialmedia/images">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Images
                    </ListItem>
                  </Link>
                  <Link href="/criconai/socialmedia/prompt">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Prompt Generation
                    </ListItem>
                  </Link>
                  <Link href="/criconai/socialmedia/bio">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Bio
                    </ListItem>
                  </Link>
                  <Link href="/criconai/socialmedia/caption">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Caption
                    </ListItem>
                  </Link>
                  <Link href="/criconai/socialmedia/tag">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Tags
                    </ListItem>
                  </Link>
                  <Link href="/criconai/socialmedia/description">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Description
                    </ListItem>
                  </Link>
                  <Link href="/criconai/socialmedia/poll">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Poll Generation
                    </ListItem>
                  </Link>
                  <Link href="/criconai/socialmedia/comment">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Comment
                    </ListItem>
                  </Link>
                  <Link href="/criconai/socialmedia/tweet">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Tweet
                    </ListItem>
                  </Link>
                  <Link href="/criconai/socialmedia/avatar">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Avatar
                    </ListItem>
                  </Link>
                  <Link href="/criconai/socialmedia/backgroundMusicGen">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Background MusicGen
                    </ListItem>
                  </Link>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 5}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 5 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 5}>
                <AccordionHeader
                  onClick={() => handleOpen(5)}
                  className="border-b-0 p-3 focus:bg-sky-100 active:bg-sky-100 hover:bg-sky-100 "
                >
                  <ListItemPrefix>
                    <CurrencyDollarIcon strokeWidth={2} className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="mr-auto font-medium text-sm"
                  >
                    Marketing
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="pl-4">
                  <Link href="/criconai/marketing/all">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      All
                    </ListItem>
                  </Link>
                  <Link href="/criconai/marketing/calculator">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Promotion Price Cal
                    </ListItem>
                  </Link>
                  <Link href="/criconai/marketing/email">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Promotion Email
                    </ListItem>
                  </Link>
                  <Link href="/criconai/marketing/finder">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Sponcership Finder
                    </ListItem>
                  </Link>
                  <Link href="/criconai/marketing/promotion">
                    <ListItem className="focus:bg-sky-100 p-2 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm ">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Promotion Helper
                    </ListItem>
                  </Link>
                </List>
              </AccordionBody>
            </Accordion>
            <Link href="/HowToUse">
              <ListItem className="font-medium hover:bg-sky-100 focus:bg-sky-100 active:bg-sky-100 text-sm">
                <ListItemPrefix>
                  <QuestionMarkCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                How To Use Criconai?
              </ListItem>
            </Link>
          </div>
          <SignedIn>
            <div>
              <hr className="my-2 border-blue-gray-50" />

              <Link href="/profile">
                <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                  <ListItemPrefix>
                    <UserIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Profile
                </ListItem>
              </Link>
              <Link href="/credits">
                <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium text-sm">
                  <ListItemPrefix>
                    <CurrencyRupeeIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Buy Credits
                </ListItem>
              </Link>
              <ListItem className="focus:bg-sky-100 hover:bg-sky-100 active:bg-sky-100 font-medium ">
                <UserButton afterSignOutUrl="/" showName />
              </ListItem>
            </div>
          </SignedIn>
          <SignedOut>
            <Button
              asChild
              className="mb-10 button bg-purple-gradient bg-cover"
            >
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </List>
      </Card>
    </div>
  );
}
