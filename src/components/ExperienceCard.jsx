export default function ExperienceCard({ experience }) {
  return (
    <div className="bg-surface-dark border border-border-subtle rounded-lg p-6 md:p-8 hover:border-accent transition-colors duration-200">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{experience.role}</h3>
          <p className="text-accent font-medium">{experience.company}</p>
        </div>
        <p className="text-text-secondary text-sm whitespace-nowrap mt-2 md:mt-0">
          {experience.period}
        </p>
      </div>

      <p className="text-text-secondary mb-6 leading-relaxed">{experience.description}</p>

      <div className="mb-6">
        <h4 className="text-white font-semibold mb-3">Responsibilities & Contributions</h4>
        <ul className="space-y-2">
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index} className="flex gap-3 text-text-secondary">
              <span className="text-accent font-bold flex-shrink-0">•</span>
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-3">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-bg-dark border border-border-subtle rounded text-xs text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
