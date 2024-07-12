"use server";

import { aiprompt } from "@/constants";
import OpenAI from "openai";

import { v2 as cloudinary } from "cloudinary";

const openai = setupOpenAI();
function setupOpenAI() {
  if (!process.env.OPENAI_API_KEY) {
    return new Error("OpenAI API key is not set");
  }
  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

interface GenerateGptResponseParams {
  input: string;
  inputlag?: string;
  outputlag?: string;
  selectTone?: string;
  description?: string;
  aiprompt: string;
  model: string;
  genType?: boolean;
  imageQuality?: string;
}
export const generateGptResponse = async ({
  input,
  inputlag,
  outputlag,
  selectTone,
  description,
  aiprompt,
  model,
  genType,
  imageQuality,
}: GenerateGptResponseParams) => {
  if (openai instanceof Error) {
    throw openai;
  }

  if (model === "gpt-3.5-turbo") {
    if (inputlag || outputlag) {
      const completion = await openai.chat.completions.create({
        model: `${model}`,
        messages: [
          {
            role: "system",
            content:
              "you are an expert content creator or influencer. you will be given a list of main tasks . Your job is to return a best results based on provided content .",
          },
          {
            role: "user",
            content: `input language-[${inputlag}] and output language-[${outputlag}] and provided input is '${input}'want to do ${aiprompt}`,
          },
        ],

        temperature: 1,
      });

      const gptArgs = completion?.choices[0]?.message?.content;

      if (!gptArgs) {
        throw new Error("Bad response from OpenAI");
      }

      return JSON.parse(JSON.stringify(gptArgs));
    } else if (selectTone) {
      const completion = await openai.chat.completions.create({
        model: `${model}`,
        messages: [
          {
            role: "system",
            content:
              "you are an expert content creator or influencer. you will be given a list of main tasks . Your job is to return a best results based on provided content .",
          },
          {
            role: "user",
            content: `context input-[${input}] with the tone of '${selectTone}' also consider this '${description}'want to do ${aiprompt} `,
          },
        ],

        temperature: 1,
      });

      const gptArgs = completion?.choices[0]?.message?.content;

      if (!gptArgs) {
        throw new Error("Bad response from OpenAI");
      }

      return JSON.parse(JSON.stringify(gptArgs));
    } else {
      const completion = await openai.chat.completions.create({
        model: `${model}`,
        messages: [
          {
            role: "system",
            content:
              "you are an expert content creator or influencer. you will be given a list of main tasks . Your job is to return a best results based on provided content .",
          },
          {
            role: "user",
            content: `context input-[${input}] also consider this '${description}' want to do ${aiprompt} `,
          },
        ],

        temperature: 1,
      });

      const gptArgs = completion?.choices[0]?.message?.content;

      if (!gptArgs) {
        throw new Error("Bad response from OpenAI");
      }

      return JSON.parse(JSON.stringify(gptArgs));
    }
  } else if (model === "dall-e-3") {
    if (!genType) {
      try {
        const completion = await openai.chat.completions.create({
          model: `gpt-3.5-turbo`,
          messages: [
            {
              role: "system",
              content: `you are an expert content creator or influencer. you will be given a list of main tasks . must provide output like this only -- desc1,desc2,desc3,etc `,
            },
            {
              role: "user",
              content: `context input-[${input}] with the tone of '${selectTone}' also consider this '${description}' want to do ${aiprompt} `,
            },
          ],

          temperature: 0.3,
          max_tokens: 1500,
        });
        const pregptArgs = completion?.choices[0]?.message?.content;

        if (!pregptArgs) {
          throw new Error("Bad response from OpenAI");
        }

        const concepts = pregptArgs
          .split("\n")
          .filter((item) => item.trim() !== "");

        let noOfImageG: number;

        if (!outputlag) {
          noOfImageG = 1;
        } else {
          noOfImageG = parseInt(outputlag);
        }

        const promises: Promise<string>[] = [];
        let Quality: "standard" | "hd" | undefined;
        if (imageQuality === "HD") {
          Quality = "standard";
        } else {
          Quality = "hd";
        }
        for (let i = 0; i < noOfImageG; i++) {
          const promise = (async () => {
            try {
              const image = await openai.images.generate({
                model: model,
                prompt: concepts[i],
                size: inputlag as imageType,
                quality: Quality,
                response_format: "url",
                n: 1,
              });

              const imageUrl = image?.data[0]?.url;
              if (!imageUrl) {
                throw new Error("Bad response from OpenAI");
              }

              return imageUrl;
            } catch (error) {
              throw new Error(`Error generating image: ${error}`);
            }
          })();
          promises.push(promise);
        }
        const imageUrls = await Promise.all(promises);
        return imageUrls;
      } catch (error) {
        throw new Error("Bad response from OpenAI");
      }
    } else {
      try {
        let noOfImageG: number;

        if (!outputlag) {
          noOfImageG = 1;
        } else {
          noOfImageG = parseInt(outputlag);
        }
        const promises: Promise<string>[] = [];

        let Quality1: "standard" | "hd" | undefined;
        if (imageQuality === "HD") {
          Quality1 = "standard";
        } else {
          Quality1 = "hd";
        }
        for (let i = 0; i < noOfImageG; i++) {
          const promise = (async () => {
            try {
              const image = await openai.images.generate({
                model: model,
                prompt: input,
                size: Quality1 as imageType,
                quality: Quality1,
                response_format: "url",
                n: 1,
              });

              const imageUrl = image?.data[0]?.url;
              if (!imageUrl) {
                throw new Error("Bad response from OpenAI");
              }

              return imageUrl;
            } catch (error) {
              throw new Error(`Error generating image: ${error}`);
            }
          })();
          promises.push(promise);
        }
        const imageUrls = await Promise.all(promises);
        return imageUrls;
      } catch (error) {
        throw new Error("Bad response from OpenAI");
      }
    }
  } else if (model === "tts-1-hd") {
    try {
      const mp3 = await openai.audio.speech.create({
        model: `${model}`,
        voice: `${selectTone}` as voiceType,
        input: `${input}`,
        speed: 0.95,
      });
      cloudinary.config({
        cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });
      const speechBuffer = Buffer.from(await mp3.arrayBuffer());

      const uploadResult: any = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ resource_type: "video" }, (error, uploadResult) => {
            if (error) {
              reject(error);
            } else {
              resolve(uploadResult);
            }
          })
          .end(speechBuffer);
      });
      const gptArgs = uploadResult?.secure_url;

      if (!gptArgs) {
        throw new Error("Bad response from OpenAI");
      }

      return JSON.parse(JSON.stringify(gptArgs));
    } catch (error) {
      throw new Error(`Bad response from OpenAI : ${error}`);
    }
  } else {
    throw new Error("Bad response from OpenAI");
  }
};

const longvidTypes = aiprompt.find((item) => item.id === 1)?.longvidTypes || [];
const shortvidTypes =
  aiprompt.find((item) => item.id === 2)?.shortvidTypes || [];
const contentwriterTypes =
  aiprompt.find((item) => item.id === 3)?.contentwriterTypes || [];
const socialmediaTypes =
  aiprompt.find((item) => item.id === 4)?.socialmediaTypes || [];
const marketingTypes =
  aiprompt.find((item) => item.id === 5)?.marketingTypes || [];

// Function to make multiple requests simultaneously
export async function fetchLongVidData({
  input,
  inputlag,
  outputlag,
  selectTone,
  description,
}: {
  input: string;
  inputlag: string | undefined;
  outputlag: string | undefined;
  selectTone: string | undefined;
  description: string | undefined;
}): Promise<any[]> {
  const promises = longvidTypes.map((item, index) => {
    try {
      const promise = generateGptResponse({
        input,
        inputlag: index < 5 ? undefined : inputlag,
        outputlag: index < 5 ? undefined : outputlag,
        selectTone: index < 5 ? undefined : selectTone,
        description,
        aiprompt: item.prompt,
        model: item.model,
        genType: false,
        imageQuality: "HD",
      });
      return promise;
    } catch (error) {
      throw new Error(`Bad response from OpenAI : ${error}`);
    }
  });
  const allResponses = await Promise.all(promises);
  return allResponses.reduce((acc, cur) => acc.concat(cur), []);
}

// Example usage
export async function fetchShortVidData({
  input,
  inputlag,
  outputlag,
  selectTone,
  description,
}: {
  input: string;
  inputlag: string | undefined;
  outputlag: string | undefined;
  selectTone: string | undefined;
  description: string | undefined;
}): Promise<any[]> {
  const promises = shortvidTypes.map((item, index) => {
    try {
      const promise = generateGptResponse({
        input,
        inputlag: index < 4 ? undefined : inputlag,
        outputlag: index < 4 ? undefined : outputlag,
        selectTone: index < 4 ? undefined : selectTone,
        description,
        aiprompt: item.prompt,
        model: item.model,
        genType: false,
        imageQuality: "HD",
      });
      return promise;
    } catch (error) {
      throw new Error(`Bad response from OpenAI : ${error}`);
    }
  });
  const allResponses = await Promise.all(promises);
  return allResponses.reduce((acc, cur) => acc.concat(cur), []);
}

export async function fetchContentWriterData({
  input,
  inputlag,
  outputlag,
  selectTone,
  description,
}: {
  input: string;
  inputlag: string | undefined;
  outputlag: string | undefined;
  selectTone: string | undefined;
  description: string | undefined;
}): Promise<any[]> {
  const promises = contentwriterTypes.map((item, index) => {
    try {
      const promise = generateGptResponse({
        input,
        inputlag: index < 6 ? undefined : inputlag,
        outputlag: index < 6 ? undefined : outputlag,
        selectTone: index < 6 ? undefined : selectTone,
        description,
        aiprompt: item.prompt,
        model: item.model,
        genType: false,
        imageQuality: "HD",
      });
      return promise;
    } catch (error) {
      throw new Error(`Bad response from OpenAI : ${error}`);
    }
  });
  const allResponses = await Promise.all(promises);
  return allResponses.reduce((acc, cur) => acc.concat(cur), []);
}

export async function fetchSocialMediaData({
  input,
  inputlag,
  outputlag,
  selectTone,
  description,
}: {
  input: string;
  inputlag: string | undefined;
  outputlag: string | undefined;
  selectTone: string | undefined;
  description: string | undefined;
}): Promise<any[]> {
  const promises = socialmediaTypes.map((item, index) => {
    try {
      const promise = generateGptResponse({
        input,
        inputlag: index < 3 ? undefined : inputlag,
        outputlag: index < 3 ? undefined : outputlag,
        selectTone: index < 3 ? undefined : selectTone,
        description,
        aiprompt: item.prompt,
        model: item.model,
        genType: false,
        imageQuality: "HD",
      });
      return promise;
    } catch (error) {
      throw new Error(`Bad response from OpenAI : ${error}`);
    }
  });
  const allResponses = await Promise.all(promises);
  return allResponses.reduce((acc, cur) => acc.concat(cur), []);
}

export async function fetchMarketingData({
  input,
  inputlag,
  outputlag,
  selectTone,
  description,
}: {
  input: string;
  inputlag: string | undefined;
  outputlag: string | undefined;
  selectTone: string | undefined;
  description: string | undefined;
}): Promise<any[]> {
  const promises = marketingTypes.map((item, index) => {
    try {
      const promise = generateGptResponse({
        input,
        inputlag: index < 3 ? undefined : inputlag,
        outputlag: index < 3 ? undefined : outputlag,
        selectTone: index < 3 ? undefined : selectTone,
        description,
        aiprompt: item.prompt,
        model: item.model,
        genType: false,
        imageQuality: "HD",
      });
      return promise;
    } catch (error) {
      throw new Error(`Bad response from OpenAI : ${error}`);
    }
  });
  const allResponses = await Promise.all(promises);
  return allResponses.reduce((acc, cur) => acc.concat(cur), []);
}
