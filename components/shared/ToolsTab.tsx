import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Arrow from "./Svgs/arrow";
import { benefits } from "@/constants";
import ClipPath from "./Svgs/Chippath";
import Link from "next/link";

export function TabsDemo() {
  const longvidTypes =
    benefits.find((item) => item.id === 1)?.longvidTypes || [];
  const shortvidTypes =
    benefits.find((item) => item.id === 2)?.shortvidTypes || [];
  const contentwriterTypes =
    benefits.find((item) => item.id === 3)?.contentwriterTypes || [];
  const socialmediaTypes =
    benefits.find((item) => item.id === 4)?.socialmediaTypes || [];

  return (
    <Tabs defaultValue="longvidTypes" className="w-full mt-8">
      <TabsList className="flex min-w-[50vw] w-full flex-wrap justify-evenly items-center h-auto pb-2 bg-transparent">
        <TabsTrigger
          className="rounded-full mt-3 justify-center text-sm md:text-md font-bold h-[2.5rem] px-6 min-w-max 
                     bg-[#1a1a1a]/50 border border-[#333] text-gray-300
                     data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00F0FF] data-[state=active]:to-[#B026FF] data-[state=active]:text-black
                     hover:bg-[#1a1a1a] transition-all"
          value="longvidTypes"
        >
          Long Videos
        </TabsTrigger>
        <TabsTrigger
          className="rounded-full mt-3 justify-center text-sm md:text-md font-bold h-[2.5rem] px-6 min-w-max 
                     bg-[#1a1a1a]/50 border border-[#333] text-gray-300
                     data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00F0FF] data-[state=active]:to-[#B026FF] data-[state=active]:text-black
                     hover:bg-[#1a1a1a] transition-all"
          value="contentwriterTypes"
        >
          Content Writer
        </TabsTrigger>
        <TabsTrigger
          className="rounded-full mt-3 justify-center text-sm md:text-md font-bold h-[2.5rem] px-6 min-w-max 
                     bg-[#1a1a1a]/50 border border-[#333] text-gray-300
                     data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00F0FF] data-[state=active]:to-[#B026FF] data-[state=active]:text-black
                     hover:bg-[#1a1a1a] transition-all"
          value="shortvidTypes"
        >
          Short Videos
        </TabsTrigger>
        <TabsTrigger
          className="rounded-full mt-3 justify-center text-sm md:text-md font-bold h-[2.5rem] px-6 min-w-max 
                     bg-[#1a1a1a]/50 border border-[#333] text-gray-300
                     data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00F0FF] data-[state=active]:to-[#B026FF] data-[state=active]:text-black
                     hover:bg-[#1a1a1a] transition-all"
          value="socialmediaTypes"
        >
          Social Media
        </TabsTrigger>
      </TabsList>

      <TabsContent className="mt-10" value="longvidTypes">
        <div className="grid p-0 md:p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {longvidTypes.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
        </div>
      </TabsContent>

      <TabsContent className="mt-10" value="contentwriterTypes">
        <div className="grid p-0 md:p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {contentwriterTypes.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
        </div>
      </TabsContent>

      <TabsContent className="mt-10" value="shortvidTypes">
        <div className="grid p-0 md:p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {shortvidTypes.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
        </div>
      </TabsContent>

      <TabsContent className="mt-10" value="socialmediaTypes">
        <div className="grid p-0 md:p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {socialmediaTypes.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}

// Reusable Card Component
function CardItem({ item }: { item: any }) {
  return (
    <div className="relative group bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#333] rounded-xl overflow-hidden transition-all hover:border-[#B026FF]/50">
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] opacity-0 group-hover:opacity-10 transition-opacity -z-10"></div>

      <div className="p-5 flex flex-col h-full">
        <h5 className="text-lg font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
          {item.title}
        </h5>

        <p className="text-gray-300 mb-6 flex-grow">{item.text}</p>

        <Link
          className="flex items-center mt-auto pt-4 border-t border-[#333] group-hover:border-[#B026FF]/30 transition-colors"
          href={item.link}
        >
          <div className="bg-[#1a1a1a]/50 border border-[#333] rounded-lg        group-hover:bg-gradient-to-r group-hover:from-[#00F0FF]/10 group-hover:to-[#FF2E9F]/10">
            {item.iconUrl && (
              <Image
                src={item.iconUrl}
                width={32}
                height={32}
                alt={item.title}
                className="filter  text-black"
              />
            )}
          </div>

          <div className="ml-3 flex items-center">
            <span className="text-xs font-bold text-[#00F0FF] uppercase tracking-wider group-hover:text-[#FF2E9F] transition-colors">
              Explore more
            </span>
            <Arrow />
          </div>
        </Link>
      </div>

      {/* Background image with hover effect */}
      {/* {item.imageUrl && (
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity -z-20">
          <Image
            src={item.imageUrl}
            fill
            alt={item.title}
            className="object-cover"
          />
        </div>
      )} */}
    </div>
  );
}
