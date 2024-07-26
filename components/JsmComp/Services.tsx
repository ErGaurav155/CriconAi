import Heading from "@/components/shared/Svgs/HEading";

import service3 from "@/public/assets/services/service-3.png";
import service2 from "@/public/assets/services/service-2.png";

import { brainwaveServicesIcons } from "@/constants";
import {
  PhotoChatMessage,
  VideoChatMessage,
} from "@/components/shared/Svgs/Services";

import Image from "next/image";

const Services = () => {
  return (
    <div className="container">
      <Heading
        title="Cricon AI made for creators."
        text="Cricon unlocks the potential of AI-power for content creation"
      />

      <div className="relative">
        <div className="relative z-1   grid gap-5 lg:grid-cols-2">
          <div className="relative max-h-[36rem]   min-h-[29rem] h-[30vh] lg:h-[80vh] border border-n-1/10 rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src={service2}
                className="h-full w-full object-cover"
                width={630}
                height={750}
                alt="ai youtube thumbnail"
                loading="lazy"
              />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
              <h4 className="h4 text-[#f7a936] drop-shadow-xl mb-4">
                Content Creation
              </h4>
              <p className="body-2 mb-[3rem] text-white">
                Automatically enhance your Youtube Content using our AI
                app&apos;s feature. Try it now!
              </p>
            </div>

            <PhotoChatMessage />
          </div>

          <div className="p-4 bg-n-7 rounded-3xl max-h-[36rem] overflow-hidden min-h-[29rem] h-[30vh] lg:h-[80vh]">
            <div className=" px-4 xl:px-8">
              <h4 className="h4 text-[#95eb49] ">Image generation</h4>
              <p className="body-2 mb-[2rem] text-white">
                The world’s most powerful AI images and thumbnail generation
                engine. What will you create?
              </p>

              <ul className="flex items-center justify-between">
                {brainwaveServicesIcons.map((item: string, index: number) => (
                  <li
                    key={index}
                    className={`rounded-2xl flex items-center justify-center ${
                      index === 2
                        ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                        : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                    }`}
                  >
                    <div
                      className={
                        index === 2
                          ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                          : ""
                      }
                    >
                      <Image src={item} width={24} height={24} alt={item} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-[1rem]  h-[20.8rem] bg-n-8 rounded-xl overflow-hidden md:h-[20.8rem]">
              <Image
                src={service3}
                className="w-full h-full object-cover"
                width={520}
                height={400}
                alt="ai script generator"
              />

              <VideoChatMessage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
