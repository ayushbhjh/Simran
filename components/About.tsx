import { achievements } from "@/lib/content";
import { SectionReveal } from "./SectionReveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-20 md:px-12">
      <SectionReveal className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">About</p>
          <h2 className="mt-4 font-heading text-4xl text-white md:text-5xl">Intentional stories. Global impact.</h2>
          <p className="mt-6 max-w-2xl text-white/75">
            Simran Malhotra bridges creative storytelling and strategic thinking. From global travel narratives and fitness-driven
            content to business consulting and public speaking, her work is grounded in depth, discipline, and elegant execution.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {achievements.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-5 text-sm text-white/85 backdrop-blur">
              {item}
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
