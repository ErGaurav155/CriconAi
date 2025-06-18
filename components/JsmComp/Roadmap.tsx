import Heading from "@/components/shared/Svgs/HEading";
import { roadmap } from "@/constants";
import Image from "next/image";

const Roadmap = () => (
  <div className="py-16  border-b border-[#333] ">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F]">
          Our Advanced Features
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Cutting-edge AI tools designed to transform your content creation
          workflow
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
        {roadmap.map((item: any) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-2xl border border-[#333] bg-[#0a0a0a]/60 backdrop-blur-sm transition-all hover:border-[#B026FF]/50"
          >
            {/* Gradient shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] opacity-0 group-hover:opacity-10 transition-opacity -z-10"></div>

            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-[#1a1a1a]/50 border border-[#333] rounded-full px-4 py-1">
                  <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
                    {item.date}
                  </span>
                </div>

                <div
                  className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                    item.status === "done"
                      ? "bg-gradient-to-r from-green-500 to-emerald-500"
                      : "bg-gradient-to-r from-[#FF2E9F] to-[#B026FF]"
                  }`}
                >
                  <span className="text-xs font-bold text-black">
                    {item.status === "done" ? "COMPLETED" : "IN PROGRESS"}
                  </span>
                </div>
              </div>

              <div className="relative mb-6 rounded-xl overflow-hidden border border-[#333] group-hover:border-[#00F0FF]/50 transition-colors">
                <Image
                  src={item.imageUrl}
                  width={628}
                  height={426}
                  alt={item.title}
                  className="w-full h-auto"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
              </div>

              <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
                {item.title}
              </h3>

              <p className="text-gray-300">{item.text}</p>

              {/* Feature tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {item.features?.map((feature: string, index: number) => (
                  <span
                    key={index}
                    className="text-xs bg-[#1a1a1a]/50 border border-[#333] rounded-full px-3 py-1 text-gray-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Roadmap;
