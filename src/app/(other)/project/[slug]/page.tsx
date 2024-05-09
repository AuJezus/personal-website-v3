import TOC from "@/components/views/toc";
import { ProjectView, ViewPageLayout } from "@/components/views/views";
import { projects } from "@/content";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) notFound();

  return (
    <ViewPageLayout>
      <div className="w-full"></div>

      <ProjectView project={project} />

      <div className="w-full">
        <TOC title={project.title} toc={project.toc} />
      </div>
    </ViewPageLayout>
  );
}

export default ProjectPage;
