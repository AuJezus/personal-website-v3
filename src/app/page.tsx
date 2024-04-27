import HeroSection from "@/components/home/hero-section";
import ProjectSection from "../components/home/project-section";
import AboutSection from "@/components/home/about-section";
import SkillSection from "@/components/home/skill-section";
import BlogSection from "@/components/home/blog-section";

export default function HomePage() {
  return (
    <main className="min-h-[700vh]">
      <HeroSection />

      <ProjectSection />

      <AboutSection />

      <SkillSection />

      <BlogSection />
    </main>
  );
}
