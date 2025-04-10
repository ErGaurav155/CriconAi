import benefitIcon1 from "@/public/assets/benefits/icon-1.svg";
import benefitIcon2 from "@/public/assets/benefits/icon-2.svg";
import benefitIcon3 from "@/public/assets/benefits/icon-3.svg";
import benefitIcon4 from "@/public/assets/benefits/icon-4.svg";
import benefitImage2 from "@/public/assets/benefits/image-2.png";
import roadmap4 from "@/public/assets/roadmap/image-4.png";
import roadmap1 from "@/public/assets/roadmap/image-1.png";
import roadmap2 from "@/public/assets/roadmap/image-2.png";
import roadmap3 from "@/public/assets/roadmap/image-3.png";
import recording03 from "@/public/assets/recording-03.svg";
import recording01 from "@/public/assets/recording-01.svg";
import disc02 from "@/public/assets/disc-02.svg";
import chromecast from "@/public/assets/chrome-cast.svg";
import sliders04 from "@/public/assets/sliders-04.svg";

export const plans = [
  {
    _id: 1,
    name: "Basic Package",
    icon: "/assets/icons/free-plan.svg",
    original: 499,
    price: 299,
    usdPrice: 6,
    usdOriginal: 10,

    credits: 350,
    inclusions: [
      {
        label: "325 Credits + 25 FREE ",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: false,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
      {
        label: "Priority To Future Services",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "Pro Package",
    icon: "/assets/icons/free-plan.svg",
    original: 999,
    price: 599,
    usdPrice: 10,
    usdOriginal: 15,

    credits: 725,
    inclusions: [
      {
        label: "625 Credits + 100 FREE ",
        isIncluded: true,
      },

      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
      {
        label: "Priority To Future Services",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "Premium Package",
    icon: "/assets/icons/free-plan.svg",
    original: 3999,
    price: 2999,
    usdPrice: 49,
    usdOriginal: 69,

    credits: 3750,
    inclusions: [
      {
        label: "3500 Credits + 250 FREE",
        isIncluded: true,
      },

      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: true,
      },
      {
        label: "Priority To Future Services",
        isIncluded: true,
      },
    ],
  },
];

interface AiImages {
  category: string;
  values: string[];
}

export const aiImages: AiImages[] = [
  {
    category: "PhotoStyle",
    values: [
      "Indoor",
      "Outdoor",
      "BlackAndWhite",
      "CloseUp",
      "Cyberpunk",
      "StudioShot",
      "MotionBlur",
      "BoldPortrait",
      "WaterAction",
      "Sunset",
      "AdvertisingProduct",
    ],
  },
  {
    category: "style3d",
    values: [
      "CuteIsometric",
      "Neon",
      "Ultra Realistic",
      "CuteCharacter",
      "CuteAvatar",
      "Origami",
      "AnimatedCharacter",
      "StoneCarving",
    ],
  },
  {
    category: "artstyles",
    values: [
      "Watercolor",
      "PastelDrawing",
      "Cartoon",
      "OilPainting",
      "PencilSketch",
      "PaperCollage",
      "StreetArt",
      "Anime",
      "Creepy",
      "FantasyCartoon",
    ],
  },
  {
    category: "digitalstyle",
    values: [
      "PixelArt",
      "CuteSticker",
      "Papercraft",
      "Futuristic",
      "Emoji",
      "Punk",
      "NeonAvatar",
    ],
  },
];

export const languages = [
  "English",
  "Hindi",
  "Marathi",
  "urdu",
  "tamil",
  "telugu",
  "Malayalam",
  "Arabic",
  "Chinese",
  "Russian",
  "Spanish",
  "Turkish",
];
export const email = [
  "Friendly",
  "Relaxed",
  "Professional",
  "Bold",
  "Adventurous",
  "Witty",
  "Persuasive",
  "Empathetic",
];

export const voice = ["alloy", "echo", "fable", "onyx", "nova", "shimmer"];

export const aspectRatio: string[] = ["1024x1024", "1792x1024", "1024x1792"];

export const noOfImage = ["1", "2", "3"];
export const ImageQuality = ["4K", "HD"];

export const aspectRatioDisplayNames: Record<string, string> = {
  "1024x1024": "1:1 - 1024x1024",
  "1792x1024": "16:9 - 1792x1024",
  "1024x1792": "9:16 - 1024x1792",
};

export const longvidTypes = {
  idea: {
    type: "idea",
    title: "Video Idea Generator",
    topic: "Describe the kind of idea you want",
    subtopic: "Include more info",
    tone: "",
    aiprompt: `Given the specific niche provided as input in square bracket, generate content ideas for long videos (e.g., on YouTube) within that niche. These ideas should be engaging, informative, and suitable for a longer format. Consider the interests and preferences of the target audience and trends within the given niche. 
    1. Propose video topics that align with the interests and trends within the specified niche.
    2. Consider the potential duration of the videos, aiming for a longer format.
    3. Include elements that enhance engagement, such as storytelling, demonstrations, or in-depth analysis.
    4. Keep the content informative and valuable to cater to the niche's audience.
    5. generate only 10 ideas 
    6. only generate headline don’t explain it.
    generate content ideas that are not only relevant to the specified niche but are also suitable for longer video formats. Adjust the instructions as needed based on your niche and content requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  title: {
    type: "title",
    title: "Title Generator",
    topic: "Describe the topic for title",
    subtopic: "Include more info",
    tone: "",
    aiprompt: `Craft attention-grabbing, humorous, and unique titles for a YouTube adventure series only 5 titles on provided input. Each title should promise a blend of laughter, excitement, and something truly uncommon to pique viewers' curiosity. Strive for click-worthy titles that stand out from the crowd and entice viewers to hit play. Ensure a touch of humor, a dash of the unexpected, and a sense of uniqueness in each title to create intrigue and engagement.
    `,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  description: {
    type: "description",
    title: "Description Generator",
    topic: "Describe the topic of your content",
    subtopic: "Include more information ",
    tone: "",
    aiprompt: `Given the context or post provided as input, craft a creative and unique description that adds depth and interest. Develop a description that captivates the audience, providing additional insights and enhancing the overall impact of the content.

    Instructions:
    1. Generate a description that generate pride and respect about  the provided context or post.
    2. Consider incorporating imaginative language, vivid imagery, biographical information .
    3. Ensure the description complements the tone and theme of the content it accompanies.
    4. Aim for originality and a description that sparks curiosity or emotion that easily understand by peoples.
    5.  Ensure by default generate output in hinglish language if no language is provided in context.
    
    Generate distinctive and engaging description tailored to the provided content. Adjust the instructions as needed based on your specific description generation requirements.`,

    credits: 1,
    model: "gpt-3.5-turbo",
  },
  tags: {
    type: "tags",
    title: "Tags Generator",
    topic: "Describe the topic for tags generation",
    subtopic: "Add more information ",
    tone: "",
    aiprompt: `Given the context or post provided as input, generate creative and unique hashtags that enhance the discover-ability and engagement of the content. Develop hashtags that capture the essence of the provided context or post, adding a distinctive touch.

    Instructions:
    1. Generate hashtags that are mostly used and trending keywords aligning with the themes or content of the provided context or post.
    2. Consider incorporating wordplay, trending you tube trending keywords related to the content like famous slogans , quotes,words related to context in hinglish language,if no language provided in context.
    3. Ensure the hashtags complement the tone and purpose of the context or post.
    4. also add famous similar names and quotes of related context which are famous or always trends.
    5. Aim for originality and hashtags that resonate with the audience.
    6. if post are related to religion or particular country then generate tags in that language 
    
    Generate distinctive and engaging hashtags tailored to the provided content. Adjust the instructions as needed based on your specific hashtag generation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  keyword: {
    type: "keyword",
    title: "keyword Generator",
    topic: "Describe the topic for keyword generation",
    subtopic: "Add more information ",
    tone: "",
    aiprompt: `**Generate trending keywords based on the provided input:**


**Instructions:**

1. Analyze the provided input to identify its key themes, topics, and relevant details.
2. Research current trends related to the input topic to identify popular and high-traffic keywords.
3. Generate a list of keywords that are currently trending and align with the input content.
4. Ensure the keywords are relevant, specific, and have a high search volume.
5. Provide at least ten trending keywords that cover various aspects or subtopics within the provided input.
6. Aim for originality and creativity, generating keywords that can enhance discoverability and engagement.

---

Use the provided input to generate trending and relevant keywords that improve searchability and visibility. Adjust the instructions as needed to suit your specific keyword generation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  script: {
    type: "script",
    title: "Script Generator",
    topic: "Describe your idea or video ",
    subtopic: "Include video style",
    tone: "",
    aiprompt: `Generate a captivating YouTube 10+ min long video script based on the provided context. Craft engaging dialogue, compelling scenes, and informative segments to keep the audience entertained and informed throughout the video.
    Instructions:
    1. Develop a script that aligns with the provided context, delivering valuable content to the audience.
    2. Create a clear structure for the long video, including introductions, main segments, demonstrations, or conclusions and also add highlight topics ,add intro, outro and scenes no.
    3. Incorporate engaging dialogue and narration to maintain viewer interest and understanding.
    4. Ensure that the script flows smoothly and logically, guiding viewers through the content effectively.
    5. Aim for a balance between entertainment and information, catering to the interests and preferences of the target audience.
    
    Craft a compelling script for your YouTube long 10+ min video that captures the essence of the provided context. Use storytelling techniques, informative segments, and engaging dialogue to create an immersive viewing experience for your audience. Your script should effectively communicate the key points and themes while keeping viewers entertained and eager for more.
    `,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  thumbnail: {
    type: "thumbnail",
    title: "Thumbnail Generator",
    topic: "Describe main points of video",
    subtopic: "Add your opinion ",
    tone: "Choose a tone ",

    aiprompt: `Generate compelling thumbnail prompts featuring maximum 2 to 3 scenes and realistic human emotions based on the provided context as input**

    **Instructions:**
    
    1.Design captivating thumbnail image that depict 2 to 3 scenes relevant to the provided context,merge all different scence one image like Photomontage but dont seperate scence merge them  .
    2.Also provide an suitable typography 3 to 4 words text for the video and add it in to images as headline
    3.Provide only four thumbnail options with well explations based on above information options must contains all information as given in input  
    4.must provide output like this "thumbnail1,thumbnail2,thumbnail3,etc"
    5. provide all information for each thumbnail in single paragraph.
     Adjust the instructions as needed to suit your specific thumbnail generation requirements.
    
    `,
    model: "dall-e-3",
    credits: 2,
  },
  aiimages: {
    type: "aiimages",
    title: "Ai Images Generator",
    topic: "Describe your video or scipt",
    subtopic: "Also inlcude main points ",
    tone: "Choose images style",
    aiprompt: `Given the context provided as input, brainstorm creative and unique visual concepts suitable for posts, graphics, or images. Develop ideas that stand out, convey the essence of the context, and engage the audience through innovative visuals.
    
   Instructions:
    1. Generate creative image ideas that offer a fresh and unique perspective on the provided context.
    2. Consider incorporating innovative visual elements, symbolism, or artistic techniques.
    3. Ensure the visual concepts align with the overall tone and objectives of the context.
    4. Aim for freshness and originality to captivate the audience visually.
    5. only provide 5 outputs 
     generate creative and unique image ideas.Descriptions or concepts that can inspire visual content creation. Adjust the instructions as needed based on your specific image idea generation requirements.`,
    model: "dall-e-3",
    credits: 2,
  },
  prompt: {
    type: "prompt",
    title: "Image Prompt Generator",
    topic: "Describe the topic for title",
    subtopic: "Include more info",
    tone: "",
    aiprompt: `Generate compelling thumbnail prompts featuring maximum 2 to 3 scenes and realistic human emotions based on the provided context as input**

    **Instructions:**
    
    1.Design captivating thumbnail image that depict 2 to 3 scenes relevant to the provided context,merge all different scence one image like Photomontage but dont seperate scence merge them  .
    2.Also provide an suitable typography 3 to 4 words text for the video and add it in to images as headline
    3.Provide only four thumbnail options with well explations based on above information options must contains all information as given in input  
    4.must provide output like this "thumbnail1,thumbnail2,thumbnail3,etc"
    5. provide all information for each thumbnail in single paragraph.
     Adjust the instructions as needed to suit your specific thumbnail generation requirements
    `,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  translate: {
    type: "translate",
    title: "script translator",
    topic: "Include Text Here ",
    subtopic: "Select Output Language",
    tone: "Select Input Language",
    aiprompt: `Given the context provided as input, generate a translated version in the target language specified. Your translation should aim to capture the essence, tone, and meaning of the original context while ensuring linguistic accuracy and cultural relevance in the target language.

    Instructions:
    1. Maintain the overall meaning and tone of the original context.
    2. Ensure linguistic accuracy and fluency in the target language.
    3. Consider cultural nuances to make the translation culturally relevant.
    4. If there are idiomatic expressions, find equivalent expressions in the target language.
    5. ensure that content must looks like human written not look like ai generated .
    
    generate a translation that respects the original context while adapting it to the linguistic and cultural nuances of the specified language. Adjust the instructions as needed for your specific translation requirements.
    `,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  TexttoAudio: {
    type: "TexttoAudio",
    title: "Text to Audio Generator",
    topic: "Enter text here ",
    subtopic: "Explain more",
    tone: "Chooose a Character",
    aiprompt: `generate audio for provided text`,
    model: "tts-1-hd",
    credits: 1,
  },
  audiotoAudio: {
    type: "audiotoAudio",
    title: "Audio to Audio Generator",
    topic: "Enter Audio here ",
    subtopic: "Explain more",
    tone: "Chooose a Character",
    aiprompt: `generate audio for provided Audio`,
    model: "whisper-1",
    credits: 2,
  },
  disclamer: {
    type: "disclamer",
    title: "Disclamer Generator",
    topic: "Describe about video",
    subtopic: "Add more info",
    tone: "",
    aiprompt: `Based on the provided context of the YouTube channel or Instagram account, generate a creative and unique disclaimer for the videos. Incorporate emojis and language that aligns with the content of the channel or account to ensure clarity and transparency for viewers.

    Instructions:
    1. Analyze the content and themes of the YouTube channel or Instagram account to understand the nature of the videos and potential disclaimers required.
    2. Consider the audience demographics, tone of the content, and any legal or ethical considerations when crafting the disclaimer.
    3. Use emojis and creative language to convey the disclaimer in a friendly and engaging manner while ensuring it effectively communicates necessary information.
    4. Include relevant details such as copyright information, disclosures for sponsored content, and disclaimers for educational or entertainment purposes.
    5. Ensure the disclaimer is clear, concise, and prominently displayed in the video description or caption for viewers to access easily.
    
    Example Output (Disclaimer):
    
    📢 Disclaimer: [Insert channel or account name] content is intended for [mention audience] and is provided for [mention purpose]. The views and opinions expressed in our videos are [mention stance on opinions]. Any information provided is [mention level of accuracy]. We encourage viewers to [mention action, such as consult a professional] before making decisions based on our content. For more information, please refer to our [insert relevant policies or contact details]. Thank you for watching! 🎥✨
   
    Generate a creative and unique disclaimer tailored to the specific context provided, incorporating emojis and language that resonate with the audience. Adjust the instructions as needed based on your specific disclaimer generation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  backgroundMusicGen: {
    type: "backgroundMusicGen",
    title: "Background Music Generator",
    topic: "What is subject or purpose of video",
    subtopic: "video is about",
    tone: "Choose a tone ",
    aiprompt: `
    Given the context provided as input,Generate background instrumental music, tunes, or themes available on the internet that best define the given prompt:
    **Instructions:**

   1.Search for instrumental background music, tunes, or themes available on the internet that align with the provided context and selected tone (funny or serious).
   2.Consider the mood, atmosphere, and narrative of the context when selecting music options.
   3.Ensure that the chosen instrumental music complements the tone and enhances the overall impact of the video or content.
   4.Provide at least five options with the names of the instrumental tracks and their respective artists or composers.
   5.Output only the available instrumental music, tune, or theme names along with their artists or composers, tailored to the provided context and selected tone.

   Generate background instrumental music options that resonate with the given context and selected tone, enhancing the overall viewer experience. Adjust the instructions as needed to suit your specific music selection requirements..`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  email: {
    type: "email",
    title: "Email Generator",
    topic: "What is subject or purpose of Email",
    subtopic: "Email is about",
    tone: "Choose a tone ",
    aiprompt: `
    Given the context provided as input, generate an email with a specified tone. Craft the email content to align with the themes, intentions, or emotions present in the context. After generating the email, use it as input for an audio generator to create a spoken version of the email.
    
    **Instructions:**
    1. Generate an email content that addresses the themes or information from the provided context.
    2. Tailor the tone of the email based on the specified tone input.
    3. Ensure the email is coherent, well-structured, and suitable for conversion to audio.
    4. Use the generated email as input for an audio generator to create a spoken version.
    5. ensure that content must looks like human written not look like ai generated .
    
    
     generated email as input for an audio generator to create a spoken version. Adjust the instructions as needed based on your specific email and audio generation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  poll: {
    type: "poll",
    title: "Poll Generator",
    topic: "What is subject or purpose of poll",
    subtopic: "Niche of Poll",
    tone: "Choose a tone ",
    aiprompt: `
    **Generate engaging poll questions tailored to the trending niche provided in input:**

**Instructions:**

  1.Craft thought-provoking poll questions that resonate with the trending niche and encourage audience participation.
  2. Ensure that the questions are relevant, timely, and aligned with current trends or topics in the niche.
  3.Consider incorporating multiple-choice options or open-ended questions to cater to different preferences and engagement levels.
  4.Use language that is clear, concise, and inviting to encourage maximum participation from the audience.
  5.rovide at least five poll questions that cover various aspects or subtopics within the trending niche.
  6.Output the poll questions along with any additional instructions or context necessary for their implementation.

   Generate compelling poll questions that spark conversation and interaction within the community, driving engagement and interest in the trending niche. Adjust the instructions as needed to suit your specific poll question generation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  all: {
    type: "all",
    title: "All-in-One Generator",
    topic: "tell the main idea ",
    subtopic: " Describe the in few line  ",
    tone: "Choose a tone ",
    aiprompt: "",
    model: "gpt-3.5-turbo",
    credits: 20,
  },
};

export const shortvidTypes = {
  idea: {
    type: "idea",
    title: "Short Video Idea Generator",
    topic: "Describe the kind of idea you want",
    subtopic: "Include more info",
    tone: "",
    aiprompt: `Given the context provided as input, brainstorm creative and unique ideas for reels or short films. Develop concepts that are captivating, memorable, and tailored to the themes and atmosphere of the provided context.

    Instructions:
    1. Generate ideas for reels or short films that are creative and unique, offering a fresh perspective on the provided context.
    2. Consider incorporating innovative storytelling techniques, visual elements, or narrative structures.
    3. Ensure the reels/shorts ideas create nostalgic and comedic feeling among audience and effectively convey the themes or messages of the context.
    4. Aim for originality and ideas that leave a lasting impression on the viewers.
    5. Ensure by default generate output in hinglish language if no language is provided in context.
    
    
     generate creative and unique reels or short film ideas. This prompt guides the model to produce imaginative and engaging concepts tailored to the provided context. Adjust the instructions as needed based on your specific reels or short film idea generation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  title: {
    type: "title",
    title: "Title Generator",
    topic: "Describe the topic for title",
    subtopic: "Include more info",
    tone: "",
    aiprompt: `Given the context provided as input, create compelling and attention-grabbing titles for an reel or short video post. Craft titles that accurately represent the content, spark curiosity, and entice the reader to explore further.

    Instructions:
    1. Generate titles that encapsulate the key themes or insights present in the provided context.
    2. Aim for clarity and relevance, ensuring the titles accurately reflect the content.
    3. Consider incorporating engaging language, keywords, or intriguing phrases.
    4. Provide a variety of title options to choose from.
    
    ---
    
     generate short video and reels titles. each designed to capture attention and accurately represent the content within the provided context. Adjust the instructions as needed based on your specific title generation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  description: {
    type: "description",
    title: "Description Generator",
    topic: "Describe the topic of your content",
    subtopic: "Include more information ",
    tone: "",
    aiprompt: `Given the context or reel provided as input, craft a creative and unique description that adds depth and interest. Develop a description that captivates the audience, providing additional insights and enhancing the overall impact of the content.

    Instructions:
    1. Generate a description that generate pride and respect about  the provided context or reel or short video.
    2. Consider incorporating imaginative language, vivid imagery, biographical information .
   3. Ensure the description complements the tone and theme of the content it accompanies.
   4. Aim for originality and a description that sparks curiosity or emotion that easily understand by peoples.
   5.  Ensure by default generate output in hinglish language if no language is provided in context.


    Generate distinctive and engaging description tailored to the provided content. Adjust the instructions as needed based on your specific description generation requirements.
    `,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  tags: {
    type: "tags",
    title: "Tags Generator",
    topic: "Describe the topic of tags generation",
    subtopic: "Include more information ",
    tone: "",
    aiprompt: `Given the context or post provided as input, generate creative and unique hashtags that enhance the discover-ability and engagement of the content. Develop hashtags that capture the essence of the provided context or post, adding a distinctive touch.
    
    Instructions:
    1. Generate hashtags that are mostly used and trending keywords aligning with the themes or content of the provided context or post.
    2. Consider incorporating wordplay, trending you tube /Instagram trending keywords related to the content like famous slogans , quotes,words related to context in hinglish language,if no language provided in context.
    3. Ensure the hashtags complement the tone and purpose of the context or post.
    4. also add famous similar names and quotes of related context which are famous or always trends.
    5. Aim for originality and hashtags that resonate with the audience.
    6. if post are related to religion or particular country then generate tags in that language 
    
    Generate distinctive and engaging hashtags tailored to the provided content. Adjust the instructions as needed based on your specific hashtag generation requirements.
    `,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  script: {
    type: "script",
    title: "Script Generator",
    topic: "Describe your idea or video ",
    subtopic: "Include video style",
    tone: "",
    aiprompt: `
    Generate a captivating instagram/youtube shorts 1 min long video script based on the provided context. Craft engaging dialogue, compelling scenes, and informative segments to keep the audience entertained and informed throughout the video.
    Instructions:
    1. Develop a script that aligns with the provided context, delivering valuable content to the audience.
    2. Create a clear structure for the short/reel video, including introductions, main segments, demonstrations, or conclusions and also add highlight topics ,add intro, outro and scenes no.
    3. Incorporate engaging dialogue and narration to maintain viewer interest and understanding.
    4. Ensure that the script flows smoothly and logically, guiding viewers through the content effectively.
    5. Aim for a balance between entertainment and information, catering to the interests and preferences of the target audience.
    
    Craft a compelling script for your YouTube shorts/instgram reel 1 min video that captures the essence of the provided context. Use storytelling techniques, informative segments, and engaging dialogue to create an immersive viewing experience for your audience. Your script should effectively communicate the key points and themes while keeping viewers entertained and eager for more.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  thumbnail: {
    type: "thumbnail",
    title: "Thumbnail Generator",
    topic: "Describe main points of video",
    subtopic: "Add your opinion ",
    tone: "Choose a tone ",
    aiprompt: `Generate compelling thumbnail prompts featuring maximum 2 to 3 scenes and realistic human emotions based on the provided context as input**

    **Instructions:**
    
    1.Design captivating thumbnail image that depict 2 to 3 scenes relevant to the provided context,merge all different scence one image like Photomontage but dont seperate scence merge them  .
    2.Also provide an suitable typography 2 to 3 words text for the video and add it in to images as headline
    3.Provide only four thumbnail options with well explations based on above information options must contains all information as given in input  
    4.must provide output like this "thumbnail1,thumbnail2,thumbnail3,etc"
    5. provide all information for each thumbnail in single paragraph.
     Adjust the instructions as needed to suit your specific thumbnail generation requirements.
    
    `,
    model: "dall-e-3",
    credits: 2,
  },
  aiimages: {
    type: "aiimages",
    title: "Ai Images Generator",
    topic: "Describe your video or scipt",
    subtopic: "Also inlcude main points ",
    tone: "Choose images style",
    aiprompt: `Given the context provided as input, brainstorm creative and unique visual concepts suitable for posts, graphics, or images. Develop ideas that stand out, convey the essence of the context, and engage the audience through innovative visuals.

    **Instructions:**
    1. Generate creative image ideas that offer a fresh and unique perspective on the provided context.
    2. Consider incorporating innovative visual elements, symbolism, or artistic techniques.
    3. Ensure the visual concepts align with the overall tone and objectives of the context.
    4. Aim for freshness and originality to captivate the audience visually.
    
     generate creative and unique image ideas.Descriptions or concepts that can inspire visual content creation. Adjust the instructions as needed based on your specific image idea generation requirements.`,
    model: "dall-e-3",
    credits: 2,
  },
  prompt: {
    type: "prompt",
    title: "Image Prompt Generator",
    topic: "Describe the topic for title",
    subtopic: "Include more info",
    tone: "",
    aiprompt: `Generate compelling thumbnail prompts featuring maximum 2 to 3 scenes and realistic human emotions based on the provided context as input**

    **Instructions:**
    
    1.Design captivating thumbnail image that depict 2 to 3 scenes relevant to the provided context,merge all different scence one image like Photomontage but dont seperate scence merge them  .
    2.Also provide an suitable typography 3 to 4 words text for the video and add it in to images as headline
    3.Provide only four thumbnail options with well explations based on above information options must contains all information as given in input  
    4.must provide output like this "Scene1,Scene2,Scene3,etc"
    5. provide all information for each thumbnail in single paragraph.
     Adjust the instructions as needed to suit your specific thumbnail generation requirements
    `,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  backgroundMusicGen: {
    type: "backgroundMusicGen",
    title: "Background Music Generator",
    topic: "What is subject or purpose of video",
    subtopic: "video is about",
    tone: "Choose a tone ",
    aiprompt: `
    Given the context provided as input,Generate background instrumental music, tunes, or themes available on the internet that best define the given prompt:
    **Instructions:**

   1.Search for instrumental background music, tunes, or themes available on the internet that align with the provided context and selected tone (funny or serious).
   2.Consider the mood, atmosphere, and narrative of the context when selecting music options.
   3.Ensure that the chosen instrumental music complements the tone and enhances the overall impact of the video or content.
   4.Provide at least five options with the names of the instrumental tracks and their respective artists or composers.
   5.Output only the available instrumental music, tune, or theme names along with their artists or composers, tailored to the provided context and selected tone.

   Generate background instrumental music options that resonate with the given context and selected tone, enhancing the overall viewer experience. Adjust the instructions as needed to suit your specific music selection requirements..`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },

  translate: {
    type: "translate",
    title: "script translator",
    topic: "Select Input Language ",
    subtopic: "Select Output Language",
    tone: "Include text here",
    aiprompt: `
    Given the context provided as input, generate a translated version in the target language specified. Your translation should aim to capture the essence, tone, and meaning of the original context while ensuring linguistic accuracy and cultural relevance in the target language.
    
    **Instructions:**
    1. Maintain the overall meaning and tone of the original context.
    2. Ensure linguistic accuracy and fluency in the target language.
    3. Consider cultural nuances to make the translation culturally relevant.
    4. If there are idiomatic expressions, find equivalent expressions in the target language.
    5. ensure that content must looks like human written not look like ai generated .
       
     generate a translation that respects the original context while adapting it to the linguistic and cultural nuances of the specified language. Adjust the instructions as needed for your specific translation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  TexttoAudio: {
    type: "TexttoAudio",
    title: "Text to Audio Generator",
    topic: "Enter text here ",
    subtopic: "Explain more",
    tone: "Chooose a Character",
    aiprompt: ``,
    model: "tts-1-hd",
    credits: 1,
  },
  audiotoAudio: {
    type: "audiotoAudio",
    title: "Audio to Audio Generator",
    topic: "Enter Audio here ",
    subtopic: "Explain more",
    tone: "Chooose a Character",
    aiprompt: `generate audio for provided Audio`,
    model: "whisper-1",
    credits: 2,
  },
  slogan: {
    type: "slogan",
    title: "Slogan Generator",
    topic: "Describe the topic ",
    subtopic: "Include more information ",
    tone: "Chooose a tone",
    aiprompt: `
    Given the context provided as input, create catchy and memorable slogans that encapsulate the essence of the content. Develop concise and impactful phrases that resonate with the intended message, brand, or theme. Consider the tone, target audience, and key themes for effective slogan creation.
    
    Instructions:
    1. Generate slogans that succinctly convey the core message or theme of the provided context.
    2. Prioritize clarity, memorability, and relevance to the target audience.
    3. Consider incorporating key words or phrases from the context to enhance connection.
    4. Aim for a positive and resonant tone that aligns with the overall context.
    5. generate only 10 slogans.
   
    
     generate slogans using this prompt guides the model to create concise and impactful slogans that reflect the essence of the provided context. Adjust the instructions as needed based on your specific slogan generation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  facts: {
    type: "facts",
    title: "Facts Generator",
    topic: "Describe the topic ",
    subtopic: "Include more information ",
    tone: "Chooose a tone",
    aiprompt: `Given the context provided as input, present factual information in an engaging and informative manner. Craft a series of interesting facts related to the context, ensuring accuracy and relevance to captivate the audience's interest. Consider incorporating unique or lesser-known details to enhance the informative value.

    
    Instructions:
    1. Compile a set of factual statements that directly relate to the provided context.
    2. Ensure the facts are accurate, relevant, and intriguing to the intended audience.
    3. Organize the information in a logical and coherent sequence for easy consumption.
    4. Consider adding a brief introduction or conclusion to contextualize the facts.
    
     generate a set of factual statements that align with the provided context, delivering informative content in an engaging manner. Adjust the instructions as needed based on your specific fact-telling requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  quote: {
    type: "quote",
    title: "Quote Generator",
    topic: "Describe the topic ",
    subtopic: "Include more information ",
    tone: "Chooose a tone",
    aiprompt: `Given the context provided as input, generate a creative and unique quote attributed to a specific individual or source. Craft a memorable and impactful statement that resonates with the themes and atmosphere of the provided context.
        
    Instructions:
    1. Generate a quote that captures the essence of the provided context, conveying a meaningful message or insight.
    2. Ensure the quote is concise, clear, and memorable, reflecting the themes and sentiments associated with the context.
    3. Research and find an appropriate author or source to whom the quote will be attributed based on the context.
    4. Aim for originality and creativity, crafting a quote that leaves a lasting impression on the audience.
    5. generate only 5 qoutes
    
    Example Output (Quote with Attribution):
    "Insert the quote generated here." - Author Name
    
    
    ---
     Ensure that the generated quote is appropriately attributed to the author or source based on the context provided. Adjust the instructions as needed based on your specific quote generation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  riddle: {
    type: "riddle",
    title: "Riddle Generator",
    topic: "Describe the topic ",
    subtopic: "Include more information ",
    tone: "Chooose a tone",
    aiprompt: `
    Given the context provided as input, generate a creative and unique riddle along with its answer that challenges and entertains the audience. Craft a riddle that incorporates elements or themes from the provided context while maintaining a sense of mystery and intrigue.
    
    Instructions:
    1. Develop a riddle that utilizes elements, themes, or concepts from the provided context in a clever and imaginative way.
    2. Ensure the riddle is challenging yet solvable, encouraging the audience to think critically and creatively.
    3. Aim for originality and uniqueness in both the structure and content of the riddle.
    4. Keep the tone and style of the riddle aligned with the atmosphere of the provided context.
    5. Provide the answer to the riddle to complete the prompt.
    6. generate atleast 5 riddles 
    Example Output (Riddle):
    Riddle: [Insert the riddle generated here.]
    
    Answer: [Insert the answer to the riddle here.]
    
    generate a riddle. This prompt guides the model to produce a creative and engaging riddle along with its answer, drawing inspiration from the provided context. Adjust the instructions as needed based on your specific riddle generation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  poll: {
    type: "poll",
    title: "Poll Generator",
    topic: "What is subject or purpose of poll",
    subtopic: "Niche of Poll",
    tone: "Choose a tone ",
    aiprompt: `
    **Generate engaging poll questions tailored to the trending niche provided in input:**

**Instructions:**

  1.Craft thought-provoking poll questions that resonate with the trending niche and encourage audience participation.
  2. Ensure that the questions are relevant, timely, and aligned with current trends or topics in the niche.
  3.Consider incorporating multiple-choice options or open-ended questions to cater to different preferences and engagement levels.
  4.Use language that is clear, concise, and inviting to encourage maximum participation from the audience.
  5.rovide at least five poll questions that cover various aspects or subtopics within the trending niche.
  6.Output the poll questions along with any additional instructions or context necessary for their implementation.

   Generate compelling poll questions that spark conversation and interaction within the community, driving engagement and interest in the trending niche. Adjust the instructions as needed to suit your specific poll question generation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  all: {
    type: "all",
    title: "All-in-One Generator",
    topic: "tell the main idea ",
    subtopic: " Describe the in few line  ",
    tone: "Choose a tone ",
    aiprompt: "",
    model: "gpt-3.5-turbo",
    credits: 20,
  },
};

export const contentwriterTypes = {
  idea: {
    type: "idea",
    title: "Idea Generator",
    topic: "Describe the kind of idea you want",
    subtopic: "Include more info",
    tone: "",
    aiprompt: `Given the context provided as input, brainstorm compelling and informative article or blog writing ideas that would engage and captivate the target audience. Develop topics that explore different aspects, perspectives, or insights related to the context, catering to the interests of your readers.

    
    Instructions:
    1. Propose article or blog topics that delve deeper into the themes presented in the context.
    2. Consider different angles, perspectives, or unique insights that would intrigue the audience.
    3. Ensure the writing ideas align with the target audience's interests and preferences.
    4. Encourage a diverse range of topics that provide valuable information or entertainment.
    5.Ensure the writing ideas also takes the problems,wrong thinking,wrong vision of society and how to solve these problems .
    6.generate atleast 10 blog/article ideas 
    
    suggest a variety of topics that explore different facets of the provided context, offering diverse possibilities for engaging content. Adjust the instructions as needed based on your specific article or blog writing requirements.
    `,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  outline: {
    type: "outline",
    title: "Outline Generator",
    topic: "Describe your outline topics",
    subtopic: "Include more information ",
    tone: "",
    aiprompt: `Given the context provided as input, create a detailed outline for an article , blog or book mentioned in input. Structure the outline to include key sections, headings, and subheadings, ensuring a logical flow of ideas. Consider incorporating relevant details, examples, and supporting information within each section.

    
    Instructions:
    1. Develop a comprehensive outline that organizes the content logically.
    2. Include main sections, headings, and subheadings based on the key themes in the context.
    3. Ensure coherence and a smooth transition between different parts of the outline
    4. don’t explain to much in the outline just take the headings H1 and subheadings as H2 
    5.generate a outline such that it looks like an professional human written.
    ---
     generate an outline according to input to produce a structured and well-organized outline that serves as a foundation for developing a detailed article or blog post or book as provided. Adjust the instructions as needed based on your specific outline generation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  article: {
    type: "article",
    title: "Article Generator",
    topic: "Describe the topic of your content",
    subtopic: "Include more information ",
    tone: "",
    aiprompt: `Given the context provided as input, create a comprehensive and engaging article or blog post. Develop a piece that explores the themes, insights, or information present in the context. Craft well-structured paragraphs, incorporate examples, and maintain a coherent flow throughout the article.

    
    Instructions:
    1. Generate an article or blog post that delves into the key themes or information presented in the context.
    2. Craft an engaging introduction that captures the reader's attention and provides context.
    3. Develop well-structured information with pointwise that explore different aspects of the context.
    4. Include relevant examples, insights, or anecdotes to enrich the content.
    5. Conclude the article or blog post with a summary or a call-to-action.
    6. generate article according to given outline expand the outline by explaining the headings and subheadings with well structured .
    7. ensure that content must looks like human written not look like ai generated .article must follow pointwise format.
   
    
    generate an article or blog post with detailed and coherent piece of writing that reflects the themes and information present in the provided context. Adjust the instructions as needed based on your specific article or blog generation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  blog: {
    type: "blog",
    title: "Blog Generator",
    topic: "Describe the topic of article",
    subtopic: "Include more information ",
    tone: "",
    aiprompt: `Given the context provided as input, create a comprehensive and engaging article or blog post. Develop a piece that explores the themes, insights, or information present in the context. Craft well-structured paragraphs, incorporate examples, and maintain a coherent flow throughout the article.

       
   Instructions:
    1. Generate an article or blog post that delves into the key themes or information presented in the context.
    2. Craft an engaging introduction that captures the reader's attention and provides context.
    3. Develop well-structured paragraphs that explore different aspects of the context.
    4. Include relevant examples, insights, or anecdotes to enrich the content.
    5. Conclude the article or blog post with a summary or a call-to-action.
    6. ensure that content must looks like human written not look like ai generated .
    
    
     generate an article or blog post  to create a detailed and coherent piece of writing that reflects the themes and information present in the provided context. Adjust the instructions as needed based on your specific article or blog generation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  book: {
    type: "book",
    title: "Book Generator",
    topic: "Describe the topic of book",
    subtopic: "Include more information ",
    tone: "",
    aiprompt: `Generate a compelling book outline based on the provided context:

    Instructions:
    1. Develop an engaging storyline or plot that aligns with the given context, incorporating unique characters, settings, and conflicts.
    2. Outline the major plot points, character arcs, and key events that drive the narrative forward.
    3. Ensure coherence and continuity throughout the outline, maintaining a clear and logical progression of the story.
    4. Explore themes, motifs, and underlying messages that add depth and complexity to the narrative.
    5. Consider the target audience and genre of the book when crafting the outline, tailoring it to resonate with readers.
    6. Aim for a balance between suspense, drama, and resolution to keep readers engaged from start to finish.
    
    ---
    Craft a captivating book outline that captures the essence of the provided context. Develop a storyline rich in detail and emotion, with memorable characters and compelling plot twists. Adjust the instructions as needed to suit your specific book outline requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  title: {
    type: "title",
    title: "Title Generator",
    topic: "Describe the topic for title",
    subtopic: "Include more info",
    tone: "",
    aiprompt: `Given the context provided as input, create compelling and attention-grabbing titles for an article or blog post. Craft titles that accurately represent the content, spark curiosity, and entice the reader to explore further.

    Instructions:
    1. Generate titles that encapsulate the key themes or insights present in the provided context.
    2. Aim for clarity and relevance, ensuring the titles accurately reflect the content.
    3. Consider incorporating engaging language, keywords, or intriguing phrases.
    4. Provide a variety of title options to choose from.
    
     generate article or blog titles. each designed to capture attention and accurately represent the content within the provided context. Adjust the instructions as needed based on your specific title generation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  images: {
    type: "images",
    title: "Ai Images Generator",
    topic: "Describe your video or scipt",
    subtopic: "Also inlcude main points ",
    tone: "Choose images style",
    aiprompt: `**Generate compelling thumbnail prompts featuring multiple scenes and realistic human emotions based on the provided context as input**

    **Instructions:**
    
    1.Design captivating thumbnail image that depict various scenes relevant to the provided context,merge all different scence one image like various scene in various position in that image college.
    2.Also if context needed human involvement incorporate upper chest bodies with extremely ultra realistic human face displaying extreme emotions that align with the context and intended tone.
    3.overall thumbnail looks ultra real with ultra real human body and face.
    4.Must add "typogaphy" text that best describe the video purpose .
    5.Provide only four thumbnail options with well explations based on above information options must contains all information as given in input  
    
     Adjust the instructions as needed to suit your specific thumbnail generation requirements.
    `,
    model: "dall-e-3",
    credits: 2,
  },
  prompt: {
    type: "prompt",
    title: "Image Prompt Generator",
    topic: "Describe the topic for title",
    subtopic: "Include more info",
    tone: "",
    aiprompt: `**Generate clickbait thumbnails that encapsulate the essence of the video content and entice viewers to click and watch. Craft visually compelling images that convey the main idea of the video while intriguing the audience with curiosity.**
    
    Instructions:
    1. Create clickbait thumbnails by understanding the information provided in context that vividly represent the core concept or topic discussed in the video or provided context.
    2. Incorporate eye-catching visuals, vibrant colors, and attention-grabbing elements to capture viewers' attention.
    3. Ensure the thumbnails provide a clear indication of what the video is about and what viewers can expect to see.
    4. Also provide an suitable title for the video and add it in to images as headline
    5. Make sure the thumbnails are high-quality, photorealistic, high-resolution, and detailed.
    6. Must provide output like this only -- desc1,desc2,desc3,etc .
     Generate descriptions or concepts that can inspire visual content creation. Adjust the instructions as needed based on your specific thumbnail generation requirements.
    
    `,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  summary: {
    type: "summary",
    title: "Summary translator",
    topic: "Describe the topic of your content",
    subtopic: "Include more information ",
    tone: "",
    aiprompt: `Given the context provided as input, generate a concise and informative summary. Your summary should capture the key points, main ideas, and essential details of the given context. Aim for clarity and brevity in your response.

    Instructions:
    1. Consider the most important elements of the context.
    2. Focus on conveying the central theme and critical details.
    3. Aim for a summary that is clear, coherent, and easily understandable.
    4. ensure that content must looks like human written not look like ai generated .
    
   This prompt guides the model to produce a summary based on the input context you provide. Adjust the instructions as needed for your specific requirements.
    `,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  expander: {
    type: "expander",
    title: "Expander Generator",
    topic: "Describe the topic of your content",
    subtopic: "Include more information ",
    tone: "",
    aiprompt: `Given the context provided as input, expand on the details, themes, and nuances present in the narrative. Your response should delve deeper into the storyline, elaborate on character motivations, describe key events in more detail, and provide additional context where necessary. Aim to enhance the richness and complexity of the given context.
 
    Instructions:
    1. Explore the motivations and emotions of the characters involved.
    2. Provide more in-depth descriptions of key events and settings.
    3. Elaborate on the historical and cultural aspects mentioned in the context.
    4. Consider adding dialogues or interactions that contribute to the narrative.
    5. ensure that content must looks like human written not look like ai generated .
    
    
    This prompt guides the model to provide a more detailed and nuanced exploration of the input context. Adjust the instructions as needed for your specific requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  translation: {
    type: "translation",
    title: "Translation Generator",
    topic: "Select Input Language ",
    subtopic: "Select Output Language",
    tone: "Select Input Language",
    aiprompt: `Given the context provided as input, generate a translated version in the target language specified. Your translation should aim to capture the essence, tone, and meaning of the original context while ensuring linguistic accuracy and cultural relevance in the target language.
    
    Instructions:
    1. Maintain the overall meaning and tone of the original context.
    2. Ensure linguistic accuracy and fluency in the target language.
    3. Consider cultural nuances to make the translation culturally relevant.
    4. If there are idiomatic expressions, find equivalent expressions in the target language.
    5. ensure that content must looks like human written not look like ai generated .
    
    
     This prompt guides the model to generate a translation that respects the original context while adapting it to the linguistic and cultural nuances of the specified language. Adjust the instructions as needed for your specific translation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  TexttoAudio: {
    type: "TexttoAudio",
    title: "Text to Audio Generator",
    topic: "Enter text here ",
    subtopic: "Explain more",
    tone: "Chooose a Character",
    aiprompt: ``,
    model: "tts-1-hd",
    credits: 1,
  },

  coverimage: {
    type: "coverimage",
    title: "Book CoverImage Generator",
    topic: "Describe main points of book",
    subtopic: "Add your opinion ",
    tone: "Choose a tone ",
    aiprompt: `Generate a captivating book cover image prompt based on the provided context:
     
    Instructions:
    1. Design a visually stunning book cover image that encapsulates the essence of the provided context, capturing its themes, characters, and atmosphere.
    2. Incorporate eye-catching visuals, colors, and typography that resonate with the genre and tone of the book.
    3. Consider the target audience and genre when selecting imagery and designing the layout of the book cover.
    4. Ensure that the book title and author name are prominently displayed and legible against the background.
    5.Must add "typogaphy" text that best describe the video purpose in book coverimage like name of book .
    6. Aim for originality and creativity, creating a cover that stands out on bookstore shelves and online platforms.
    7. Optionally, provide a unique quote related to the context that adds intrigue and allure to the book cover.
    
    ---
    Craft a compelling book cover image prompt that entices readers and reflects the essence of the provided context. Pay attention to details and aesthetics, aiming for a design that enhances the overall appeal of the book. Adjust the instructions as needed to suit your specific book cover image generation requirements.
    `,
    model: "dall-e-3",
    credits: 2,
  },
  email: {
    type: "email",
    title: "Email Generator",
    topic: "What is the purpose of email",
    subtopic: "Explain more",
    tone: "Chooose a tone",
    aiprompt: `Given the context provided as input, generate an email with a specified tone. Craft the email content to align with the themes, intentions, or emotions present in the context. After generating the email, use it as input for an audio generator to create a spoken version of the email.

    
    Instructions:
    1. Generate an email content that addresses the themes or information from the provided context.
    2. Tailor the tone of the email based on the specified tone input.
    3. Ensure the email is coherent, well-structured, and suitable for conversion to audio.
    4. Use the generated email as input for an audio generator to create a spoken version.
    5. ensure that content must looks like human written not look like ai generated .
    
    
   This prompt guides the model to generate an email with a specified tone, and you can then use the generated email as input for an audio generator to create a spoken version. Adjust the instructions as needed based on your specific email and audio generation requirements.
    `,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  slogan: {
    type: "slogan",
    title: "Slogan Generator",
    topic: "Describe the topic of your content",
    subtopic: "Include more information ",
    tone: "Chooose a tone",
    aiprompt: `Given the context provided as input, create catchy and memorable slogans that encapsulate the essence of the content. Develop concise and impactful phrases that resonate with the intended message, brand, or theme. Consider the tone, target audience, and key themes for effective slogan creation.

    
    Instructions:
    1. Generate slogans that succinctly convey the core message or theme of the provided context.
    2. Prioritize clarity, memorability, and relevance to the target audience.
    3. Consider incorporating key words or phrases from the context to enhance connection.
    4. Aim for a positive and resonant tone that aligns with the overall context.
    5. generate only 10 slogans.
    
    
     generate slogans. This prompt guides the model to create concise and impactful slogans that reflect the essence of the provided context. Adjust the instructions as needed based on your specific slogan generation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  tag: {
    type: "tag",
    title: "Tag Generator",
    topic: "Describe the topic of video",
    subtopic: "Include more information ",
    tone: "",
    aiprompt: `Given the context or post provided as input, generate creative and unique hashtags that enhance the discover-ability and engagement of the content. Develop hashtags that capture the essence of the provided context or post, adding a distinctive touch.

    
    Instructions:
    1. Generate hashtags that are mostly used and trending keywords aligning with the themes or content of the provided context or post.
    2. Consider incorporating wordplay, trending you tube /Instagram trending keywords related to the content like famous slogans , quotes,words related to context in hinglish language,if no language provided in context.
    3. Ensure the hashtags complement the tone and purpose of the context or post.
    4. also add famous similar names and quotes of related context which are famous or always trends.
    5. Aim for originality and hashtags that resonate with the audience.
    6. if post are related to religion or particular country then generate tags in that language 
    
    
    Generate distinctive and engaging hashtags tailored to the provided content. Adjust the instructions as needed based on your specific hashtag generation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  all: {
    type: "all",
    title: "All-in-One Generator",
    topic: "tell the main idea ",
    subtopic: " Describe the in few line  ",
    tone: "Choose a tone ",
    aiprompt: "",
    model: "gpt-3.5-turbo",
    credits: 20,
  },
};

export const socialmediaTypes = {
  idea: {
    type: "idea",
    title: "Idea Generator",
    topic: "Describe the kind of idea you want",
    subtopic: "Include more info",
    tone: "",
    aiprompt: `Given the context provided as input, brainstorm creative and unique ideas for social media posts. Develop concepts that stand out, capture attention, and offer a fresh perspective related to the context.

    Instructions:
    1. Generate post ideas that go beyond conventional themes, offering a unique and creative angle.
    2. Consider incorporating innovative formats, storytelling techniques though different potography techniques, or visual elements.
    3. Ensure the ideas align with the overall tone and objectives of the provided context.
    4. Aim for freshness and originality to engage and captivate the audience.
    5. generate only 5 post ideas or unique photography ideas like based on context which type of images post 
    6.  Ensure by default generate output in hinglish language if no language is provided in context.
    7. create scenario based on context that tells unique and uncommon post ides or photography ideas 
   
    
    From above context generate creative and unique post ideas. Generate innovative and distinctive concepts tailored to the provided context. Adjust the instructions as needed based on your specific post idea generation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  images: {
    type: "images",
    title: "Poster Generator",
    topic: "Describe wnat kind of Poster you want",
    subtopic: "Also inlcude main points ",
    tone: "Choose images style",
    aiprompt: `Generate captivating poster or banner ideas based on the provided context:
 
    Instructions:
    1. Brainstorm visually appealing concepts that resonate with the essence of the provided context.
    2. Consider the target audience and tailor the poster or banner ideas to their preferences and interests.
    3. Explore creative design elements, colors, and imagery that evoke emotions and grab attention.
    4. Ensure that the poster or banner effectively communicates the key message or theme of the context.
    5. Aim for clarity, simplicity, and aesthetic appeal to make the poster or banner visually impactful.
    6. Experiment with different layouts, fonts, and visual elements to create a memorable design.
    7. provide 2 poster ideas with typography and output must be in 30-50 words .
    
    Generate engaging poster or banner ideas that effectively convey the essence of the provided context. Focus on creating visually stunning designs that captivate the audience and leave a lasting impression. Adjust the instructions as needed to suit your specific poster or banner creation requirements`,
    model: "dall-e-3",
    credits: 2,
  },
  prompt: {
    type: "prompt",
    title: "Image Prompt Generator",
    topic: "Describe the topic for title",
    subtopic: "Include more info",
    tone: "",
    aiprompt: `Generate captivating poster or banner ideas based on the provided context:
 
    Instructions:
    1. Brainstorm visually appealing concepts that resonate with the essence of the provided context.
    2. Consider the target audience and tailor the poster or banner ideas to their preferences and interests.
    3. Explore creative design elements, colors, and imagery that evoke emotions and grab attention.
    4. Ensure that the poster or banner effectively communicates the key message or theme of the context.
    5. Aim for clarity, simplicity, and aesthetic appeal to make the poster or banner visually impactful.
    6. Experiment with different layouts, fonts, and visual elements to create a memorable design.
    7. provide 2 poster ideas with typography and output must be in 30-50 words .
    8. Must provide output like this only -- desc1,desc2,desc3,etc .

    Generate engaging poster or banner ideas that effectively convey the essence of the provided context. Focus on creating visually stunning designs that captivate the audience and leave a lasting impression. Adjust the instructions as needed to suit your specific poster or banner creation requirements`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  bio: {
    type: "bio",
    title: "Bio Generator",
    topic: "Describe the your informaton",
    subtopic: "Include more details",
    tone: "",
    aiprompt: `Given the context provided as input, create a creative and unique social media bio that stands out and reflects the essence of the provided context. Craft a bio that is engaging, memorable, and aligns with the individual or brand's personality.

    Instructions:
    1. Generate a social media bio that is unique and captures the essence of the provided context.
    2. Incorporate creative language, unique identifiers, or memorable phrases and emogies .
    3. Ensure the bio aligns with the tone and personality associated with the given context.
    4. Aim for originality and a bio that leaves a lasting impression.
    5. if name provided add name in bio also at first and add information in column wise like 1:2:2:1 manners .
  
    
    generate a creative and unique social media bio. This prompt guides the model to create a distinctive and engaging bio tailored to the provided context. Adjust the instructions as needed based on your specific social media bio generation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  caption: {
    type: "caption",
    title: "Caption Generator",
    topic: "Describe the topic for caption",
    subtopic: "Include more details",
    tone: "Choose a tone",
    aiprompt: `Given the context or post provided as input, craft a creative and unique social media caption that complements the content and captivates the audience. Develop a caption that stands out, aligns with the tone of the content, and sparks engagement.

    
   Instructions:
    1. Generate a social media caption that is creative and unique, enhancing the impact of the provided context or post.
    2. Consider incorporating inventive language, wordplay, or high iq and humorous lines.
    3. Ensure the caption complements the tone and style of the content it accompanies.
    4. Aim for originality and a caption that encourages audience interaction.
    5.make only 5 don’t stop before completing
    
    
    
     generate a creative and unique social media caption. This prompt guides the model to produce a captivating and distinctive caption tailored to the provided content. Adjust the instructions as needed based on your specific social media caption generation requirements.
    
    `,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  poll: {
    type: "poll",
    title: "Poll Generator",
    topic: "What is subject or purpose of poll",
    subtopic: "Niche of Poll",
    tone: "Choose a tone ",
    aiprompt: `
    **Generate engaging poll questions tailored to the trending niche provided in input:**

**Instructions:**

  1.Craft thought-provoking poll questions that resonate with the trending niche and encourage audience participation.
  2. Ensure that the questions are relevant, timely, and aligned with current trends or topics in the niche.
  3.Consider incorporating multiple-choice options or open-ended questions to cater to different preferences and engagement levels.
  4.Use language that is clear, concise, and inviting to encourage maximum participation from the audience.
  5.rovide at least five poll questions that cover various aspects or subtopics within the trending niche.
  6.Output the poll questions along with any additional instructions or context necessary for their implementation.

   Generate compelling poll questions that spark conversation and interaction within the community, driving engagement and interest in the trending niche. Adjust the instructions as needed to suit your specific poll question generation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  tag: {
    type: "tag",
    title: "Tags Generator",
    topic: "Describe the topic of your content",
    subtopic: "Include more information ",
    tone: "",
    aiprompt: `Given the context or post provided as input, generate creative and unique hashtags that enhance the discover-ability and engagement of the content. Develop hashtags that capture the essence of the provided context or post, adding a distinctive touch.

    
    Instructions:
    1. Generate hashtags that are mostly used and trending keywords aligning with the themes or content of the provided context or post.
    2. Consider incorporating wordplay, trending you tube /Instagram trending keywords related to the content like famous slogans , quotes,words related to context in hinglish language,if no language provided in context.
    3. Ensure the hashtags complement the tone and purpose of the context or post.
    4. also add famous similar names and quotes of related context which are famous or always trends.
    5. Aim for originality and hashtags that resonate with the audience.
    6. if post are related to religion or particular country then generate tags in that language 
    
    
    Generate distinctive and engaging hashtags tailored to the provided content. Adjust the instructions as needed based on your specific hashtag generation requirements.
    `,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  description: {
    type: "description",
    title: "Description Generator",
    topic: "Describe the topic of your content",
    subtopic: "Include more information ",
    tone: "",
    aiprompt: `Given the context or post provided as input, craft a creative and unique description that adds depth and interest. Develop a description that captivates the audience, providing additional insights and enhancing the overall impact of the content.

   
    Instructions:
    1. Generate a description that generate pride and respect about  the provided context or post.
    2. Consider incorporating imaginative language, vivid imagery, biographical information .
    3. Ensure the description complements the tone and theme of the content it accompanies.
    4. Aim for originality and a description that sparks curiosity or emotion that easily understand by peoples.
    5.  Ensure by default generate output in hinglish language if no language is provided in context.
   
    
    Generate distinctive and engaging description tailored to the provided content. Adjust the instructions as needed based on your specific description generation requirements.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  comment: {
    type: "comment",
    title: "Comment Generator",
    topic: "comment replier",
    subtopic: "Include more information ",
    tone: "Choose a tone ",
    aiprompt: `Given the context provided as input, Generate a witty and unique reply for a given context. Your response should be appropriate for a social media or online discussion setting. Consider the tone, content, and style that would be effective in responding to comments related to the provided context.

  
    Instructions:
    1. Craft a reply that acknowledges and responds to the comments or opinions expressed in the given context.
    2. Maintain the tone which provide in input .
    3. Consider adding additional insights, information, or perspectives to enrich the discussion.
    4. Aim to foster a positive and constructive exchange of ideas.
    5. generate reply in 2-3 line only .
    
     generate responses that are considerate, engaging, and relevant to the comments made in the provided context. Adjust the instructions as needed for your specific comment reply requirements.
    `,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  tweet: {
    type: "tweet",
    title: "Tweet Generator",
    topic: "Tweet replier",
    subtopic: "Include more information ",
    tone: "Choose a tone",
    aiprompt: `Given the context provided as input, generate creative and unique replies to tweets while fact-checking the information presented. Ensure that the response is well-researched and provides factual information, especially if the tweet contains propaganda or misinformation.

    
    Instructions:
    1. Read the provided tweet carefully to understand its content and context.
    2. If the tweet contains propaganda or misinformation, fact-check the claims and provide accurate information in the reply with input tweet tone .
    3. Craft a creative and engaging response that addresses the content of the tweet while maintaining a input tone.
    4. Ensure that the reply aligns with the provided context and offers valuable insights or corrections.
    5. Aim for originality and clarity in the response, promoting informed discussion and critical thinking.
   
     Generate replies that are both creative and factually accurate, contributing to meaningful dialogue and addressing misinformation when necessary. Adjust the instructions as needed based on your specific tweet reply generation requirements.
    
    `,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  avatar: {
    type: "avatar",
    title: "Avatar Generator",
    topic: "Describe the looks of avatar",
    subtopic: "Add your opinion ",
    tone: "Choose a tone ",
    aiprompt: `Given the context provided as input, generate creative and unique visual concepts for avatars . Develop ideas that bring a fresh and distinctive perspective, enhancing the overall visual representation associated with the provided context.

    Instructions:
    1. Generate visual concepts for avatars that are creative and unique, reflecting the provided context.
    2. Consider incorporating innovative visual elements, colors, shapes, or styles.
    3. Ensure the visual concepts align with the themes and atmosphere of the provided context.
    4. Aim for generating images that looks ultra real.
    5. make only 5 avatars prompts
    6. add this info at last of every image prompt high quality,photorealistic,high resolution ,high details cartoons
    
    Generate descriptions or concepts that can inspire visual content creation. Adjust the instructions as needed based on your specific avatar  generation requirements.`,
    model: "dall-e-3",
    credits: 2,
  },
  backgroundMusicGen: {
    type: "backgroundMusicGen",
    title: "Background Music Generator",
    topic: "What is subject or purpose of video",
    subtopic: "video is about",
    tone: "Choose a tone ",
    aiprompt: `
    Given the context provided as input,Generate background instrumental music, tunes, or themes available on the internet that best define the given prompt:
    **Instructions:**

   1.Search for instrumental background music, tunes, or themes available on the internet that align with the provided context and selected tone (funny or serious).
   2.Consider the mood, atmosphere, and narrative of the context when selecting music options.
   3.Ensure that the chosen instrumental music complements the tone and enhances the overall impact of the video or content.
   4.Provide at least five options with the names of the instrumental tracks and their respective artists or composers.
   5.Output only the available instrumental music, tune, or theme names along with their artists or composers, tailored to the provided context and selected tone.

   Generate background instrumental music options that resonate with the given context and selected tone, enhancing the overall viewer experience. Adjust the instructions as needed to suit your specific music selection requirements..`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },

  all: {
    type: "all",
    title: "All-in-One Generator",
    topic: "tell the main idea ",
    subtopic: " Describe the in few line  ",
    tone: "Choose a tone ",
    aiprompt: "",
    model: "gpt-3.5-turbo",
    credits: 10,
  },
};
export const MarketingFormProps = {
  all: {
    type: "all",
    title: "Promotion Package Generator",
    topic: "Describe the your video idea with niche",
    subtopic: "Include more info",
    tone: "choose a tone",
    aiprompt: ` `,
    model: "gpt-3.5-turbo",
    credits: 10,
  },
  calculator: {
    type: "calculator",
    title: "Paid Promotion Calculator",
    topic:
      "Describe the social media account followers and views on each post ",
    tone: "",
    subtopic: "Also inlcude main points ",

    aiprompt: `As an experienced evaluator in the field of social media promotions of youtube videos , you understand the importance of determining fair rates for paid promotions based on specific metrics . To streamline the process and ensure accurate calculations, consider the following parameters:

    **Instructions:**
    1. provide price range for story promotion and post promotion separately if no country name provided consider india must  .
    2. Based on the provided metrics, calculate the range within which the user can charge for paid promotions for adding story  and post with given time , region and with respect to purchasing power parity of country.
    3. Ensure price range also in numbers don’t give it in alphabets ans must be provided.
    4. output always in these steps engagement rate,audience demographics,industry standards,lower range and upper range at last conclusion.
    5. must provided range in indian rupees if no currency given 
    
    By leveraging these insights and incorporating relevant metrics, you can generate fair and competitive rates for paid promotions for story and post both separately for  that align with the user's social media presence and audience engagement. Please input the required metrics to calculate the appropriate promotion rates.`,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  email: {
    type: "email",
    title: "Promotion Email Generator",
    topic: "Describe the reason of email",
    subtopic: "Include more info",
    tone: " choose a tone",
    aiprompt: `**Generate sponsorship email based on the provided input context**

        **Instructions:**
    1. Include your channel name and a brief description of the video for which you are seeking sponsorship.
    2. Clearly articulate the benefits of sponsoring your video, such as exposure to your audience and alignment with your content theme.
    3. Express enthusiasm and interest in collaborating with potential sponsors.
    4. Provide relevant statistics or metrics about your channel's viewership, engagement, and demographics to demonstrate the value of sponsorship.
    5. Customize the email to each potential sponsor, highlighting how their product or service fits seamlessly with your content.
    6. End the email with a call to action, inviting the sponsor to discuss partnership opportunities further.
    
    Craft a compelling sponsorship email tailored to your channel name and video description. Highlight the value proposition for potential sponsors and express genuine interest in forming partnerships that benefit both parties. Adjust the instructions as needed to suit your specific sponsorship goals and requirements.
    `,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  finder: {
    type: "finder",
    title: "Sponcership Finder",
    topic: "Describe the your video ",
    subtopic: "Include more details",
    tone: "",
    aiprompt: `**Generate sponsorship services or products ideas based on the given context or video content provided in input**

    **Instructions:**
    1. Identify the main theme or content of your video.
    2. Generate sponsorship services or products ideas that align with the video content or context provided.
    3. Ensure that the sponsorship ideas are relevant, complementary, and add value to the video.
    4. Consider the audience's interests and preferences when suggesting sponsorship opportunities.
    5. Aim to propose services or products that enhance the overall viewer experience and engagement.
    6. Provide a variety of sponsorship ideas or lists tailored to different aspects of the video content.
    7. provide only headline don’t explain it .
    ---
    Use the provided video content or context to generate relevant sponsorship services or products ideas that align with your content. Ensure that the proposed sponsorships add value to your video and resonate with your audience's interests and preferences. Adjust the instructions as needed to suit the specific requirements of your sponsorship needs.
      `,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
  promotion: {
    type: "promotion",
    title: "collaboration Helper ",
    topic: "Describe the here ",
    subtopic: "Include more details",
    tone: "",
    aiprompt: `**Generate a dependency array with arrows indicating which sub-niches or sub-genres and niche  related to the provided context as input can be promoted together to grow audience **

    **Instructions:**
    1. Analyze the provided context or niche to identify potential sub-niches or sub-genres and main niches also related to it and also take instagram/ facebook content categories.
    2. Generate a dependency array that illustrates the relationships between the main context or niche and its associated sub-niches or sub-genres and main niches also.
    3. Use arrows to indicate which sub-niches or sub-genres and main niche can be promoted together to engage the audience effectively.
    4. Aim to provide a comprehensive overview of the various aspects within the niche or genre, facilitating collaboration and promotion among influencers or YouTubers.
    5.imagine this niche are given to each you-tuber abd they want to promote there videos on each others channel so tell me workflow how which niche can be promoted on video which one is dependent on which and how they can grow unitly.don’t explain just give dependency array with arrow
    6.generate only 10-15 outputs of niches or sub niches
    ---
    
    Below is an example of a dependency array with arrows indicating which sub-niches or sub-genres related to the provided context can be promoted together to understand the audience mindset:
     plaintext:
    [Insert your context or niche here]
        ↓
    - related niche/sub-niche or sub-genre
           
    This dependency array facilitates collaboration and promotion among influencers or YouTubers within the provided niche, allowing them to engage their audience more effectively and grow their viewership.
    
    `,
    model: "gpt-3.5-turbo",
    credits: 1,
  },
};

export const aiprompt = [
  {
    id: 1,
    longvidTypes: [
      {
        prompt: `Craft attention-grabbing, humorous, and unique titles for a YouTube adventure series only 5 titles on provide input. Each title should promise a blend of laughter, excitement, and something truly uncommon to pique viewers' curiosity. Strive for click-worthy titles that stand out from the crowd and entice viewers to hit play. Ensure a touch of humor, a dash of the unexpected, and a sense of uniqueness in each title to create intrigue and engagement.
        `,
        model: "gpt-3.5-turbo",
      },
      {
        prompt: `Given the context or post provided as input, craft a creative and unique description that adds depth and interest. Develop a description that captivates the audience, providing additional insights and enhancing the overall impact of the content.

      Instructions:
      1. Generate a description that generate pride and respect about  the provided context or post.
      2. Consider incorporating imaginative language, vivid imagery, biographical information .
      3. Ensure the description complements the tone and theme of the content it accompanies.
      4. Aim for originality and a description that sparks curiosity or emotion that easily understand by peoples.
      5.  Ensure by default generate output in hinglish language if no language is provided in context.
      
      Generate distinctive and engaging description tailored to the provided content. Adjust the instructions as needed based on your specific description generation requirements.`,
        model: "gpt-3.5-turbo",
      },
      {
        prompt: `Given the context or post provided as input, generate creative and unique hashtags that enhance the discover-ability and engagement of the content. Develop hashtags that capture the essence of the provided context or post, adding a distinctive touch.

    Instructions:
    1. Generate hashtags that are mostly used and trending keywords aligning with the themes or content of the provided context or post.
    2. Consider incorporating wordplay, trending you tube /Instagram trending keywords related to the content like famous slogans , quotes,words related to context in hinglish language,if no language provided in context.
    3. Ensure the hashtags complement the tone and purpose of the context or post.
    4. also add famous similar names and quotes of related context which are famous or always trends.
    5. Aim for originality and hashtags that resonate with the audience.
    6. if post are related to religion or particular country then generate tags in that language 
    
    Generate distinctive and engaging hashtags tailored to the provided content. Adjust the instructions as needed based on your specific hashtag generation requirements.`,
        model: "gpt-3.5-turbo",
      },
      {
        prompt: `Generate a captivating YouTube video script based on the provided context. Craft engaging dialogue, compelling scenes, and informative segments to keep the audience entertained and informed throughout the video.
    Instructions:
    1. Develop a script that aligns with the provided context, delivering valuable content to the audience.
    2. Create a clear structure for the video, including introductions, main segments, demonstrations, or conclusions and also add highlight topics ,add intro, outro and scenes no.
    3. Incorporate engaging dialogue and narration to maintain viewer interest and understanding.
    4. Ensure that the script flows smoothly and logically, guiding viewers through the content effectively.
    5. Aim for a balance between entertainment and information, catering to the interests and preferences of the target audience.
    
    Craft a compelling script for your YouTube video that captures the essence of the provided context. Use storytelling techniques, informative segments, and engaging dialogue to create an immersive viewing experience for your audience. Your script should effectively communicate the key points and themes while keeping viewers entertained and eager for more.
    `,
        model: "gpt-3.5-turbo",
      },
      {
        prompt: `Based on the provided context of the YouTube channel or Instagram account, generate a creative and unique disclaimer for the videos. Incorporate emojis and language that aligns with the content of the channel or account to ensure clarity and transparency for viewers.

     Instructions:
     1. Analyze the content and themes of the YouTube channel or Instagram account to understand the nature of the videos and potential disclaimers required.
     2. Consider the audience demographics, tone of the content, and any legal or ethical considerations when crafting the disclaimer.
     3. Use emojis and creative language to convey the disclaimer in a friendly and engaging manner while ensuring it effectively communicates necessary information.
     4. Include relevant details such as copyright information, disclosures for sponsored content, and disclaimers for educational or entertainment purposes.
     5. Ensure the disclaimer is clear, concise, and prominently displayed in the video description or caption for viewers to access easily.
     
     Example Output (Disclaimer):
     
     📢 Disclaimer: [Insert channel or account name] content is intended for [mention audience] and is provided for [mention purpose]. The views and opinions expressed in our videos are [mention stance on opinions]. Any information provided is [mention level of accuracy]. We encourage viewers to [mention action, such as consult a professional] before making decisions based on our content. For more information, please refer to our [insert relevant policies or contact details]. Thank you for watching! 🎥✨
    
     Generate a creative and unique disclaimer tailored to the specific context provided, incorporating emojis and language that resonate with the audience. Adjust the instructions as needed based on your specific disclaimer generation requirements.`,
        model: "gpt-3.5-turbo",
      },
      {
        prompt: `Generate compelling thumbnail prompts featuring maximum 2 to 3 scenes and realistic human emotions based on the provided context as input**

        **Instructions:**
        
        1.Design captivating thumbnail image that depict 2 to 3 scenes relevant to the provided context,merge all different scence one image like Photomontage but dont seperate scence merge them  .
        2.Also provide an suitable typography text for the video and add it in to images as headline
        3.Provide only four thumbnail options with well explations based on above information options must contains all information as given in input  
        4.must provide output like this "thumbnail1,thumbnail2,thumbnail3,thumbnail4,etc"
        5. provide all information for each thumbnail in single paragraph.
         Adjust the instructions as needed to suit your specific thumbnail generation requirements.
        
      `,
        model: "dall-e-3",
      },
    ],
  },
  {
    id: 2,
    shortvidTypes: [
      {
        prompt: `Given the context provided as input, create compelling and attention-grabbing titles for an reel or short video post. Craft titles that accurately represent the content, spark curiosity, and entice the reader to explore further.
    Instructions:
    1. Generate titles that encapsulate the key themes or insights present in the provided context.
    2. Aim for clarity and relevance, ensuring the titles accurately reflect the content.
    3. Consider incorporating engaging language, keywords, or intriguing phrases.
    4. Provide a variety of title options to choose from.
    
     generate short video and reels titles. each designed to capture attention and accurately represent the content within the provided context. Adjust the instructions as needed based on your specific title generation requirements.`,
        model: "gpt-3.5-turbo",
      },
      {
        prompt: `Given the context or reel provided as input, craft a creative and unique description that adds depth and interest. Develop a description that captivates the audience, providing additional insights and enhancing the overall impact of the content.

    Instructions:
    1. Generate a description that generate pride and respect about  the provided context or reel or short video.
    2. Consider incorporating imaginative language, vivid imagery, biographical information .
    3. Ensure the description complements the tone and theme of the content it accompanies.
    4. Aim for originality and a description that sparks curiosity or emotion that easily understand by peoples.
    5.  Ensure by default generate output in hinglish language means hindi but written in english if no language is provided in context.


     Generate distinctive and engaging description tailored to the provided content. Adjust the instructions as needed based on your specific description generation requirements.
    `,
        model: "gpt-3.5-turbo",
      },
      {
        prompt: `Given the context or post provided as input, generate creative and unique hashtags that enhance the discover-ability and engagement of the content. Develop hashtags that capture the essence of the provided context or post, adding a distinctive touch.

  
    Instructions:
    1. Generate hashtags that are mostly used and trending keywords aligning with the themes or content of the provided context or post.
    2. Consider incorporating wordplay, trending you tube /Instagram trending keywords related to the content like famous slogans , quotes,words related to context in hinglish language,if no language provided in context.
    3. Ensure the hashtags complement the tone and purpose of the context or post.
    4. also add famous similar names and quotes of related context which are famous or always trends.
    5. Aim for originality and hashtags that resonate with the audience.
    6. if post are related to religion or particular country then generate tags in that language 
    
    Generate distinctive and engaging hashtags tailored to the provided content. Adjust the instructions as needed based on your specific hashtag generation requirements.
    `,
        model: "gpt-3.5-turbo",
      },
      {
        prompt: `Given the context or post provided as input, craft a creative and unique reel script that brings the content to life in hinglish language only means hindi but written in english . Develop a script that is engaging, captures attention, and aligns with the tone and purpose of the provided context or post.

    Instructions:
    1. Generate a reel script/story that is comedic, creative and unique, adding a fresh perspective to the provided context or post.
    2. Consider incorporating interesting and nostalgic dialogues, visual cues, or storytelling elements.
    3. Ensure the script complements the themes and goals of the context or post.
    4. Aim for originality and a script/story that enhances the overall impact of the content.
    5. generate a story like one persons explaining script to other and script must be in hinglish language,if no language is provided in context.
    6 generate only 500-600 words of script.
    ---
    
    generate a creative and unique reel script. This prompt guides the model to produce a distinctive and attention-grabbing script tailored to the provided content. Adjust the instructions as needed based on your specific reel script generation requirements.`,
        model: "gpt-3.5-turbo",
      },

      {
        prompt: `Generate compelling thumbnail prompts featuring maximum 2 to 3 scenes and realistic human emotions based on the provided context as input**

        **Instructions:**
        
        1.Design captivating thumbnail image that depict 2 to 3 scenes relevant to the provided context,merge all different scence one image like Photomontage but dont seperate scence merge them  .
        2.Also provide an suitable typography text for the video and add it in to images as headline
        3.Provide only four thumbnail options with well explations based on above information options must contains all information as given in input  
        4.must provide output like this "thumbnail1,thumbnail2,thumbnail3,thumbnail4,etc"
        5. provide all information for each thumbnail in single paragraph.
         Adjust the instructions as needed to suit your specific thumbnail generation requirements.
        
    `,
        model: "dall-e-3",
      },
    ],
  },
  {
    id: 3,
    contentwriterTypes: [
      {
        prompt: `Given the context provided as input, create a detailed outline for an article , blog or book mentioned in input. Structure the outline to include key sections, headings, and subheadings, ensuring a logical flow of ideas. Consider incorporating relevant details, examples, and supporting information within each section.

    
        Instructions:
        1. Develop a comprehensive outline that organizes the content logically.
        2. Include main sections, headings, and subheadings based on the key themes in the context.
        3. Ensure coherence and a smooth transition between different parts of the outline
        4. don’t explain to much in the outline just take the headings H1 and subheadings as H2 
        5.generate a outline such that it looks like an professional human written.
        ---
         generate an outline according to input to produce a structured and well-organized outline that serves as a foundation for developing a detailed article or blog post or book as provided. Adjust the instructions as needed based on your specific outline generation requirements.`,
        model: "gpt-3.5-turbo",
      },
      {
        prompt: `Given the context provided as input, create compelling and attention-grabbing titles for an article, blog post or book mentioned in input . Craft titles that accurately represent the content, spark curiosity, and entice the reader to explore further.

    
    Instructions:
    1. Generate titles that encapsulate the key themes or insights present in the provided context.
    2. Aim for clarity and relevance, ensuring the titles accurately reflect the content.
    3. Consider incorporating engaging language, keywords, or intriguing phrases.
    4. Provide a variety of title options to choose from.
    
     generate article,blog or book titles mentioned in input . each designed to capture attention and accurately represent the content within the provided context. Adjust the instructions as needed based on your specific title generation requirements.`,
        model: "gpt-3.5-turbo",
      },

      {
        prompt: `Given the context provided as input, generate a concise and informative summary. Your summary should capture the key points, main ideas, and essential details of the given context. Aim for clarity and brevity in your response.

    
    Instructions:
    1. Consider the most important elements of the context.
    2. Focus on conveying the central theme and critical details.
    3. Aim for a summary that is clear, coherent, and easily understandable.
    4. ensure that content must looks like human written not look like ai generated .
    
   This prompt guides the model to produce a summary based on the input context you provide. Adjust the instructions as needed for your specific requirements.
    `,
        model: "gpt-3.5-turbo",
      },
      {
        prompt: `Given the context provided as input, expand on the details, themes, and nuances present in the narrative. Your response should delve deeper into the storyline, elaborate on character motivations, describe key events in more detail, and provide additional context where necessary. Aim to enhance the richness and complexity of the given context.

    Instructions:
    1. Explore the motivations and emotions of the characters involved.
    2. Provide more in-depth descriptions of key events and settings.
    3. Elaborate on the historical and cultural aspects mentioned in the context.
    4. Consider adding dialogues or interactions that contribute to the narrative.
    5. ensure that content must looks like human written not look like ai generated .
    
    
    This prompt guides the model to provide a more detailed and nuanced exploration of the input context. Adjust the instructions as needed for your specific requirements.`,
        model: "gpt-3.5-turbo",
      },

      {
        prompt: `Given the context or post provided as input, generate creative and unique hashtags that enhance the discover-ability and engagement of the content. Develop hashtags that capture the essence of the provided context or post, adding a distinctive touch.

    
    Instructions:
    1. Generate hashtags that are mostly used and trending keywords aligning with the themes or content of the provided context or post.
    2. Consider incorporating wordplay, trending you tube /Instagram trending keywords related to the content like famous slogans , quotes,words related to context in hinglish language,if no language provided in context.
    3. Ensure the hashtags complement the tone and purpose of the context or post.
    4. also add famous similar names and quotes of related context which are famous or always trends.
    5. Aim for originality and hashtags that resonate with the audience.
    6. if post are related to religion or particular country then generate tags in that language 
    
    
    Generate distinctive and engaging hashtags tailored to the provided content. Adjust the instructions as needed based on your specific hashtag generation requirements.`,
        model: "gpt-3.5-turbo",
      },
      {
        prompt: `Given the context provided as input, create catchy and memorable slogans that encapsulate the essence of the content. Develop concise and impactful phrases that resonate with the intended message, brand, or theme. Consider the tone, target audience, and key themes for effective slogan creation.

        
    Instructions:
    1. Generate slogans that succinctly convey the core message or theme of the provided context.
    2. Prioritize clarity, memorability, and relevance to the target audience.
    3. Consider incorporating key words or phrases from the context to enhance connection.
    4. Aim for a positive and resonant tone that aligns with the overall context.
    5. generate only 10 slogans.
    
    
     generate slogans. This prompt guides the model to create concise and impactful slogans that reflect the essence of the provided context. Adjust the instructions as needed based on your specific slogan generation requirements.`,
        model: "gpt-3.5-turbo",
      },
      {
        prompt: `**Generate compelling thumbnail prompts featuring multiple scenes and realistic human emotions based on the provided context as input**

        **Instructions:**
        
        1.Design captivating thumbnail image that depict various scenes relevant to the provided context,merge all different scence one image like various scene in various position in that image college.
        2.Also if context needed human involvement incorporate upper chest bodies with extremely ultra realistic human face displaying extreme emotions that align with the context and intended tone.
        3.overall thumbnail looks ultra real with ultra real human body and face.
        4.Must add "typogaphy" text that best describe the video purpose in thumbnail .
        5.Provide only four thumbnail options with well explations based on above information options must contains all information as given in input  
        
         Adjust the instructions as needed to suit your specific thumbnail generation requirements.
    
    `,
        model: "dall-e-3",
      },
    ],
  },

  {
    id: 4,
    socialmediaTypes: [
      {
        prompt: `Given the context or post provided as input, craft a creative and unique social media caption that complements the content and captivates the audience. Develop a caption that stands out, aligns with the tone of the content, and sparks engagement.

    
   Instructions:
    1. Generate a social media caption that is creative and unique, enhancing the impact of the provided context or post.
    2. Consider incorporating inventive language, wordplay, or high iq and humorous lines.
    3. Ensure the caption complements the tone and style of the content it accompanies.
    4. Aim for originality and a caption that encourages audience interaction.
    5.make only 5 don’t stop before completing
    
    
    
     generate a creative and unique social media caption. This prompt guides the model to produce a captivating and distinctive caption tailored to the provided content. Adjust the instructions as needed based on your specific social media caption generation requirements.
    
    `,
        model: "gpt-3.5-turbo",
      },
      {
        prompt: `Given the context or post provided as input, generate creative and unique hashtags that enhance the discover-ability and engagement of the content. Develop hashtags that capture the essence of the provided context or post, adding a distinctive touch.

    
    Instructions:
    1. Generate hashtags that are mostly used and trending keywords aligning with the themes or content of the provided context or post.
    2. Consider incorporating wordplay, trending you tube /Instagram trending keywords related to the content like famous slogans , quotes,words related to context in hinglish language,if no language provided in context.
    3. Ensure the hashtags complement the tone and purpose of the context or post.
    4. also add famous similar names and quotes of related context which are famous or always trends.
    5. Aim for originality and hashtags that resonate with the audience.
    6. if post are related to religion or particular country then generate tags in that language 
    
    
    Generate distinctive and engaging hashtags tailored to the provided content. Adjust the instructions as needed based on your specific hashtag generation requirements.
    `,
        model: "gpt-3.5-turbo",
      },
      {
        prompt: `Given the context or post provided as input, craft a creative and unique description that adds depth and interest. Develop a description that captivates the audience, providing additional insights and enhancing the overall impact of the content.

    
    Instructions:
    1. Generate a description that generate pride and respect about  the provided context or post.
    2. Consider incorporating imaginative language, vivid imagery, biographical information .
    3. Ensure the description complements the tone and theme of the content it accompanies.
    4. Aim for originality and a description that sparks curiosity or emotion that easily understand by peoples.
    5.  Ensure by default generate output in hinglish language means hindi but written in english if no language is provided in context.
   
    
    Generate distinctive and engaging description tailored to the provided content. Adjust the instructions as needed based on your specific description generation requirements.`,
        model: "gpt-3.5-turbo",
      },
      {
        prompt: `Generate captivating poster or banner ideas based on the provided context:
 
        Instructions:
        1. Brainstorm visually appealing concepts that resonate with the essence of the provided context.
        2. Consider the target audience and tailor the poster or banner ideas to their preferences and interests.
        3. Explore creative design elements, colors, and imagery that evoke emotions and grab attention.
        4. Ensure that the poster or banner effectively communicates the key message or theme of the context.
        5. Aim for clarity, simplicity, and aesthetic appeal to make the poster or banner visually impactful.
        6. Experiment with different layouts, fonts, and visual elements to create a memorable design.
        7. provide 2 poster ideas with typography and output must be in 30-50 words .
        
        Generate engaging poster or banner ideas that effectively convey the essence of the provided context. Focus on creating visually stunning designs that captivate the audience and leave a lasting impression. Adjust the instructions as needed to suit your specific poster or banner creation requirements`,
        model: "dall-e-3",
      },
    ],
  },
  {
    id: 5,
    marketingTypes: [
      {
        prompt: ` Craft a persuasive quote that entices viewers to watch the video. The quote should be concise, impactful, and directly related to the video content. Encourage viewers to click the link to access the video,quote length must be 10-12 words .`,
        model: "gpt-3.5-turbo",
      },
      {
        prompt: `Given the context or post provided as input, generate creative and unique hashtags that enhance the discover-ability and engagement of the content. Develop hashtags that capture the essence of the provided context or post, adding a distinctive touch.

    
        Instructions:
        1. Generate hashtags that are mostly used and trending keywords aligning with the themes or content of the provided context or post.
        2. Consider incorporating wordplay, trending you tube /Instagram trending keywords related to the content like famous slogans , quotes,words related to context in hinglish language,if no language provided in context.
        3. Ensure the hashtags complement the tone and purpose of the context or post.
        4. also add famous similar names and quotes of related context which are famous or always trends.
        5. Aim for originality and hashtags that resonate with the audience.
        6. if post are related to religion or particular country then generate tags in that language 
        
        
        Generate distinctive and engaging hashtags tailored to the provided content. Adjust the instructions as needed based on your specific hashtag generation requirements.
    `,
        model: "gpt-3.5-turbo",
      },
      {
        prompt: `**Draft a paragraph encouraging collaboration between influencers or YouTubers:**

               **Instructions:**
        1. Craft a concise paragraph that emphasizes the benefits of mutual promotion between influencers or YouTubers.
        2. Highlight the importance of sharing audiences and growing together on platforms like Instagram or YouTube.
        3. Mention the relatable niches of both parties and how collaboration can enhance visibility and engagement.
        4. Include a call-to-action inviting influencers or YouTubers to DM for collaboration and propose the idea of creating a group for mutual promotion.
        5. Ensure the paragraph is persuasive and engaging, with a maximum of 80-90 words.
        6. provide both niche as my niche means senders niche and other one is recievers niche in context.
        
          By following these guidelines, generate an paragraph.`,
        model: "gpt-3.5-turbo",
      },
      {
        prompt: `**Generate clickbait thumbnails that encapsulate the essence of the video content and entice viewers to click and watch. Craft visually compelling images that convey the main idea of the video while intriguing the audience with curiosity.**

    
        Instructions:
        1. Create clickbait thumbnails by understanding the information provided in context that vividly represent the core concept or topic discussed in the video or provided context.
        2. Incorporate eye-catching visuals, vibrant colors, and attention-grabbing elements to capture viewers' attention.
        3. Ensure the thumbnails provide a clear indication of what the video is about and what viewers can expect to see.
        4. Aim for thumbnails that evoke curiosity and compel viewers to click and watch the video.
        5. Make sure the thumbnails are high-quality, photorealistic, high-resolution, and detailed.
        6. must design an eye-catching thumbnail that represents the essence of the video content which provided in context,ensure vibrant clors,engaging visuals,and clear text elements.
        
         Generate descriptions or concepts that can inspire visual content creation. Adjust the instructions as needed based on your specific thumbnail generation requirements.`,
        model: "dall-e-3",
      },
    ],
  },
];
export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const benefits = [
  {
    id: 1,
    longvidTypes: [
      {
        id: "0",
        title: "Video Idea Generator",
        text: "This idea generator creates the ideas for you - No matter the topic. Give it a try!",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/longvid/idea",
      },
      {
        id: "1",
        title: "Thumbnail Generator",
        text: "Craft Eye-Catching Thumbnails to Boost Clicks and Views Effortlessly!",
        // backgroundUrl: "@public/assets/benefits/card-6.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/longvid/thumbnail",
      },

      {
        id: "2",
        title: "Tags Generator",
        text: "Find the best hashtags for your new post which can generate additional clicks and views.",
        // backgroundUrl: "@/benefits/card-4.svg",
        iconUrl: benefitIcon4,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/longvid/tags",
      },
      {
        id: "3",
        title: "Script Generator",
        text: "Level up your (video) creations with generated scripts that guide you through the creation process.",
        // backgroundUrl: "@public/assets/benefits/card-5.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/longvid/script",
      },
      {
        id: "4",
        title: "Description Generator",
        text: "Nowadays, AI generates better Description for your content than most people, so what are you waiting for?.",
        // backgroundUrl: "@public/assets/benefits/card-3.svg",
        iconUrl: benefitIcon3,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/longvid/description",
      },
      {
        id: "5",
        title: "Title Generator",
        text: "Without a catchy title, you won't catch the attention. Let this tool generate the titles for you. They are often better.",
        // backgroundUrl: "@public/assets/benefits/card-2.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/longvid/title",
      },
      {
        id: "6",
        title: "Ai Images Generator",
        text: "Generate Stunning Images in Seconds! based on video script or description that can be added to your video to explain topics",
        // backgroundUrl: "@public/assets/benefits/card-6.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/longvid/aiimages",
      },
      {
        id: "7",
        title: "Script Translator",
        text: "Break Language Barriers: Translate Texts Seamlessly with Ease! and make your content for worldwide audience",
        // backgroundUrl: "@public/assets/benefits/card-6.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/longvid/translate",
      },
      {
        id: "8",
        title: "Disclaimer Generator",
        text: "Protect with Precision: Craft Clear Disclaimers for Legal Confidence!",
        // backgroundUrl: "@public/assets/benefits/card-6.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/longvid/disclamer",
      },
      {
        id: "9",
        title: "Email Generator",
        text: "Inspire Engagement with your team: Generate Persuasive Emails with Ease!",
        // backgroundUrl: "@public/assets/benefits/card-6.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/longvid/email",
      },
    ],
  },
  {
    id: 2,
    shortvidTypes: [
      {
        id: "0",
        title: "Short Video Idea Generator",
        text: "Unleash Creativity Instantly: Generate Quick Video Ideas for Engaging Content!",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/shortvid/idea",
      },
      {
        id: "1",
        title: "Title Generator",
        text: "Without a catchy title, you won't catch the attention. Let this tool generate the titles for you. They are often better.",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/shortvid/title",
      },
      {
        id: "2",
        title: "Description Generator",
        text: "Nowadays, AI generates better Description for your content than most people, so what are you waiting for?.",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/shortvid/description",
      },
      {
        id: "3",
        title: "Tags Generator",
        text: "Find the best hashtags for your new post which can generate additional clicks and views.",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/shortvid/tags",
      },
      {
        id: "4",
        title: "Script Generator",
        text: "Level up your (video) creations with generated scripts that guide you through the creation process.",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,

        link: "/criconai/shortvid/script",
      },
      {
        id: "5",
        title: "Thumbnail Generator",
        text: "Craft Eye-Catching Thumbnails to Boost Clicks and Views Effortlessly!",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/shortvid/thumbnail",
      },
      {
        id: "6",
        title: "Ai Images Generator",
        text: "Generate Stunning Images in Seconds! based on video script or description that can be added to your video to explain topics",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/shortvid/aiimages",
      },
      {
        id: "7",
        title: "script translator",
        text: "Break Language Barriers: Translate Texts Seamlessly with Ease! and make your content for worldwide audience",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/shortvid/translate",
      },
      {
        id: "8",
        title: "Slogan Generator",
        text: "Craft Unforgettable Brand of video Identities: Generate Catchy Slogans in Seconds to Leave a Lasting Impression!",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/shortvid/slogan",
      },
      {
        id: "9",
        title: "Facts Generator",
        text: "Fuel Your Knowledge: Discover Fascinating Facts at Your Fingertips! for your videos",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/shortvid/facts",
      },
      {
        id: "10",
        title: "Quote Generator",
        text: "Inspiration at Your Fingertips: Generate Meaningful Quotes for Every Occasion!",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/shortvid/quote",
      },
      {
        id: "11",
        title: "Riddle Generator",
        text: "Unlock the Mystery: Create Enigmatic Riddles to Puzzle and Entertain!",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/shortvid/riddle",
      },
    ],
  },
  {
    id: 3,
    contentwriterTypes: [
      {
        id: "0",
        title: "content writing Idea Generator",
        text: "Unleash Creativity Instantly: Generate Quick content writing Ideas for Engaging Content!",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/contentwriter/idea",
      },

      {
        id: "1",
        title: "Outline Generator",
        text: "Level up your content writing creations with generated content that guide you through the creation process.",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/contentwriter/outline",
      },
      {
        id: "2",
        title: "Article Generator",
        text: "Empower Your Content Strategy: Effortlessly Generate Engaging Articles for Every Audience!",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/contentwriter/article",
      },
      {
        id: "3",
        title: "Blog Generator",
        text: "Effortless Content Creation: Generate Dynamic Blog Posts for Every Niche and Audience!",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/contentwriter/blog",
      },
      {
        id: "4",
        title: "Book Generator",
        text: "Unleash Your Imagination: Create Entire Worlds with Our Book Generator!",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/contentwriter/book",
      },
      {
        id: "5",
        title: "Title Generator",
        text: "Without a catchy title, you won't catch the attention. Let this tool generate the titles for you. They are often better.",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,

        link: "/criconai/contentwriter/title",
      },

      {
        id: "6",
        title: "Tags Generator",
        text: "Find the best hashtags for your new post which can generate additional clicks and views.",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/contentwriter/images",
      },
      {
        id: "7",
        title: "Ai Images Generator",
        text: "Generate Stunning Images in Seconds! based on video script or description that can be added to your video to explain topics",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/contentwriter/summary",
      },
      {
        id: "8",
        title: "translation",
        text: "Break Language Barriers: Translate Texts Seamlessly with Ease! and make your content for worldwide audience",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/contentwriter/expander",
      },

      {
        id: "9",
        title: "Book CoverImage Generator",
        text: "Design Your Story: Craft Captivating Book Cover Images with Ease!",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/contentwriter/translation",
      },
      {
        id: "10",
        title: "Expander Generator",
        text: "Expand Your Ideas: Amplify Your Text with Our Expander Generator!",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/contentwriter/coverimage",
      },
      {
        id: "11",
        title: "Summary Generator",
        text: "Nowadays, AI generates better Summary for your content than most people, so what are you waiting for?.",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/contentwriter/email",
      },
      {
        id: "12",
        title: "Slogan Generator",
        text: "Craft Unforgettable Brand of video Identities: Generate Catchy Slogans in Seconds to Leave a Lasting Impression!",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/contentwriter/slogan",
      },
      {
        id: "13",
        title: "Email Generator",
        text: "Inspire Engagement with your team: Generate Persuasive Emails with Ease!",
        // backgroundUrl: "@public/assets/benefits/card-6.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/contentwriter/email",
      },
    ],
  },
  {
    id: 4,
    socialmediaTypes: [
      {
        id: "0",
        title: "Posts Idea Generator",
        text: "Spark Your Creativity: Generate Endless Post Ideas for Engaging Content!",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/socialmedia/idea",
      },
      {
        id: "1",
        title: "Post Generator",
        text: "Revolutionize Your Content Creation: Generate Dynamic Posts with AI-Powered Precision!",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/socialmedia/images",
      },
      {
        id: "2",
        title: "Bio Generator",
        text: "Craft Your Digital Identity: Personalize Your Social Media Bio with Ease!",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/socialmedia/bio",
      },
      {
        id: "3",
        title: "Tags Generator",
        text: "Find the best hashtags for your new post which can generate additional clicks and views.",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/socialmedia/tag",
      },
      {
        id: "4",
        title: "Caption Generator",
        text: "Create a unique and customized social media bio for all major social media platforms in minutes for personal or professional needs.",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/socialmedia/caption",
      },
      {
        id: "5",
        title: "Description Generator",
        text: "Capture Attention: Craft Compelling Post Descriptions with Ease!",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/socialmedia/description",
      },
      {
        id: "6",
        title: "Comment replier",
        text: "Engage with Ease: Craft Personalized Replies with Our Comment Replier!",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/socialmedia/comment",
      },
      {
        id: "7",
        title: "Tweet replier",
        text: "Swift Engagement: Personalize Your Responses with Our Tweet Replier!",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/socialmedia/tweet",
      },
      {
        id: "8",
        title: "Avatar Generator",
        text: "Avatar Personalization Made Easy: Create Unique Social Media Avatars Effortlessly!",
        // backgroundUrl: "@public/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
        light: true,
        link: "/criconai/socialmedia/avatar",
      },
    ],
  },
];

export const roadmap = [
  {
    id: "0",
    title: "Audio Generation",
    text: "With this create content in any language by distroying language barrier",
    date: "dec 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Text Generation",
    text: "AI models like GPT-3 can understand context, style, and audience preferences, enabling tailored content generation",
    date: "dec 2023",
    status: "done",
    imageUrl: roadmap2,
    colorful: true,
  },
  {
    id: "2",
    title: "Images Generation",
    text: "Algorithms like DALL-E models can produce diverse and high-quality images across various styles and themes",
    date: "dec 2023",
    status: "done",
    imageUrl: roadmap3,
    colorful: true,
  },
  {
    id: "3",
    title: "Video Generation",
    text: " AI can generate engaging video content to specific audiences,saving time and resources of content creators",
    date: "May 2024",
    status: "progress",
    imageUrl: roadmap4,
    colorful: true,
  },
];
export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];
// **Generate clickbait thumbnails that encapsulate the essence of the video content and entice viewers to click and watch. Craft visually compelling images that convey the main idea of the video while intriguing the audience with curiosity.**

//     Instructions:
//     1. Create clickbait thumbnails by understanding the information provided in context that vividly represent the core concept or topic discussed in the video or provided context.
//     2. Incorporate eye-catching visuals, vibrant colors, and attention-grabbing elements to capture viewers' attention.
//     3. Ensure the thumbnails provide a clear indication of what the video is about and what viewers can expect to see.
//     4. Also provide an suitable typography text for the video and add it in to images as headline
//     5. Make sure the thumbnails are high-quality, photorealistic, high-resolution, and detailed.
//     6.  must provide output like this only -- desc1,desc2,desc3,etc.
//      Generate descriptions or concepts that can inspire visual content creation. Adjust the instructions as needed based on your specific thumbnail generation requirements.
