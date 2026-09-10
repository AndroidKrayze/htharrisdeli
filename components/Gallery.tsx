import Image from "next/image";
import { gallery } from "@/lib/images";
import { Reveal } from "@/components/Reveal";

export function Gallery() {
  return (
    <section id="gallery" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-olive">
            From the counter
          </p>
          <h2 className="mt-4 font-display text-5xl text-espresso md:text-6xl">
            Shop, bread, steam
          </h2>
          <p className="mt-4 max-w-xl text-espresso-soft/80">
            Guest photographs from the Foursquare venue sit beside curated
            Italian stills — hanging meats, cheese, espresso, oil — graded warm
            for this pitch. Not a plastic flag-pasta catalogue.
          </p>
        </Reveal>

        <div className="mt-12 columns-1 gap-3 sm:columns-2 lg:columns-3">
          {gallery.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.03} className="mb-3 break-inside-avoid">
              <figure className="relative overflow-hidden">
                <div
                  className={`relative ${
                    i % 5 === 0 ? "aspect-[4/5]" : i % 3 === 0 ? "aspect-square" : "aspect-[5/4]"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized={img.src.includes("4sqi.net")}
                    className="object-cover transition duration-700 hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="sr-only">{img.credit}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
