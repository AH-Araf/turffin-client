import { notFound } from "next/navigation";
import { Inter, Lexend } from "next/font/google";
import { getSlotPageModel } from "@/data/slotAvailability";
import { getTurfById, turfs } from "@/data/turfs";
import { SlotPicker } from "./SlotPicker";

const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });

export function generateStaticParams() {
  return turfs.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const turf = getTurfById(id);
  if (!turf) {
    return { title: "Turf not found | Turffin" };
  }
  return {
    title: `Select slots | ${turf.title} | Turffin`,
    description: `Choose times for ${turf.title}. ${turf.address}`,
  };
}

export default async function SlotAvailabilityPage({ params }) {
  const { id } = await params;
  const t = getTurfById(id);
  if (!t) {
    notFound();
  }
  const model = getSlotPageModel(t);
  return (
    <div className={`${inter.className} min-h-screen bg-turf-surface text-turf-on-surface antialiased`}>
      <main className="mx-auto max-w-7xl px-6 pb-40 pt-4">
        <SlotPicker model={model} lexendClassName={lexend.className} />
      </main>
    </div>
  );
}
