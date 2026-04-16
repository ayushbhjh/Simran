import { posts } from "@/lib/content";
import { SectionReveal } from "./SectionReveal";

export default function Gallery() {
  return (
    <section id="gallery" className="px-6 py-20 md:px-12">
      <SectionReveal className="mx-auto w-full max-w-7xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Moments & Stories</p>
        <h2 className="mt-4 font-heading text-4xl text-white md:text-5xl">Instagram Gallery</h2>

        <div className="mt-10 grid auto-rows-[240px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className={`group relative overflow-hidden rounded-2xl border border-white/10 ${index === 0 ? "md:row-span-2" : ""}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${post.thumbnail}')` }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(201,169,110,0.25),transparent_50%)]" />
              <div className="absolute inset-0 transition duration-500 group-hover:bg-black/15" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-5">
                <p className="font-heading text-2xl text-white">Post 0{index + 1}</p>
                <p className="mt-1 text-sm text-white/70">{post.title}</p>
              </div>
            </a>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
