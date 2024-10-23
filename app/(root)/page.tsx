import Roadmap from "@/components/JsmComp/Roadmap";
import Services from "@/components/JsmComp/Services";
import { Congratulation } from "@/components/shared/Congratulation";
import DiscountBanner from "@/components/shared/DiscountBanner";
import { Faq } from "@/components/shared/Faq";
import { Footer } from "@/components/shared/Footer";
import Promo from "@/components/shared/Promotion";
import { TabsDemo } from "@/components/shared/ToolsTab";
import {
  CarouselAiimages,
  CarouselChannel,
  CarouselPoster,
  CarouselThumbnail,
  CarouselYoutuber,
} from "@/components/shared/carousel";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  return (
    <div className="wrapper pb-8 lg:pb-10">
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
                  className="inline-flex items-center px-6 py-4 mt-2 font-semibold text-white transition-all duration-200 bg-[#73257a] rounded-full lg:mt-3 hover:bg-[#bb76c2]  "
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

        <section className="bg-[#7e7c77] bg-opacity-30 p-4 rounded-lg">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-8 md:gap-12 md:grid-cols-2">
              <div>
                <p className="mt-4 text-xl font-bold text-black lg:mt-8 sm:text-2xl md:text-3xl xl:text-4xl">
                  Top Youtubers Use
                </p>
                <h1 className="mt-4 text-base text-black lg:mt-8 sm:text-2xl ">
                  Criconai For HD Thumbnail,Script And Research,Keywords And
                  Tags
                </h1>

                <Link
                  href="/credits"
                  className="inline-flex items-center p-3  mt-2 font-normal md:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-full lg:mt-3 hover:bg-[#4c8eeb]  "
                  role="button"
                >
                  Grab Opportunity Now
                </Link>
              </div>

              <CarouselChannel />
            </div>
          </div>
        </section>
        <section className="bg-[#7e7c77] bg-opacity-30 p-4 m-3 md:m-0 rounded-lg">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-8 md:gap-12 md:grid-cols-2">
              <div>
                <p className="mt-4 text-xl font-bold text-black lg:mt-8 sm:text-2xl md:text-3xl xl:text-5xl">
                  Top 5 benefits By Criconai
                </p>
                <p className="mt-4 text-base text-black lg:mt-8 sm:text-2xl ">
                  If You serious for youtube growth Use Our Services for Atleast
                  5-10 videos
                </p>

                <Link
                  href="/credits"
                  className="inline-flex items-center p-3 mt-2 font-normal md:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-full lg:mt-3 hover:bg-[#4c8eeb]  "
                  role="button"
                >
                  Try Now
                </Link>
              </div>

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
        </section>
        <section className="bg-[#7e7c77] bg-opacity-30 p-4 rounded-lg">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-8 md:gap-12 md:grid-cols-2">
              <CarouselYoutuber />
              <div>
                <h1 className="mt-4 text-xl font-bold text-black lg:mt-8 sm:text-2xl md:text-3xl xl:text-5xl">
                  Top Youtubers Using Ai Thumbails
                </h1>
                <p className="mt-4 text-base text-black lg:mt-8 sm:text-2xl ">
                  Start Making Ai Thumbnails Now
                </p>

                <Link
                  href="/criconai/longvid/thumbnail"
                  className="inline-flex items-center p-3  mt-2 font-normal md:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-full lg:mt-3 hover:bg-[#4c8eeb]  "
                  role="button"
                >
                  Start Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Services />

        <div className="flex flex-col-reverse gap-5">
          <section className="bg-[#cfe4e2] bg-opacity-30  rounded-lg">
            <div className=" mx-auto max-w-7xl ">
              <div className="grid items-center grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 p-8">
                <div className="p-3 ">
                  <p className=" text-base text-black lg:mt-8 sm:text-2xl text-center ">
                    Cricon Ai Generated Posters
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/credits"
                      className="inline-flex items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                      role="button"
                    >
                      Make Posters
                    </Link>
                  </div>
                </div>

                <div className="w-full rounded-lg flex items-center justify-center">
                  <CarouselPoster />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-[#cfe4e2] bg-opacity-30 p-4 rounded-lg">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div className="p-3 lg:hidden ">
                  <p className="text-base text-black lg:mt-8 sm:text-2xl text-center ">
                    Cricon Ai Generated Images
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/credits"
                      className="inline-flex items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                      role="button"
                    >
                      Make AiImages
                    </Link>
                  </div>
                </div>
                <div className="w-full rounded-lg flex items-center justify-center">
                  <CarouselAiimages />{" "}
                </div>
                <div className="p-3 hidden lg:block ">
                  <p className="text-base text-black lg:mt-8 sm:text-2xl text-center ">
                    Cricon Ai Generated Images
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/credits"
                      className="inline-flex items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                      role="button"
                    >
                      Make AiImages
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-[#cfe4e2] bg-opacity-30 p-4 rounded-lg">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div className="p-3 ">
                  <p className="text-base text-black lg:mt-8 sm:text-2xl text-center ">
                    Cricon Ai Generated Thumbnails
                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/credits"
                      className="inline-flex items-center justify-center  p-2 mt-2 font-small lg:font-semibold text-white transition-all duration-200 bg-[#3a3ccf] rounded-xl lg:mt-3 hover:bg-[#4c8eeb]  "
                      role="button"
                    >
                      Make Thumbnail
                    </Link>
                  </div>
                </div>

                <div className="w-full rounded-lg flex items-center justify-center">
                  <CarouselThumbnail />
                </div>
              </div>
            </div>
          </section>
        </div>
        <TabsDemo />
        <Promo />
        <Roadmap />
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
