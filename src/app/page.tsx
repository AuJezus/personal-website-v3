import HeroSection from "@/components/home/hero-section";
import ProjectSection from "../components/home/project-section";
import AboutSection from "@/components/home/about-section";

export default function HomePage() {
  return (
    <main className="min-h-[500vh]">
      <HeroSection />

      <ProjectSection />

      <AboutSection />
    </main>
  );
}
