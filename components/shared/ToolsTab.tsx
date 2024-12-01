import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
    <Tabs defaultValue="longvidTypes" className="w-full mt-5  ">
      <TabsList className="flex min-w-[50vw] w-full flex-wrap justify-evenly items-center h-auto pb-2 md:pb-5">
        <TabsTrigger
          className="rounded-md  mt-3 max-h-min justify-center
             active:text-white active:bg-green-800 
              hover:bg-[#d7b5ed]
            md:text-md md:font-bold h-[2.5rem] w-[10vw]  min-w-max "
          value="longvidTypes"
        >
          Longvid
        </TabsTrigger>
        <TabsTrigger
          className="rounded-md  mt-3 max-h-min justify-center
             active:text-white active:bg-green-800 
              hover:bg-[#d7b5ed]
            md:text-md md:font-bold h-[2.5rem] w-[10vw]  min-w-max "
          value="contentwriterTypes"
        >
          Contentwriter
        </TabsTrigger>
        <TabsTrigger
          className="rounded-md  mt-3 max-h-min justify-center
             active:text-white active:bg-green-800 
              hover:bg-[#d7b5ed]
            md:text-md md:font-bold h-[2.5rem] w-[10vw] min-w-max "
          value="shortvidTypes"
        >
          Shortvid
        </TabsTrigger>
        <TabsTrigger
          className="rounded-md  mt-3 max-h-min justify-center
             active:text-white active:bg-green-800 
              hover:bg-[#d7b5ed]
            md:text-md md:font-bold h-[2.5rem] w-[10vw]  min-w-max "
          value="socialmediaTypes"
        >
          Socialmedia
        </TabsTrigger>
      </TabsList>
      <TabsContent className="mt-15" value="longvidTypes">
        <div className="grid p-0 sm:p-[80px] md:p-0  md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-0 ">
          {longvidTypes.map((item) => (
            <div
              className="relative p-0.5 m-auto md:m-0 w-11/12 md:w-full bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              key={item.id}
            >
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[1.4rem]  ">
                <h5 className="h5 text-[#f476ad] mb-5">{item.title}</h5>
                <p className="body-2 mb-6  text-white">{item.text}</p>
                <Link
                  className="flex  items-center mt-auto absolute bottom-5 w-[80%] justify-center"
                  href={item.link}
                >
                  <Image
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-[2.3rem]  text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </Link>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent className="mt-15" value="contentwriterTypes">
        <div className="grid p-0 sm:p-[80px] md:p-0  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-0 ">
          {contentwriterTypes.map((item) => (
            <div
              className="relative p-0.5 m-auto md:m-0 w-11/12 md:w-full bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[1.4rem]  ">
                <h5 className="h5 text-[#f476ad] mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-white">{item.text}</p>
                <Link
                  className="flex items-center mt-auto absolute bottom-5 justify-center"
                  href={item.link}
                >
                  <Image
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-[2.3rem]  text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </Link>
              </div>

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent className="mt-15" value="shortvidTypes">
        <div className="grid p-0 sm:p-[80px] md:p-0  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-0">
          {shortvidTypes.map((item) => (
            <div
              className="relative p-0.5 m-auto md:m-0 w-11/12 md:w-full bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[1.4rem]  ">
                <h5 className="h5 text-[#f476ad] mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-white">{item.text}</p>
                <Link
                  className="flex items-center mt-auto absolute bottom-5 justify-center"
                  href={item.link}
                >
                  <Image
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-[2.3rem]  text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </Link>
              </div>

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent className="mt-15" value="socialmediaTypes">
        <div className="grid p-0 sm:p-[80px] md:p-0  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-0">
          {socialmediaTypes.map((item) => (
            <div
              className="relative p-0.5 m-auto md:m-0 w-11/12 md:w-full bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[1.4rem]  ">
                <h5 className="h5 text-[#f476ad] mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-white">{item.text}</p>

                <Link
                  className="flex items-center mt-auto absolute bottom-5 justify-center"
                  href={item.link}
                >
                  <Image
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-[2.3rem]  text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </Link>
              </div>

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
