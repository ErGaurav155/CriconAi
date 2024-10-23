import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

import Header from "@/components/shared/Header";
import { getUserById } from "@/lib/actions/user.actions";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";

const Profile = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const userID = user._id;

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
            <div className="flex gap-1">
              <InfoIcon />
              <span>Reset in 24 Hr</span>
            </div>{" "}
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
