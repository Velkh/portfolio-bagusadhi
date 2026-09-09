import SectionTitle from '../components/SectionTitle';
import ExperienceCard from '../components/ExperienceCard';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-bg-dark">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionTitle>Professional Experience</SectionTitle>

        <div className="space-y-8">
          {experience.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
