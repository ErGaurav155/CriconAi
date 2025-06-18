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
  idea: ["trending youtube topics", "you tube video idea"],
  title: ["you tube title generator", "youtube title generator"],
  description: ["youtube description generator"],
  tags: ["youtube tag generator", "youtube tag creator"],
  keyword: ["youtube keywords"],
  script: ["a i script generator"],
  thumbnail: ["ai thumbnail generator"],
  aiimages: ["a i image generator"],
  translate: ["artificial intelligence translator"],
  disclamer: [
    "youtube disclaimer",
    "copyright youtube disclaimer",
    "copyright disclaimer for youtube",
  ],
  email: ["e mail writer"],
  all: ["artificial intelligence text generator"],
  TexttoAudio: ["free tts"],
  prompt: ["a i prompt"],
  backgroundMusicGen: ["background music for video"],
  audiotoAudio: ["audio translator"],
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
    <div className="flex items-center justify-center md:items-start md:justify-start flex-col md:flex-row wrapper2 gap-5 mt-24">
      <div className="relative md:flex-auto w-[90vw] md:w-2/3 md:min-h-screen scroll-m-4 overflow-y-scroll  flex flex-col gap-5  md:px-7 ">
        <Button className="absolute top-10 right-1 text-white bg-gray hover:bg-gray rounded-md self-start w-full  cursor-default  max-h-min  mt-2 overflow-hidden">
          <p className="flex animate-scroll-left whitespace-nowrap ">
            Recommended - Fill All Inputs For Better Outcomes.
          </p>
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
