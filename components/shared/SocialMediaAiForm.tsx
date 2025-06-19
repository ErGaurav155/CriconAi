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
  aiImages,
  aspectRatio,
  aspectRatioDisplayNames,
  email,
  ImageQuality,
  noOfImage,
  socialmediaTypes,
} from "@/constants";
import {
  fetchSocialMediaData,
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
import { Switch } from "../ui/switch";
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
  imageQuality: z.string().optional(),
});

interface AiImages {
  category: string;
  values: string[];
}

export default function SocialMediaAiForm({ type }: SocialMediaFormProps) {
  const { userId } = useAuth();

  const [activeStates, setActiveStates] = useState(Array(5).fill(false));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const socialMedia = socialmediaTypes[type];
  const [genType, setGenType] = useState(false);
  const [isResponse, setIsResponse] = useState(false);

  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const [availableCredits, setAvailableCredits] = useState<boolean>(false);

  const [response, setResponse] = useState<string | null>();
  const [allResponse, setAllResponse] = useState<string[] | null>();
  const [selectedAspectRatio, setSelectedAspectRatio] = useState<string>("1:1");
  const [selectedImageQuality, setSelectedImageQuality] =
    useState<string>("HD"); // Default to HD
  const [credits, setCredits] = useState(socialMedia.credits);
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
        className: "bg-gradient-to-r from-[#B026FF] to-[#FF2E9F] text-white",
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
  } = socialMedia;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
      selectTone: "",
      description:
        type === "avatar"
          ? "add yellow colour neon light to border of all things in image"
          : "",
      inputlag: "",
      outputlag: "",
      imageQuality: "",
    },
  });
  useEffect(() => {
    const fullCredit = totalCredits(selectedAspectRatio, arImage);
    if (selectedImageQuality === "4K") {
      setCredits(Math.ceil((socialMedia.credits + fullCredit) * 2));
    } else {
      setCredits(Math.ceil(socialMedia.credits + fullCredit));
    }
  }, [selectedAspectRatio, arImage, socialMedia.credits, selectedImageQuality]);

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
      className: "bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-white",
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
    const {
      input,
      inputlag,
      outputlag,
      selectTone,
      description,
      imageQuality,
    } = values;

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
          genType,
          imageQuality,
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
            className:
              "bg-gradient-to-r from-[#FF2E9F] to-[#B026FF] text-white",
          });
        }
      } else {
        const res = await fetchSocialMediaData({
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
            className:
              "bg-gradient-to-r from-[#FF2E9F] to-[#B026FF] text-white",
          });
        }
      }
    } catch (err: any) {
      toast({
        title: "Content Warning",
        description:
          "This prompt has been blocked. Our system automatically flagged this prompt because it may conflict with our content policy. More policy violations may lead to automatic suspension of your access.",
        duration: 2000,
        className: "bg-gradient-to-r from-[#FF2E9F] to-[#B026FF] text-white",
      });
    } finally {
      setIsSubmitting(false);
      setIsResponse(false);
    }
  }
  let placeholderInputText;
  let placeholderDescText;
  switch (type) {
    case "idea":
      placeholderInputText =
        "For Eg. -Generate social media post idea for holi celebration";
      placeholderDescText =
        "For Eg. -ideas must be unique and attracting audience";
      break;

    case "bio":
      placeholderInputText = "For Eg. -create bio for computer student ";
      placeholderDescText = "";
      break;
    case "caption":
      placeholderInputText = "For Eg. -Generate caption for holi celebration ";
      placeholderDescText = "";
      break;
    case "tag":
      placeholderInputText =
        "For Eg. - video or reel related to holi celebration ";
      placeholderDescText = "";
      break;
    case "images":
      placeholderInputText = "For Eg. -holi celebration post";
      placeholderDescText = "For Eg. -add colors for typography";
      break;
    case "avatar":
      placeholderInputText = "For Eg. - an computer engineer student avatar";
      placeholderDescText = "  ";
      break;
    case "description":
      placeholderInputText = "For Eg. - reel/post related to holi celebration";
      placeholderDescText = "must include trending keywords";
      break;
    case "comment":
      placeholderInputText =
        "For Eg. -reply to this hi i can you tell me how you create this video ";
      placeholderDescText = "";
      break;
    case "tweet":
      placeholderInputText =
        "For Eg. -reply to this hi i can you tell me how you create this video ";
      placeholderDescText = "";
      break;

    case "all":
      placeholderInputText =
        "For Eg. -video related to explaining which people will be more powerful,strong and healthy veg or non-veg comparision";
      placeholderDescText =
        "For Eg. - in video person explaining which people more healthy ";
      break;

    case "prompt":
      placeholderInputText =
        "For Eg. -video related to explaining which people will be more powerful,strong and healthy veg or non-veg comparision";
      placeholderDescText = "For Eg. -must explaining all details of scene";
      break;
    case "backgroundMusicGen":
      placeholderInputText =
        "For Eg. -video related to explaining which people will be more powerful,strong and healthy veg or non-veg comparision";
      placeholderDescText = "For Eg. -music is entertaning and fast";
      break;

    case "poll":
      placeholderInputText =
        "For Eg. -video related to explaining which people will be more powerful,strong and healthy veg or non-veg comparision";
      placeholderDescText = "For Eg. -questions are relatable";
      break;
    // Add more cases as needed
    default:
      placeholderInputText = "Enter your input";
      placeholderDescText = "";
  }

  if (availableCredits) {
    return <InsufficientCreditsModal />;
  }
  return (
    <div className=" rounded-xl md:p-6 ">
      {(type === "images" || type === "avatar") && (
        <div className="flex items-center justify-center space-x-2 w-full mb-6 md:p-4 bg-[#1a1a1a]/50 rounded-lg">
          <label className="text-gray-300 font-semibold font-sans">
            Only Video Idea Based
          </label>

          <Switch
            onClick={() => setGenType((prev) => !prev)}
            id="airplane-mode"
            className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[#00F0FF] data-[state=checked]:to-[#B026FF]"
          />
          <label className="text-gray-300 font-semibold font-sans">
            Detailed Prompt Based
          </label>
        </div>
      )}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mb-10 p-2  md:p-6 rounded-xl border border-[#00F0FF]/30"
        >
          <FormField
            control={form.control}
            name="input"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">{topic}</FormLabel>
                <FormControl>
                  <Input
                    className="bg-[#1a1a1a]/50 bg-[#0a0a0a] text-white border border-[#00F0FF]/30 placeholder:text-gray-100 rounded-xl py-6 px-4"
                    placeholder={placeholderInputText}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          {(type === "caption" || type === "comment" || type === "tweet") && (
            <FormField
              control={form.control}
              name="selectTone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-100">{tone}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className=" bg-[#0a0a0a] text-white border border-[#00F0FF]/30  rounded-xl py-6 px-4">
                        <SelectValue placeholder="Select tone" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className=" bg-[#0a0a0a] text-white border border-[#00F0FF]/30 rounded-xl">
                      {email.map((email, index) => (
                        <SelectItem
                          key={index}
                          className="hover:bg-[#00F0FF]/10 hover:text-[#00F0FF] focus:text-[#00F0FF]  focus:bg-[#B026FF]/10"
                          value={email}
                        >
                          {email}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          )}
          <div className="flex gap-4">
            {(type === "images" || type === "avatar" || type === "all") && (
              <FormField
                control={form.control}
                name="selectTone"
                render={({ field }) => (
                  <FormItem className="w-[50%]">
                    <FormLabel className="text-gray-300">{tone}</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-[#0a0a0a] text-white border border-[#00F0FF]/30 rounded-xl py-6 px-4">
                          <SelectValue placeholder="Select style" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#0a0a0a] text-white border border-[#00F0FF]/30 rounded-xl max-h-96 overflow-y-auto">
                        {aiImages.map((categoryObj: AiImages) => (
                          <div
                            key={categoryObj.category}
                            className="py-2 px-4 text-gray-400"
                          >
                            {categoryObj.category}
                            {categoryObj.values.map(
                              (value: string, index: number) => (
                                <SelectItem
                                  key={`${categoryObj.category}-${index}`}
                                  className="hover:bg-[#00F0FF]/10 hover:text-[#00F0FF] focus:text-[#00F0FF] "
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
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
            )}
            {(type === "images" || type === "avatar") && (
              <FormField
                control={form.control}
                name="imageQuality"
                render={({ field }) => (
                  <FormItem className="w-[50%]">
                    <FormLabel className="text-gray-300">
                      Thumbnail Quality:
                    </FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        setSelectedImageQuality(value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-[#0a0a0a] text-white border border-[#00F0FF]/30 rounded-xl py-6 px-4">
                          <SelectValue placeholder="Select quality" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#0a0a0a] text-white border border-[#00F0FF]/30 rounded-xl">
                        {ImageQuality.map((ImageQuality, index) => (
                          <SelectItem
                            key={index}
                            className="hover:bg-[#00F0FF]/10 hover:text-[#00F0FF] focus:text-[#00F0FF] "
                            value={`${ImageQuality}`}
                          >
                            {ImageQuality}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
            )}
          </div>
          <div className="flex gap-4">
            {(type === "images" || type === "avatar" || type === "all") && (
              <FormField
                control={form.control}
                name="inputlag"
                render={({ field }) => (
                  <FormItem className="w-[50%]">
                    <FormLabel className="text-gray-100">
                      Aspect Ratio:
                    </FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        setSelectedAspectRatio(value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-[#0a0a0a] text-white border border-[#00F0FF]/30 rounded-xl py-6 px-4">
                          <SelectValue placeholder="Select ratio" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#0a0a0a] text-white border border-[#00F0FF]/30 rounded-xl">
                        {aspectRatio.map((aspectRatio, index) => (
                          <SelectItem
                            key={index}
                            className="hover:bg-[#00F0FF]/10 hover:text-[#00F0FF] focus:text-[#00F0FF] "
                            value={`${aspectRatio}`}
                          >
                            {aspectRatioDisplayNames[aspectRatio]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
            )}
            {(type === "images" || type === "avatar" || type === "all") && (
              <FormField
                control={form.control}
                name="outputlag"
                render={({ field }) => (
                  <FormItem className="w-[50%]">
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
                        <SelectTrigger className="bg-[#0a0a0a] text-white border border-[#00F0FF]/30 rounded-xl py-6 px-4">
                          <SelectValue
                            placeholder={
                              type === "all" ? "No. Of Poster" : "Select number"
                            }
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#0a0a0a] text-white border border-[#00F0FF]/30 rounded-xl">
                        {noOfImage.map((noOfImage, index) => (
                          <SelectItem
                            key={index}
                            className="hover:bg-[#00F0FF]/10 hover:text-[#00F0FF] focus:text-[#00F0FF] "
                            value={`${noOfImage}`}
                          >
                            {noOfImage}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-400" />
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
                    placeholder={placeholderDescText}
                    maxLength={500}
                    className="bg-[#0a0a0a] text-white border border-[#00F0FF]/30 placeholder:text-gray-500 rounded-xl p-4 h-32"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          {userId ? (
            <Button
              type="submit"
              key="submitButton"
              className="w-full py-6 rounded-full font-bold text-lg bg-gradient-to-r from-[#00F0FF] to-[#B026FF] hover:from-[#00F0FF]/90 hover:to-[#B026FF]/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <div className="flex gap-2 items-center justify-center">
                  Generate
                  <Image
                    src="/assets/icons/coins.svg"
                    alt="coins"
                    width={24}
                    height={24}
                    className="invert"
                  />
                  {credits}
                </div>
              )}
            </Button>
          ) : (
            <Link
              href={"/sign-in"}
              className="w-full py-6 rounded-xl font-bold text-lg bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] hover:opacity-90 transition-opacity text-center block text-white"
            >
              LOGIN
            </Link>
          )}
        </form>
      </Form>

      {!isResponse ? (
        <div>
          {response && (
            <div className="bg-[#0a0a0a] text-white border border-[#00F0FF]/30 flex flex-col gap-4 p-6 my-8">
              <Textarea
                value={response}
                placeholder="Enter Text To Edit"
                className="w-full h-[35vh] md:h-[45vh] bg-[#1a1a1a]/30 border border-[#333] text-gray-300 rounded-xl p-4"
              />
              <div className="flex justify-between items-center">
                <p>Word Count: {countWords(response)}</p>
                <Button
                  onClick={(e) => handleCopyButtonClick(e, response, 0)}
                  className={`rounded-full px-6 py-5 font-medium ${
                    activeStates[0]
                      ? "bg-gradient-to-r from-green-500 to-green-700"
                      : "bg-gradient-to-r from-[#B026FF] to-[#FF2E9F]"
                  }`}
                >
                  <Copy size={20} className="mr-2" />
                  {activeStates[0] ? "Copied" : "Copy"}
                </Button>
              </div>
            </div>
          )}
          {allResponse &&
            allResponse.map((text, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a] text-white border border-[#00F0FF]/30 flex flex-col gap-4 p-6 my-8"
              >
                {index === 0 && (
                  <label className="font-bold text-[#00F0FF]">Caption:</label>
                )}
                {index === 1 && (
                  <label className="font-bold text-[#B026FF]">Hashtags:</label>
                )}
                {index === 2 && (
                  <label className="font-bold text-[#FF2E9F]">
                    Description:
                  </label>
                )}
                <Textarea
                  value={text}
                  placeholder="Enter Text To Edit"
                  className="w-full h-[35vh] md:h-[45vh] bg-[#1a1a1a]/30 border border-[#333] text-gray-300 rounded-xl p-4"
                />
                <div className="flex justify-between items-center">
                  <p>Word Count: {countWords(text)}</p>
                  <Button
                    onClick={(e) => handleCopyButtonClick(e, text, index)}
                    className={`rounded-full px-6 py-5 font-medium ${
                      activeStates[index]
                        ? "bg-gradient-to-r from-green-500 to-green-700"
                        : "bg-gradient-to-r from-[#B026FF] to-[#FF2E9F]"
                    }`}
                  >
                    <Copy size={20} className="mr-2" />
                    {activeStates[index] ? "Copied" : "Copy"}
                  </Button>
                </div>
              </div>
            ))}

          {imageUrl && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
              {imageUrl.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF]/10 to-[#FF2E9F]/10 rounded-xl"></div>
                  <div className="relative z-10">
                    <div className="bg-[#0a0a0a] text-white border border-[#00F0FF]/30 rounded-xl overflow-hidden">
                      <button
                        className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30"
                        onClick={(e) =>
                          downloadHandler(
                            e,
                            item,
                            "image" +
                              (Math.floor(Math.random() * 100) + 1).toString()
                          )
                        }
                      >
                        <DownloadIcon className="text-white" size={20} />
                      </button>
                      <Image
                        alt="generated-image"
                        className="w-full object-contain"
                        src={item}
                        width={arwidth}
                        height={arheight}
                        priority
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="bg-[#0a0a0a] text-white border border-[#00F0FF]/30 overflow-hidden my-8">
          <Skeleton className="h-96 w-full rounded-xl bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a]" />
        </div>
      )}
    </div>
  );
}
