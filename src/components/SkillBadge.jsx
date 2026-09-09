export default function SkillBadge({ children }) {
  return (
    <span className="inline-block px-3 py-1 bg-surface-dark border border-border-subtle rounded text-sm text-text-secondary hover:text-white hover:border-accent transition-colors duration-150">
      {children}
    </span>
  );
}
