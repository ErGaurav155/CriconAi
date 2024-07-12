import Header from "@/components/shared/Header";
import { contentwriterTypes } from "@/constants";

import ContentWriterAiForm from "@/components/shared/ContentWriterAiForm";
import Editor from "@/components/shared/Editor";
import { Button } from "@/components/ui/button";
import Aiaudio from "@/components/shared/Aiaudio";
import { Metadata } from "next";

type TypeKeys =
  | "idea"
  | "outline"
  | "article"
  | "blog"
  | "book"
  | "title"
  | "images"
  | "summary"
  | "expander"
  | "translation"
  | "coverimage"
  | "email"
  | "tag"
  | "all"
  | "prompt"
  | "TexttoAudio"
  | "slogan";

const metadataMap: Record<TypeKeys, string[]> = {
  idea: ["blog ideas", "blog ideas generator", "ai blog"],
  outline: ["gemini ai", "bing ai "],
  article: ["ai article"],
  blog: [
    "blog generator ai",
    "ai",
    "ai blog",
    "ai generator",
    "blog generator free",
  ],
  book: [
    "free ai",
    "free ai writing",
    "free ai book writing",
    "ai for writing",
    "ai writing generator",
    "ai book generator",
  ],
  title: ["Blog title generator", "title generator", "blog name"],
  images: [
    "ai generated images",
    "ai generated",
    "ai images",
    "free ai images",
    "generate ai images",
  ],
  summary: [
    "ai for summary",
    "youtube summary",
    "youtube ai summary",
    "summary generator",
    "pdf summary",
  ],
  expander: ["text expander free", "ai image expander", "ai text generator"],
  translation: [
    "ai for translation",
    "language translator ai",
    "language translator",
    "ai tranlator",
    "chatgpt language translation",
  ],
  coverimage: [
    "ai generated images",
    "ai generated",
    "ai images",
    "free ai images",
    "generate ai images",
  ],
  email: [
    "email generator",
    "ai for email",
    "free email",
    "ai generator email",
    "email writer",
    "email ai writer",
  ],
  tag: [
    "ai hashtag generator",
    "ai for hashtag",
    "hashtag generator",
    "hashtag instagram",
    "hashtag youtube",
    "youtube hashtag",
    "hashtag generator instagram",
  ],
  all: ["All-in-One AI Tools"],
  slogan: ["slogan generator"],
  prompt: [
    "prompt ai generator",
    "ai prompt image",
    "ai image prompt",
    "prompt generator",
    "image prompt generator",
  ],
  TexttoAudio: [
    "free text to audio",
    "text to speech ai",
    "free text to voice",
  ],
};

const titleMap: Record<TypeKeys, string> = {
  idea: "Article,Blog and Book Ideas Generator",
  outline: "AI Outline Generator",
  article: "AI Article Generator",
  blog: "AI Blog Generator",
  book: "AI Book Generator",
  title: "AI Title Generator",
  images: "AI Image Generator",
  summary: "AI Summary Generator",
  expander: "AI Expander Tool",
  translation: "AI Translation Tool",
  coverimage: "AI Cover Image Generator",
  email: "AI Email Generator",
  tag: "AI Tag Generator",
  all: "All-in-One AI Tools",
  prompt: "AI Prompt Generator",
  TexttoAudio: "Text to Audio Converter",
  slogan: "Ai Slogan Generator",
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
}: ContentWriterSearchParamProps) => {
  const contentWriter = contentwriterTypes[type];

  return (
    <div className="flex items-center justify-center md:items-start md:justify-start flex-col md:flex-row wrapper2 gap-5">
      <div className="relative md:flex-auto w-[90vw] md:w-2/3 md:min-h-screen scroll-m-4 overflow-y-scroll flex flex-col gap-5  md:px-7 pt-16">
        <Button className="absolute top-0 right-1 text-black bg-gray hover:bg-gray rounded-md self-start w-full  cursor-default  max-h-min  mt-2 overflow-hidden">
          <h1 className="flex animate-scroll-left whitespace-nowrap ">
            Recommended - Fill All Inputs For Better Outcomes.
          </h1>
        </Button>
        <Header title={contentWriter.title} />

        <section className="mt-10">
          <ContentWriterAiForm
            type={contentWriter.type as ContentWriterTypeKey}
          />
        </section>
      </div>

      {type !== "TexttoAudio" && (
        <div className="sticky top-0  md:flex-auto h-[100vh] w-full md:w-2/6  pt-4 ">
          <Button className="text-white bg-green-800 hover:bg-[#1c7429] rounded-md self-start w-[20vw] cursor-default max-h-min ml-4 mt-6">
            Editor
          </Button>
          <Editor />
        </div>
      )}
      {type === "TexttoAudio" && <Aiaudio />}
    </div>
  );
};

export default AddTransformationTypePage;
