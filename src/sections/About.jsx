import SectionTitle from '../components/SectionTitle';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-surface-dark">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionTitle>About Me</SectionTitle>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <div>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              I'm an Informatics Engineering graduate with a strong interest in backend and web development.
            </p>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              My experience includes developing institutional web applications using Laravel, PHP, MySQL, and JavaScript, as well as deploying and maintaining applications in production environments.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              I also have experience in cloud computing through Bangkit Academy and IT infrastructure and troubleshooting through the Google IT Support Professional Certificate.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="space-y-6">
            <div className="border-b border-border-subtle pb-4">
              <p className="text-text-secondary text-sm mb-1">Location</p>
              <p className="text-white text-lg font-medium">Indonesia</p>
            </div>
            <div className="border-b border-border-subtle pb-4">
              <p className="text-text-secondary text-sm mb-1">Focus</p>
              <p className="text-white text-lg font-medium">Backend Development</p>
            </div>
            <div className="border-b border-border-subtle pb-4">
              <p className="text-text-secondary text-sm mb-1">Education</p>
              <p className="text-white text-lg font-medium">D4 Informatics Engineering</p>
            </div>
            <div className="border-b border-border-subtle pb-4">
              <p className="text-text-secondary text-sm mb-1">English</p>
              <p className="text-white text-lg font-medium">Intermediate - Working Profiency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
