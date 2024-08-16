import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { ShieldCheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2"
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className={cn(
        "flex items-center justify-center flex-col",
        headingFont.className,
      )}>
        <div className=" flex items-center border shadow-sm mb-8 p-4 bg-teal-100 text-teal-700 rounded-full uppercase">
          <ShieldCheckIcon className="h-6 w-6 mr-2" />
          Streamlining Team and Event Success
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
        HackTheBox SRMIST Drives 
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-br from-emerald-400 to-teal-600 text-white px-4 pt-4 mb-3 rounded-md pb-4 w-fit">
        Digital Excellence.
        </div>
      </div>
      <div className={cn(
        "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
        textFont.className,
      )}>
        HackTheBox SRMIST focuses on training the next-gen of cyber-warriors transforming the cyber space in SRMIST and beyond.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-in">
          HacktheBox CMS
        </Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
