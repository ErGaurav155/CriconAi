import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  ignoredRoutes: [
    "/",
    "/contactUs",
    "/privacy-policy",
    "/TermsandCondition",
    "/api/webhooks/clerk",
    "/api/resetCredits",
    "/criconai/:path*",
    "/HowToUse",
    "/credits",
    "/Faq",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
