import HeroSection from "@/components/home/hero-section";
import ProjectSection from "../components/home/project-section";

export default function HomePage() {
  return (
    <main className="min-h-[500vh]">
      <HeroSection />

      <ProjectSection />
    </main>
  );
}
