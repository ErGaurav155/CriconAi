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
  idea: ["writing articles topics", "article writing topics"],
  outline: ["openai blog"],
  article: ["openai blog", "open ai blog"],
  blog: ["a i text generator free"],
  book: ["story writer a i"],
  title: ["book title generator", "headline generator", "book title creator"],
  images: ["ai pictures"],
  summary: [
    "summary generator",
    "summarizer generator",
    "summarize tool",
    "summarize",
  ],
  expander: ["a i text generator"],
  translation: ["a i for translation", "translate gogle"],
  coverimage: ["novel cover generator", "book covers creator"],
  email: ["temp email creator", "temp e-mail creator"],
  tag: ["trending hashtags"],
  all: ["artificial intelligence text generator"],
  slogan: ["tag line generator"],
  prompt: ["a i prompts generator"],
  TexttoAudio: ["a i voice generator"],
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
          <p className="flex animate-scroll-left whitespace-nowrap ">
            Recommended - Fill All Inputs For Better Outcomes.
          </p>
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
