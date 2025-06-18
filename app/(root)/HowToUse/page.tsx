import { Faq } from "@/components/shared/Faq";
import { Footer } from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { ArrowBigRight, RocketIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HowToUse = async () => {
  const steps = [
    {
      title: "Generate Trending Video Ideas For Your Niche",
      href: "/criconai/longvid/idea",
      buttonText: "Get Ideas",
      imageSrc: "/assets/vidTools/VidIdea.jpg",
    },
    {
      title: "Generate Video Script For Video Idea",
      href: "/criconai/longvid/script",
      buttonText: "Get Script",
      imageSrc: "/assets/vidTools/VidScript.jpg",
    },
    {
      title: "Generate Audio For Provided Script Dialogue",
      href: "/criconai/longvid/TexttoAudio",
      buttonText: "Get Audio",
      imageSrc: "/assets/vidTools/VidAudio.jpg",
    },
    {
      title: "Generate BackGround Music According Video Tone",
      href: "/criconai/longvid/backgroundMusicGen",
      buttonText: "Get BackGround Music",
      imageSrc: "/assets/vidTools/VidMisc.jpg",
    },
    {
      title: "Generate Image Prompt/Ai Images For Explanation In video",
      href: "/criconai/longvid/prompt",
      buttonText: "Get Prompts",
      imageSrc: "/assets/vidTools/VidPrompt.jpg",
    },
    {
      title: "Generate Thumbnail That Best Explain The Video",
      href: "/criconai/longvid/thumbnail",
      buttonText: "Get Thumbnail",
      imageSrc: "/assets/vidTools/VidThumb.jpg",
    },
    {
      title: "Generate Trending Video Title To Attract Audience",
      href: "/criconai/longvid/title",
      buttonText: "Get Title",
      imageSrc: "/assets/vidTools/VidTitle.jpg",
    },
    {
      title: "Generate Video Description For Video",
      href: "/criconai/longvid/description",
      buttonText: "Get Description",
      imageSrc: "/assets/vidTools/VidDesc.jpg",
    },
    {
      title: "Generate Trending Video Tags To Rank Video",
      href: "/criconai/longvid/tags",
      buttonText: "Get Tags",
      imageSrc: "/assets/vidTools/VidTags.jpg",
    },
    {
      title: "Generate Trending Video Keywords To Rank Video",
      href: "/criconai/longvid/keyword",
      buttonText: "Get Keywords",
      imageSrc: "/assets/vidTools/VidKey.jpg",
    },
    {
      title: "Generate Video Disclaimer To Tell Audience",
      href: "/criconai/longvid/disclamer",
      buttonText: "Get Disclaimer",
      imageSrc: "/assets/vidTools/VidDisc.jpg",
    },
    {
      title: "Generate Video Poll Checking What Audience Want",
      href: "/criconai/longvid/poll",
      buttonText: "Get Poll",
      imageSrc: "/assets/vidTools/VidPoll.jpg",
    },
  ];

  return (
    <div className="min-h-screen  text-white">
      {/* Promo Banner */}
      <div className="w-full py-3  border-b border-[#333]">
        <Link
          href="/credits"
          className="flex animate-scroll-left whitespace-nowrap py-2"
        >
          <span className="text-[#00F0FF] font-bold">GET 250 FREE CREDITS</span>
          <span className="mx-4 text-gray-300">|</span>
          <span className="text-white">
            For First 100 Premium Package Purchases
          </span>
          <span className="mx-4 text-gray-300">|</span>
          <RocketIcon className="text-[#FF2E9F] mx-1" />
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 border-b border-[#333] ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="z-10">
              <h1 className="text-3xl font-bold lg:text-4xl xl:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F]">
                How To Use Cricon AI
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Step-By-Step Procedure For Content Creation
              </p>

              <Link
                href="/criconai/longvid/idea"
                className="inline-flex items-center px-6 py-4 font-bold text-black transition-all duration-200 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#B026FF] hover:opacity-90"
                role="button"
              >
                Start for free
                <ArrowBigRight className="ml-2" />
              </Link>
            </div>

            <div className="w-full relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF]/10 to-[#FF2E9F]/10 rounded-2xl blur-2xl -z-10"></div>
              <Image
                className="rounded-2xl border border-[#333]"
                src="/assets/Roadmap.webp"
                height={500}
                width={800}
                alt="How to use Cricon AI"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <div className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative group overflow-hidden rounded-2xl border border-[#333] bg-[#0a0a0a]/60 backdrop-blur-sm p-6 transition-all hover:border-[#B026FF]/50 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex flex-col lg:items-center lg:gap-8`}
              >
                {/* Gradient shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] opacity-0 group-hover:opacity-10 transition-opacity -z-10"></div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-black font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
                      Step {index + 1}
                    </h3>
                  </div>

                  <h4 className="text-xl font-bold mb-3 text-white">
                    {step.title}
                  </h4>

                  <Link
                    href={step.href}
                    className="inline-flex items-center justify-center px-4 py-2 mt-4 font-bold text-black rounded-md bg-gradient-to-r from-[#00F0FF] to-[#B026FF] hover:opacity-90"
                    role="button"
                  >
                    {step.buttonText}
                  </Link>
                </div>

                <div className="mt-6 lg:mt-0 flex-1">
                  <div className="relative rounded-xl overflow-hidden border border-[#333] group-hover:border-[#00F0FF]/50 transition-colors">
                    <Image
                      className="w-full h-full object-cover"
                      src={step.imageSrc}
                      height={300}
                      width={400}
                      alt={`Step ${index + 1} visual`}
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 border-t border-[#333]">
        <Faq />
      </div>

      {/* Footer */}
      <div className="border-t border-[#333]">
        <Footer />
      </div>
    </div>
  );
};

export default HowToUse;
