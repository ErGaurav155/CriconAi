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
    <div className="min-h-screen  text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Header title="Profile" />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Credits Card */}
          <div className="relative p-6 rounded-2xl  border border-[#333] transition-all hover:border-[#B026FF]/50">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] opacity-0 hover:opacity-10 transition-opacity -z-10 rounded-2xl"></div>

            <p className="text-gray-400 font-medium mb-4">CREDITS AVAILABLE</p>
            <div className="flex items-center gap-4">
              <Image
                src="/assets/icons/coins.svg"
                alt="coins"
                width={50}
                height={50}
                className="size-9 md:size-12"
              />
              <h2 className="text-3xl font-bold">{user.creditBalance}</h2>
              <div className="flex gap-1 text-gray-400">
                <InfoIcon size={18} />
                <span>Reset in 24 Hr</span>
              </div>
            </div>
          </div>

          {/* Image Manipulation Card */}
          <div className="relative p-6 rounded-2xl border border-[#333] transition-all hover:border-[#B026FF]/50">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] opacity-0 hover:opacity-10 transition-opacity -z-10 rounded-2xl"></div>

            <Link href={`/profile/${userID}`}>
              <p className="text-gray-400 font-medium mb-4">
                IMAGE MANIPULATION DONE
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/icons/photo.svg"
                  alt="coins"
                  width={50}
                  height={50}
                  className="size-9 md:size-12"
                />
                <h2 className="text-3xl font-bold">{user.imageUrls.length}</h2>
                <Button className="rounded-md bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-black font-bold">
                  View Images
                </Button>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
