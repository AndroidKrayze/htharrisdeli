import Image from "next/image";
import { site } from "@/lib/site";
import { storyImages } from "@/lib/images";
import { Reveal } from "@/components/Reveal";
import { Tricolor, TricolorFlag } from "@/components/Tricolor";

export function TheDeli() {
  return (
    <section id="the-deli" className="marble-wash paper-grain relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 md:grid-cols-12 md:px-8 md:py-32">
        <Reveal className="md:col-span-6 lg:col-span-5">
          <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-olive">
            <TricolorFlag />
            The deli · {site.est.italian}
          </p>
          <h2 className="mt-4 font-display text-5xl leading-tight text-espresso md:text-6xl">
            A Fitzrovia institution,
            <span className="italic text-terracotta"> not a concept.</span>
          </h2>
          <Tricolor className="my-8 h-[3px] w-40" />
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-espresso-soft">
            <p>
              Enjoy Fitzrovia calls H.T. Harris a{" "}
              <em className="font-display text-xl text-espresso">
                long-standing family owned and operated Italian delicatessen
              </em>
              — and lists the website as N/A. The family dates the shop to{" "}
              <strong className="font-medium text-espresso">
                {site.est.label} {site.est.display}
              </strong>
              . The queue at lunch has done the talking.
            </p>
            <p>
              Sandwiches are made to order. Regulars on Foursquare note there
              often isn’t a printed menu: you point at the counter, or you
              trust the person behind it. Pasta changes with the day. Friday,
              more than one guest has said, is lasagna day.
            </p>
            <p>
              Office workers from around Broadcasting House, Oxford Circus and
              Goodge Street treat it as the neighbourhood’s honest lunch —
              takeaway-heavy, a little seating, busy when the street is busy.
              One Google review names Simone at the toaster. We don’t invent a
              roster; we just pass on what guests wrote.
            </p>
          </div>
          <p className="mt-8 font-display text-2xl italic text-olive-deep">
            “Anything you see here, we can do.”
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">
            Counter reply, recalled in a 2014 Fitzrovia lunch note
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:col-span-6 md:gap-4 lg:col-span-7">
          <Reveal className="relative col-span-2 aspect-[16/10] overflow-hidden md:aspect-[16/9]">
            <Image
              src={storyImages.shop.src}
              alt={storyImages.shop.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized={storyImages.shop.src.includes("4sqi.net")}
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={storyImages.meats.src}
              alt={storyImages.meats.alt}
              fill
              sizes="25vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.18} className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={storyImages.cheese.src}
              alt={storyImages.cheese.alt}
              fill
              sizes="25vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
      <p className="px-5 pb-6 text-center text-[0.68rem] uppercase tracking-[0.18em] text-muted md:px-8">
        Near {site.address.neighbourhood} — BBC Broadcasting House, Oxford Circus, Goodge Street
      </p>
    </section>
  );
}
