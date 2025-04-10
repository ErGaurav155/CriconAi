"use client";

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/solid";

import { MinusIcon } from "@heroicons/react/24/outline";
import Header from "./Header";

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(0);

  const openDrawer = (value: number) =>
    setIsDrawerOpen(open === value ? 0 : value);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="w-full p-1">
      <Header title="Frequently Asked Questions" />
      <div className="">
        <Accordion
          onClick={() => openDrawer(1)}
          open={open === 1}
          className=" static bg-sky-100 hover:bg-sky-100 font-medium mt-10 flex mb-4 rounded-lg px-4"
        >
          <div className="flex-auto">
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`border-b-0  transition-colors ${
                open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              What is Ai content generator or writer ?
            </AccordionHeader>

            <AccordionBody className="pt-0 text-base font-normal">
              AI writer is a software or program that uses artificial
              intelligence technology to automatically generate written content.
              It leverages algorithms and language models to mimic human writing
              styles and produce text that appears to be written by a person. AI
              writers are valuable tools for businesses and individuals seeking
              to streamline content creation and generate large volumes of text
              efficiently.
            </AccordionBody>
          </div>
          <div
            onClick={() => handleOpen(1)}
            className="flex-auto w-20 flex  mt-3 justify-center "
          >
            {isDrawerOpen !== 1 ? (
              <PlusIcon className="h-8 w-8 stroke-2 text-left" />
            ) : (
              <MinusIcon className="h-8 w-8 stroke-2 text-left" />
            )}
          </div>
        </Accordion>

        <Accordion
          onClick={() => openDrawer(2)}
          open={open === 2}
          className="static bg-sky-100 hover:bg-sky-100  font-medium  flex mb-4 rounded-lg px-4"
        >
          <div className="flex-auto">
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`border-b-0 transition-colors ${
                open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              How does Ai generator or writer work?
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              AI writer operates by employing advanced algorithms and language
              models. It analyzes vast amounts of data to understand language
              patterns, styles, and structures. Using this knowledge, the AI
              writer generates text by predicting and assembling words and
              phrases to create coherent and contextually appropriate content,
              closely resembling human-written text.
            </AccordionBody>
          </div>
          <div
            onClick={() => handleOpen(2)}
            className="flex-auto w-20 flex  mt-3 justify-center "
          >
            {isDrawerOpen !== 2 ? (
              <PlusIcon className="h-8 w-8 stroke-2 text-left" />
            ) : (
              <MinusIcon className="h-8 w-8 stroke-2 text-left" />
            )}
          </div>
        </Accordion>
        <Accordion
          onClick={() => openDrawer(3)}
          open={open === 3}
          className="static bg-sky-100 hover:bg-sky-100  font-medium  flex mb-4 rounded-lg px-4 "
        >
          <div className="flex-auto">
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`border-b-0 transition-colors ${
                open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              How Ai generators impacting the content generation
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal ">
              AI generators impact content generation by offering efficiency,
              versatility, cost-effectiveness, personalization, and creative
              inspiration, while raising ethical considerations around copyright
              and authenticity.
            </AccordionBody>
          </div>
          <div
            onClick={() => handleOpen(3)}
            className="flex-auto w-20 flex pl-[1rem] mt-3 justify-center "
          >
            {isDrawerOpen !== 3 ? (
              <PlusIcon className="h-8 w-8 stroke-2 " />
            ) : (
              <MinusIcon className="h-8 w-8 stroke-2 " />
            )}
          </div>
        </Accordion>
        <Accordion
          onClick={() => openDrawer(4)}
          open={open === 4}
          className="static bg-sky-100 hover:bg-sky-100  font-medium  flex mb-4 rounded-lg px-4 "
        >
          <div className="flex-auto">
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className={`border-b-0 transition-colors ${
                open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              How can content creators and writers benifits from Ai generator?
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal ">
              Content creators and writers can benefit from AI generators by
              automating repetitive tasks, such as generating outlines,
              researching topics, and drafting initial content, thereby saving
              time and increasing productivity. AI generators can also provide
              creative suggestions, offer language refinement, and help with
              content optimization for SEO, enhancing the overall quality and
              effectiveness of their work. Additionally, by leveraging AI
              generators, writers can explore new ideas, overcome creative
              blocks, and focus more on the strategic aspects of their content
              creation process.
            </AccordionBody>
          </div>
          <div
            onClick={() => handleOpen(4)}
            className="flex-auto w-20 flex  mt-3 justify-center "
          >
            {isDrawerOpen !== 4 ? (
              <PlusIcon className="h-8 w-8 stroke-2 " />
            ) : (
              <MinusIcon className="h-8 w-8 stroke-2 " />
            )}
          </div>
        </Accordion>
        <Accordion
          onClick={() => openDrawer(5)}
          open={open === 5}
          className="static bg-sky-100 hover:bg-sky-100  font-medium  flex mb-4 rounded-lg px-4 "
        >
          <div className="flex-auto">
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className={`border-b-0 transition-colors ${
                open === 5 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              Can Ai generator produce unique content?
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal ">
              AI text generator has the capability to produce unique content by
              leveraging its language models and algorithms to generate text
              that may not exist elsewhere. However, the uniqueness and
              originality of the content can vary depending on the data and
              training the AI model has received. While an AI text generator can
              assist in content creation, it is essential for human writers to
              review and refine the generated content to ensure its uniqueness
              and alignment with specific requirements.
            </AccordionBody>
          </div>
          <div
            onClick={() => handleOpen(5)}
            className="flex-auto w-20 flex  mt-3 justify-center "
          >
            {isDrawerOpen !== 5 ? (
              <PlusIcon className="h-8 w-8 stroke-2 " />
            ) : (
              <MinusIcon className="h-8 w-8 stroke-2 " />
            )}
          </div>
        </Accordion>
        <Accordion
          onClick={() => openDrawer(6)}
          open={open === 6}
          className="static bg-sky-100 hover:bg-sky-100  font-medium  flex mb-4 rounded-lg px-4 "
        >
          <div className="flex-auto">
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className={`border-b-0 transition-colors ${
                open === 6 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              Which is the best Ai content generator?
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal ">
              Most AI text generators use similar technologies, so people look
              for a good user experience, free tooling, and possibilities.
              Cricon receives positive feedback due to its all-in-one feature
              for content creators ,youtubers and influencers wih many AI tools.
            </AccordionBody>
          </div>
          <div
            onClick={() => handleOpen(6)}
            className="flex-auto w-20 flex pl-[1rem] mt-3 justify-center "
          >
            {isDrawerOpen !== 6 ? (
              <PlusIcon className="h-8 w-8 stroke-2 " />
            ) : (
              <MinusIcon className="h-8 w-8 stroke-2 " />
            )}
          </div>
        </Accordion>
        <Accordion
          onClick={() => openDrawer(7)}
          open={open === 7}
          className="static bg-sky-100 hover:bg-sky-100  font-medium  flex mb-4 rounded-lg px-4 "
        >
          <div className="flex-auto">
            <AccordionHeader
              onClick={() => handleOpen(7)}
              className={`border-b-0 transition-colors ${
                open === 7 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              Does CriconAi support languages other than English?
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal ">
              Yes, Cricon AI text generator supports 25+ languages. So, you
              don’t have to worry about communicating your message with people
              globally. Here’s a complete list of languages that Writesonic
              supports: English, French, Spanish, Italian, German, Polish,
              Portuguese, Dutch, Japanese, Russian, Chinese, Bulgarian, Czech,
              Danish, Greek, Hungarian, Lithuanian, Latvian, Romanian, Slovak,
              Slovenian, Swedish, Finnish, and Estonian.
            </AccordionBody>
          </div>
          <div
            onClick={() => handleOpen(7)}
            className="flex-auto w-20 flex  mt-3 justify-center "
          >
            {isDrawerOpen !== 7 ? (
              <PlusIcon className="h-8 w-8 stroke-2 " />
            ) : (
              <MinusIcon className="h-8 w-8 stroke-2 " />
            )}
          </div>
        </Accordion>
        <Accordion
          onClick={() => openDrawer(8)}
          open={open === 8}
          className="static bg-sky-100 hover:bg-sky-100  font-medium  flex mb-4 rounded-lg px-4 "
        >
          <div className="flex-auto">
            <AccordionHeader
              onClick={() => handleOpen(8)}
              className={`border-b-0 transition-colors ${
                open === 8 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              Can Ai generate Images/Thumbnails?{" "}
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal ">
              Yes, AI can generate images and thumbnails through techniques like
              generative adversarial networks (GANs) and deep learning
              algorithms. These algorithms analyze and learn from large datasets
              of images to generate new ones that mimic the characteristics of
              the training data. AI-generated images can be used for various
              purposes, including creating thumbnails for videos, generating
              artwork, designing product visuals, and more.
            </AccordionBody>
          </div>
          <div
            onClick={() => handleOpen(8)}
            className="flex-auto w-20 flex  mt-3 justify-center "
          >
            {isDrawerOpen !== 8 ? (
              <PlusIcon className="h-8 w-8 stroke-2 " />
            ) : (
              <MinusIcon className="h-8 w-8 stroke-2 " />
            )}
          </div>
        </Accordion>
      </div>
    </div>
  );
}
