import SectionTitle from '../components/SectionTitle';

function MailIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function GithubIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.699-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.349-1.088.635-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.75 0 .268.18.58.688.481A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.114 20.452H3.558V9h3.556v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-surface-dark">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionTitle>Let's Work Together</SectionTitle>

        <div className="max-w-3xl">
          <p className="text-lg md:text-xl text-text-secondary mb-12 leading-relaxed">
            I'm currently open to opportunities in backend and web development.
            Feel free to contact me if you'd like to discuss a role, project,
            or collaboration.
          </p>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Email */}
            <a
              href="mailto:bagusadhinugroho95@gmail.com"
              className="group bg-bg-dark border border-border-subtle rounded-lg p-6 hover:border-accent transition-colors duration-200"
            >
              <div className="flex items-center gap-3 mb-3 text-accent">
                <MailIcon />
                <h3 className="text-white font-semibold">Email</h3>
              </div>

              <p className="text-text-secondary text-sm group-hover:text-white transition-colors break-all">
                bagusadhinugroho95@gmail.com
              </p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Velkh"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-bg-dark border border-border-subtle rounded-lg p-6 hover:border-accent transition-colors duration-200"
            >
              <div className="flex items-center gap-3 mb-3 text-accent">
                <GithubIcon />
                <h3 className="text-white font-semibold">GitHub</h3>
              </div>

              <p className="text-text-secondary text-sm group-hover:text-white transition-colors">
                View my repositories
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/bagusadhi8"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-bg-dark border border-border-subtle rounded-lg p-6 hover:border-accent transition-colors duration-200"
            >
              <div className="flex items-center gap-3 mb-3 text-accent">
                <LinkedinIcon />
                <h3 className="text-white font-semibold">LinkedIn</h3>
              </div>

              <p className="text-text-secondary text-sm group-hover:text-white transition-colors">
                Connect with me
              </p>
            </a>
          </div>

          {/* Primary CTA */}
          <a
            href="mailto:bagusadhinugroho95@gmail.com"
            className="inline-block px-8 py-4 bg-accent text-bg-dark font-bold rounded hover:bg-accent/90 transition-all duration-150 text-lg"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
}