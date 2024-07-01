import Image from "next/image";
import thumbnail from "@/public/assets/download (1).png";
import thumbnail0 from "@/public/assets/thumbnail0.png";
import thumbnail2 from "@/public/assets/download (2).png";

import { Equal, PlusIcon } from "lucide-react";
const Thumbnail = () => {
  return (
    <div className="sticky top-0   md:flex-auto h-[100vh] w-full md:w-2/6  pt-4">
      <div className=" mt-5 p-5 flex flex-col gap-2">
        <h2 className="text-white bg-green-800 rounded-md self-start cursor-default max-h-min ml-4 font-semibold  text-lg mb-2 p-2">
          Tip For Thumbnail
        </h2>
        <div className="flex mt-3 gap-4 items-center justify-between">
          <div className=" flex flex-col gap-1 text-n-7 flex-auto  ">
            <Image
              alt="Ai Thumbnail Generator"
              className=" "
              src={thumbnail}
              width={330}
              height={350}
              priority
            />
            Ai Generated [1:1]
          </div>
          <PlusIcon size={50} />
          <div className=" flex flex-auto flex-col gap-1 text-n-7 ">
            <Image
              alt="Ai Shorts Video Generator"
              className=" "
              src={thumbnail0}
              width={250}
              height={250}
              priority
            />
            Text/Photo
          </div>
        </div>
        <div className="flex mt-3 gap-4 items-center justify-between">
          <Equal size={25} />
          <div className=" flex flex-1 flex-col gap-1 text-n-7">
            <Image
              alt="Ai Images Generator"
              className=" "
              src={thumbnail2}
              width={8000}
              height={5000}
              priority
            />
            Perfect Thumbnail [16:9]
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
