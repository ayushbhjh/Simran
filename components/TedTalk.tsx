import { SectionReveal } from "./SectionReveal";

export default function TedTalk() {
  return (
    <section id="tedx" className="px-6 py-20 md:px-12">
      <SectionReveal className="mx-auto w-full max-w-7xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">My TEDx Story</p>
        <h2 className="mt-4 font-heading text-4xl text-white md:text-5xl">The Talk</h2>

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-2">
          <div className="relative w-full overflow-hidden rounded-2xl" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/WdEvs3KZFB4"
              title="Simran Malhotra TEDx Talk"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
