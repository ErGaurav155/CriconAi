"use client";

import RazorPay from "./RazorPay";
import { useRouter } from "next/navigation";
import PayPal from "./PayPal";

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
        <PayPal
          amount={amount}
          plan={plan}
          credits={credits}
          buyerId={buyerId}
        />
      )}
    </div>
  );
};

export default Checkout;
