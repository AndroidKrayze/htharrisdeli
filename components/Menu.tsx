import { menu } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { Tricolor, TricolorFlag } from "@/components/Tricolor";

export function Menu() {
  return (
    <section id="menu" className="relative bg-espresso text-cream">
      <div className="paper-grain absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-brass">
            <TricolorFlag />
            Al banco
          </p>
          <Tricolor className="mt-4 h-[3px] w-24" />
          <h2 className="mt-4 font-display text-5xl text-cream md:text-6xl">
            What people ask for
          </h2>
          <p className="mt-5 max-w-2xl text-cream/75">
            {menu.disclaimer}{" "}
            <span className="text-brass-bright">{menu.note}</span> Prices stay
            at the counter — market rates, not a website special.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {menu.sections.map((section, i) => (
            <Reveal key={section.id} delay={i * 0.04}>
              <article className="border border-brass/25 bg-espresso-mid/60 p-7 md:p-8">
                <h3 className="font-display text-3xl text-brass-bright">
                  {section.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  {section.intro}
                </p>
                <ul className="mt-6 space-y-5">
                  {section.items.map((item) => (
                    <li
                      key={item.name}
                      className="border-t border-cream/10 pt-4 first:border-0 first:pt-0"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="font-display text-xl text-cream">
                          {item.name}
                        </p>
                        <p className="text-[0.68rem] uppercase tracking-[0.16em] text-cream/45">
                          See counter
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-cream/60">{item.note}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {item.popular ? (
                          <span className="border border-terracotta/50 px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-terracotta-soft">
                            Popular / ask counter
                          </span>
                        ) : null}
                        {item.askCounter && !item.popular ? (
                          <span className="text-[0.62rem] uppercase tracking-[0.16em] text-cream/40">
                            Ask the counter
                          </span>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
