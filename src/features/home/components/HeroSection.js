import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-8 md:px-6">
      <div className="absolute right-[-10%] top-[-20%] h-80 w-80 rounded-full bg-turf-primary-container/20 blur-[90px]" />
      <div className="absolute bottom-0 left-[-10%] h-64 w-64 rounded-full bg-turf-tertiary-tint/20 blur-[90px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <Badge variant="accent" className="mb-4 px-4 py-1.5 text-[10px] tracking-[0.18em]">
            Elite Sports Management
          </Badge>
          <h1 className="mx-auto mb-4 max-w-4xl text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
            Find Your <span className="italic text-turf-primary">Perfect Field</span> in Seconds
          </h1>
          <p className="mx-auto mb-7 max-w-2xl text-base text-turf-secondary md:text-lg">
            Premium turfs, effortless booking, and elite management for teams who play to win.
          </p>

          <Card className="mx-auto mb-7 w-full max-w-4xl p-2 shadow-turf-search">
            <div className="flex flex-col gap-2 md:flex-row">
              <div className="flex flex-1 items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3">
                <MapPin className="h-4 w-4 text-slate-400" />
                <Input className="border-none bg-transparent shadow-none focus-visible:ring-0" placeholder="Area" />
              </div>
              <div className="flex flex-1 items-center rounded-lg border border-slate-100 bg-slate-50 px-3">
                <select aria-label="Select sport" className="h-10 w-full cursor-pointer bg-transparent text-sm text-slate-700 outline-none">
                  <option>Football (Soccer)</option>
                  <option>Basketball</option>
                  <option>Padel</option>
                  <option>Cricket</option>
                  <option>Tennis</option>
                </select>
              </div>
              <div className="flex flex-1 items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3">
                <Calendar className="h-4 w-4 text-slate-400" />
                <Input className="border-none bg-transparent shadow-none focus-visible:ring-0" placeholder="Date" />
              </div>
              <Button variant="accent" className="w-full md:w-auto">
                Explore
              </Button>
            </div>
          </Card>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 md:gap-12">
            <p><span className="mr-1 text-lg font-bold text-slate-900">150+</span>Turf Venues</p>
            <p><span className="mr-1 text-lg font-bold text-slate-900">45k</span>Monthly Players</p>
            <p><span className="mr-1 text-lg font-bold text-slate-900">4.9/5</span>User Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
