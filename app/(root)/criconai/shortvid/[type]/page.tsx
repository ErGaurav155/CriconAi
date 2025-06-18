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
  idea: ["a i story generator", "youtube video idea"],
  title: ["title generator"],
  description: ["meta description generator"],
  tags: ["tag creator for youtube", "tags for youtube generator"],
  script: ["script generator"],
  thumbnail: ["a i thumbnail maker"],
  aiimages: ["a i image generator"],
  translate: ["a i translation services"],
  slogan: ["tagline maker online"],
  facts: ["random facts generator", "funny fact generator"],
  quote: ["quote creator online"],
  riddle: ["riddle generator", "riddle a i"],
  all: ["artificial intelligence text generator"],
  TexttoAudio: ["text into voice"],
  backgroundMusicGen: ["free background music", "v log music"],
  prompt: ["a i prompt"],
  audiotoAudio: ["voice translate"],
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
    <div className="flex items-center justify-center md:items-start md:justify-start flex-col md:flex-row wrapper2 gap-5 mt-24">
      <div className="md:flex-auto relative w-[90vw] md:w-2/3 md:min-h-screen scroll-m-4 overflow-y-scroll flex flex-col gap-5  md:px-7 ">
        <Button className="absolute top-10 right-1 text-white bg-gray hover:bg-gray rounded-md self-start w-full  cursor-default  max-h-min  mt-2 overflow-hidden">
          <p className="flex animate-scroll-left whitespace-nowrap ">
            Recommended - Fill All Inputs For Better Outcomes.
          </p>
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
