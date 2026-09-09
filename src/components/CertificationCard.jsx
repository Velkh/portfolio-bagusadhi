export default function CertificationCard({ certificate }) {
  return (
    <div className="group bg-surface-dark border border-border-subtle rounded-lg p-6 hover:border-accent transition-colors duration-200">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <img
            src={certificate.image}
            alt={certificate.name}
            className="w-full h-32 object-cover rounded bg-bg-dark"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">{certificate.name}</h3>
          <p className="text-text-secondary text-sm mb-3">{certificate.issuer}</p>
          {certificate.score && (
            <p className="text-accent font-medium text-sm">{certificate.score}</p>
          )}
        </div>
        {certificate.credentialUrl && (
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-accent hover:underline mt-4"
          >
            View Credential →
          </a>
        )}
      </div>
    </div>
  );
}
