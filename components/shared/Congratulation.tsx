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
          <AlertDialogContent>
            <AlertDialogHeader>
              <div className="flex-between">
                <p className="p-16-semibold text-green-600">BIG ACHIEVEMENT</p>
                <AlertDialogCancel
                  className="border-0 p-0 hover:bg-transparent"
                  onClick={() => router.push("/")}
                >
                  <Image
                    src="/assets/icons/cross.svg"
                    alt="ai thumbnail"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </AlertDialogCancel>
              </div>

              <video
                src="/assets/channle/congratulation.webm"
                width="600"
                height="400"
                autoPlay
                loop
                muted
                className="cursor-pointer rounded-md"
              >
                youtube thumbnail
              </video>
              <AlertDialogTitle className="p-24-bold text-dark-600">
                We Build{" "}
                <span className="p-24-bold text-green-600 font-bold ">100</span>{" "}
                Successful Channels In Just{" "}
                <span className="p-24-bold text-green-600 font-bold">
                  {" "}
                  One Month
                </span>{" "}
              </AlertDialogTitle>

              <AlertDialogDescription className="p-16-regular py-3">
                Become One Among Them.{" "}
                <span className="p-16-semibold text-green-600 font-bold">
                  {" "}
                  75%
                </span>{" "}
                Discount ON Credits.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                className="button w-full bg-purple-100 text-dark-400"
                onClick={() => router.push("/")}
              >
                No, Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                className="button w-full bg-purple-gradient bg-cover"
                onClick={() => router.push("/credits")}
              >
                Get Credits
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};
