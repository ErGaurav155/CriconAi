"use client";

import React, { useEffect, useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  HomeIcon,
  UserIcon,
  CurrencyRupeeIcon,
  DevicePhoneMobileIcon,
  TvIcon,
  CurrencyDollarIcon,
  QuestionMarkCircleIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import {
  InstagramIcon,
  LucideHome,
  MenuSquareIcon,
  SquarePenIcon,
  YoutubeIcon,
} from "lucide-react";

export function MobileNav() {
  const [open, setOpen] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [shouldOpenDrawer, setShouldOpenDrawer] = useState(true);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (shouldOpenDrawer) {
        openDrawer();
        handleOpen(1);
        setShouldOpenDrawer(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <header className="header  absolute z-50 top-0 left-0 w-full  overflow-hidden  bg-[#0a0a0a]">
      <div className="flex items-center justify-between  bg-black w-screen">
        <IconButton
          variant="text"
          size="lg"
          onClick={openDrawer}
          className="bg-[#0a0a0a]/60 hover:bg-[#1a1a1a] border border-[#333] rounded-lg"
        >
          {isDrawerOpen ? (
            <XMarkIcon className="h-6 w-6 text-[#00F0FF]" />
          ) : (
            <MenuSquareIcon className="h-6 w-6 text-[#00F0FF]" />
          )}
        </IconButton>

        <Link href={"/"} className="flex items-center">
          <div className="relative w-10 h-10 mr-3">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#B026FF] animate-pulse"></div>
            <div className="absolute inset-1 rounded-full bg-[#0A0A0A] flex items-center justify-center">
              <i className="fas fa-satellite text-[#00F0FF]"></i>
            </div>
          </div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F]">
            Cricon<span className="text-[#B026FF]">ai</span>
          </h1>
        </Link>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <Button
            asChild
            className="bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-black font-semibold hover:opacity-90 rounded-lg"
          >
            <span className="flex items-center  gap-1">
              <i className="fas fa-user-astronaut text-black text-sm p-1" />
              <Link href="/sign-in">Login</Link>
            </span>
          </Button>
        </SignedOut>
      </div>

      <Drawer
        open={isDrawerOpen}
        onClose={closeDrawer}
        placement="left"
        className="bg-[#0a0a0a]/80 backdrop-blur-sm"
      >
        <Card className="h-[100vh] min-h-screen max-w-[20rem] shadow-xl shadow-black w-full p-4 bg-[#0a0a0a]/60 backdrop-blur-sm border-r border-[#333] overflow-y-auto no-scrollbar">
          <div className="mb-4 flex items-center justify-between border-b border-[#333] pb-4">
            <Typography
              variant="h5"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]"
            >
              Menu
            </Typography>
            <IconButton
              variant="text"
              size="sm"
              onClick={closeDrawer}
              className="border border-[#333] hover:bg-[#1a1a1a] rounded-lg"
            >
              <XMarkIcon className="h-5 w-5 text-[#00F0FF]" />
            </IconButton>
          </div>

          <List className="flex flex-col justify-between h-full">
            <div>
              <Link onClick={closeDrawer} href="/">
                <ListItem className="group hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/30 rounded-lg mb-2 transition-all">
                  <ListItemPrefix>
                    <LucideHome className="h-5 w-5 text-[#00F0FF]" />
                  </ListItemPrefix>
                  <span className="text-gray-300 group-hover:text-white">
                    Home
                  </span>
                </ListItem>
              </Link>

              <Accordion
                open={open === 1}
                icon={
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform text-[#00F0FF] ${
                      open === 1 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0 group" selected={open === 1}>
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="border-b-0 p-3 hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/30 rounded-lg transition-all"
                  >
                    <ListItemPrefix>
                      <TvIcon className="h-5 w-5 text-[#00F0FF]" />
                    </ListItemPrefix>
                    <span className="mr-auto font-medium text-sm text-gray-300 group-hover:text-white">
                      Videos
                    </span>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1 pl-4">
                  <List className="p-0 space-y-1">
                    <Link onClick={closeDrawer} href="/criconai/longvid/idea">
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Idea Generator
                        </span>
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/longvid/all">
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          All-in-One
                        </span>
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/longvid/title">
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Title
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/longvid/description"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Desc
                        </span>
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/longvid/tags">
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Tags
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/longvid/keyword"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          keyword
                        </span>
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/longvid/script">
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Script
                        </span>
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/longvid/poll">
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Poll Generation
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/longvid/thumbnail"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Thumbnail
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/longvid/aiimages"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          AiImages
                        </span>
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/longvid/prompt">
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Prompt Generation
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/longvid/translate"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          script translator
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/longvid/TexttoAudio"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Text-to-Audio
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/longvid/audiotoAudio"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Audio-to-Audio
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/longvid/disclamer"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Disclamer
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/longvid/backgroundMusicGen"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          backgroundMusicGen
                        </span>
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/longvid/email">
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Email
                        </span>
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
                    className={`h-4 w-4 transition-transform text-[#00F0FF]  ${
                      open === 2 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 2}>
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className="border-b-0 p-3 hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/30 rounded-lg transition-all"
                  >
                    <ListItemPrefix>
                      <DevicePhoneMobileIcon className="h-5 w-5 text-[#00F0FF]" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-medium text-sm text-gray-300 group-hover:text-white"
                    >
                      Reels
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1 pl-4">
                  <List className="p-0 space-y-1">
                    <Link onClick={closeDrawer} href="/criconai/shortvid/idea">
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Video Idea{" "}
                        </span>
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/shortvid/all">
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          All-in-One
                        </span>
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/shortvid/title">
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Title
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/shortvid/description"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Description
                        </span>
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/shortvid/tags">
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Tags
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/shortvid/script"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Script
                        </span>
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/shortvid/poll">
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Poll Generation
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/shortvid/thumbnail"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Thumbnail
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/shortvid/aiimages"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          AiImages
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/shortvid/prompt"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Prompt Generation
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/shortvid/translate"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          script translator
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/shortvid/TexttoAudio"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Text-to-Audio
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/shortvid/audiotoAudio"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Audio-to-Audio
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/shortvid/backgroundMusicGen"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          backgroundMusicGen
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/shortvid/slogan"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Slogan
                        </span>
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/shortvid/facts">
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Facts
                        </span>
                      </ListItem>
                    </Link>
                    <Link onClick={closeDrawer} href="/criconai/shortvid/quote">
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Quote
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/shortvid/riddle"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Riddle
                        </span>
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
                    className={`h-4 w-4 transition-transform text-[#00F0FF] ${
                      open === 3 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 3}>
                  <AccordionHeader
                    onClick={() => handleOpen(3)}
                    className="border-b-0 p-3 hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/30 rounded-lg transition-all"
                  >
                    <ListItemPrefix>
                      <SquarePenIcon className=" h-5 w-5 text-[#00F0FF]" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-medium text-sm text-gray-300 group-hover:text-white"
                    >
                      Writer
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1 pl-4">
                  <List className="p-0 space-y-1">
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/idea"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Idea
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/all"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          All-in-One
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/outline"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Outline
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/article"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Article
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/blog"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Blog
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/book"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Book
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/title"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Title
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/images"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          AiImages
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/prompt"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Prompt Generation
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/summary"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Summary
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/expander"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Expander
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/slogan"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Slogan
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/translation"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Translation
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/TexttoAudio"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Text-to-Audio
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/coverimage"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Book CoverImage
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/email"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Email
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/contentwriter/tag"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Tag
                        </span>
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
                    className={`h-4 w-4 transition-transform text-[#00F0FF]  ${
                      open === 4 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 4}>
                  <AccordionHeader
                    onClick={() => handleOpen(4)}
                    className="border-b-0 p-3 hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/30 rounded-lg transition-all"
                  >
                    <ListItemPrefix>
                      <InstagramIcon className=" h-5 w-5 text-[#00F0FF]" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-medium text-sm text-gray-300 group-hover:text-white"
                    >
                      Media
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1 pl-4">
                  <List className="p-0 space-y-1">
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/idea"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Idea
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/all"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          All-in-One
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/images"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Images
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/prompt"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Prompt Generation
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/bio"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Bio
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/caption"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Caption
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/tag"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Tags
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/description"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Description
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/poll"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Poll Generation
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/comment"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Comment
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/tweet"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Tweet
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/avatar"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Avatar
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/socialmedia/backgroundMusicGen"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          backgroundMusicGen
                        </span>
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
                    className={`h-4 w-4 transition-transform text-[#00F0FF]  ${
                      open === 5 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 5}>
                  <AccordionHeader
                    onClick={() => handleOpen(5)}
                    className="border-b-0 p-3 hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/30 rounded-lg transition-all"
                  >
                    <ListItemPrefix>
                      <CurrencyDollarIcon className=" h-5 w-5 text-[#00F0FF]" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-medium text-sm text-gray-300 group-hover:text-white"
                    >
                      Marketing
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1 pl-4">
                  <List className="p-0 space-y-1">
                    <Link onClick={closeDrawer} href="/criconai/marketing/all">
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          All
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/marketing/calculator"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Paid Promotion Cal
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/marketing/finder"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Sponcership Finder
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/marketing/email"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Promotion Email
                        </span>
                      </ListItem>
                    </Link>
                    <Link
                      onClick={closeDrawer}
                      href="/criconai/marketing/promotion"
                    >
                      <ListItem className="hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/20 rounded-lg transition-all">
                        <ListItemPrefix>
                          <ChevronRightIcon className="h-3 w-5 text-[#00F0FF]" />
                        </ListItemPrefix>
                        <span className="text-gray-300 hover:text-white text-sm">
                          Promotion Helper
                        </span>
                      </ListItem>
                    </Link>
                  </List>
                </AccordionBody>
              </Accordion>
              <Link onClick={closeDrawer} href="/HowToUse">
                <ListItem className="group hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/30 rounded-lg mt-2 transition-all">
                  <ListItemPrefix>
                    <QuestionMarkCircleIcon className="h-5 w-5 text-[#00F0FF]" />
                  </ListItemPrefix>
                  <span className="text-gray-300 group-hover:text-white">
                    How To Use Criconai?
                  </span>
                </ListItem>
              </Link>
            </div>

            <SignedIn>
              <div className="mt-4 border-t border-[#333] pt-4">
                <Link onClick={closeDrawer} href="/profile">
                  <ListItem className="group hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/30 rounded-lg transition-all">
                    <ListItemPrefix>
                      <UserIcon className="h-5 w-5 text-[#00F0FF]" />
                    </ListItemPrefix>
                    <span className="text-gray-300 group-hover:text-white">
                      Profile
                    </span>
                  </ListItem>
                </Link>
                <Link onClick={closeDrawer} href="/credits">
                  <ListItem className="group hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/30 rounded-lg transition-all">
                    <ListItemPrefix>
                      <CurrencyRupeeIcon className="h-5 w-5 text-[#00F0FF]" />
                    </ListItemPrefix>
                    <span className="text-gray-300 group-hover:text-white">
                      Buy Credits
                    </span>
                  </ListItem>
                </Link>
                <ListItem className="group hover:bg-[#1a1a1a] border border-transparent hover:border-[#00F0FF]/30 rounded-lg transition-all">
                  <UserButton afterSignOutUrl="/" showName />
                </ListItem>
              </div>
            </SignedIn>

            <SignedOut>
              <div className="mt-6">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-black font-semibold hover:opacity-90 rounded-lg"
                >
                  <span className="flex items-center w-full gap-2">
                    <i className="fas fa-user-astronaut text-black text-sm p-2" />
                    <Link href="/sign-in">Login</Link>
                  </span>
                </Button>
              </div>
            </SignedOut>
          </List>
        </Card>
      </Drawer>
    </header>
  );
}
