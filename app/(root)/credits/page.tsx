"use client";

import { useAuth, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Bestseller from "@/public/assets/bestseller1.png";
import { Button } from "@/components/ui/button";
import { plans } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import Checkout from "@/components/shared/Checkout";
import { Faq } from "@/components/shared/Faq";
import { Footer } from "@/components/shared/Footer";
import { DollarSignIcon, IndianRupeeIcon } from "lucide-react";
import DiscountBanner from "@/components/shared/DiscountBanner";
import { useEffect, useState, useRef } from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

const Credits = () => {
  const router = useRouter();
  const { userId } = useAuth();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const locationRef = useRef<string>("India");
  const hasRun = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/location");
        const locData = await res.json();
        locationRef.current = locData.location.country || "India";
      } catch (error) {
        console.error("Error fetching location:", error);
        locationRef.current = "India";
      }
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        // Fetch user data only if logged in
        const userData = await getUserById(userId);
        setUser(userData);
      } catch (error) {
        console.error("Error loading credits page:", error);
        router.push("/");
      } finally {
        setLoading(false);
      }
    };

    if (!hasRun.current) {
      hasRun.current = true;
      fetchData();
    }
  }, [userId, router]);

  if (loading) {
    return (
      <div className="wrapper flex justify-center items-center text-base font-normal">
        Loading...
      </div>
    );
  }

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
                {plan.name === "Pro Package" && (
                  <div className="absolute -top-5 -right-5 flex">
                    <div className="flex-1">
                      <Image
                        src={Bestseller}
                        alt="Bestseller"
                        width={100}
                        height={200}
                        priority
                      />
                    </div>
                  </div>
                )}
                <div className="flex-center flex-col gap-3">
                  <Image src={plan.icon} alt="check" width={50} height={50} />
                  <p className="p-20-semibold mt-2 text-purple-500">
                    {plan.name}
                  </p>
                  <p className="text-[36px] font-normal sm:text-[44px] leading-[120%] sm:leading-[56px] text-dark-600">
                    {locationRef.current === "India" ? (
                      <>
                        <IndianRupeeIcon className="w-6 h-6 inline-block" />
                        {plan.price}{" "}
                        {plan.original && (
                          <span className="text-[26px] font-small sm:text-[34px] line-through text-orange-700">
                            {plan.original}
                          </span>
                        )}
                      </>
                    ) : (
                      <>
                        <DollarSignIcon className="w-6 h-6 inline-block" />
                        {plan.usdPrice}{" "}
                        {plan.usdOriginal && (
                          <span className="text-[26px] font-small sm:text-[34px] line-through text-orange-700">
                            {plan.usdOriginal}
                          </span>
                        )}
                      </>
                    )}
                  </p>
                  <p className="p-16-regular">
                    <span className="font-semibold text-lg text-green-600 text-[20px] sm:text-[30px]">
                      {plan.credits}{" "}
                    </span>
                    Credits
                  </p>
                </div>

                <ul className="flex flex-col gap-5 py-9">
                  {plan.inclusions.map((inclusion) => (
                    <li
                      key={`${plan.name}-${inclusion.label}`}
                      className="flex items-center gap-4"
                    >
                      <Image
                        src={`/assets/icons/${
                          inclusion.isIncluded ? "check.svg" : "cross.svg"
                        }`}
                        alt={inclusion.isIncluded ? "Included" : "Excluded"}
                        width={24}
                        height={24}
                      />
                      <p className="p-16-regular">{inclusion.label}</p>
                    </li>
                  ))}
                </ul>

                {plan.name === "Free" ? (
                  <Button variant="outline" className="credits-btn">
                    Free Consumable
                  </Button>
                ) : userId ? (
                  <Checkout
                    plan={plan.name}
                    amount={
                      locationRef.current === "India"
                        ? plan.price
                        : plan.usdPrice
                    }
                    credits={plan.credits}
                    buyerId={user?._id}
                    location={locationRef.current}
                  />
                ) : (
                  <SignInButton mode="modal">
                    <Button className="w-full rounded-md bg-purple-gradient bg-cover">
                      Login to Purchase
                    </Button>
                  </SignInButton>
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
