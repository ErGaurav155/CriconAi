import Header from "@/components/shared/Header";
import { socialmediaTypes } from "@/constants";

import SocialMediaAiForm from "@/components/shared/SocialMediaAiForm";
import Editor from "@/components/shared/Editor";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

type TypeKeys =
  | "idea"
  | "images"
  | "bio"
  | "caption"
  | "tag"
  | "description"
  | "comment"
  | "tweet"
  | "avatar"
  | "all"
  | "prompt"
  | "backgroundMusicGen"
  | "poll";

const metadataMap: Record<TypeKeys, string[]> = {
  idea: ["insta post idea"],
  images: ["ai art generator"],
  bio: ["insta bio generator"],
  caption: ["insta caption"],
  tag: ["tag for instagram", "tag generator"],
  description: ["a i description generator"],
  comment: ["a i comment generator"],
  tweet: ["a i  tweet generator"],
  avatar: ["free avatar maker", "avatar maker creator"],
  all: ["All-in-one AI Tools"],
  prompt: ["ai prompt"],
  backgroundMusicGen: ["v log music"],
  poll: ["AI Poll Generator"],
};

const titleMap: Record<TypeKeys, string> = {
  idea: "AI Idea Generator",
  images: "AI Image Generator",
  bio: "AI Bio Generator",
  caption: "AI Caption Generator",
  tag: "AI Tag Generator",
  description: "AI Description Generator",
  comment: "AI Comment Generator",
  tweet: "AI Tweet Generator",
  avatar: "AI Avatar Generator",
  all: "All-in-One AI Tools",
  prompt: "AI Prompt Generator",
  backgroundMusicGen: "Background Music Generator",
  poll: "AI Poll Generator",
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
}: SocialMediaSearchParamProps) => {
  const socialMedia = socialmediaTypes[type];

  return (
    <div className="flex items-center justify-center md:items-start md:justify-start flex-col md:flex-row wrapper2 gap-5 mt-24">
      <div className="md:flex-auto relative w-[100vw] md:w-2/3 md:min-h-screen scroll-m-4 overflow-y-scroll flex flex-col gap-5 px-1 ">
        <Button className="absolute top-10 right-1 text-white bg-gray hover:bg-gray rounded-md self-start w-full  cursor-default  max-h-min  mt-2 overflow-hidden">
          <p className="flex animate-scroll-left whitespace-nowrap ">
            Recommended - Fill All Inputs For Better Outcomes.
          </p>
        </Button>
        <Header title={socialMedia.title} />

        <section className="mt-10">
          <SocialMediaAiForm type={socialMedia.type as SocialMediaTypeKey} />
        </section>
      </div>

      <div className="sticky top-0 md:flex-auto h-[100vh] w-full md:w-2/6  pt-4 ">
        <Button className="text-white bg-green-800 hover:bg-[#1c7429] rounded-md self-start w-[20vw] cursor-default max-h-min ml-4 mt-6">
          Editor
        </Button>
        <Editor />
      </div>
    </div>
  );
};

export default AddTransformationTypePage;
