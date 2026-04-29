import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PricingCta({ bgImage }) {
  return (
    <section className="px-4 pb-12 md:px-6">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-slate-900 p-8 text-center md:p-10">
        <div className="absolute inset-0">
          <Image src={bgImage} alt="" fill className="object-cover opacity-20" />
        </div>
        <div className="relative z-10">
          <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">Ready to take the pitch?</h2>
          <p className="mx-auto mb-6 max-w-xl text-slate-300">
            Join thousands of athletes who trust Turffin for their training and matches in Bangladesh.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="accent" className="w-full rounded-full sm:w-auto">
              <Link href="/browse-turf">Start with venues</Link>
            </Button>
            <Button type="button" variant="ghost" className="w-full rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 sm:w-auto">
              <Sparkles className="h-4 w-4" />
              Book a demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
