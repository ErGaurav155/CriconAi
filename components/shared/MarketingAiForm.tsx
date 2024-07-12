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
    <div>
      <div className=" mb-5 h-[70px]">
        <span className="text-green-700"> Note:</span> This is only to help you
        to engage with other influencer that relatable to your niche of video
        for video promotion in each others video etc
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="input"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-n-8">{topic}</FormLabel>
                <FormControl>
                  <Input
                    className="select-field "
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
                  <FormLabel className="text-n-8">{tone}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="select-field ">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {email.map((email, index) => (
                        <SelectItem
                          key={index}
                          className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
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
                  <FormLabel className="text-n-8">{tone}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="select-field">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {aiImages.map((categoryObj: AiImages) => (
                        <div
                          key={categoryObj.category}
                          className="bg-white text-gray-700 text-lg font-bold py-2 px-4 my-8 text-center "
                        >
                          {categoryObj.category}

                          {categoryObj.values.map(
                            (value: string, index: number) => (
                              <SelectItem
                                key={`${categoryObj.category}-${index}`}
                                className="select-item min-w-max "
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
          <div className="flex ">
            {type === "all" && (
              <FormField
                control={form.control}
                name="inputlag"
                render={({ field }) => (
                  <FormItem className="w-[50%]">
                    <FormLabel className="text-n-8">aspect ratio:</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value); // Update form field value
                        setSelectedAspectRatio(value); // Update aspect ratio in state
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="select-field ">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {aspectRatio.map((aspectRatio, index) => (
                          <SelectItem
                            key={index}
                            className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
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
                  <FormItem className="w-[50%]">
                    <FormLabel className="text-n-8">
                      Number of Images:
                    </FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value); // Update form field value
                        setArImage(value);
                        // Update aspect ratio in state
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="select-field ">
                          <SelectValue
                            placeholder={
                              type === "all" ? "No. Of Poster " : " "
                            }
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {noOfImage.map((noOfImage, index) => (
                          <SelectItem
                            key={index}
                            className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
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
                <FormLabel className="text-n-8">{subtopic}</FormLabel>
                <FormControl>
                  <Textarea
                    maxLength={500}
                    placeholder={placeholderDescText}
                    className="resize-none select-field"
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
              className="submit-button capitalize"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <div className="flex text-lg font-semibold gap-2 items-center justify-center">
                  Generate{" "}
                  <span>
                    <Image
                      src="/assets/icons/coins.svg"
                      alt="coins"
                      width={1}
                      height={1}
                      className="size-6 md:size-8"
                    />
                  </span>{" "}
                  {credits}
                </div>
              )}
            </Button>
          ) : (
            <Link
              href={"/sign-in"}
              className="text-white flex text-lg font-semibold gap-2 items-center justify-center"
            >
              <div className="submit-button capitalize text-center">LOGIN </div>
            </Link>
          )}
        </form>
      </Form>
      {!isResponse ? (
        <div className="mt-6">
          {response && (
            <div className="bg-white rounded-md overflow-auto text-lg border-[#8133b4] border font-sans  text-black flex flex-col gap-3  p-5 mb-10 mt-10">
              <Textarea
                value={response}
                placeholder="Enter Text To Edit"
                className="w-full h-[35vh] md:h-[45vh]  p-2 bg-white rounded-md  text-lg border-[#8133b4] border font-sans  text-black   border-none outline-none overflow-auto resize-none flex-4"
              />
              <div className="flex flex-row justify-between items-center w-full gap-2">
                <p>Word Count: {countWords(response)}</p>

                <Button
                  type="submit"
                  onClick={(e) => handleCopyButtonClick(e, response, 0)}
                  className={`rounded-md  mt-1 max-h-min  ${
                    activeStates[0]
                      ? "text-white bg-green-800 hover:bg-[#1c7429]"
                      : "text-[#8133b4] bg-[#e4dee7] hover:bg-[#d7b5ed]"
                  }  text-md font-bold h-[3.2rem]  min-w-max `}
                >
                  <Copy size={20} strokeWidth={2} />
                  {activeStates[0] ? "Copied" : "Copy"}
                </Button>
              </div>
            </div>
          )}
          {allResponse &&
            allResponse.map((text, index) => (
              <div
                key={index}
                className=" bg-white rounded-md overflow-auto text-lg border-[#8133b4] border font-sans  text-black flex flex-col gap-3  p-5 mb-10 mt-10"
              >
                {index === 0 && (
                  <label className="flex-2 font-sans font-bold text-n-8">
                    Promotion Title :
                  </label>
                )}
                {index === 1 && (
                  <label className="flex-2 font-sans font-bold text-n-8">
                    Hashtags :
                  </label>
                )}
                {index === 2 && (
                  <label className="flex-2 font-sans font-bold text-n-8">
                    Promotion Email :
                  </label>
                )}

                <Textarea
                  value={text}
                  placeholder="Enter Text To Edit"
                  className="w-full h-[35vh] md:h-[45vh]  p-2 bg-white rounded-md  text-lg border-[#8133b4] border font-sans  text-black   border-none outline-none overflow-auto resize-none flex-4"
                />
                <div className="flex flex-row justify-between items-center w-full gap-2">
                  <p>Word Count: {countWords(text)}</p>

                  <Button
                    type="submit"
                    onClick={(e) => handleCopyButtonClick(e, text, index)}
                    className={`rounded-md  mt-1 max-h-min  ${
                      activeStates[index]
                        ? "text-white bg-green-800 hover:bg-[#1c7429]"
                        : "text-[#8133b4] bg-[#e4dee7] hover:bg-[#d7b5ed]"
                    }  text-md font-bold h-[3.2rem]  min-w-max flex-2 `}
                  >
                    <Copy size={20} strokeWidth={2} />
                    {activeStates[index] ? "Copied" : "Copy"}
                  </Button>
                </div>
              </div>
            ))}

          {imageUrl && (
            <div className="min-h-max p-5 m-auto grid grid-cols-2  gap-2 ">
              {imageUrl.map((item, index) => (
                <div key={index}>
                  <label className=" font-sans font-bold text-n-8">
                    Thumbnail
                  </label>
                  <div
                    className={`rounded-md overflow-hidden relative w-[${arwidth}]
              h-[${arheight}]`}
                  >
                    <button
                      className="absolute top-2 right-2 rounded-md bg-white p-2"
                      onClick={(e) =>
                        downloadHandler(
                          e,
                          item,
                          "image" +
                            (Math.floor(Math.random() * 100) + 1).toString()
                        )
                      }
                    >
                      <DownloadIcon />
                    </button>

                    <Image
                      alt="image"
                      className="flex-1 "
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
        <div className="bg-white rounded-md overflow-auto text-lg  font-sans  text-black flex  gap-3 items-center justify-center mb-10 mt-10">
          <Skeleton className="h-[30vh] w-full rounded-xl bg-gray-300" />
        </div>
      )}
    </div>
  );
}
