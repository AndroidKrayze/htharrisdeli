"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { reviews } from "@/lib/data";
import { site } from "@/lib/site";

function Stars({ n }: { n: number }) {
  return (
    <p className="text-brass tracking-[0.2em]" aria-label={`${n} out of 5 stars`}>
      {"★".repeat(n)}
      <span className="text-cream/25">{"★".repeat(5 - n)}</span>
    </p>
  );
}

export function Reviews() {
  const quotes = reviews.quotes;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % quotes.length),
    [quotes.length],
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + quotes.length) % quotes.length),
    [quotes.length],
  );

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(next, 5000);
    return () => window.clearInterval(t);
  }, [next, paused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const quote = quotes[index];

  return (
    <section
      id="reviews"
      className="bg-olive-deep text-cream"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto max-w-3xl px-5 py-24 text-center md:px-8 md:py-32">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-brass">
          From the street
        </p>
        <h2 className="mt-4 font-display text-5xl md:text-6xl">What they write</h2>
        <p className="mt-4 text-sm text-cream/55">
          Real Google and Foursquare quotes — shortened, not invented. Google{" "}
          {reviews.aggregate.google.rating}/5 · Tripadvisor{" "}
          {reviews.aggregate.tripadvisor.rating}/5.
        </p>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Guest reviews"
          className="relative mt-12 min-h-[280px]"
          onTouchStart={(e) => setTouchStart(e.changedTouches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStart == null) return;
            const dx = e.changedTouches[0].clientX - touchStart;
            if (dx > 50) prev();
            if (dx < -50) next();
            setTouchStart(null);
          }}
        >
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={quote.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="px-2"
              aria-live="polite"
            >
              <Stars n={quote.stars} />
              <p className="mt-6 font-display text-3xl leading-snug italic text-cream md:text-4xl">
                “{quote.quote}”
              </p>
              <footer className="mt-8 text-[0.72rem] uppercase tracking-[0.22em] text-brass-bright">
                {quote.name}
                <span className="mx-2 text-cream/30">·</span>
                {quote.source}
                <span className="mx-2 text-cream/30">·</span>
                {quote.date}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={prev}
            className="border border-brass/40 px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-cream/80 hover:border-brass"
            aria-label="Previous review"
          >
            Prev
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Review slides">
            {quotes.map((q, i) => (
              <button
                key={q.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Review ${i + 1} of ${quotes.length}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition ${
                  i === index ? "bg-brass" : "bg-cream/25 hover:bg-cream/50"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="border border-brass/40 px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-cream/80 hover:border-brass"
            aria-label="Next review"
          >
            Next
          </button>
        </div>

        <a
          href={reviews.googleMapsReviewsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-block text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-brass-bright underline-offset-4 hover:underline"
        >
          Read more on Google Maps
        </a>
        <p className="mt-3 text-xs text-cream/40">
          Or{" "}
          <a href={site.tripadvisor} className="underline-offset-2 hover:underline" target="_blank" rel="noreferrer">
            Tripadvisor
          </a>
          .
        </p>
      </div>
    </section>
  );
}
