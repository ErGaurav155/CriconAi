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
    <div className="w-full pb-16">
      <Header title="Frequently Asked Questions" />

      <div className="space-y-4 mt-8">
        {faqData.map((item, index) => (
          <Accordion
            key={index}
            onClick={() => openDrawer(index + 1)}
            open={open === index + 1}
            className="bg-[#1a1a1a]/50 border border-[#333] rounded-xl overflow-hidden transition-all hover:border-[#B026FF]/50"
          >
            <div className="flex items-start">
              <div className="flex-1 p-4">
                <AccordionHeader
                  onClick={() => handleOpen(index + 1)}
                  className={`border-b-0 p-0 text-left font-bold text-lg hover:text-gray-300 ${
                    open === index + 1
                      ? "bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]"
                      : "text-white"
                  }`}
                >
                  {item.question}
                </AccordionHeader>

                <AccordionBody className="pt-4 text-gray-300">
                  {item.answer}
                </AccordionBody>
              </div>

              <div
                onClick={() => handleOpen(index + 1)}
                className="p-4 flex items-center justify-center"
              >
                {isDrawerOpen !== index + 1 ? (
                  <PlusIcon className="h-6 w-6 text-[#00F0FF]" />
                ) : (
                  <MinusIcon className="h-6 w-6 text-[#FF2E9F]" />
                )}
              </div>
            </div>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

const faqData = [
  {
    question: "What is Ai content generator or writer?",
    answer:
      "AI writer is a software or program that uses artificial intelligence technology to automatically generate written content. It leverages algorithms and language models to mimic human writing styles and produce text that appears to be written by a person. AI writers are valuable tools for businesses and individuals seeking to streamline content creation and generate large volumes of text efficiently.",
  },
  {
    question: "How does Ai generator or writer work?",
    answer:
      "AI writer operates by employing advanced algorithms and language models. It analyzes vast amounts of data to understand language patterns, styles, and structures. Using this knowledge, the AI writer generates text by predicting and assembling words and phrases to create coherent and contextually appropriate content, closely resembling human-written text.",
  },
  {
    question: "How Ai generators impacting the content generation",
    answer:
      "AI generators impact content generation by offering efficiency, versatility, cost-effectiveness, personalization, and creative inspiration, while raising ethical considerations around copyright and authenticity.",
  },
  {
    question: "How can content creators and writers benefit from Ai generator?",
    answer:
      "Content creators and writers can benefit from AI generators by automating repetitive tasks, such as generating outlines, researching topics, and drafting initial content, thereby saving time and increasing productivity. AI generators can also provide creative suggestions, offer language refinement, and help with content optimization for SEO, enhancing the overall quality and effectiveness of their work. Additionally, by leveraging AI generators, writers can explore new ideas, overcome creative blocks, and focus more on the strategic aspects of their content creation process.",
  },
  {
    question: "Can Ai generator produce unique content?",
    answer:
      "AI text generator has the capability to produce unique content by leveraging its language models and algorithms to generate text that may not exist elsewhere. However, the uniqueness and originality of the content can vary depending on the data and training the AI model has received. While an AI text generator can assist in content creation, it is essential for human writers to review and refine the generated content to ensure its uniqueness and alignment with specific requirements.",
  },
  {
    question: "Which is the best Ai content generator?",
    answer:
      "Most AI text generators use similar technologies, so people look for a good user experience, free tooling, and possibilities. Cricon receives positive feedback due to its all-in-one feature for content creators, youtubers and influencers with many AI tools.",
  },
  {
    question: "Does CriconAi support languages other than English?",
    answer:
      "Yes, Cricon AI text generator supports 25+ languages. So, you don't have to worry about communicating your message with people globally. Here's a complete list of languages that Writesonic supports: English, French, Spanish, Italian, German, Polish, Portuguese, Dutch, Japanese, Russian, Chinese, Bulgarian, Czech, Danish, Greek, Hungarian, Lithuanian, Latvian, Romanian, Slovak, Slovenian, Swedish, Finnish, and Estonian.",
  },
  {
    question: "Can Ai generate Images/Thumbnails?",
    answer:
      "Yes, AI can generate images and thumbnails through techniques like generative adversarial networks (GANs) and deep learning algorithms. These algorithms analyze and learn from large datasets of images to generate new ones that mimic the characteristics of the training data. AI-generated images can be used for various purposes, including creating thumbnails for videos, generating artwork, designing product visuals, and more.",
  },
];
