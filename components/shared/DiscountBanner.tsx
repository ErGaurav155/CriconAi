"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/solid";

const DiscountBanner = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [isVisible, setIsVisible] = useState(true);

  const countdownDate = new Date("2024-07-03T13:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setIsVisible(false);
      } else {
        setDays(
          Math.floor(distance / (1000 * 60 * 60 * 24))
            .toString()
            .padStart(2, "0")
        );
        setHours(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            .toString()
            .padStart(2, "0")
        );
        setMinutes(
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            .toString()
            .padStart(2, "0")
        );
        setSeconds(
          Math.floor((distance % (1000 * 60)) / 1000)
            .toString()
            .padStart(2, "0")
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative rounded-md mt-5   top-0 left-0  flex flex-col gap-2 justify-center items-center w-full bg-gradient-to-r from-green-800 to-green-500 text-white font-sans py-4 px-4">
      <button
        onClick={handleClose}
        className="absolute top-1 right-2 p-1 rounded-full bg-white bg-opacity-10 hover:bg-opacity-30 transition-all"
      >
        <XMarkIcon height={30} width={30} stroke="2" />
      </button>
      <div className=" flex gap-1 md:gap-6 justify-center items-center w-full  text-white font-sans ">
        <div className="flex flex-col items-center">
          <div className=" text-md md:text-lg font-bold">Massive Sale</div>
          <div className="text-md md:text-base ">up to 75% off</div>
        </div>
        <div className="flex gap-2 md:gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-white text-black text-lg font-bold py-1 px-2 rounded">
              {days}
            </div>
            <div className="text-sm">Days</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white text-black text-lg font-bold py-1 px-2 rounded">
              {hours}
            </div>
            <div className="text-sm">Hrs</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white text-black text-lg font-bold py-1 px-2 rounded">
              {minutes}
            </div>
            <div className="text-sm">Min</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white text-black text-lg font-bold py-1 px-2 rounded">
              {seconds}
            </div>
            <div className="text-sm">Sec</div>
          </div>
        </div>
        <a
          href="/credits"
          className="p-2 text-center bg-gradient-to-r from-teal-300 to-blue-300 text-black text-sm font-semibold md:font-bold rounded uppercase hover:scale-105 transition-transform"
        >
          Learn More
        </a>
      </div>
      <Button className="text-black bg-white hover:bg-white rounded-md self-start w-full  cursor-default  max-h-min  mt-2 overflow-hidden">
        <Link
          href={"/credits"}
          className="flex animate-scroll-left whitespace-nowrap "
        >
          Get
          <span className="text-green-800 font-extrabold">
            &nbsp;250 Free &nbsp;
          </span>
          Credits For First 100 premium package purchase &nbsp;
          <RocketIcon color="green" />
        </Link>
      </Button>
    </div>
  );
};

export default DiscountBanner;
