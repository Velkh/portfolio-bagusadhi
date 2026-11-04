import SkillBadge from './SkillBadge';

export default function ProjectCard({ project }) {
  const hasLinks = project.links.caseStudy || project.links.github || project.links.liveDemo;

  return (
    <div className="group neo-card overflow-hidden flex flex-col md:flex-row">
      {/* Project Image */}
      <div className="relative w-full h-48 md:h-auto md:w-80 lg:w-96 md:min-h-64 shrink-0 bg-bg-dark overflow-hidden border-b-[3px] md:border-b-0 md:border-r-[3px] border-white">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          width="800"
          height="450"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.isAcademic && (
          <div className="absolute top-3 left-3 bg-accent px-2 py-1 border-2 border-black text-xs font-bold uppercase text-black">
            Academic Project
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-6 md:p-8 flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.name}</h3>
        <p className="text-text-secondary text-sm md:text-base mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1 mb-4 text-sm text-text-secondary">
          {project.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex gap-2">
              <span className="text-accent" aria-hidden="true">•</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <SkillBadge key={tech}>{tech}</SkillBadge>
          ))}
        </div>

        {/* Links (pushed to the bottom of the card) */}
        {hasLinks && (
          <div className="flex gap-4 pt-4 mt-auto border-t-2 border-white">
            {project.links.caseStudy && (
              <a
                href={project.links.caseStudy}
                className="inline-flex items-center text-sm font-bold uppercase text-accent hover:underline"
              >
                Case Study
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold uppercase text-accent hover:underline"
              >
                GitHub
              </a>
            )}
            {project.links.liveDemo && (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold uppercase text-accent hover:underline"
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