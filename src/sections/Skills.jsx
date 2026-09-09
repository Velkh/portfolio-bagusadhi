import SectionTitle from '../components/SectionTitle';
import SkillBadge from '../components/SkillBadge';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-bg-dark">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionTitle>Skills & Technologies</SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-lg font-semibold text-white mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <SkillBadge key={item}>{item}</SkillBadge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
