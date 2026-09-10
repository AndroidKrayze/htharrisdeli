"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { heroImage } from "@/lib/images";
import { EstBadge } from "@/components/EstBadge";
import { Tricolor, TricolorFlag } from "@/components/Tricolor";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-espresso">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_42%]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/88 via-espresso/62 to-espresso/28" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/35" />
      <Tricolor orientation="vertical" className="absolute left-0 top-0 z-10 h-full w-1.5" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-28 pt-32 md:justify-center md:px-8 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mb-5 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-brass-bright"
        >
          <TricolorFlag />
          Italia · Fitzrovia · {site.est.italian}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          className="font-display text-[4.1rem] leading-[0.88] text-cream sm:text-[6rem] md:text-[7.6rem]"
        >
          H.T. Harris
        </motion.h1>
        <Tricolor className="my-7 h-[3px] w-40 md:w-56" />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="max-w-xl font-display text-xl italic leading-relaxed text-cream/88 md:text-2xl"
        >
          {site.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <EstBadge className="hidden sm:flex" />
          <div className="flex flex-wrap gap-3">
          <a
            href={site.tel}
            className="bg-brass px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-espresso transition hover:bg-brass-bright"
          >
            Call
          </a>
          <a
            href={site.mapsDirections}
            target="_blank"
            rel="noreferrer"
            className="border border-brass/70 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-cream transition hover:border-brass-bright hover:text-brass-bright"
          >
            Get directions
          </a>
          <a
            href="#menu"
            className="border border-cream/25 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-cream/90 transition hover:border-cream hover:text-cream"
          >
            See menu
          </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
