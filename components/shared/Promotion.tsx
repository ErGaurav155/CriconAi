import { FingerPrintIcon } from "@heroicons/react/24/solid";
import { SlidersIcon, ThermometerSunIcon } from "lucide-react";

const Promo = () => {
  return (
    <div className=" font-inter w-full flex flex-col gap-y-8 md:flex-row justify-center items-center gap-x-[32px] px-[14px] md:px-[50px] lg:px-[80px] xl:px-[112px]  ">
      <div className="flex flex-col justify-start items-center gap-y-4">
        <FingerPrintIcon color="#32517D" className="h-10 w-10" />
        <h2 className="text-center font-medium text-[#32517D] text-lg leading-7 tracking-tight">
          Natural, Human voices
        </h2>
        <p className="text-[#353C4499]/60 text-center font-normal max-w-[384px] text-base leading-6 tracking-tight">
          Cricon lets you create voiceovers with different voices over multiple
          languages.
        </p>
      </div>
      <div className="flex flex-col justify-start items-center gap-y-4">
        <ThermometerSunIcon color="#32517D" className="h-10 w-10" />
        <h2 className="text-center font-medium text-[#32517D] text-lg leading-7 tracking-tight">
          Creative text generation
        </h2>
        <p className="text-[#353C4499]/60 text-center font-normal max-w-[384px] text-base leading-6 tracking-tighter">
          Cricon lets you create text content in multiple languages with
          creativity.
        </p>
      </div>
      <div className="flex flex-col justify-start items-center gap-y-4">
        <SlidersIcon color="#32517D" className="h-10 w-10" />
        <h2 className="text-center font-medium text-[#32517D] text-base leading-7 tracking-tight">
          Thumbnail,Posters,Ai-images
        </h2>
        <p className="text-[#353C4499]/60 text-center font-normal max-w-[384px] text-base leading-6 tracking-tighter">
          Cricon lets you create Image generation making easy ai image
          generation with best quality.
        </p>
      </div>
    </div>
  );
};

export default Promo;
