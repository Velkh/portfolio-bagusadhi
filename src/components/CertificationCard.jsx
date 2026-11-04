import { useState } from 'react';

export default function CertificationCard({ certificate }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="group neo-card p-6">
      <div className="flex flex-col h-full">
        {certificate.image && !imgFailed && (
          <div className="mb-4">
            <img
              src={certificate.image}
              alt={certificate.name}
              loading="lazy"
              onError={() => setImgFailed(true)}
              className="w-full h-32 object-cover rounded bg-bg-dark"
            />
          </div>
        )}
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
