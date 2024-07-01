import Header from "@/components/shared/Header";
import { shortvidTypes } from "@/constants";

import ShortVidAiForm from "@/components/shared/ShortVidAiForm";
import Editor from "@/components/shared/Editor";
import { Button } from "@/components/ui/button";
import ShortVidAudio from "@/components/shared/ShortvidAudio";
import Aiaudio from "@/components/shared/Aiaudio";
import { Metadata } from "next";
import Thumbnail from "@/components/shared/Thumbnail";

export const metadata: Metadata = {
  title: "Top 15 AI Tools For Reels/Shorts Video Creators in 2024",
  description:
    "AI-Tools Like 'Reels/Shorts Video Idea','Clicky-Thumbnail','ToneBased-Video Script','Trending-Hashtags','Audio Translator','Generate Ai Images For Topic Explaination',etc .For REELS/SHORTS Creators(FREE)",
};
const AddTransformationTypePage = async ({
  params: { type },
}: ShortSearchParamProps) => {
  const shortVid = shortvidTypes[type];

  return (
    <div className="flex items-center justify-center md:items-start md:justify-start flex-col md:flex-row wrapper2 gap-5">
      <div className="md:flex-auto relative w-[90vw] md:w-2/3 md:min-h-screen scroll-m-4 overflow-y-scroll flex flex-col gap-5  md:px-7 pt-16">
        <Button className="absolute top-0 right-1 text-black bg-gray hover:bg-gray rounded-md self-start w-full  cursor-default  max-h-min  mt-2 overflow-hidden">
          <h1 className="flex animate-scroll-left whitespace-nowrap ">
            Recommended - Fill All Inputs For Better Outcomes
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
