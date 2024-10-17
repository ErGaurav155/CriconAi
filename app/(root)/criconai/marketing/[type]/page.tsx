import Header from "@/components/shared/Header";
import { MarketingFormProps } from "@/constants";

import Editor from "@/components/shared/Editor";
import { Button } from "@/components/ui/button";
import MarketingAiForm from "@/components/shared/MarketingAiForm";
import { Metadata } from "next";

type TypeKeys = "all" | "calculator" | "finder" | "email" | "promotion";

const metadataMap: Record<TypeKeys, string[]> = {
  all: ["All-in-one AI tools for promotion"],
  calculator: ["promotion calculator"],
  finder: ["AI Finder"],
  email: ["AI Email Tools"],
  promotion: ["youtube promotion", "paid promotion"],
};

const titleMap: Record<TypeKeys, string> = {
  all: "All-in-One AI Tools",
  calculator: "AI Calculator",
  finder: "AI Finder",
  email: "AI Email Tools",
  promotion: "AI Promotion Tools",
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
}: MarketingSearchParamProps) => {
  const Marketing = MarketingFormProps[type];

  return (
    <div className="flex items-center justify-center md:items-start md:justify-start flex-col md:flex-row wrapper2 gap-5">
      <div className="md:flex-auto relative w-[90vw] md:w-2/3 md:min-h-screen scroll-m-4 overflow-y-scroll flex flex-col gap-5  md:px-7 pt-16">
        <Button className="absolute top-0 right-1 text-black bg-gray hover:bg-gray rounded-md self-start w-full  cursor-default  max-h-min  mt-2 overflow-hidden">
          <p className="flex animate-scroll-left whitespace-nowrap ">
            Recommended - Fill All Inputs For Better Outcomes.
          </p>
        </Button>
        <Header title={Marketing.title} />

        <section className="mt-10">
          <MarketingAiForm type={Marketing.type as MarketingTypeKey} />
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
