import Image from "next/image";
import thumbnail from "@/public/assets/download (1).png";
import thumbnail0 from "@/public/assets/thumbnail0.png";
import thumbnail2 from "@/public/assets/download (2).png";
import { PlusIcon } from "lucide-react";

const Thumbnail = () => {
  return (
    <div className="sticky top-0   md:flex-auto h-[100vh] w-full md:w-2/6  p-4">
      <div className=" mt-5 p-5 flex flex-col gap-2  bg-gradient-to-br from-[#0A0A0A] to-[#0A0A0A]/90 rounded-xl border border-[#00F0FF]/30 shadow-lg shadow-[#00F0FF]/10 ">
        <div className="flex flex-col gap-4">
          <h2 className="text-white bg-gradient-to-r from-green-600 to-emerald-700 rounded-lg py-2 px-4 font-bold text-lg text-center">
            Tip For Thumbnail
          </h2>

          <div className="flex flex-col gap-6">
            {/* First Row */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col items-center flex-1">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg border-2 border-[#00F0FF]/50">
                  <Image
                    alt="ai thumbnail generator"
                    src={thumbnail}
                    height={330}
                    width={350}
                    className="object-cover"
                  />
                </div>
                <span className="mt-2 text-sm text-[#00F0FF] font-medium">
                  Ai Generated [1:1]
                </span>
              </div>

              <PlusIcon className="text-[#00F0FF] w-8 h-8 flex-shrink-0" />

              <div className="flex flex-col items-center flex-1">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg border-2 border-[#00F0FF]/50">
                  <Image
                    alt="ai shorts video generator"
                    src={thumbnail0}
                    height={250}
                    width={250}
                    className="object-cover "
                  />
                </div>
                <span className="mt-2 text-sm text-[#00F0FF] font-medium">
                  Text/Photo
                </span>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex items-center justify-center relative">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <div className="bg-[#00F0FF] text-black font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  =
                </div>
              </div>

              <div className="flex flex-col items-center w-full ml-10">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border-2 border-[#00F0FF]/50">
                  <Image
                    alt="ai images generator"
                    src={thumbnail2}
                    height={5000}
                    width={8000}
                    className="object-cover"
                  />
                </div>
                <span className="mt-2 text-sm text-[#00F0FF] font-medium">
                  Perfect Thumbnail [16:9]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
