"use client";

import { motion } from "framer-motion";
import { heroData } from "@/lib/content";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 pb-20 pt-28 md:px-12">
      <div className="absolute inset-0 -z-20 bg-black" />
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.82)), url('https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1800&q=80')"
        }}
      />
      <div className="absolute inset-0 -z-10 bg-radial-luxe" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex min-h-[75vh] w-full max-w-7xl flex-col items-start justify-end"
      >
        <p className="mb-5 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-gold backdrop-blur">
          Global Storyteller
        </p>

        <h1 className="max-w-4xl font-heading text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
          {heroData.name}
        </h1>

        <p className="mt-4 font-heading text-2xl italic text-gold sm:text-3xl">{heroData.tagline}</p>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">{heroData.subtitle}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#stories"
            className="rounded-full bg-gold px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-black transition hover:scale-[1.03]"
          >
            Explore Stories
          </a>
          <a
            href="#contact"
            className="rounded-full border border-gold/70 px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-gold transition hover:bg-gold hover:text-black"
          >
            Work With Simran
          </a>
        </div>
      </motion.div>
    </section>
  );
}
