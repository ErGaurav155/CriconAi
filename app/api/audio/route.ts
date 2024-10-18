import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const theFile: File | null = data.get("file") as unknown as File;
  const value1: string | null = data.get("selectTone") as unknown as string;
  const outputlag: string | null = data.get("outputlag") as unknown as string;

  const formData = new FormData();
  formData.append("file", theFile);
  formData.append("model", "whisper-1");

  const response = await fetch(
    "https://api.openai.com/v1/audio/transcriptions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: formData,
    }
  );

  const body = await response.json();
  const messages = [
    { role: "system", content: "You are a translator." },
    {
      role: "user",
      content: `convert text-" ${body.text} "into ${outputlag} language `,
    },
  ];
  const formData1 = {
    model: "gpt-3.5-turbo",
    messages: messages,
  };
  const completion = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData1),
  });
  const resData = await completion.json();

  const messageContent = resData.choices[0]?.message?.content;

  if (!messageContent) {
    return;
  }

  const formData2 = {
    model: "tts-1",
    voice: value1 as voiceType,
    input: messageContent,
  };
  const response2 = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData2),
  });
  cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  const speechBuffer = Buffer.from(await response2.arrayBuffer());

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

  return NextResponse.json({ output: gptArgs });
}
