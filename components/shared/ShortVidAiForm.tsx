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
  languages,
  noOfImage,
  shortvidTypes,
  voice,
} from "@/constants";
import {
  fetchShortVidData,
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
import { download, handleCredit, totalCredits } from "@/lib/utils";
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

export default function ShortVidAiForm({ type }: ShortAiFormProps) {
  const { userId } = useAuth();

  const shortVid = shortvidTypes[type];

  const [activeStates, setActiveStates] = useState(Array(5).fill(false));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availableCredits, setAvailableCredits] = useState<boolean>(false);

  const [genType, setGenType] = useState(false);

  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const [isResponse, setIsResponse] = useState(false);

  const [response, setResponse] = useState<string | null>();
  const [selectedAspectRatio, setSelectedAspectRatio] = useState<string>("1:1");
  const [selectedImageQuality, setSelectedImageQuality] =
    useState<string>("HD"); // Default to HD
  const [credits, setCredits] = useState(shortVid.credits);
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
  } = shortVid;

  const [allResponse, setAllResponse] = useState<string[] | null>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
      selectTone: "",
      description:
        type === "thumbnail"
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
      setCredits(Math.ceil((shortVid.credits + fullCredit) * 2));
    } else {
      setCredits(Math.ceil(shortVid.credits + fullCredit));
    }
  }, [selectedAspectRatio, arImage, shortVid.credits, selectedImageQuality]);

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
          } else if (model === "dall-e-3") {
            setImageUrl(res);
            await saveImageUrls(userDbId, res);
          } else {
            setAudioUrl(res);
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
        const res = await fetchShortVidData({
          input,
          selectTone,
          inputlag,
          outputlag,
          description,
        });
        if (res) {
          await updateCredits(userDbId, -credits);
          setAllResponse(res.slice(0, 4));
          setImageUrl(res.slice(4));
          await saveImageUrls(userDbId, res.slice(4));
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
    case "idea":
      placeholderInputText =
        "For Eg. -Give some trending long video ideas for gaming niche,more specificlly battleground mobile india";
      placeholderDescText =
        "For Eg. -ideas must be unique and attracting audience";
      break;
    case "title":
      placeholderInputText =
        "For Eg. -give an attractive titile for video of Top 10 Unknown Myths in indian Society";
      placeholderDescText = "For Eg. -title contain 4-5 words only";
      break;
    case "description":
      placeholderInputText =
        "For Eg. -Give Trending keywords Contain description for giving information about indian history in video";
      placeholderDescText = "For Eg. -provide 50 words description only";
      break;
    case "tags":
      placeholderInputText =
        "For Eg. -Generate trending hashtags for video related to indian culture and tradition ";
      placeholderDescText = "For Eg. -add some hindi trending tags also";
      break;
    case "script":
      placeholderInputText =
        "For Eg. -give an narration script for video idea - Why People think Reach people earn money from corruption ";
      placeholderDescText =
        "For Eg. -starting in script must with explaining what video about imp points which increase audience excitment";
      break;
    case "thumbnail":
      placeholderInputText =
        "For Eg. -video related to explaining which people will be more powerful,strong and healthy veg or non-veg comparision";
      placeholderDescText =
        "For Eg. -thumbnail looks ultra real with yellow neon light to border of all things in image";
      break;
    case "aiimages":
      placeholderInputText =
        "For Eg. -video related to explaining which people will be more powerful,strong and healthy veg or non-veg comparision";
      placeholderDescText =
        "For Eg. - images must explain scenarios happened in this situation ";
      break;
    case "translate":
      placeholderInputText = "For Eg. -Enter option for Type 2";
      placeholderDescText = "";
      break;
    case "slogan":
      placeholderInputText =
        "For Eg. -video related to explaining which people will be more powerful,strong and healthy veg or non-veg comparision";
      placeholderDescText = "For Eg. -5-6 slogan only";
      break;
    case "facts":
      placeholderInputText =
        "For Eg. - generate unknown fact related to science";
      placeholderDescText = "For Eg. -5-6 facts only";
      break;
    case "quote":
      placeholderInputText =
        "For Eg. - generate quote for video related to explaining which people will be more powerful,strong and healthy veg or non-veg comparision";
      placeholderDescText = "generate some qoute in hindi also";
      break;
    case "riddle":
      placeholderInputText =
        "For Eg. - generate riddle for video related to explaining which people will be more powerful,strong and healthy veg or non-veg comparision";
      placeholderDescText = "generate some riddle in hindi also";
      break;
    case "all":
      placeholderInputText =
        "For Eg. -video related to explaining which people will be more powerful,strong and healthy veg or non-veg comparision";
      placeholderDescText =
        "For Eg. - in video person explaining which people more healthy ";
      break;
    case "TexttoAudio":
      placeholderInputText = "";
      placeholderDescText = "";
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
    case "audiotoAudio":
      placeholderInputText = "Enter option for Type 2";
      placeholderDescText = "";
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
    <div>
      {(type === "thumbnail" || type === "aiimages") && (
        <div className="flex items-center justify-center space-x-2 w-full mb-10">
          <label className="text-n-8 font-semibold font-sans">
            Only Video Idea Based
          </label>

          <Switch
            onClick={() => setGenType((prev) => !prev)}
            id="airplane-mode"
          />
          <label className="text-n-8 font-semibold font-sans">
            Detailed Prompt Based
          </label>
        </div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {type !== "translate" && type !== "TexttoAudio" && (
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
          )}
          <div className="flex ">
            {type === "translate" && (
              <FormField
                control={form.control}
                name="inputlag"
                render={({ field }) => (
                  <FormItem className="flex-auto">
                    <FormLabel className="text-n-8">{tone}</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="select-field">
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {languages.map((language, index) => (
                          <SelectItem
                            key={index}
                            className="bg-white text-gray-700 text-lg font-xs py-2 px-4 mb-4 w-[10vw] m-auto text-center justify-center  flex"
                            value={language}
                          >
                            {language}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {type === "translate" && (
              <FormField
                control={form.control}
                name="outputlag"
                render={({ field }) => (
                  <FormItem className="flex-auto">
                    <FormLabel className="text-n-8">{tone}</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="select-field">
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {languages.map((language, index) => (
                          <SelectItem
                            key={index}
                            className="bg-white text-gray-700 text-lg font-xs py-2 px-4 mb-4 w-[10vw] m-auto text-center justify-center  flex"
                            value={language}
                          >
                            {language}
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

          {(type === "slogan" ||
            type === "facts" ||
            type === "quote" ||
            type === "riddle" ||
            type === "backgroundMusicGen") && (
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
          <div className="flex">
            {(type === "aiimages" ||
              type === "thumbnail" ||
              type === "all") && (
              <FormField
                control={form.control}
                name="selectTone"
                render={({ field }) => (
                  <FormItem className="w-[50%]">
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
            )}{" "}
            {(type === "thumbnail" || type === "aiimages") && (
              <FormField
                control={form.control}
                name="imageQuality"
                render={({ field }) => (
                  <FormItem className="w-[50%]">
                    <FormLabel className="text-n-8">
                      Thumbnail Quality:
                    </FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value); // Update form field value

                        setSelectedImageQuality(value);
                        // Update aspect ratio in state
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="select-field ">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ImageQuality.map((ImageQuality, index) => (
                          <SelectItem
                            key={index}
                            className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                            value={`${ImageQuality}`}
                          >
                            {ImageQuality}
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
          <div className="flex ">
            {(type === "aiimages" ||
              type === "thumbnail" ||
              type === "all") && (
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
            {(type === "aiimages" ||
              type === "thumbnail" ||
              type === "all") && (
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
                          <SelectValue />
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
          {type === "TexttoAudio" && (
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
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {voice.map((voice, index) => (
                        <SelectItem
                          key={index}
                          className="bg-white hover:bg-gray-100 text-black text-lg  py-2 px- mb-4 m-auto text-center flex min-w-max"
                          value={`${voice}`}
                        >
                          {voice}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name={
              type === "translate" || type === "TexttoAudio"
                ? "input"
                : "description"
            }
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-n-8">
                  {type == "translate" || type == "TexttoAudio"
                    ? "Include Text Here (max : 500 word)"
                    : subtopic}
                </FormLabel>
                <FormControl>
                  <Textarea
                    maxLength={
                      type === "translate" || type === "TexttoAudio"
                        ? 3000
                        : 500
                    }
                    placeholder={placeholderDescText}
                    className="select-field resize-none"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      if (type === "TexttoAudio") {
                        const earnCredit = handleCredit(e.target.value);
                        setCredits(earnCredit);
                      }
                    }}
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
        <div>
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
                    Title :
                  </label>
                )}
                {index === 1 && (
                  <label className="flex-2 font-sans font-bold text-n-8">
                    Describtion :
                  </label>
                )}
                {index === 2 && (
                  <label className="flex-2 font-sans font-bold text-n-8">
                    Hashtags :
                  </label>
                )}
                {index === 3 && (
                  <label className="flex-2 font-sans font-bold text-n-8">
                    Script :
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
          {audioUrl && (
            <div className="min-h-max h-[30vh] md:h-[80vh]   p-5 m-auto flex flex-col w-full gap-2">
              <audio controls>
                <source src={audioUrl} type="audio/mpeg" />
              </audio>
            </div>
          )}

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
