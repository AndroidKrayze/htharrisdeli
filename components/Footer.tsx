import { site } from "@/lib/site";
import { Tricolor, TricolorFlag } from "@/components/Tricolor";

export function Footer() {
  return (
    <footer className="bg-espresso pb-16 text-cream">
      <Tricolor className="h-[4px] w-full" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="flex items-center gap-3 font-display text-4xl">
            H.T. Harris
            <TricolorFlag />
          </p>
          <p className="mt-2 text-[0.7rem] uppercase tracking-[0.22em] text-brass">
            {site.est.italian} · Italian delicatessen · Fitzrovia
          </p>
          <p className="mt-2 max-w-sm text-sm text-cream/55">
            Family Italian delicatessen, Fitzrovia. Walk-in and call — no
            invented online ordering.
          </p>
        </div>
        <div className="text-sm text-cream/70 md:text-right">
          <a href={site.tel} className="block hover:text-brass-bright">
            {site.phoneDisplay}
          </a>
          <p className="mt-1">{site.address.line}</p>
          <a
            href={site.mapsPlace}
            className="mt-2 inline-block text-brass hover:text-brass-bright"
            target="_blank"
            rel="noreferrer"
          >
            Google Maps
          </a>
        </div>
      </div>
      <div className="border-t border-cream/10 px-5 py-5 text-center text-[0.72rem] tracking-wide text-cream/40 md:px-8">
        Demo mockup — prepared for H.T. Harris · images for pitch only
      </div>
    </footer>
  );
}
