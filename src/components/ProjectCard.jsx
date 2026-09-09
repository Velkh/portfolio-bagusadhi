import SkillBadge from './SkillBadge';

export default function ProjectCard({ project }) {
  const hasLinks = project.links.caseStudy || project.links.github || project.links.liveDemo;

  return (
    <div className="group bg-surface-dark border border-border-subtle rounded-lg overflow-hidden hover:border-accent transition-colors duration-200">
      {/* Project Image */}
      <div className="relative w-full h-48 md:h-56 bg-bg-dark overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.isAcademic && (
          <div className="absolute top-3 right-3 bg-accent/90 px-2 py-1 rounded text-xs font-medium text-white">
            Academic Project
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.name}</h3>
        <p className="text-text-secondary text-sm md:text-base mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <SkillBadge key={tech}>{tech}</SkillBadge>
          ))}
        </div>

        {/* Links */}
        {hasLinks && (
          <div className="flex gap-3 pt-4 border-t border-border-subtle">
            {project.links.caseStudy && (
              <a
                href={project.links.caseStudy}
                className="inline-flex items-center text-sm font-medium text-accent hover:underline"
              >
                Case Study
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-accent hover:underline"
              >
                GitHub
              </a>
            )}
            {project.links.liveDemo && (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-accent hover:underline"
              >
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
