import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <section className="px-4 py-12 md:px-6">
      <div className="mx-auto max-w-7xl text-center">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[32px] bg-turf-primary p-8 text-turf-on-primary shadow-turf-cta md:p-10">
          <h2 className="mb-4 text-3xl font-bold">Ready to Take the Field?</h2>
          <p className="mb-7 text-base text-turf-primary-fixed">
            Join 50,000+ athletes booking their daily sessions through Turffin.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="secondary" className="border-none text-turf-primary">
              <Link href="/browse-turf">Browse All Venues</Link>
            </Button>
            <Button asChild variant="accent">
              <Link href="/register">Create Account</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
