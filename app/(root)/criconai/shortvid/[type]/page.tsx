import Header from "@/components/shared/Header";
import { shortvidTypes } from "@/constants";

import ShortVidAiForm from "@/components/shared/ShortVidAiForm";
import Editor from "@/components/shared/Editor";
import { Button } from "@/components/ui/button";
import ShortVidAudio from "@/components/shared/ShortvidAudio";
import Aiaudio from "@/components/shared/Aiaudio";
import { Metadata } from "next";
import Thumbnail from "@/components/shared/Thumbnail";

type TypeKeys =
  | "idea"
  | "title"
  | "description"
  | "tags"
  | "script"
  | "thumbnail"
  | "aiimages"
  | "translate"
  | "slogan"
  | "facts"
  | "quote"
  | "riddle"
  | "all"
  | "TexttoAudio"
  | "backgroundMusicGen"
  | "prompt"
  | "audiotoAudio"
  | "poll";

const metadataMap: Record<TypeKeys, string[]> = {
  idea: [
    "Instagram Reel Maker",
    "reel ideas for instagram",
    "reel maker ai",
    "reel maker free",
    "ai video",
  ],
  title: [
    "instagram title",
    "youtube video title",
    "title for youtube video",
    "title generator",
    "video title generator",
    "youtube title generator",
    "youtube video title generator",
    "ai title generator for youtube",
  ],
  description: [
    "youtube video description",
    "youtube description generator",
    "youtube video description generator",
  ],
  tags: [
    "youtube hashtag generator",
    "ai tag generator",
    "hashtag for youtube",
    "hashtag generator for youtube",
  ],
  script: [
    "youtube video script generator",
    "ai youtube script generator",
    "script ai",
    "youtube video script",
  ],
  thumbnail: [
    "ai youtube thumbnail generator",
    "youtube thumbnail",
    "ai youtube thumbnail",
    "thumbnail maker",
  ],
  aiimages: ["image generator", "image to image ai", "ai create image"],
  translate: ["language translator", "ai tranlator"],
  slogan: ["AI Slogan Generator"],
  facts: ["AI Facts Generator"],
  quote: ["AI Quote Generator"],
  riddle: ["AI Riddle Generator"],
  all: ["All-in-one AI tools for media"],
  TexttoAudio: ["free text to audio", "text to speech ai"],
  backgroundMusicGen: ["AI-based background music generator"],
  prompt: ["prompt ai generator", "ai prompt image", "ai image prompt"],
  audiotoAudio: ["AI-powered audio to audio converter"],
  poll: ["Create AI-based polls"],
};

const titleMap: Record<TypeKeys, string> = {
  idea: "AI Video Idea Generator",
  title: "AI Video Title Generator",
  description: "AI Description Generator",
  tags: "AI Tags Generator",
  script: "AI Script Generator",
  thumbnail: "AI Thumbnail Generator",
  aiimages: "AI Image Generator",
  translate: "AI Audio Translator",
  slogan: "AI Slogan Generator",
  facts: "AI Facts Generator",
  quote: "AI Quote Generator",
  riddle: "AI Riddle Generator",
  all: "All-in-One AI Tools",
  TexttoAudio: "Text to Audio Converter",
  backgroundMusicGen: "Background Music Generator",
  prompt: "AI Prompt Generator",
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
}: ShortSearchParamProps) => {
  const shortVid = shortvidTypes[type];

  return (
    <div className="flex items-center justify-center md:items-start md:justify-start flex-col md:flex-row wrapper2 gap-5">
      <div className="md:flex-auto relative w-[90vw] md:w-2/3 md:min-h-screen scroll-m-4 overflow-y-scroll flex flex-col gap-5  md:px-7 pt-16">
        <Button className="absolute top-0 right-1 text-black bg-gray hover:bg-gray rounded-md self-start w-full  cursor-default  max-h-min  mt-2 overflow-hidden">
          <h1 className="flex animate-scroll-left whitespace-nowrap ">
            Recommended - Fill All Inputs For Better Outcomes.
          </h1>
        </Button>
        <Header title={shortVid.title} />

        <section className="mt-10">
          {type === "audiotoAudio" && (
            <ShortVidAudio type={shortVid.type as ShortVidTypeKey} />
          )}
          {type !== "audiotoAudio" && (
            <ShortVidAiForm type={shortVid.type as ShortVidTypeKey} />
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
