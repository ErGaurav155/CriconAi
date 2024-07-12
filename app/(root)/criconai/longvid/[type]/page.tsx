import Header from "@/components/shared/Header";
import { longvidTypes } from "@/constants";

import LongVidAiForm from "@/components/shared/LongVidAiForm";
import Editor from "@/components/shared/Editor";
import { Button } from "@/components/ui/button";
import LongVidAudio from "@/components/shared/LongvidAudio";
import Aiaudio from "@/components/shared/Aiaudio";
import { Metadata } from "next";
import Thumbnail from "@/components/shared/Thumbnail";

type TypeKeys =
  | "idea"
  | "title"
  | "description"
  | "tags"
  | "keyword"
  | "script"
  | "thumbnail"
  | "aiimages"
  | "translate"
  | "disclamer"
  | "email"
  | "all"
  | "TexttoAudio"
  | "prompt"
  | "backgroundMusicGen"
  | "audiotoAudio"
  | "poll";

const metadataMap: Record<TypeKeys, string[]> = {
  idea: [
    "youtube content ideas",
    "content generator ai ",
    "content idea generator",
    "content generator",
    "content creation idea",
    "content idea for youtube",
  ],
  title: [
    "youtube title",
    "youtube video title",
    "title for youtube video",
    "title generator",
    "video title generator",
    "youtube title generator",
    "youtube video title generator",
    "ai title generator for youtube",
  ],
  description: [
    "ai video description generator",
    "video description generator",
    "ai description generator",
    "description generator",
    "youtube video description",
    "youtube description generator",
    "youtube video description generator",
  ],
  tags: [
    "youtube video tags",
    "youtube tags",
    "tags generator",
    "inflect hashtag generator",
    "yt hashtag generator",
    "youtube hashtag generator",
    "ai tag generator",
    "hashtag for youtube",
    "hashtag generator for youtube",
  ],
  keyword: [
    "ai keyword generator",
    "keyword generator for youtube",
    "keyword for youtube",
    "keyword generator free",
  ],
  script: [
    "tiktok script generator",
    "capcut",
    "video script",
    "video script generator",
    "youtube video script generator",
    "ai youtube script generator",
    "script ai",
    "youtube video script",
  ],
  thumbnail: [
    "bing ai ",
    "bing ai image generator",
    "thumbnail ai generator",
    "youtube thumbnail ai",
    "thumbnail ai",
    "ai thumbnail generator",
    "thumbnail for youtube",
    "ai youtube thumbnail generator",
    "youtube thumbnail",
    "ai youtube thumbnail",
    "thumbnail maker",
    "thumbnail youtube",
    "thumbnail downloader",
  ],
  aiimages: [
    "ai generator image",
    "ai generator",
    "image generator",
    "image to image ai",
    "ai create image",
  ],
  translate: [
    "ai for translation",
    "language translator ai",
    "language translator",
    "ai tranlator",
    "chatgpt language translation",
  ],
  disclamer: ["youtube disclaimer", "youtube disclaimer generator"],
  email: [
    "email generator",
    "ai for email",
    "free email",
    "ai generator email",
    "email writer",
    "email ai writer",
  ],
  all: ["All-in-one AI tools for media"],
  TexttoAudio: [
    "free text to audio",
    "text to speech ai",
    "free text to voice",
  ],
  prompt: [
    "prompt ai generator",
    "ai prompt image",
    "ai image prompt",
    "prompt generator",
    "image prompt generator",
  ],
  backgroundMusicGen: ["AI-based background music generator"],
  audiotoAudio: [
    "speech to speech translation",
    "audio language translator",
    "audio translator",
    "language translator",
  ],
  poll: ["Create AI-based polls"],
};

const titleMap: Record<TypeKeys, string> = {
  title: "AI Video Title Generator ",
  idea: "AI Video Idea Generator",
  description: "AI Description Generator",
  tags: "AI Tags Generator",
  keyword: "AI Keyword Generator",
  script: "AI Script Generator",
  thumbnail: "AI Thumbnail Generator",
  aiimages: "AI Image Generator",
  translate: "AI Audio Translator",
  disclamer: "AI Content Disclaimer",
  email: "AI Email Tools",
  all: "All-in-One AI Tools",
  TexttoAudio: "Text to Audio Converter",
  prompt: "AI Prompt Generator",
  backgroundMusicGen: "Background Music Generator",
  audiotoAudio: "Audio to Audio Converter",
  poll: "AI Poll Creator",
};

export async function generateMetadata({
  params: { type },
}: LongSearchParamProps): Promise<Metadata> {
  const typeKey = type as TypeKeys;

  return {
    title: titleMap[typeKey] || "AI Tools",
    description: titleMap[typeKey] || "Explore various AI tools",
    keywords: metadataMap[typeKey]
      ? `${metadataMap[typeKey]}, AI, tools`
      : `${titleMap[typeKey]}, AI, tools`,
  };
}

const AddTransformationTypePage = async ({
  params: { type },
}: LongSearchParamProps) => {
  const longVid = longvidTypes[type];

  return (
    <div className="flex items-center justify-center md:items-start md:justify-start flex-col md:flex-row wrapper2 gap-5">
      <div className="relative md:flex-auto w-[90vw] md:w-2/3 md:min-h-screen scroll-m-4 overflow-y-scroll  flex flex-col gap-5  md:px-7 pt-16">
        <Button className="absolute top-0 right-1 text-black bg-gray hover:bg-gray rounded-md self-start w-full  cursor-default  max-h-min  mt-2 overflow-hidden">
          <h1 className="flex animate-scroll-left whitespace-nowrap ">
            Recommended - Fill All Inputs For Better Outcomes.
          </h1>
        </Button>
        <Header title={longVid.title} />

        <section className="mt-10">
          {type === "audiotoAudio" && (
            <LongVidAudio type={longVid.type as LongVidTypeKey} />
          )}
          {type !== "audiotoAudio" && (
            <LongVidAiForm type={longVid.type as LongVidTypeKey} />
          )}
        </section>
      </div>
      {(type === "audiotoAudio" || type === "TexttoAudio") && <Aiaudio />}
      {type === "thumbnail" && <Thumbnail />}

      {type !== "audiotoAudio" &&
        type !== "TexttoAudio" &&
        type !== "thumbnail" && (
          <div className="sticky top-0  md:flex-auto h-[100vh] w-full md:w-2/6  pt-4 ">
            <Button className="text-white bg-green-800 hover:bg-[#1c7429] rounded-md self-start w-[20vw] cursor-default max-h-min ml-4 mt-6">
              Editor
            </Button>
            <Editor />
          </div>
        )}
    </div>
  );
};

export default AddTransformationTypePage;
