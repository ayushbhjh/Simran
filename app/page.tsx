import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import ReelsGrid from "@/components/ReelsGrid";
import TedTalk from "@/components/TedTalk";
import TestimonialsSlider from "@/components/TestimonialsSlider";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ReelsGrid />
      <TedTalk />
      <Gallery />
      <ExperienceTimeline />
      <TestimonialsSlider />
      <ContactSection />
    </main>
  );
}
