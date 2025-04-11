"use client";

import React, { useState } from "react";
import {
  PayPalButtons,
  PayPalButtonsComponentProps,
  PayPalScriptProvider,
  ReactPayPalScriptOptions,
} from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import { createTransaction } from "@/lib/actions/transaction.action";
import { Button } from "@material-tailwind/react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface CreditPurchaseProps {
  amount: number;
  credits: number;
  buyerId: string;
  plan: string;
}

const NEXT_PUBLIC_PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!;

const PayPal = ({ amount, credits, buyerId, plan }: CreditPurchaseProps) => {
  const router = useRouter();
  const [showPayPal, setShowPayPal] = useState(false);
  const initialOptions: ReactPayPalScriptOptions = {
    clientId: NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "capture",
  };

  const createOrder: PayPalButtonsComponentProps["createOrder"] = async (
    data,
    actions
  ) => {
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            value: amount.toString(),
            currency_code: "USD", // Changed to INR to match currency option
          },
          custom_id: buyerId,
          description: `${credits} Credits Purchase`,
        },
      ],
    });
  };

  const onApprove: PayPalButtonsComponentProps["onApprove"] = async (
    data,
    actions
  ) => {
    try {
      const details = await actions.order?.capture();
      if (!details || details.status !== "COMPLETED") {
        throw new Error("Payment failed");
      }
      if (!details.id) {
        throw new Error("Id not found");
      }

      await createTransaction({
        customerId: details.id,
        amount: amount,
        plan: plan,
        credits: Number(credits),
        buyerId: buyerId,
        createdAt: new Date(),
      });

      router.push("/profile");
    } catch (error) {
      console.error("Payment error:", error);
      router.push("/");
    }
  };

  const onError: PayPalButtonsComponentProps["onError"] = (err) => {
    console.error("PayPal error:", err);
    router.push("/");
  };

  return (
    <div className="w-full">
      {!showPayPal ? (
        <Button
          onClick={() => setShowPayPal(true)}
          className="w-full rounded-md bg-purple-gradient bg-cover"
        >
          Buy Credit
        </Button>
      ) : (
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
          />
        </PayPalScriptProvider>
      )}
    </div>
  );
};

export default PayPal;
