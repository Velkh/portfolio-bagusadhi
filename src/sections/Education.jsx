import SectionTitle from '../components/SectionTitle';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-32 bg-bg-dark">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionTitle>Education</SectionTitle>

        <div className="bg-surface-dark border border-border-subtle rounded-lg p-6 md:p-8 max-w-2xl">
          <div className="mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Politeknik Negeri Jakarta
            </h3>
            <p className="text-accent font-medium mt-1">D4 — Teknik Informatika</p>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-4">
            <p className="text-text-secondary">2022 — 2026</p>
            <p className="text-white font-medium">GPA: 3.67 / 4.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
