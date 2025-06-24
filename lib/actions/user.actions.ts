"use server";

import { revalidatePath, revalidateTag } from "next/cache";

import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

// CREATE
export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

// READ
export async function getUserById(userId: string) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ clerkId: userId });

    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
  revalidateTag("users");
}

export async function getUserByDbId(userId: string) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ _id: userId });

    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
  revalidateTag("users");
}

// UPDATE
export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase();

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}
//RESET CREDITS
export async function resetCredits() {
  try {
    await connectToDatabase();

    // Reset users with less than 10 credits
    const result = await User.updateMany(
      { creditBalance: { $lt: 10 } },
      { $set: { creditBalance: 10 } },
      { new: true }
    );
    if (!result) throw new Error("User credits reset update failed");
    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    handleError(error);
  }
}
// USE CREDITS
export async function updateCredits(userDbId: string, creditFee: number) {
  try {
    await connectToDatabase();

    const updatedUserCredits = await User.findOneAndUpdate(
      { _id: userDbId },
      { $inc: { creditBalance: creditFee } },
      { new: true }
    );

    if (!updatedUserCredits) throw new Error("User credits update failed");

    return JSON.parse(JSON.stringify(updatedUserCredits));
  } catch (error) {
    handleError(error);
  }
}

export async function saveImageUrls(userDbId: string, imageUrls: string[]) {
  try {
    // Find the user by clerkId
    const user = await User.findOne({ _id: userDbId });
    if (!user) {
      throw new Error("User not found");
    }

    // Add imageUrls to the user document
    user.imageUrls = [...imageUrls, ...user.imageUrls];

    // Save the user document
    await user.save();

    return user.imageUrls; // Return updated imageUrls
  } catch (error) {
    handleError(error);
  }
}

export async function deleteImageUrls(userDbId: string, urlToDelete: string) {
  try {
    // Remove the specified URL from the imageUrls array
    const updatedUser = await User.findOneAndUpdate(
      { _id: userDbId },
      { $pull: { imageUrls: urlToDelete } },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      throw new Error("User not found");
    }

    return updatedUser.imageUrls; // Return the updated imageUrls
  } catch (error) {
    handleError(error);
  }
}
