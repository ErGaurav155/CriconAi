import service3 from "@/public/assets/services/service-3.png";
import service2 from "@/public/assets/services/service-2.png";
import { brainwaveServicesIcons } from "@/constants";
import Image from "next/image";

const Services = () => {
  return (
    <div className="pb-16    border-b border-[#333] ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-between">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F]">
              Cricon AI made for creators.
            </h2>
          </div>
          <div className="flex items-center justify-center gap-2">
            <p className="text-gray-400 max-w-2xl mx-auto self-end">
              Unlock the full potential of AI-powered content creation{" "}
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Content Creation Card */}
          <div className="relative group overflow-hidden rounded-2xl border border-[#333]  backdrop-blur-sm transition-all hover:border-[#00F0FF]/50">
            {/* Gradient shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] opacity-0 group-hover:opacity-10 transition-opacity -z-10"></div>

            {/* Background image */}
            <div className="absolute inset-0 -z-20">
              <Image
                src={service2}
                className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                fill
                alt="AI content creation"
                loading="lazy"
              />
            </div>

            <div className="relative z-10 flex flex-col justify-end min-h-[400px] p-6 md:p-8">
              <div className="mb-4 inline-block bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-black px-4 py-1 rounded-full text-sm font-bold max-w-max">
                Content Creation
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white">
                Automatically enhance your YouTube content
              </h3>

              <p className="text-gray-300 mb-6 max-w-md">
                Transform your videos with our AI-powered tools that optimize
                every aspect of your content creation process.
              </p>

              <div className="flex flex-wrap gap-2">
                {brainwaveServicesIcons.slice(0, 3).map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#1a1a1a]/50 border border-[#333] rounded-lg p-2"
                  >
                    <Image
                      src={item}
                      width={24}
                      height={24}
                      alt="Service icon"
                      className="filter brightness-0 invert"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Generation Card */}
          <div className="relative group overflow-hidden rounded-2xl border border-[#333] bg-[#0a0a0a]/60 backdrop-blur-sm transition-all hover:border-[#FF2E9F]/50">
            {/* Gradient shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] opacity-0 group-hover:opacity-10 transition-opacity -z-10"></div>

            <div className="p-6 md:p-8">
              <div className="mb-4 inline-block bg-gradient-to-r from-[#FF2E9F] to-[#B026FF] text-black px-4 py-1 rounded-full text-sm font-bold">
                Image Generation
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white">
                Create stunning visuals with AI
              </h3>

              <p className="text-gray-300 mb-6 max-w-md">
                Generate thumbnails, posters, and AI images that capture
                attention and boost engagement.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {brainwaveServicesIcons.slice(3).map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#1a1a1a]/50 border border-[#333] rounded-lg p-2"
                  >
                    <Image
                      src={item}
                      width={24}
                      height={24}
                      alt="Service icon"
                      className="filter brightness-0 invert"
                    />
                  </div>
                ))}
              </div>

              <div className="relative h-64 md:h-72 rounded-xl overflow-hidden border border-[#333] group-hover:border-[#00F0FF]/50 transition-colors">
                <Image
                  src={service3}
                  className="w-full h-full object-cover"
                  fill
                  alt="AI image generation"
                />

                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0a0a0a] to-transparent">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
                      +78% CTR
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-300">
                        4.8/5 rating
                      </span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
