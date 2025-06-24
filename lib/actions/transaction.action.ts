"use server";

import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import Transaction from "../database/models/transaction.model";
import { updateCredits } from "./user.actions";

import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.key_id!,
  key_secret: process.env.key_secret!,
});

export async function checkoutCredits(transaction: CheckoutTransactionParams) {
  const { amount, plan, credits, buyerId, location } = transaction;

  const options = {
    amount: Number(amount) * 100, // Amount in smallest currency unit (e.g., paisa)
    currency: location === "India" ? "INR" : "USD",
    receipt: "rcp1",
    notes: {
      plan: plan,
      credits: credits,
      buyerId: buyerId,
    },
  };

  try {
    const order = await razorpay.orders.create(options);

    return order;
  } catch (error) {
    throw error;
  }
}

export async function createTransaction(transaction: CreateTransactionParams) {
  try {
    await connectToDatabase();

    // Create a new transaction with a buyerId
    const newTransaction = await Transaction.create({
      ...transaction,
      buyer: transaction.buyerId,
    });

    await updateCredits(transaction.buyerId, transaction.credits);

    return JSON.parse(JSON.stringify(newTransaction));
  } catch (error) {
    handleError(error);
  }
}
