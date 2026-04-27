import Image from "next/image";
import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function FeaturedVenuesSection({ venues }) {
  return (
    <section className="bg-white px-4 py-10 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex items-end justify-between">
          <div>
            <h2 className="mb-1 text-2xl font-semibold text-slate-900">Featured Venues</h2>
            <p className="text-sm text-turf-secondary">Hand-picked premium turfs for high-performance play.</p>
          </div>
          <Button asChild variant="ghost" className="hidden md:inline-flex">
            <Link href="/browse-turf">View all fields</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {venues.map((venue) => (
            <Card key={venue.id} className="group overflow-hidden border-slate-100 shadow-turf-glow transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-52 overflow-hidden">
                <Image src={venue.image} alt={venue.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <Badge className="absolute right-3 top-3 bg-white/90 text-turf-primary">{venue.price}</Badge>
              </div>
              <CardContent className="p-4">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{venue.title}</h3>
                  <p className="inline-flex items-center gap-1 text-sm text-slate-700"><Star className="h-4 w-4 fill-amber-400 text-amber-400" />{venue.rating}</p>
                </div>
                <p className="mb-4 inline-flex items-center gap-1 text-sm text-slate-500"><MapPin className="h-4 w-4" />{venue.location}</p>
                <div className="flex items-center justify-between border-t border-slate-50 pt-3">
                  <p className="text-sm font-semibold text-slate-500">{venue.extra}</p>
                  <Button asChild variant="dark" size="sm">
                    <Link href={`/turf-details/${venue.id}`}>Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
