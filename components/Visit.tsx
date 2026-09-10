import { hours } from "@/lib/data";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { TricolorFlag } from "@/components/Tricolor";

export function Visit() {
  return (
    <section id="visit" className="bg-parchment">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
        <Reveal>
          <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-olive">
            <TricolorFlag />
            Visit · {site.est.italian}
          </p>
          <h2 className="mt-4 font-display text-5xl text-espresso md:text-6xl">
            41 Great Titchfield Street
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-espresso-soft">
            Walk-in. Takeaway-heavy. Limited seating.{" "}
            <strong className="font-medium text-espresso">
              Busy at lunch — come early.
            </strong>
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="relative min-h-[360px] overflow-hidden border border-espresso/10 bg-espresso lg:col-span-3 lg:min-h-[520px]">
            <iframe
              title="Map of H.T. Harris, 41 Great Titchfield Street, London W1W 7PG"
              src={site.mapsEmbed}
              className="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <Reveal className="bg-linen p-8 shadow-[0_20px_50px_-28px_rgba(27,18,12,0.45)] lg:col-span-2">
            <p className="font-display text-3xl text-espresso">The address</p>
            <p className="mt-3 leading-relaxed text-espresso-soft">
              {site.address.line}
            </p>
            <a
              href={site.tel}
              className="mt-5 block font-display text-2xl text-terracotta hover:text-olive-deep"
            >
              {site.phoneDisplay}
            </a>
            <p className="text-sm text-muted">{site.phoneIntl}</p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={site.tel}
                className="bg-espresso px-5 py-3 text-center text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-cream"
              >
                Call the deli
              </a>
              <a
                href={site.mapsDirections}
                target="_blank"
                rel="noreferrer"
                className="border border-espresso/20 px-5 py-3 text-center text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-espresso"
              >
                Get directions
              </a>
            </div>

            <div className="mt-10 border-t border-espresso/10 pt-8">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-olive">
                Hours — please verify
              </p>
              <p className="mt-3 text-sm leading-relaxed text-terracotta">
                {hours.verifyNote}
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted">
                {hours.bestGuess.label}
              </p>
              <ul className="mt-3 space-y-2 text-espresso">
                {hours.bestGuess.days.map((d) => (
                  <li key={d.day} className="flex justify-between gap-4 text-sm">
                    <span>{d.day}</span>
                    <span className="font-medium">{d.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {hours.sources.map((source) => (
            <article
              key={source.name}
              className="border border-espresso/10 bg-linen/70 p-5"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-olive">
                {source.name}
              </p>
              <ul className="mt-3 space-y-1 text-sm text-espresso-soft">
                {source.hours.map((h) => (
                  <li key={h.day}>
                    {h.day}: {h.hours}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted">{source.note}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted">{hours.foursquareNote}</p>
      </div>
    </section>
  );
}
