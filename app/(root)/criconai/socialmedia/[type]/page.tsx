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
  idea: ["instagram post idea", "instagram post", "post ideas"],
  images: [
    "instagram post generator",
    "ai post generator",
    "ai instagram post",
    "instagram post ai",
  ],
  bio: [
    "bio for instagram",
    "bio instagram",
    "bio generator instagram",
    "instagram bio generator",
  ],
  caption: [
    "ai caption generator",
    "ai caption",
    "instagram caption",
    "caption generator free",
  ],
  tag: [
    "seo studio tools tag generator",
    "tag for instagram",
    "tag generator for instagram",
    "youtube tag generator",
    "hashtag generator",
  ],
  description: [
    "ai video description generator",
    "video description generator",
    "ai description generator",
  ],
  comment: ["AI Comment Generator"],
  tweet: ["AI Tweet Generator"],
  avatar: ["AI Avatar Generator"],
  all: ["All-in-one AI Tools"],
  prompt: ["prompt ai generator", "ai prompt image", "ai image prompt"],
  backgroundMusicGen: ["Background Music Generator"],
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
    <div className="flex items-center justify-center md:items-start md:justify-start flex-col md:flex-row wrapper2 gap-5">
      <div className="md:flex-auto relative w-[90vw] md:w-2/3 md:min-h-screen scroll-m-4 overflow-y-scroll flex flex-col gap-5  md:px-7 pt-16">
        <Button className="absolute top-0 right-1 text-black bg-gray hover:bg-gray rounded-md self-start w-full  cursor-default  max-h-min  mt-2 overflow-hidden">
          <h1 className="flex animate-scroll-left whitespace-nowrap ">
            Recommended - Fill All Inputs For Better Outcomes.
          </h1>
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
