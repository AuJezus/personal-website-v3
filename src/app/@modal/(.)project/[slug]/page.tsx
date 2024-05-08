import { Modal } from "@/components/modal";
import { ProjectView } from "@/components/views/views";
import { projects } from "@/content";
import { notFound } from "next/navigation";

function ProjectModal({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) notFound();

  return (
    <Modal>
      <ProjectView project={project} />
    </Modal>
  );
}

export default ProjectModal;
