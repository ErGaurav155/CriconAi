import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

import Header from "@/components/shared/Header";
import { getUserById, resetCredits } from "@/lib/actions/user.actions";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Profile = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const userID = user._id;

  let LAST_RESET_TIME = 1720885200000; // Initial reset timestamp
  const RESET_INTERVAL = 30000; // 24 hours in milliseconds

  // Function to check if credits need to be reset
  function checkAndResetCredits() {
    const now = new Date().getTime(); // Current timestamp

    // Calculate the next reset time
    let nextResetTime = LAST_RESET_TIME;

    // Loop to find the next reset time
    while (nextResetTime <= now) {
      nextResetTime += RESET_INTERVAL; // Add 24 hours for next reset
    }

    // If current time exceeds the next reset time, reset credits
    if (now >= nextResetTime) {
      resetCredits(userID); // Call your function to reset credits
      console.log("Credits reset at:", new Date().toISOString());

      // Update LAST_RESET_TIME to the current reset time
      LAST_RESET_TIME = nextResetTime;
    } else {
      console.log(
        "Credits will reset next at:",
        new Date(nextResetTime).toISOString()
      );
    }
  }

  checkAndResetCredits();

  return (
    <div className="wrapper">
      <Header title="Profile" />

      <section className="profile">
        <div className="profile-balance">
          <p className="p-14-medium md:p-16-medium">CREDITS AVAILABLE</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/coins.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="h2-bold text-dark-600">{user.creditBalance}</h2>
            <h2 className="h2-bold text-dark-600">Credits Reset in 24 Hr</h2>
          </div>
        </div>

        <div className="profile-image-manipulation">
          <Link href={`/profile/${userID}`}>
            <p className="p-14-medium md:p-16-medium">
              IMAGE MANIPULATION DONE
            </p>
            <div className="mt-4 flex items-center gap-4">
              <Image
                src="/assets/icons/photo.svg"
                alt="coins"
                width={50}
                height={50}
                className="size-9 md:size-12"
              />

              <h2 className="h2-bold text-dark-600">{user.imageUrls.length}</h2>
              <Button className=" rounded-md bg-purple-gradient bg-cover">
                View Images
              </Button>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Profile;
