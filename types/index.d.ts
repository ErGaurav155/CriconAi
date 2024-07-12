/* eslint-disable no-unused-vars */

// ====== USER PARAMS
declare type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string | null;
  firstName: string;
  lastName: string;
  photo: string;
};

declare type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string | null;
  photo: string;
};

// ====== TRANSACTION PARAMS
declare type CheckoutTransactionParams = {
  plan: string;
  credits: number;
  amount: number;
  buyerId: string;
};

declare type CreateTransactionParams = {
  customerId: string;
  amount: number;
  credits: number;
  plan: string;
  buyerId: string;
  createdAt: Date;
};

declare type LongVidTypeKey =
  | "idea"
  | "title"
  | "description"
  | "tags"
  | "keyword"
  | "script"
  | "thumbnail"
  | "aiimages"
  | "translate"
  | "disclamer"
  | "email"
  | "all"
  | "TexttoAudio"
  | "prompt"
  | "backgroundMusicGen"
  | "audiotoAudio"
  | "poll";

declare type ShortVidTypeKey =
  | "idea"
  | "title"
  | "description"
  | "tags"
  | "script"
  | "thumbnail"
  | "aiimages"
  | "translate"
  | "slogan"
  | "facts"
  | "quote"
  | "riddle"
  | "all"
  | "TexttoAudio"
  | "backgroundMusicGen"
  | "prompt"
  | "audiotoAudio"
  | "poll";

declare type ContentWriterTypeKey =
  | "idea"
  | "outline"
  | "article"
  | "blog"
  | "book"
  | "title"
  | "images"
  | "summary"
  | "expander"
  | "translation"
  | "coverimage"
  | "email"
  | "tag"
  | "all"
  | "prompt"
  | "TexttoAudio"
  | "slogan";

declare type SocialMediaTypeKey =
  | "idea"
  | "images"
  | "bio"
  | "caption"
  | "tag"
  | "description"
  | "comment"
  | "tweet"
  | "avatar"
  | "all"
  | "prompt"
  | "backgroundMusicGen"
  | "poll";

declare type MarketingTypeKey =
  | "all"
  | "calculator"
  | "finder"
  | "email"
  | "promotion";

declare type voiceType =
  | "alloy"
  | "echo"
  | "fable"
  | "onyx"
  | "nova"
  | "shimmer";

declare type imageType =
  | "256x256"
  | "512x512"
  | "1024x1024"
  | "1792x1024"
  | "1024x1792"
  | null
  | undefined;

declare type imagenumber = number | null | undefined;
// ====== URL QUERY PARAMS

declare type LongSearchParamProps = {
  params: { id: string; type: LongVidTypeKey };
  searchParams: { [key: string]: string[] | undefined };
};
declare type ShortSearchParamProps = {
  params: { id: string; type: ShortVidTypeKey };
  searchParams: { [key: string]: string[] | undefined };
};
declare type SocialMediaSearchParamProps = {
  params: { id: string; type: SocialMediaTypeKey };
  searchParams: { [key: string]: string[] | undefined };
};
declare type MarketingSearchParamProps = {
  params: { id: string; type: MarketingTypeKey };
  searchParams: { [key: string]: string[] | undefined };
};
declare type ContentWriterSearchParamProps = {
  params: { id: string; type: ContentWriterTypeKey };
  searchParams: { [key: string]: string[] | undefined };
};

declare type LongAiFormProps = {
  type: LongVidTypeKey;
};
declare type ShortAiFormProps = {
  type: ShortVidTypeKey;
};
declare type ContentWriterAiFormProps = {
  type: ContentWriterTypeKey;
};
declare type SocialMediaFormProps = {
  type: SocialMediaTypeKey;
};
declare type MarketingFormProps = {
  type: MarketingTypeKey;
};
