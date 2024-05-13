import { type Metadata } from "next";

import TOC from "@/components/views/toc";
import { ProjectView, ViewPageLayout } from "@/components/views/views";
import { projects } from "@/content";
import { siteConfig } from "@/lib/site";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: { slug: string };
}

function getProjectFromParams(params: ProjectPageProps["params"]) {
  return projects.find((project) => project.slug === params.slug);
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = getProjectFromParams(params);

  if (!project) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("type", "project");
  ogSearchParams.set("title", project.title);
  ogSearchParams.set("description", project.description);

  return {
    title: project.title,
    description: project.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: project.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectFromParams(params);

  if (!project) notFound();

  return (
    <ViewPageLayout>
      <ProjectView project={project} />

      <div className="hidden w-fit lg:block xl:w-1/3">
        <TOC title={project.title} toc={project.toc} />
      </div>
    </ViewPageLayout>
  );
}

export default ProjectPage;
