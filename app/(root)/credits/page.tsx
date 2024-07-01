import { SignedIn, auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";
import Bestseller from "@/public/assets/bestseller1.png";
import { Button } from "@/components/ui/button";
import { plans } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import Checkout from "@/components/shared/Checkout";
import { Faq } from "@/components/shared/Faq";
import { Footer } from "@/components/shared/Footer";
import { IndianRupeeIcon } from "lucide-react";
import DiscountBanner from "@/components/shared/DiscountBanner";

const Credits = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 120); // 120 seconds from now
  return (
    <div className="wrapper">
      <DiscountBanner />

      <h1 className="text-center font-semibold text-black mt-2">
        Note: For Outside India Use Paypal For Purchase(Buy Credits / Wallet /
        Paypal)
      </h1>
      <div className="flex flex-col gap-20">
        <section>
          <ul className="credits-list">
            {plans.map((plan) => (
              <li key={plan.name} className="relative credits-item ">
                {plan.name === "Pro Package" ? (
                  <div className="absolute -top-5 -right-5 flex ">
                    <div className="flex-1">
                      <Image
                        src={Bestseller}
                        alt="Criconai"
                        width={100}
                        height={200}
                        priority
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="flex-center flex-col gap-3">
                  <Image src={plan.icon} alt="check" width={50} height={50} />
                  <p className="p-20-semibold mt-2 text-purple-500">
                    {plan.name}
                  </p>
                  <p className="text-[36px] font-normal sm:text-[44px] leading-[120%] sm:leading-[56px] text-dark-600">
                    <IndianRupeeIcon className="w-6  h-6  inline-block" />
                    {plan.price}{" "}
                    <span className="text-[26px] font-small sm:text-[34px] line-through text-orange-700">
                      {plan.original}
                    </span>
                  </p>
                  <p className=" p-16-regular">
                    <span className=" font-semibold text-lg  text-green-600 text-[20px] font-small sm:text-[30px]">
                      {plan.credits}{" "}
                    </span>
                    Credits
                  </p>
                </div>

                {/* Inclusions */}
                <ul className="flex flex-col gap-5 py-9">
                  {plan.inclusions.map((inclusion) => (
                    <li
                      key={plan.name + inclusion.label}
                      className="flex items-center gap-4"
                    >
                      <Image
                        src={`/assets/icons/${
                          inclusion.isIncluded ? "check.svg" : "cross.svg"
                        }`}
                        alt="criconai"
                        width={24}
                        height={24}
                      />
                      <p className="p-16-regular ">{inclusion.label}</p>
                    </li>
                  ))}
                </ul>

                {plan.name === "Free" ? (
                  <Button variant="outline" className="credits-btn">
                    Free Consumable
                  </Button>
                ) : (
                  <SignedIn>
                    <Checkout
                      plan={plan.name}
                      amount={plan.price}
                      credits={plan.credits}
                      buyerId={user._id}
                    />
                  </SignedIn>
                )}
              </li>
            ))}
          </ul>
        </section>
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default Credits;
