"use client";

import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { languages, longvidTypes, voice } from "@/constants";
import { Button } from "../ui/button";
import { getUserById, updateCredits } from "@/lib/actions/user.actions";
import { InsufficientCreditsModal } from "./InsufficientCreditsModal";
import { z } from "zod";
import { calculateCredits } from "@/lib/utils";
import { toast } from "../ui/use-toast";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const formSchema = z.object({
  file: z
    .instanceof(File)
    .refine(
      (file) => file.size < 5 * 1024 * 1024,
      "File size must be less than 5MB"
    ),

  selectTone: z.string(),
  outputlag: z.string(),
});

export default function LongVidAudio({ type }: LongAiFormProps) {
  const { userId } = useAuth();

  const longVid = longvidTypes[type];
  const [availableCredits, setAvailableCredits] = useState<boolean>(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [theFile, setTheFile] = useState<File | null>(null);
  const [value1, setValue1] = useState("");
  const [language1, setLanguage1] = useState("");
  const [credits, setCredits] = useState(longVid.credits);
  const [size, setSize] = useState<number>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];

    if (!file) return;
    const fileSize = file.size;
    if (!fileSize) return;
    setSize(fileSize);

    setTheFile(file);
  };

  useEffect(() => {
    const fileCredits = calculateCredits(size);
    setCredits(longVid.credits + fileCredits);
  }, [longVid.credits, size]);
  let { type: string, topic, subtopic, tone, aiprompt, model } = longVid;

  const callGetTranscription = async () => {
    if (!theFile) {
      return;
    }
    setIsSubmitting(true);
    toast({
      title: "Tip of the Day",
      description: `Note : Plz copy response in word or download images or audio if
        you want,once page refresh you will never see them back `,
      duration: 5000,
      className: "success-toast",
    });
    if (!userId) {
      return;
    }
    const user = await getUserById(userId);

    if (!user) {
      return;
    }
    const userDbId = user._id;
    if (user.creditBalance < Math.abs(credits)) {
      setIsSubmitting(false);

      setAvailableCredits(true);
      return;
    }

    const formData = new FormData();
    formData.append("file", theFile);
    formData.append("selectTone", value1);
    formData.append("outputlag", language1);

    try {
      try {
        formSchema.parse({
          file: theFile,
          selectTone: value1,
          outputlag: language1,
        });
      } catch (error) {
        setIsSubmitting(false);
        throw new Error("File size must be less than 3MB");
      }

      const response = await fetch("/api/audio", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        await updateCredits(userDbId, -credits);

        setAudioUrl(data.output);
      } else {
        toast({
          title: "Content Warning",
          description:
            "This prompt has been blocked. Our system automatically flagged this prompt because it may conflict with our content policy. More policy violations may lead to automatic suspension of your access.",
          duration: 2000,
          className: "error-toast",
        });
      }
    } catch (error) {
      toast({
        title: "Content Warning",
        description:
          "This prompt has been blocked. Our system automatically flagged this prompt because it may conflict with our content policy. More policy violations may lead to automatic suspension of your access.",
        duration: 2000,
        className: "error-toast",
      });
    } finally {
      setTheFile(null);
      setIsSubmitting(false);
    }
  };

  const handleValueChange = (newValue: string) => {
    setValue1(newValue);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage1(newLanguage);
  };
  if (availableCredits) {
    return <InsufficientCreditsModal />;
  }
  return (
    <div className="min-h-screen  text-white p-6">
      <div className="  p-6 rounded-xl border border-[#00F0FF]/30 mb-10">
        <div className="mb-6">
          <label className="text-gray-300 block mb-2">Upload File:</label>
          <Input
            className="bg-[#0a0a0a]/80 text-white border border-[#00F0FF]/30 rounded-lg p-4 placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#B026FF]"
            type="file"
            accept=".wav, .mp3"
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="flex gap-4 mb-10">
          <div className="w-1/2">
            <label className="text-gray-300 block mb-2">Select Character</label>
            <Select required onValueChange={handleValueChange} value={value1}>
              <SelectTrigger className="bg-[#0a0a0a]/80 text-white border border-[#00F0FF]/30 rounded-lg focus:border-[#B026FF]">
                <SelectValue placeholder="Select character" />
              </SelectTrigger>

              <SelectContent className="bg-[#0a0a0a] text-white border border-[#00F0FF]/30">
                {voice.map((voice, index) => (
                  <SelectItem
                    key={index}
                    className="hover:bg-[#1a1a1a] focus:bg-[#1a1a1a] hover:text-[#00F0FF] focus:text-[#00F0FF] "
                    value={voice}
                  >
                    {voice}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-1/2">
            <label className="text-gray-300 block mb-2">Output Language</label>
            <Select
              required
              onValueChange={handleLanguageChange}
              value={language1}
            >
              <SelectTrigger className="bg-[#0a0a0a]/80 text-white border border-[#00F0FF]/30 rounded-lg focus:border-[#B026FF]">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>

              <SelectContent className="bg-[#0a0a0a] text-white border border-[#00F0FF]/30">
                {languages.map((language, index) => (
                  <SelectItem
                    key={index}
                    className="hover:bg-[#1a1a1a] focus:bg-[#1a1a1a] hover:text-[#00F0FF] focus:text-[#00F0FF] "
                    value={language}
                  >
                    {language}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-10">
          {userId ? (
            <Button
              onClick={callGetTranscription}
              key="submitButton"
              className="w-full py-6 rounded-xl font-bold text-lg bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] hover:opacity-90 transition-opacity"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <div className="flex gap-2 items-center justify-center">
                  Generate{" "}
                  <span>
                    <Image
                      src="/assets/icons/coins.svg"
                      alt="coins"
                      width={24}
                      height={24}
                      className="size-6"
                    />
                  </span>{" "}
                  {credits}
                </div>
              )}
            </Button>
          ) : (
            <Link
              href={"/sign-in"}
              className="w-full py-6 rounded-xl font-bold text-lg bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] hover:opacity-90 transition-opacity text-center block"
            >
              LOGIN
            </Link>
          )}
        </div>
      </div>

      {audioUrl ? (
        <div className="min-h-max h-[30vh] md:h-[80vh] p-5 m-auto flex flex-col w-full gap-2 backdrop-blur-sm bg-black/30 rounded-xl border border-[#00F0FF]/30">
          <audio controls className="w-full">
            <source src={audioUrl} type="audio/mpeg" />
          </audio>
        </div>
      ) : (
        <div className="bg-[#0a0a0a]/80 backdrop-blur-sm rounded-xl overflow-auto text-lg border border-[#00F0FF]/30 text-white flex gap-3 items-center justify-center mb-10 p-10">
          <Skeleton className="h-[30vh] w-full rounded-xl bg-gray-800" />
        </div>
      )}
    </div>
  );
}
