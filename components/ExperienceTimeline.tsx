import { experienceTimeline } from "@/lib/content";
import { SectionReveal } from "./SectionReveal";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="px-6 py-20 md:px-12">
      <SectionReveal className="mx-auto w-full max-w-7xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Experience</p>
        <h2 className="mt-4 font-heading text-4xl text-white md:text-5xl">Journey Timeline</h2>

        <div className="mt-10 border-l border-white/15 pl-6 md:pl-10">
          {experienceTimeline.map((item) => (
            <div key={item.year + item.title} className="relative mb-10">
              <div className="absolute -left-[33px] top-1 h-3 w-3 rounded-full bg-gold md:-left-[43px]" />
              <p className="text-xs uppercase tracking-[0.24em] text-gold">{item.year}</p>
              <h3 className="mt-2 font-heading text-2xl text-white">{item.title}</h3>
              <p className="mt-3 max-w-3xl text-white/70">{item.detail}</p>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
