"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import RazorPay from "./RazorPay";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import PayPal from "./PayPal";
import { useRef } from "react";

const Checkout = ({
  plan,
  amount,
  credits,
  buyerId,
  location,
}: {
  plan: string;
  amount: number;
  credits: number;
  buyerId: string;
  location: string;
}) => {
  const router = useRouter();

  return (
    <div>
      {location === "India" ? (
        <RazorPay
          amount={amount}
          plan={plan}
          credits={credits}
          buyerId={buyerId}
        />
      ) : (
        <AlertDialog defaultOpen>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="sr-only">
                Enter Website URL
              </AlertDialogTitle>
              <div className="flex justify-between items-center">
                <p className="p-16-semibold text-black">
                  Proceed To Take Monthly Subscription
                </p>
                <AlertDialogCancel
                  onClick={() => router.push(`/`)}
                  className="border-0 p-0 hover:bg-transparent"
                >
                  <XMarkIcon className="size-6 cursor-pointer" />
                </AlertDialogCancel>
              </div>
            </AlertDialogHeader>
            <PayPal
              amount={amount}
              plan={plan}
              credits={credits}
              buyerId={buyerId}
            />
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
};

export default Checkout;
