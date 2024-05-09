import { type Metadata } from "next";

import HeroSection from "@/components/home/hero-section";
import ProjectSection from "../../components/home/project-section";
import AboutSection from "@/components/home/about-section";
import SkillSection from "@/components/home/skill-section";
import BlogSection from "@/components/home/blog-section";
import ContactSection from "@/components/home/contact-section";

export const metadata: Metadata = {
  title: "Augustas Vaivada (AuJezus) portfolio",
  description:
    "I'm a Full-stack developer from lithuania and this is my portfolio/blog website",
};

export function HomePage() {
  return (
    <main>
      <HeroSection />

      <ProjectSection />

      <AboutSection />

      <SkillSection />

      <BlogSection />

      <ContactSection />
    </main>
  );
}

export default HomePage;
