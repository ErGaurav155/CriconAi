"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useEffect, useState } from "react";

export const Congratulation = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!open) {
        setOpen(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [open]);

  return (
    <>
      {open && (
        <AlertDialog defaultOpen>
          <AlertDialogContent className="bg-[#0a0a0a]  border-0 rounded-xl overflow-hidden ">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] z-[-1] blur-xl opacity-5 bg-transparent backdrop-blur-xl"></div>

            <AlertDialogHeader className="relative z-10 backdrop-blur-xl ">
              <div className="flex justify-between items-center mb-4">
                <div className="bg-gradient-to-r from-[#B026FF] to-[#FF2E9F] text-black py-1 px-3 rounded-md p-2 text-sm font-bold ">
                  BIG ACHIEVEMENT
                </div>
                <AlertDialogCancel
                  className="border-0 p-0 hover:bg-transparent bg-transparent"
                  onClick={() => router.push("/")}
                >
                  <Image
                    src="/assets/icons/cross.svg"
                    alt="close"
                    width={24}
                    height={24}
                    className="cursor-pointer filter invert"
                  />
                </AlertDialogCancel>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-[#333]">
                <video
                  src="/assets/channle/congratulation.webm"
                  width="600"
                  height="400"
                  autoPlay
                  loop
                  muted
                  className="w-full"
                >
                  youtube thumbnail
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
              </div>

              <AlertDialogTitle className="text-2xl md:text-3xl font-bold text-white mt-6 text-center">
                We Built{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
                  100 Successful Channels
                </span>{" "}
                In Just{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF2E9F] to-[#B026FF]">
                  One Month
                </span>
              </AlertDialogTitle>

              <AlertDialogDescription className="text-lg text-gray-300 py-3 text-center">
                Become One Among Them.{" "}
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F]">
                  75% Discount
                </span>{" "}
                ON Credits.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter className="mt-4 flex flex-col sm:flex-row gap-3">
              <AlertDialogCancel
                className="w-full bg-[#1a1a1a] text-gray-300  border border-[#333]"
                onClick={() => router.push("/")}
              >
                No, Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                className="w-full bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] text-black font-bold hover:opacity-80 transition-opacity"
                onClick={() => router.push("/credits")}
              >
                Get Credits Now
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};
