"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { reels } from "@/lib/content";
import { SectionReveal } from "./SectionReveal";

type ActiveReel = (typeof reels)[number] | null;

export default function ReelsGrid() {
  const [activeReel, setActiveReel] = useState<ActiveReel>(null);

  return (
    <section id="stories" className="px-6 py-20 md:px-12">
      <SectionReveal className="mx-auto w-full max-w-7xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Featured Stories</p>
        <h2 className="mt-4 font-heading text-4xl text-white md:text-5xl">Instagram Reels</h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {reels.map((reel) => (
            <motion.button
              key={reel.id}
              whileHover={{ y: -4 }}
              onClick={() => setActiveReel(reel)}
              className="group relative aspect-[9/14] overflow-hidden rounded-2xl border border-white/10 text-left"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${reel.thumbnail}')`
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_10%,rgba(201,169,110,0.28),transparent_55%)]" />

              <div className="absolute inset-0 scale-100 transition duration-500 group-hover:scale-110 group-hover:brightness-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold backdrop-blur">
                {reel.category}
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="font-heading text-2xl text-white">{reel.title}</p>
                  <p className="text-xs tracking-[0.24em] text-white/70">Tap to watch</p>
                </div>
                <div className="grid h-11 w-11 place-items-center rounded-full border border-gold/70 bg-black/50 text-gold transition group-hover:scale-110">
                  <span className="ml-0.5 text-sm">▶</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </SectionReveal>

      <AnimatePresence>
        {activeReel ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveReel(null)}
          >
            <motion.div
              className="relative w-full max-w-[380px] overflow-hidden rounded-3xl border border-white/20 bg-black"
              initial={{ scale: 0.92, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 16 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            >
              <iframe
                src={`https://www.instagram.com/reel/${activeReel.id}/embed`}
                className="h-[560px] w-full"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
              <button
                className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs tracking-wide text-white"
                onClick={() => setActiveReel(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
