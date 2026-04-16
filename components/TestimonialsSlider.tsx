"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/content";
import { SectionReveal } from "./SectionReveal";

export default function TestimonialsSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="px-6 py-20 md:px-12">
      <SectionReveal className="mx-auto w-full max-w-7xl rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Testimonials</p>
        <h2 className="mt-4 font-heading text-4xl text-white md:text-5xl">What Partners Say</h2>

        <div className="mt-8">
          <motion.p
            key={testimonials[active].quote}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-4xl font-heading text-2xl leading-relaxed text-white md:text-3xl"
          >
            “{testimonials[active].quote}”
          </motion.p>
          <p className="mt-5 text-sm uppercase tracking-[0.2em] text-gold">{testimonials[active].author}</p>
        </div>

        <div className="mt-8 flex gap-3">
          {testimonials.map((item, index) => (
            <button
              key={item.author}
              aria-label={`View testimonial ${index + 1}`}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition ${active === index ? "w-10 bg-gold" : "w-6 bg-white/30"}`}
            />
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
