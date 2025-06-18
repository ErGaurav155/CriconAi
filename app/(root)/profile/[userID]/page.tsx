"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  deleteImageUrls,
  getUserByDbId,
  updateCredits,
} from "@/lib/actions/user.actions";
import { DownloadIcon, Trash2 } from "lucide-react";
import { download } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function ImageGalleryPage({
  params: { userID },
}: {
  params: { userID: string };
}) {
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await getUserByDbId(userID);
        setUserData(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchData();
  }, [userID]);

  const downloadHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: string,
    title: string
  ) => {
    e.preventDefault();
    download(item, title).then(async (result) => {
      if (result) {
        await updateCredits(userID, -1);
      }
    });
  };

  const deleteHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: string
  ) => {
    e.preventDefault();
    await deleteImageUrls(userID, item);
    router.refresh();
  };

  return (
    <div className="min-h-screen  text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-bold text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F]">
            Image Gallery
          </h1>
          <p className="text-gray-400 mt-2">Your generated images collection</p>
        </div>

        {userData && userData.imageUrls && userData.imageUrls.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {userData.imageUrls.map((imageUrl: string, index: number) => (
              <div
                key={index}
                className="relative group rounded-2xl  border border-[#333] overflow-hidden transition-all hover:border-[#B026FF]/50"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] opacity-0 group-hover:opacity-10 transition-opacity -z-10"></div>

                {/* Action buttons */}
                <div className="absolute top-3 right-3 flex gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    className="flex items-center gap-1 bg-gradient-to-r from-[#00F0FF] to-[#B026FF] text-black font-bold px-3 py-1.5 rounded-md text-sm"
                    onClick={(e) =>
                      downloadHandler(e, imageUrl, `image-${index + 1}`)
                    }
                  >
                    <div className="flex items-center gap-1">
                      <Image
                        src="/assets/icons/coins.svg"
                        alt="coins"
                        width={16}
                        height={16}
                        className="size-4"
                      />
                      <span>1</span>
                    </div>
                    <DownloadIcon size={16} />
                  </button>

                  <button
                    className="bg-gradient-to-r from-[#FF2E9F] to-[#FF0000] text-white p-1.5 rounded-md"
                    onClick={(e) => deleteHandler(e, imageUrl)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                {/* Image */}
                <div className="aspect-square w-full relative">
                  <Image
                    alt={`Generated image ${index + 1}`}
                    src={imageUrl}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="font-bold text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F]">
              No images found
            </h2>
            <p className="text-gray-400 mt-4 max-w-md mx-auto">
              Your generated images will appear here once you create some
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
