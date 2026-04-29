import { cn } from "@/lib/utils";

function Input({ className, type = "text", ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-turf-on-surface shadow-xs transition-[border-color,box-shadow] outline-none placeholder:text-slate-400 focus-visible:border-turf-primary focus-visible:ring-2 focus-visible:ring-turf-primary-container/40 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
