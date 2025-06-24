"use client";

import RazorPay from "./RazorPay";

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
      <RazorPay
        amount={amount}
        plan={plan}
        credits={credits}
        buyerId={buyerId}
        location={location}
      />
    </div>
  );
};

export default Checkout;
