"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import {
  MarketingFormProps,
  aiImages,
  aspectRatio,
  aspectRatioDisplayNames,
  email,
  noOfImage,
} from "@/constants";
import {
  fetchMarketingData,
  generateGptResponse,
} from "@/lib/actions/ai.actions";
import {
  getUserById,
  saveImageUrls,
  updateCredits,
} from "@/lib/actions/user.actions";
import { InsufficientCreditsModal } from "./InsufficientCreditsModal";
import { Copy, DownloadIcon } from "lucide-react";
import Image from "next/image";
import { download, totalCredits } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const formSchema = z.object({
  input: z.string().min(5, {
    message: "input must be at least 5 characters.",
  }),
  selectTone: z.string().optional(),
  inputlag: z.string().optional(),
  outputlag: z.string().optional(),
  description: z.string().optional(),
});

interface AiImages {
  category: string;
  values: string[];
}

export default function MarketingAiForm({ type }: MarketingFormProps) {
  const { userId } = useAuth();

  const [activeStates, setActiveStates] = useState(Array(5).fill(false));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const Marketing = MarketingFormProps[type];
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const [availableCredits, setAvailableCredits] = useState<boolean>(false);

  const [isResponse, setIsResponse] = useState(false);

  const [response, setResponse] = useState<string | null>();
  const [allResponse, setAllResponse] = useState<string[] | null>();
  const [selectedAspectRatio, setSelectedAspectRatio] = useState<string>("1:1");
  const [credits, setCredits] = useState(Marketing.credits);
  const [arImage, setArImage] = useState("1");

  const { toast } = useToast();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (activeStates) {
      timer = setTimeout(() => {
        setActiveStates(Array(5).fill(false));
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [activeStates]);

  const handleCopyButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    text: string,
    index: number
  ) => {
    if (allResponse || response) {
      e.preventDefault;
      const newActiveStates = [...activeStates];
      newActiveStates[index] = true;
      setActiveStates(newActiveStates);
      navigator.clipboard.writeText(text);
    } else {
      toast({
        title: "Plz Enter Text",
        description: "No text in textbox",
        duration: 5000,
        className: "error-toast",
      });
    }
  };

  let {
    type: string,
    topic,
    subtopic,
    tone,
    title,
    aiprompt,
    model,
  } = Marketing;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
      selectTone: "",
      description: "",
      inputlag: "",
      outputlag: "",
    },
  });
  useEffect(() => {
    const fullCredit = totalCredits(selectedAspectRatio, arImage);
    setCredits(Marketing.credits + fullCredit);
  }, [selectedAspectRatio, arImage, Marketing.credits]);

  const [width, height] = selectedAspectRatio.split("x");

  const arwidth = parseInt(width);
  const arheight = parseInt(height);

  const countWords = (response: string) => {
    const words = response.trim().split(/\s+/);
    return words.filter((word) => word !== "").length;
  };
  const downloadHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: string,
    title: string
  ) => {
    e.preventDefault();
    download(item, title);
  };
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setIsResponse(true);
    toast({
      title: "Tip of the Day",
      description: `Note : Plz copy response in word or download images or audio if
        you want,once page refresh you will never see them back `,
      duration: 2000,
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
      setIsResponse(false);
      setAvailableCredits(true);
      return;
    }
    const { input, inputlag, outputlag, selectTone, description } = values;

    try {
      if (type !== "all") {
        const res = await generateGptResponse({
          input,
          selectTone,
          inputlag,
          outputlag,
          description,
          aiprompt,
          model,
        });
        if (res) {
          await updateCredits(userDbId, -credits);
          if (model === "gpt-3.5-turbo") {
            setResponse(res);
          } else {
            setImageUrl(res);
            await saveImageUrls(userDbId, res);
          }
        } else {
          toast({
            title: "Content Warning",
            description:
              "This prompt has been blocked. Our system automatically flagged this prompt because it may conflict with our content policy. More policy violations may lead to automatic suspension of your access.",
            duration: 2000,
            className: "error-toast",
          });
        }
      } else {
        const res = await fetchMarketingData({
          input,
          selectTone,
          inputlag,
          outputlag,
          description,
        });
        if (res) {
          await updateCredits(userDbId, -credits);
          setAllResponse(res.slice(0, 3));
          setImageUrl(res.slice(3));
          await saveImageUrls(userDbId, res.slice(3));
        } else {
          toast({
            title: "Content Warning",
            description:
              "This prompt has been blocked. Our system automatically flagged this prompt because it may conflict with our content policy. More policy violations may lead to automatic suspension of your access.",
            duration: 2000,
            className: "error-toast",
          });
        }
      }
    } catch (err: any) {
      toast({
        title: "Content Warning",
        description:
          "This prompt has been blocked. Our system automatically flagged this prompt because it may conflict with our content policy. More policy violations may lead to automatic suspension of your access.",
        duration: 2000,
        className: "error-toast",
      });
    } finally {
      setIsSubmitting(false);
      setIsResponse(false);
    }
  }

  let placeholderInputText;
  let placeholderDescText;
  switch (type) {
    case "all":
      placeholderInputText =
        "For Eg. -suggest me promotion for video of Top 10 workout in indian ";
      placeholderDescText =
        "For Eg. -ideas must be unique and attracting audience";
      break;
    case "calculator":
      placeholderInputText =
        "For Eg. -a person having 5k average views on reels and 50k followers in india i want to promote my video how much he charge for this ";
      placeholderDescText = "For Eg. -calculate in rupee";
      break;
    case "finder":
      placeholderInputText =
        "For Eg. - find niches related to dieting video so i can promote my video there ";
      placeholderDescText = "";
      break;
    case "email":
      placeholderInputText =
        "For Eg. -Generate email for promoting my video on his channel related to indian culture and tradition ";
      placeholderDescText = "";
      break;
    case "promotion":
      placeholderInputText =
        "For Eg. -Generate email for promoting my video on his channel related to indian culture and tradition ";
      placeholderDescText = "";
      break;
    default:
      placeholderInputText = "Enter your input";
      placeholderDescText = "";
  }
  if (availableCredits) {
    return <InsufficientCreditsModal />;
  }
  return (
    <div className="min-h-screen  text-white  md:p-6">
      <div className="mb-10 md:p-4  rounded-xl border border-[#00F0FF]/30">
        <div className="text-green-400 font-semibold mb-2">Note:</div>
        <p className="text-gray-300">
          This is only to help you to engage with other influencer that
          relatable to your niche of video for video promotion in each others
          video etc
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mb-10 p-2 md:p-6 rounded-xl border border-[#00F0FF]/30"
        >
          <FormField
            control={form.control}
            name="input"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">{topic}</FormLabel>
                <FormControl>
                  <Input
                    className="bg-[#0a0a0a]/80 text-white border border-[#00F0FF]/30 rounded-lg p-4 placeholder:text-gray-500  focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#B026FF]"
                    placeholder={placeholderInputText}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {type === "email" && (
            <FormField
              control={form.control}
              name="selectTone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">{tone}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-[#0a0a0a]/80  text-white border border-[#00F0FF]/30 rounded-lg focus:border-[#B026FF]">
                        <SelectValue placeholder="Select tone" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#0a0a0a] text-white  border border-[#00F0FF]/30">
                      {email.map((email, index) => (
                        <SelectItem
                          key={index}
                          className="hover:bg-[#1a1a1a] hover:text-[#00F0FF] focus:text-[#00F0FF] focus:bg-[#1a1a1a]"
                          value={email}
                        >
                          {email}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {type === "all" && (
            <FormField
              control={form.control}
              name="selectTone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">{tone}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-[#0a0a0a]/80 text-white border border-[#00F0FF]/30 rounded-lg focus:border-[#B026FF]">
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#0a0a0a] text-white border border-[#00F0FF]/30 max-h-60">
                      {aiImages.map((categoryObj: AiImages) => (
                        <div
                          key={categoryObj.category}
                          className="py-2 px-4 my-2"
                        >
                          <div className="text-[#00F0FF] font-bold mb-2">
                            {categoryObj.category}
                          </div>
                          {categoryObj.values.map(
                            (value: string, index: number) => (
                              <SelectItem
                                key={`${categoryObj.category}-${index}`}
                                className="hover:bg-[#1a1a1a] hover:text-[#00F0FF] focus:text-[#00F0FF]  focus:bg-[#1a1a1a]"
                                value={value}
                              >
                                {value}
                              </SelectItem>
                            )
                          )}
                        </div>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <div className="flex gap-4">
            {type === "all" && (
              <FormField
                control={form.control}
                name="inputlag"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel className="text-gray-300">
                      aspect ratio:
                    </FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        setSelectedAspectRatio(value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-[#0a0a0a]/80 text-white border border-[#00F0FF]/30 rounded-lg focus:border-[#B026FF]">
                          <SelectValue placeholder="Select ratio" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#0a0a0a] text-white border border-[#00F0FF]/30">
                        {aspectRatio.map((aspectRatio, index) => (
                          <SelectItem
                            key={index}
                            className="hover:bg-[#1a1a1a] hover:text-[#00F0FF] focus:text-[#00F0FF]  focus:bg-[#1a1a1a]"
                            value={`${aspectRatio}`}
                          >
                            {aspectRatioDisplayNames[aspectRatio]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {type === "all" && (
              <FormField
                control={form.control}
                name="outputlag"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel className="text-gray-300">
                      Number of Images:
                    </FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        setArImage(value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-[#0a0a0a]/80 text-white border border-[#00F0FF]/30 rounded-lg focus:border-[#B026FF]">
                          <SelectValue placeholder="Select count" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#0a0a0a] text-white border border-[#00F0FF]/30">
                        {noOfImage.map((noOfImage, index) => (
                          <SelectItem
                            key={index}
                            className="hover:bg-[#1a1a1a] hover:text-[#00F0FF] focus:text-[#00F0FF]  focus:bg-[#1a1a1a]"
                            value={`${noOfImage}`}
                          >
                            {noOfImage}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">{subtopic}</FormLabel>
                <FormControl>
                  <Textarea
                    maxLength={500}
                    placeholder={placeholderDescText}
                    className="bg-[#0a0a0a]/80 text-white border border-[#00F0FF]/30 rounded-lg p-4 placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[#B026FF]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {userId ? (
            <Button
              type="submit"
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
        </form>
      </Form>

      {!isResponse ? (
        <div>
          {response && (
            <div className="bg-[#0a0a0a]/80 backdrop-blur-sm rounded-xl overflow-auto text-lg border border-[#00F0FF]/30 text-white flex flex-col gap-3 p-2 md:p-6 mb-10">
              <Textarea
                value={response}
                placeholder="Enter Text To Edit"
                className="w-full h-[35vh] md:h-[45vh] p-4 bg-transparent rounded-xl text-lg text-white border-none outline-none overflow-auto resize-none"
              />
              <div className="flex flex-row justify-between items-center w-full gap-2">
                <p className="text-gray-400">
                  Word Count: {countWords(response)}
                </p>

                <Button
                  type="submit"
                  onClick={(e) => handleCopyButtonClick(e, response, 0)}
                  className={`rounded-lg mt-1 max-h-min ${
                    activeStates[0]
                      ? "bg-green-800 hover:bg-green-800"
                      : "bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] hover:opacity-90"
                  } text-black font-bold h-12 min-w-max px-4`}
                >
                  <Copy size={20} strokeWidth={2} className="mr-2" />
                  {activeStates[0] ? "Copied" : "Copy"}
                </Button>
              </div>
            </div>
          )}
          {allResponse &&
            allResponse.map((text, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a]/80 backdrop-blur-sm rounded-xl overflow-auto text-lg border border-[#00F0FF]/30 text-white flex flex-col gap-3 p-2 md:p-6 mb-10"
              >
                {index === 0 && (
                  <label className="font-bold text-[#00F0FF]">
                    Promotion Title :
                  </label>
                )}
                {index === 1 && (
                  <label className="font-bold text-[#00F0FF]">Hashtags :</label>
                )}
                {index === 2 && (
                  <label className="font-bold text-[#00F0FF]">
                    Promotion Email :
                  </label>
                )}

                <Textarea
                  value={text}
                  placeholder="Enter Text To Edit"
                  className="w-full h-[35vh] md:h-[45vh] p-4 bg-transparent rounded-xl text-lg text-white border-none outline-none overflow-auto resize-none"
                />
                <div className="flex flex-row justify-between items-center w-full gap-2">
                  <p className="text-gray-400">
                    Word Count: {countWords(text)}
                  </p>

                  <Button
                    type="submit"
                    onClick={(e) => handleCopyButtonClick(e, text, index)}
                    className={`rounded-lg mt-1 max-h-min ${
                      activeStates[index]
                        ? "bg-green-800 hover:bg-green-800"
                        : "bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] hover:opacity-90"
                    } text-black font-bold h-12 min-w-max px-4`}
                  >
                    <Copy size={20} strokeWidth={2} className="mr-2" />
                    {activeStates[index] ? "Copied" : "Copy"}
                  </Button>
                </div>
              </div>
            ))}

          {imageUrl && (
            <div className="min-h-max p-2 md:p-5 m-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
              {imageUrl.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#0a0a0a]/80 backdrop-blur-sm rounded-xl border border-[#00F0FF]/30 p-4"
                >
                  <label className="font-bold text-[#00F0FF] block mb-2">
                    Image {index + 1}
                  </label>
                  <div className="rounded-xl overflow-hidden relative">
                    <button
                      className="absolute top-3 right-3 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] p-2 z-10"
                      onClick={(e) =>
                        downloadHandler(
                          e,
                          item,
                          "image" +
                            (Math.floor(Math.random() * 100) + 1).toString()
                        )
                      }
                    >
                      <DownloadIcon size={20} className="text-black" />
                    </button>

                    <Image
                      alt="image"
                      className="w-full object-cover"
                      src={item}
                      width={arwidth}
                      height={arheight}
                      priority
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="bg-[#0a0a0a]/80 backdrop-blur-sm rounded-xl overflow-auto text-lg border border-[#00F0FF]/30 text-white flex gap-3 items-center justify-center mb-10 p-5 md:p-10">
          <Skeleton className="h-[30vh] w-full rounded-xl bg-gray-800" />
        </div>
      )}
    </div>
  );
}
