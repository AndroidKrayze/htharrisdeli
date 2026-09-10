import { site } from "@/lib/site";
import { Tricolor } from "@/components/Tricolor";

export function EstBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex h-28 w-28 items-center justify-center ${className}`}
      aria-label={`${site.est.label} ${site.est.display}`}
    >
      <div className="absolute inset-0 rounded-full border border-brass/70" />
      <div className="absolute inset-1.5 rounded-full border border-brass/35" />
      <div className="relative flex flex-col items-center text-center">
        <Tricolor className="mb-1.5 h-[3px] w-10" />
        <p className="font-display text-[0.62rem] uppercase tracking-[0.28em] text-brass">
          {site.est.label}
        </p>
        <p className="font-display text-2xl leading-none text-cream">
          {site.est.display}
        </p>
        <p className="mt-1 text-[0.55rem] uppercase tracking-[0.22em] text-cream/55">
          Italia
        </p>
      </div>
    </div>
  );
}
