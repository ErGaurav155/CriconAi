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
    <div className="grid gap-1 md:gap-4 grid-cols-2 lg:grid-cols-3 ">
      {thumbnail1.map((img, index) => (
        <div className=" overflow-hidden" key={index}>
          <Image
            className=" w-full h-full  max-w-full rounded-lg object-cover object-center"
            src={img}
            alt="ai thumbnail generator"
            loading="lazy"
          />
        </div>
      ))}
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
    <div className="grid  gap-1 md:gap-4 grid-cols-2 lg:grid-cols-3  ">
      {thumbnail.map((img, index) => (
        <div className="overflow-hidden" key={index}>
          <Image
            className="  w-full h-full max-w-full rounded-lg object-cover object-center "
            src={img}
            alt="ai thumbnail generator"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

const Poster = [poster3, poster2, poster1, poster5, poster4, poster6];
export function AiPoster() {
  return (
    <div className="grid  gap-1 md:gap-4 grid-cols-2 lg:grid-cols-3 ">
      {Poster.map((img, index) => (
        <div className="overflow-hidden" key={index}>
          <Image
            className=" w-full h-full max-w-full rounded-lg object-cover object-center "
            src={img}
            alt="ai thumbnail generator"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
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
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full "
    >
      <CarouselContent className=" w-full">
        {channel.map((img, index) => (
          <CarouselItem
            key={index}
            className="w-full sm:basis-1/3 lg:basis-1/3"
          >
            <Card className="w-full p-0">
              <CardContent className="flex p-0 w-full aspect-video items-center justify-center ">
                <Image
                  className=" w-full h-full  rounded-lg object-fill object-center "
                  src={img}
                  alt="ai thumbnail generator"
                  loading="lazy"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
export function OurClient1() {
  return (
    <div className="grid  gap-1 md:gap-4 grid-cols-2 lg:grid-cols-3 ">
      {channel.map((img, index) => (
        <div className="overflow-hidden" key={index}>
          <Image
            className=" w-full h-full max-w-full rounded-lg object-cover object-center "
            src={img}
            alt="ai thumbnail generator"
            loading="lazy"
          />
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
    <div className="grid  gap-1 md:gap-4 grid-cols-2 lg:grid-cols-3 ">
      {Youtuber.map((img, index) => (
        <div className="overflow-hidden" key={index}>
          <Image
            className=" w-full h-full max-w-full rounded-lg object-cover object-center "
            src={img}
            alt="ai thumbnail generator"
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
