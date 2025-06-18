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
import { Loader2 } from "lucide-react";

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
      <div className="min-h-screen  flex justify-center items-center">
        <Loader2 className="h-12 w-12 animate-spin text-[#00F0FF]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen  text-white mt-40 max-w-7xl mx-auto w-full">
      <DiscountBanner />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8 p-4  border border-[#333] rounded-xl">
          <h1 className="text-lg md:text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F]">
            Note for International Customers
          </h1>
          <p className="text-gray-400">
            For purchases outside India, please use PayPal for transactions (Buy
            Credits / Wallet / PayPal)
          </p>
        </div>

        <div className="flex flex-col gap-16">
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative p-6 rounded-2xl  border border-[#333] transition-all hover:border-[#B026FF]/50  ${
                    plan.name === "Pro Package"
                      ? "scale-105 hover:scale-110"
                      : " hover:scale-105"
                  }`}
                >
                  {/* Gradient shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] opacity-0 hover:opacity-10 transition-opacity -z-10 rounded-2xl"></div>

                  {plan.name === "Pro Package" && (
                    <div className="absolute -top-4 -right-4 z-10">
                      <Image
                        src={Bestseller}
                        alt="Bestseller"
                        width={100}
                        height={200}
                        priority
                      />
                    </div>
                  )}

                  <div className="flex flex-col h-full">
                    <div className="flex flex-col items-center mb-6">
                      <div className="mb-4 p-3 bg-gradient-to-r from-[#00F0FF] to-[#B026FF] rounded-full">
                        <Image
                          src={plan.icon}
                          alt="Plan icon"
                          width={32}
                          height={32}
                          className=" text-black"
                        />
                      </div>

                      <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
                        {plan.name}
                      </h3>

                      <div className="flex items-center justify-center gap-1 mb-1">
                        <span className="text-3xl font-bold">
                          {locationRef.current === "India" ? (
                            <>
                              <IndianRupeeIcon className="w-5 h-5 inline-block mr-1" />
                              {plan.price}
                            </>
                          ) : (
                            <>
                              <DollarSignIcon className="w-5 h-5 inline-block mr-1" />
                              {plan.usdPrice}
                            </>
                          )}
                        </span>
                        {plan.original && (
                          <span className="text-lg line-through text-gray-500">
                            {locationRef.current === "India"
                              ? plan.original
                              : plan.usdOriginal}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center text-lg">
                        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
                          {plan.credits}
                        </span>
                        <span className="ml-1">Credits</span>
                      </div>
                    </div>

                    <ul className="flex-1 mb-6 space-y-3">
                      {plan.inclusions.map((inclusion) => (
                        <li
                          key={`${plan.name}-${inclusion.label}`}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-1">
                            {inclusion.isIncluded ? (
                              <div className="bg-green-900/20 border border-green-500/30 rounded-full p-1">
                                <div className="bg-green-500 rounded-full w-3 h-3"></div>
                              </div>
                            ) : (
                              <div className="bg-red-900/20 border border-red-500/30 rounded-full p-1">
                                <div className="bg-red-500 rounded-full w-3 h-3"></div>
                              </div>
                            )}
                          </div>
                          <p className="text-gray-300">{inclusion.label}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      {plan.name === "Free" ? (
                        <Button
                          variant="outline"
                          className="w-full bg-[#1a1a1a] text-white border-[#333] hover:bg-[#1a1a1a]/80"
                        >
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
                          <Button className="w-full bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-black font-bold hover:opacity-90">
                            Login to Purchase
                          </Button>
                        </SignInButton>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-8">
            <Faq />
          </div>

          <div className="mt-16">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
