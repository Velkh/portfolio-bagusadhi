import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-black/80 border-t-4 border-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionTitle>Featured Projects</SectionTitle>

        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
