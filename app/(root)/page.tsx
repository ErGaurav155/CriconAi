import Roadmap from "@/components/JsmComp/Roadmap";
import Services from "@/components/JsmComp/Services";
import { Congratulation } from "@/components/shared/Congratulation";
import DiscountBanner from "@/components/shared/DiscountBanner";
import { Faq } from "@/components/shared/Faq";
import { Footer } from "@/components/shared/Footer";
import Promo from "@/components/shared/Promotion";
import { TabsDemo } from "@/components/shared/ToolsTab";
import {
  Aiimages,
  AiPoster,
  AiThumb,
  OurClient,
  TopYoutuber,
} from "@/components/shared/carousel";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  return (
    <div className="wrapper3 pb-8 lg:pb-10">
      <DiscountBanner />
      <Congratulation />
      <div className="flex  flex-col gap-10 items-center m-auto justify-center">
        <section className="bg-[#FCF8F1] bg-opacity-30 pt-4">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <p className="mt-4 text-3xl font-bold text-black lg:mt-8 sm:text-3xl md:text-4xl xl:text-6xl">
                  10X Booost Your Youtube Growth
                </p>
                <h1 className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                  Cricon AI Platform for Content Creation
                </h1>

                <Link
                  href="/criconai/longvid/idea"
                  className="inline-flex items-center px-6 py-4 mt-2 font-semibold text-white transition-all duration-200 bg-[#73257a] rounded-md lg:mt-3 hover:bg-[#bb76c2]  "
                  role="button"
                >
                  Start for free
                  <ArrowBigRight />
                </Link>
              </div>

              <div className="w-full">
                <Image
                  src="/assets/MyHero.png"
                  height={869}
                  width={1139}
                  alt="Create Shorts Using AI Tools"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="px-4 mx-auto max-w-7xl ">
          <div className="grid items-center grid-cols-1 gap-8 md:gap-12">
            <p className="mt-4 text-xl font-bold text-black lg:mt-8 sm:text-2xl md:text-3xl xl:text-4xl">
              Our Top Clients
            </p>

            <OurClient />
          </div>
        </div>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-8 md:gap-12 ">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="mt-4 text-xl font-bold text-black lg:mt-8 sm:text-2xl md:text-3xl xl:text-5xl">
                  Top Youtubers Using Ai Thumbails
                </h1>
                <p className="mt-4 text-base text-black lg:mt-8 sm:text-2xl ">
                  Start Making Ai Thumbnails Now
                </p>
              </div>

              <Link
                href="/criconai/longvid/thumbnail"
                className="inline-flex items-center p-3  mt-2 lg:text-xl font-normal md:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-md lg:mt-3 hover:bg-[#4c8eeb]  "
                role="button"
              >
                Start Now
              </Link>
            </div>
            <TopYoutuber />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 justify-start items-start">
              <div className="flex items-center justify-between w-full">
                <p className="  mt-4 text-base font-bold text-#e61a49 lg:mt-8 sm:text-2xl ">
                  Criconai Generated Thumbnails
                </p>
                <Link
                  href="/credits"
                  className=" items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                  role="button"
                >
                  Make Thumbnail
                </Link>
              </div>
              <AiThumb />
            </div>
          </div>

          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 justify-start items-start">
              <div className="flex items-center justify-between w-full">
                <p className="  mt-4 text-base font-bold text-#812c08 lg:mt-8 sm:text-2xl ">
                  Criconai Generated Aiimages
                </p>
                <Link
                  href="/credits"
                  className=" items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                  role="button"
                >
                  Make Aiimages
                </Link>
              </div>
              <Aiimages />
            </div>
          </div>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 justify-start items-start">
              <div className="flex items-center w-full justify-between ">
                <p className="  mt-4 text-base font-bold text-#1e0654 lg:mt-8 sm:text-2xl ">
                  Criconai Generated Posters
                </p>
                <Link
                  href="/credits"
                  className=" items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                  role="button"
                >
                  Make Poster
                </Link>
              </div>
              <AiPoster />
            </div>
          </div>
        </div>
        <div>
          <p className="mt-4 text-xl font-bold text-black lg:mt-8 sm:text-2xl md:text-3xl xl:text-4xl">
            Our AI Tools
          </p>
          <TabsDemo />
        </div>
        <Promo />
        <Services />
        <Roadmap />
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-8 md:gap-12 md:grid-cols-2">
            <p className="mt-4 text-xl font-bold text-black lg:mt-8 sm:text-2xl md:text-3xl xl:text-5xl">
              Top 5 benefits By Criconai
            </p>

            <div className="flex flex-col  gap-2 text-black">
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
