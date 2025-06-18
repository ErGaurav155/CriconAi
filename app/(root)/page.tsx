import Roadmap from "@/components/JsmComp/Roadmap";
import Services from "@/components/JsmComp/Services";
import { Congratulation } from "@/components/shared/Congratulation";
import DiscountBanner from "@/components/shared/DiscountBanner";
import { Faq } from "@/components/shared/Faq";
import { Footer } from "@/components/shared/Footer";
import HeroSection from "@/components/shared/HeroSection";
import Promo from "@/components/shared/Promotion";
import { TabsDemo } from "@/components/shared/ToolsTab";
import {
  Aiimages,
  AiPoster,
  AiThumb,
  OurClient,
  OurClient1,
  TopYoutuber,
} from "@/components/shared/carousel";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  return (
    <div className="wrapper3 mt-32 pb-8 lg:pb-10">
      <DiscountBanner />
      <Congratulation />
      <div className="flex  flex-col gap-10 items-center m-auto justify-center">
        <HeroSection />

        <div className="px-1 sm:px-4 mx-auto max-w-7xl border-b border-[#333] py-16">
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F]">
              Our Top Clients
            </h2>

            <OurClient1 />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-1 sm:px-6 lg:px-8 border-b border-[#333] py-16">
          <div className="grid items-center grid-cols-1 gap-8 md:gap-12 ">
            <div className="flex flex-col items-center justify-between">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F]">
                  Top Youtubers Using Ai Thumbails{" "}
                </h2>
              </div>
              <div className="flex items-center justify-center gap-2">
                <p className="text-gray-400 max-w-2xl mx-auto self-end">
                  Start Making Ai Thumbnails Now
                </p>
                <Link
                  href="/criconai/longvid/thumbnail"
                  className="inline-flex items-center p-1 text-md font-normal md:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-md lg:mt-3 hover:bg-[#4c8eeb] text-nowrap "
                  role="button"
                >
                  Start Now
                </Link>
              </div>
            </div>
            <TopYoutuber />
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <div className="px-1 mx-auto max-w-7xl  border-b border-[#333] py-16">
            <div className="flex flex-col gap-5 justify-start items-start">
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col m-auto items-center justify-between">
                  <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F]">
                      Thumbnails
                    </h2>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Link
                      href="/credits"
                      className=" items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-md lg:mt-3 hover:bg-[#4c8eeb]  text-nowrap"
                      role="button"
                    >
                      Make Thumbnail
                    </Link>
                  </div>
                </div>
              </div>
              <AiThumb />
            </div>
          </div>

          <div className="px-1 mx-auto max-w-7xl  border-b border-[#333] py-16">
            <div className="flex flex-col gap-5 justify-start items-start">
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col m-auto items-center justify-between">
                  <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F]">
                      Aiimages
                    </h2>
                  </div>
                  <Link
                    href="/credits"
                    className=" items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-md lg:mt-3 hover:bg-[#4c8eeb]  px-1"
                    role="button"
                  >
                    Make Aiimages
                  </Link>
                </div>
              </div>
              <Aiimages />
            </div>
          </div>
          <div className="px-1 mx-auto max-w-7xl  border-b border-[#333] py-16">
            <div className="flex flex-col gap-5 justify-start items-start">
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col m-auto items-center justify-between">
                  <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F]">
                      Posters
                    </h2>
                  </div>
                  <Link
                    href="/credits"
                    className=" items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-md lg:mt-3 hover:bg-[#4c8eeb]  text-nowrap"
                    role="button"
                  >
                    Make Poster
                  </Link>
                </div>
              </div>
              <AiPoster />
            </div>
          </div>
        </div>
        <div className=" border-b border-[#333] py-16">
          <p className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] text-center to-[#FF2E9F]">
            Our AI Tools
          </p>
          <TabsDemo />
        </div>
        <Promo />
        <Services />
        <Roadmap />
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8 border-b border-[#333] py-16">
          <div className="grid items-center grid-cols-1 gap-8 ">
            <p className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] text-center to-[#FF2E9F]">
              Top 5 benefits By Criconai
            </p>

            <div className="flex flex-wrap text-nowrap  gap-2 text-white">
              <div className="flex items-center  gap-2">
                <span>
                  <CheckBadgeIcon color="green" height={50} width={50} />
                </span>
                <h2>Improve Views and clicks using our ai thumbnails</h2>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <CheckBadgeIcon color="green" height={50} width={50} />
                </span>
                <h2>Generate Script That Engage Audience</h2>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <CheckBadgeIcon color="green" height={50} width={50} />
                </span>{" "}
                <h2>Generate Trending Tags And Keywords At Video Uploding</h2>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <CheckBadgeIcon color="green" height={50} width={50} />
                </span>

                <h2>
                  Find other channel to increase Engagement Of Relatable Niche
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <CheckBadgeIcon color="green" height={50} width={50} />
                </span>
                <h2>Gained Views Using Other Services </h2>
              </div>
            </div>
          </div>
        </div>
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
