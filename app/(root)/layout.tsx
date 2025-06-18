import { MobileNav } from "@/components/shared/MobileNav";
import MainNavbar from "@/components/shared/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Thumbnail Generator & Tools",
  description:
    "Discover the best free AI tools for generating YouTube thumbnails, downloading in 4K, and more.",
  keywords: ["free a i image generator"],
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root ">
      <MainNavbar />

      <MobileNav />

      <div className="root-container  z-2  no-scrollbar">{children}</div>

      <Toaster />
    </main>
  );
};

export default Layout;
