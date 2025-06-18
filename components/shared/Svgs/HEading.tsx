import TagLine from "@/components/shared/Svgs/TAgline";

const Heading = ({ className, title, text, tag }: any) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-8 lg:mb-10 md:text-center`}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h2 text-white">{title}</h2>}
      {text && <p className="body-2 mt-4 text-gray-300">{text}</p>}
    </div>
  );
};

export default Heading;
