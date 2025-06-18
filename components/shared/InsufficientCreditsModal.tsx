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
import { InfoIcon } from "lucide-react";

export const InsufficientCreditsModal = () => {
  const router = useRouter();

  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent className="relative bg-[#0a0a0a]/60 backdrop-blur-sm border border-[#333] rounded-2xl overflow-hidden">
        {/* Gradient shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] opacity-0 hover:opacity-10 rounded-2xl transition-opacity -z-10"></div>

        <AlertDialogHeader>
          <div className="flex justify-between items-center mb-6">
            <p className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
              Insufficient Credits
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <InfoIcon className="h-5 w-5" />
              <span className="text-sm">
                Reset 10
                <Image
                  src="/assets/icons/coins.svg"
                  alt="credit coins"
                  width={16}
                  height={16}
                  className="inline mx-1"
                />
                in 24 Hr.
              </span>
            </div>
            <AlertDialogCancel
              className="border-0 p-0 hover:bg-transparent hover:opacity-70 transition-opacity"
              onClick={() => router.push("/profile")}
            >
              <Image
                src="/assets/icons/cross.svg"
                alt="credit coins"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </AlertDialogCancel>
          </div>

          <div className="flex justify-center mb-6">
            <Image
              src="/assets/images/stacked-coins.png"
              alt="credit coins"
              width={462}
              height={122}
              className="max-w-full h-auto"
            />
          </div>

          <AlertDialogTitle className="text-2xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
            Oops.... Looks like you&#39;ve run out of free credits!
          </AlertDialogTitle>

          <AlertDialogDescription className="text-gray-300 text-center text-base mb-6">
            No worries, though - you can keep enjoying our services by grabbing
            more credits.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-col sm:flex-row gap-3">
          <AlertDialogCancel
            className="w-full bg-transparent border border-[#333] text-gray-300 hover:bg-[#1a1a1a] hover:text-white transition-colors rounded-xl py-3"
            onClick={() => router.push("/profile")}
          >
            No, Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="w-full bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-black font-semibold hover:opacity-90 transition-opacity rounded-xl py-3"
            onClick={() => router.push("/credits")}
          >
            Yes, Proceed
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
