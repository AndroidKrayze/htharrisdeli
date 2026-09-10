import { site } from "@/lib/site";

export function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brass/30 bg-espresso/95 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-2">
        <a
          href={site.tel}
          className="px-4 py-3.5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-brass-bright transition hover:bg-espresso-mid"
        >
          Call
        </a>
        <a
          href={site.mapsDirections}
          target="_blank"
          rel="noreferrer"
          className="border-l border-brass/25 px-4 py-3.5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-cream transition hover:bg-espresso-mid"
        >
          Directions
        </a>
      </div>
    </div>
  );
}
