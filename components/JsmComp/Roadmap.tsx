import Heading from "@/components/shared/Svgs/HEading";
import Tagline from "@/components/shared/Svgs/TAgline";
import { roadmap } from "@/constants";
import check2 from "@/public/assets/check-02.svg";
import grid from "@/public/assets/grid.png";
import loading1 from "@/public/assets/loading-01.svg";
import Image from "next/image";

const Roadmap = () => (
  <div className="container md:pb-10 ">
    <div className="flex mb-5 items-center justify-center">
      <h2 className="h2 text-[#183052]">[Our main</h2>

      <h2 className="h2 text-[rgb(249,91,194)]"> ...Features</h2>
      <h2 className="h2 text-[#183052]">]</h2>
    </div>

    <div className="relative grid gap-3 lg:gap-10 sm:grid-cols-2 md:gap-4 sm:pb-[7rem]">
      {roadmap.map((item: any) => {
        const status = item.status === "done" ? "Done" : "In progress";

        return (
          <div
            className={`md:flex max-h-[34rem] overflow-hidden even:sm:translate-y-[7rem] lg:h-[70vh] shadow-lg p-0.25 rounded-[2.5rem] ${
              item.colorful ? "bg-conic-gradient" : "bg-n-6"
            }`}
            key={item.id}
          >
            <div className="relative p-8 bg-n-8 min-h-[29rem] h-[30vh] lg:h-[70vh] rounded-[2.4375rem] overflow-hidden xl:p-15">
              <div className="absolute top-0 left-0 max-w-full">
                <Image
                  className="w-full"
                  src={grid}
                  width={550}
                  height={550}
                  alt="Grid"
                />
              </div>
              <div className="relative z-1">
                <div className="flex items-center justify-between max-w-[27rem]  ">
                  <Tagline>{item.date}</Tagline>

                  <div className="flex items-center  bg-n-1 rounded text-n-8">
                    <Image
                      className="mr-2.5"
                      src={item.status === "done" ? check2 : loading1}
                      width={16}
                      height={16}
                      alt={status}
                    />
                    <div className="tagline ">{status}</div>
                  </div>
                </div>

                <div className="mt-4">
                  <Image
                    className="w-full"
                    src={item.imageUrl}
                    width={628}
                    height={426}
                    alt={item.title}
                  />
                </div>
                <h4 className="h4 text-[#4494f0] mb-3">{item.title}</h4>
                <p className="body-2 text-white">{item.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Roadmap;
