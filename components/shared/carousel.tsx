"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "@/public/assets/Thumbnail/Thumbnail1.jpg";
import img2 from "@/public/assets/Thumbnail/Thumbnail2.jpg";
import img3 from "@/public/assets/Thumbnail/Thumbnail3.jpg";
import img4 from "@/public/assets/Thumbnail/Thumbnail4.png";
import img5 from "@/public/assets/Thumbnail/Thumbnail5.jpg";
import img6 from "@/public/assets/Thumbnail/thumbnail6.png";
import img7 from "@/public/assets/Thumbnail/thumbnail7.png";
import img8 from "@/public/assets/Thumbnail/thumbnail8.jpeg";

import thumbimg1 from "@/public/assets/Aiimages/Aiimages1.png";
import thumbimg2 from "@/public/assets/Aiimages/Aiimages2.png";
import thumbimg3 from "@/public/assets/Aiimages/Aiimages3.png";
import thumbimg4 from "@/public/assets/Aiimages/Aiimages4.png";
import thumbimg5 from "@/public/assets/Aiimages/Aiimages5.jpg";
import thumbimg6 from "@/public/assets/Aiimages/Aiimages6.jpg";

import poster1 from "@/public/assets/Posters/poster5.jpg";
import poster2 from "@/public/assets/Posters/Poster2.jpg";
import poster3 from "@/public/assets/Posters/poster3.jpg";
import poster4 from "@/public/assets/Posters/poster4.jpg";
import poster5 from "@/public/assets/Posters/poster4.png";
import poster6 from "@/public/assets/Posters/poster7.jpg";

import channel10 from "@/public/assets/channle/channel10.jpg";
import channel11 from "@/public/assets/channle/channel11.jpg";
import channel12 from "@/public/assets/channle/channel12.jpg";
import channel13 from "@/public/assets/channle/channel13.jpg";
import channel14 from "@/public/assets/channle/channel14.jpg";
import channel15 from "@/public/assets/channle/channel15.jpg";

import Youtuber1 from "@/public/assets/youtuber/Youtuber.jpg";
import Youtuber2 from "@/public/assets/youtuber/Youtuber2.jpg";
import Youtuber3 from "@/public/assets/youtuber/Youtuber3.jpg";
import Youtuber4 from "@/public/assets/youtuber/Youtuber4.jpg";
import Youtuber5 from "@/public/assets/youtuber/Youtuber5.jpg";
import Youtuber6 from "@/public/assets/youtuber/Youtuber6.jpg";
import Youtuber7 from "@/public/assets/youtuber/Youtuber7.jpg";
import Youtuber8 from "@/public/assets/youtuber/Youtuber8.jpg";
import Youtuber9 from "@/public/assets/youtuber/Youtuber9.jpg";
import Youtuber10 from "@/public/assets/youtuber/Youtuber10.jpg";

import Image from "next/image";
import {
  EyeIcon,
  HeartIcon,
  RocketIcon,
  ShareIcon,
  StarIcon,
  UserIcon,
} from "lucide-react";

const thumbnail1 = [
  thumbimg1,
  thumbimg2,
  thumbimg3,
  thumbimg4,
  thumbimg5,
  thumbimg6,
];
// export function CarouselAiimages() {
//   return (
//     <Carousel
//       plugins={[
//         Autoplay({
//           delay: 2500,
//         }),
//       ]}
//       className="w-full  sm:max-w-sm md:max-w-lg "
//     >
//       <CarouselContent className="-mt-1 ">
//         {thumbnail1.map((img, index) => (
//           <CarouselItem key={index}>
//             <Card>
//               <CardContent className="flex p-1 w-[1000] h-[1000]  items-center justify-center ">
//                 <Image
//                   src={img}
//                   className="overflow-hidden rounded-lg"
//                   alt="ai thumbnail generator"
//                   width={1000}
//                   height={1000}
//                   loading="lazy"
//                 />
//               </CardContent>
//             </Card>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious className="-left-8 " />
//       <CarouselNext className="-right-8" />
//     </Carousel>
//   );
// }

export function Aiimages() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2500,
            stopOnInteraction: false, // continue autoplay after user interaction
            stopOnMouseEnter: true, // continue autoplay when mouse is over carousel
          }),
        ]}
        className="w-full h-96"
        orientation="vertical"
        opts={{
          align: "start",
          loop: true,
          axis: "y",
        }}
      >
        <CarouselContent className="-mt-1 h-96">
          {thumbnail1.map((img, index) => (
            <CarouselItem key={index} className="pt-1 basis-1/4">
              <div className="p-1 h-full">
                <Card className="border border-[#333] p-2 bg-[#0a0a0a]/50 backdrop-blur-sm overflow-hidden rounded-xl transition-all duration-300 hover:border-[#B026FF]/50 h-full">
                  <CardContent className="relative group p-0 overflow-hidden rounded-xl h-full">
                    {/* Gradient shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] opacity-0 group-hover:opacity-10 transition-opacity -z-10"></div>

                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        src={img}
                        alt="AI-generated image"
                        width={400}
                        height={300}
                        loading="lazy"
                      />
                    </div>

                    {/* Info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
                          Style:{" "}
                          {index % 3 === 0
                            ? "Abstract"
                            : index % 3 === 1
                            ? "Realistic"
                            : "Digital Art"}
                        </span>
                        <div className="flex items-center gap-1">
                          <HeartIcon className="h-4 w-4 text-[#FF2E9F]" />
                          <span className="text-xs text-gray-300">
                            {(index + 1) * 24}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
const thumbnail = [img1, img6, img7, img8, img2, img3, img4, img5];

// export function CarouselThumbnail() {

//   return (
//     <Carousel
//       plugins={[
//         Autoplay({
//           delay: 2000,
//         }),
//       ]}
//       className="w-full  sm:max-w-sm md:max-w-lg "
//     >
//       <CarouselContent className="-mt-1 ">
//         {thumbnail.map((img, index) => (
//           <CarouselItem key={index}>
//             <Card>
//               <CardContent className="flex p-1 w-[1000] h-[1000]  items-center justify-center ">
//                 <Image
//                   src={img}
//                   className="overflow-hidden rounded-lg"
//                   alt="thumbnail for youtube"
//                   width={1000}
//                   height={1000}
//                   loading="lazy"
//                 />
//               </CardContent>
//             </Card>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious className="-left-8 " />
//       <CarouselNext className="-right-8" />
//     </Carousel>
//   );
// }
export function AiThumb() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2500, // 3 seconds between scrolls
            stopOnInteraction: false, // continue autoplay after user interaction
            stopOnMouseEnter: true, // continue autoplay when mouse is over carousel
          }),
        ]}
        className="w-full h-96"
        orientation="vertical"
        opts={{
          align: "start",
          loop: true,
          axis: "y",
        }}
      >
        <CarouselContent className="-mt-1 h-96">
          {thumbnail.map((img, index) => (
            <CarouselItem key={index} className="pt-1 basis-1/4">
              <div className="p-1 h-full">
                <Card className="border border-[#333] p-2 bg-[#0a0a0a]/50 backdrop-blur-sm overflow-hidden rounded-xl transition-all duration-300 hover:border-[#B026FF]/50 h-full">
                  <CardContent className="relative group p-0 overflow-hidden rounded-xl h-full">
                    {/* Gradient shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] opacity-0 group-hover:opacity-10 transition-opacity -z-10"></div>

                    {/* Image */}
                    <div className="relative aspect-video">
                      <Image
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        src={img}
                        alt="AI-generated image"
                        width={400}
                        height={300}
                        loading="lazy"
                      />
                    </div>

                    {/* Info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
                          CTR: +{index * 7 + 25}%
                        </span>
                        <div className="flex items-center gap-1">
                          <EyeIcon className="h-4 w-4 text-[#00F0FF]" />
                          <span className="text-xs text-gray-300">
                            {(index + 1) * 1.2}k
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
// export function AiThumb() {
//   return (
//     <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//       {thumbnail.map((img, index) => (
//         <div
//           key={index}
//           className="relative group overflow-hidden rounded-xl border border-[#333] bg-[#0a0a0a]/50 backdrop-blur-sm p-2 transition-all duration-300 hover:border-[#00F0FF]/50"
//         >
//           {/* Gradient shine effect on hover */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] opacity-0 group-hover:opacity-10 transition-opacity -z-10"></div>

//           {/* Image */}
//           <div className="relative aspect-video">
//             <Image
//               className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
//               src={img}
//               alt="AI-generated thumbnail"
//               loading="lazy"
//             />
//           </div>

//           {/* Info overlay */}
//           <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
//             <div className="flex items-center justify-between">
//               <span className="text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
//                 CTR: +{index * 7 + 25}%
//               </span>
//               <div className="flex items-center gap-1">
//                 <EyeIcon className="h-4 w-4 text-[#00F0FF]" />
//                 <span className="text-xs text-gray-300">
//                   {(index + 1) * 1.2}k
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

const Poster = [poster3, poster2, poster1, poster5, poster4, poster6];
export function AiPoster() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2500,
            stopOnInteraction: false, // continue autoplay after user interaction
            stopOnMouseEnter: true, // continue autoplay when mouse is over carousel
          }),
        ]}
        orientation="vertical"
        className="w-full h-96"
        opts={{
          align: "start",
          loop: true,
          axis: "y",
        }}
      >
        <CarouselContent className="-mt-1 h-96">
          {Poster.map((img, index) => (
            <CarouselItem key={index} className="pt-1 basis-1/4">
              <div className="p-1 h-full">
                <Card className="border border-[#333] p-2 bg-[#0a0a0a]/50 backdrop-blur-sm overflow-hidden rounded-xl transition-all duration-300 hover:border-[#B026FF]/50 h-full">
                  <CardContent className="relative group p-0 h-full overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] opacity-0 group-hover:opacity-10 transition-opacity -z-10"></div>

                    {/* Image */}
                    <div className="relative  w-full h-full">
                      <Image
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        src={img}
                        alt="AI-generated image"
                        width={400}
                        height={300}
                        loading="lazy"
                      />
                    </div>

                    {/* Info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
                          {index % 3 === 0
                            ? "Marketing"
                            : index % 3 === 1
                            ? "Event"
                            : "Promotional"}
                        </span>
                        <div className="flex items-center gap-1">
                          <ShareIcon className="h-4 w-4 text-[#00F0FF]" />
                          <span className="text-xs text-gray-300">
                            {(index + 1) * 42}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
// export function AiPoster() {
//   return (
//     <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//       {Poster.map((img, index) => (
//         <div
//           key={index}
//           className="relative group overflow-hidden rounded-xl border border-[#333] bg-[#0a0a0a]/50 backdrop-blur-sm p-2 transition-all duration-300 hover:border-[#B026FF]/50"
//         >
//           {/* Gradient shine effect on hover */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] opacity-0 group-hover:opacity-10 transition-opacity -z-10"></div>

//           {/* Image */}
//           <div className="relative aspect-[3/4]">
//             <Image
//               className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
//               src={img}
//               alt="AI-generated poster"
//               loading="lazy"
//             />
//           </div>

//           {/* Info overlay */}
//           <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
//             <div className="flex items-center justify-between">
//               <span className="text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
//                 {index % 3 === 0
//                   ? "Marketing"
//                   : index % 3 === 1
//                   ? "Event"
//                   : "Promotional"}
//               </span>
//               <div className="flex items-center gap-1">
//                 <ShareIcon className="h-4 w-4 text-[#00F0FF]" />
//                 <span className="text-xs text-gray-300">
//                   {(index + 1) * 42}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// export function CarouselPoster() {
//   return (
//     <Carousel
//       plugins={[
//         Autoplay({
//           delay: 1500,
//         }),
//       ]}
//       className="w-full  sm:max-w-sm md:max-w-lg "
//     >
//       <CarouselContent className="-mt-1 ">
//         {Poster.map((img, index) => (
//           <CarouselItem key={index}>
//             <Card>
//               <CardContent className="flex p-1 w-[1000] h-[1000]  items-center justify-center ">
//                 <Image
//                   src={img}
//                   className="overflow-hidden rounded-lg"
//                   alt="ai youtube thumbnail generator"
//                   width={1000}
//                   height={1000}
//                   loading="lazy"
//                 />
//               </CardContent>
//             </Card>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious className="-left-8 " />
//       <CarouselNext className="-right-8" />
//     </Carousel>
//   );
// }
const channel = [
  channel10,
  channel11,
  channel12,
  channel13,
  // channel14,
  channel15,
];

// export function CarouselChannel() {
//   return (
//     <Carousel
//       plugins={[
//         Autoplay({
//           delay: 2000,
//         }),
//       ]}
//       className="w-full  sm:max-w-sm md:max-w-lg "
//     >
//       <CarouselContent className=" rounded-lg">
//         {channel.map((img, index) => (
//           <CarouselItem key={index}>
//             <Card>
//               <CardContent className="flex p-1 w-[1000] h-[1000]  items-center justify-center ">
//                 <Image
//                   src={img}
//                   className="overflow-hidden rounded-lg"
//                   alt="youtube thumbnail"
//                   width={1000}
//                   height={1000}
//                   loading="lazy"
//                 />
//               </CardContent>
//             </Card>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious className="-left-8 " />
//       <CarouselNext className="-right-8" />
//     </Carousel>
//   );
// }
export function OurClient() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-[#333] bg-[#0a0a0a]/50 backdrop-blur-sm p-4">
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF]/10 to-[#FF2E9F]/10 rounded-xl blur-xl opacity-30 -z-10"></div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="w-full">
          {channel.map((img, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <div className="group relative p-2">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#B026FF] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>

                <div className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#333] rounded-xl overflow-hidden transition-all group-hover:border-transparent h-full">
                  <div className="flex aspect-video items-center justify-center p-2">
                    <Image
                      className="w-full h-full rounded-lg object-cover"
                      src={img}
                      alt="Our top client"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation arrows */}
        <CarouselPrevious className="left-2 bg-[#1a1a1a]/80 border border-[#333] text-white hover:bg-[#1a1a1a] hover:text-[#00F0FF]" />
        <CarouselNext className="right-2 bg-[#1a1a1a]/80 border border-[#333] text-white hover:bg-[#1a1a1a] hover:text-[#00F0FF]" />
      </Carousel>
    </div>
  );
}
export function OurClient1() {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {channel.map((img, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-xl border border-[#333] bg-[#0a0a0a]/50 backdrop-blur-sm p-2 transition-all duration-300 hover:border-[#B026FF]/50"
        >
          {/* Gradient shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] opacity-0 group-hover:opacity-10 transition-opacity -z-10"></div>

          {/* Client badge */}
          <div className="absolute top-2 right-2 bg-[#0a0a0a]/80 border border-[#333] rounded-full px-2 py-1 z-10">
            <span className="text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
              #{index + 1}
            </span>
          </div>

          {/* Client logo */}
          <div className="relative aspect-video w-full">
            <Image
              className="w-full h-full object-cover p-1 transition-transform duration-300 group-hover:scale-105"
              src={img}
              alt="Our valued client"
              loading="lazy"
            />
          </div>

          {/* Client info */}
          <div className="mt-2 text-center">
            <h4 className="text-sm font-bold text-white">
              {index % 3 === 0
                ? "Tech Innovators"
                : index % 3 === 1
                ? "Creative Studios"
                : "Digital Leaders"}
            </h4>
            <div className="flex items-center justify-center mt-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-3 w-3 ${
                      i < 4 ? "text-yellow-400" : "text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-400 ml-1">4.8</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
const Youtuber = [
  Youtuber2,
  Youtuber3,
  Youtuber4,
  Youtuber5,
  Youtuber6,
  Youtuber1,
  Youtuber7,
  Youtuber8,
  Youtuber9,
  Youtuber10,
];
export function TopYoutuber() {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Youtuber.map((img, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-xl border border-[#333] transition-all duration-300 hover:scale-[1.03]"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 z-10"></div>

          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] opacity-0 group-hover:opacity-30 transition-opacity -z-10"></div>

          {/* Hover info */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20">
            <div className="flex items-center gap-2">
              <div className="bg-[#00F0FF] rounded-full p-1">
                <UserIcon className="h-4 w-4 text-black" />
              </div>
              <span className="text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
                {index % 3 === 0
                  ? "Tech Guru"
                  : index % 3 === 1
                  ? "Gaming Pro"
                  : "Lifestyle Vlogger"}
              </span>
            </div>
            <div className="mt-1 flex items-center gap-1">
              <RocketIcon className="h-3 w-3 text-[#FF2E9F]" />
              <span className="text-xs text-gray-300">
                +{(index + 1) * 23}% views
              </span>
            </div>
          </div>

          <Image
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            src={img}
            alt="Top YouTuber using AI thumbnails"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
// export function CarouselYoutuber() {
//   return (
//     <Carousel
//       plugins={[
//         Autoplay({
//           delay: 2000,
//         }),
//       ]}
//       className="w-full  sm:max-w-sm md:max-w-lg "
//     >
//       <CarouselContent className=" rounded-lg">
//         {Youtuber.map((img, index) => (
//           <CarouselItem key={index}>
//             <Card>
//               <CardContent className="flex p-1 w-[1000] h-[1000]  items-center justify-center ">
//                 <Image
//                   src={img}
//                   className="overflow-hidden rounded-lg"
//                   alt="ai youtube thumbnail"
//                   width={1000}
//                   height={1000}
//                   loading="lazy"
//                 />
//               </CardContent>
//             </Card>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious className="-left-8 " />
//       <CarouselNext className="-right-8" />
//     </Carousel>
//   );
// }
