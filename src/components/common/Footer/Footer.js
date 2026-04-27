"use client";

import { Lexend } from "next/font/google";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Globe2, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const lexend = Lexend({ subsets: ["latin"] });

export function Footer() {
  const pathname = usePathname() ?? "/";
  if (pathname.startsWith("/dashboard")) {
    return null;
  }
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-900 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:px-12 md:flex-row">
        <div>
          <p className={`${lexend.className} text-xs font-bold uppercase tracking-widest text-turf-primary-container`}>
            TURFFIN ATHLETICS
          </p>
          <p className={`${lexend.className} mt-3 max-w-xs text-xs text-slate-400`}>
            © 2024 Turffin Athletics. Engineered for performance and precision booking.
          </p>
        </div>
        <div className={`${lexend.className} flex flex-wrap justify-center gap-8 text-xs text-slate-500`}>
          <Link className="underline decoration-turf-primary-container underline-offset-4 transition-colors hover:text-white" href="#">
            Privacy Policy
          </Link>
          <Link className="underline decoration-turf-primary-container underline-offset-4 transition-colors hover:text-white" href="#">
            Terms of Service
          </Link>
          <Link className="underline decoration-turf-primary-container underline-offset-4 transition-colors hover:text-white" href="#">
            Cookie Settings
          </Link>
          <Link className="underline decoration-turf-primary-container underline-offset-4 transition-colors hover:text-white" href="#">
            Contact Us
          </Link>
        </div>
        <div className="flex gap-4 text-sm text-slate-300">
          <Button type="button" variant="ghost" size="icon" className="h-8 w-8 rounded-full border border-slate-700 text-slate-300 hover:border-turf-primary-container hover:bg-turf-primary-container/10" aria-label="Share">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button type="button" variant="ghost" size="icon" className="h-8 w-8 rounded-full border border-slate-700 text-slate-300 hover:border-turf-primary-container hover:bg-turf-primary-container/10" aria-label="Region">
            <Globe2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
