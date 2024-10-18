import { MobileNav } from "@/components/shared/MobileNav";
import { Sidebar } from "@/components/shared/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Thumbnail Generator & Tools",
  description:
    "Discover the best free AI tools for generating YouTube thumbnails, downloading in 4K, and more.",
  keywords: ["free ai image generator"],
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root ">
      <Sidebar />

      <MobileNav />

      <div className="root-container no-scrollbar">{children}</div>

      <Toaster />
    </main>
  );
};

export default Layout;
