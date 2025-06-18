import type { Metadata } from "next";
import { Michroma } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
});
export const metadata: Metadata = {
  title: "CriconAi",
  description:
    "AI-powered text,images and audio generators for content creators",
  keywords: ["a i", "a i image generator free"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#624cf5" },
      }}
    >
      <html suppressHydrationWarning lang="en">
        <body className={cn("font-orbitron antialiased ", michroma.className)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
