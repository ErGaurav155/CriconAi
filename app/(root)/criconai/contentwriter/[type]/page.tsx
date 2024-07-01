import Header from "@/components/shared/Header";
import { contentwriterTypes } from "@/constants";

import ContentWriterAiForm from "@/components/shared/ContentWriterAiForm";
import Editor from "@/components/shared/Editor";
import { Button } from "@/components/ui/button";
import Aiaudio from "@/components/shared/Aiaudio";
import { Metadata } from "next";
import Link from "next/link";
import { RocketIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Top 10 AI Tools For Content Writers in 2024",
  description:
    "AI-Tools For Clicky-Thumbnail,ToneBased-Article,Blog and Book Generator,Trending-Hashtags,Text Translator,Generate Ai Images For Topic Representation(FREE) ",
};
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
