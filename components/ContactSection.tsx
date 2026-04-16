import { SectionReveal } from "./SectionReveal";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 pb-24 pt-20 md:px-12">
      <SectionReveal className="mx-auto w-full max-w-7xl rounded-3xl border border-gold/40 bg-gradient-to-br from-black via-zinc-900 to-black p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Contact</p>
        <h2 className="mt-4 font-heading text-4xl text-white md:text-5xl">Let&apos;s Build Something Meaningful</h2>
        <p className="mt-4 max-w-2xl text-white/75">
          For collaborations, speaking invitations, campaigns, and consulting engagements, connect directly.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:simran@example.com"
            className="rounded-full bg-gold px-8 py-3 text-sm uppercase tracking-[0.2em] text-black transition hover:scale-[1.03]"
          >
            Email Simran
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gold/70 px-8 py-3 text-sm uppercase tracking-[0.2em] text-gold transition hover:bg-gold hover:text-black"
          >
            Instagram
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}
