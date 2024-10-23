import { MobileNav } from "@/components/shared/MobileNav";
import { Sidebar } from "@/components/shared/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { resetCredits } from "@/lib/actions/user.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Thumbnail Generator & Tools",
  description:
    "Discover the best free AI tools for generating YouTube thumbnails, downloading in 4K, and more.",
  keywords: ["free a i image generator"],
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  let LAST_RESET_TIME = 1729705500000; // Initial reset timestamp
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
      resetCredits(); // Call your function to reset credits

      // Update LAST_RESET_TIME to the current reset time
      LAST_RESET_TIME = nextResetTime;
    } else {
      return;
    }
  }

  checkAndResetCredits();

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
