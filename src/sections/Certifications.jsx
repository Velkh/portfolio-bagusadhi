import SectionTitle from '../components/SectionTitle';
import CertificationCard from '../components/CertificationCard';
import { certificates } from '../data/certificates';

export default function Certifications() {
  return (
    <section id="certificates" className="py-20 md:py-32 bg-surface-dark">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionTitle>Certifications</SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {certificates.map((cert) => (
            <CertificationCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
