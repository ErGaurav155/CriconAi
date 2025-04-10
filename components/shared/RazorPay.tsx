"use client";

import { useToast } from "@/components/ui/use-toast";
import {
  checkoutCredits,
  createTransaction,
} from "@/lib/actions/transaction.action";

import { Button } from "../ui/button";
import Script from "next/script";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const RazorPay = ({
  plan,
  amount,
  credits,
  buyerId,
}: {
  plan: string;
  amount: number;
  credits: number;
  buyerId: string;
}) => {
  const { toast } = useToast();
  const router = useRouter();

  const onCheckout = async () => {
    toast({
      title: "For International Users Use Paypal",
      description: "Buy Credits > Wallet > Paypal",
      duration: 3000,
      className: "success-toast z-55",
    });
    const transaction = {
      plan,
      amount,
      credits,
      buyerId,
    };

    const orderCreate = await checkoutCredits(transaction);

    if (!orderCreate.id) {
      throw new Error("Purchase Order is not created");
    }

    const paymentOptions = {
      key: process.env.key_id!,
      amount: amount * 100,
      currency: "INR",
      name: "GK Services",
      description: "Thanks For Taking Our Services",
      order_id: orderCreate.id,
      notes: {
        plan: plan,
        credits: credits,
        buyerId: buyerId,
        amount: amount,
      },
      handler: async function (response: any) {
        const data = {
          orderCreationId: orderCreate.id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await fetch("/api/webhooks/razerpay/verify", {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        });
        const res = await result.json();
        if (res.isOk) {
          toast({
            title: "Order placed!",
            description: "Credits are added in your account",
            duration: 3000,
            className: "success-toast",
          });
          const transaction1 = {
            customerId: orderCreate.id,
            amount: amount,
            plan: plan,
            credits: Number(credits),
            buyerId: buyerId,
            createdAt: new Date(),
          };

          await createTransaction(transaction1);
          router.push("/profile");
        } else {
          toast({
            title: "Order canceled!",
            description: res.message,
            duration: 3000,
            className: "error-toast",
          });
        }
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new (window as any).Razorpay(paymentOptions);

    paymentObject.on("payment.failed", function (response: any) {
      toast({
        title: "Order failed!",
        description: response.error.description,
        duration: 3000,
        className: "error-toast",
      });
    });

    paymentObject.open();
  };

  return (
    <div>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <form action={onCheckout}>
        <section>
          <Button
            type="submit"
            role="link"
            className="w-full rounded-md bg-purple-gradient bg-cover"
          >
            Buy Credit
          </Button>
        </section>
      </form>
    </div>
  );
};

export default RazorPay;
