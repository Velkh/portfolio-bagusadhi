export default function SectionTitle({ children, id }) {
  return (
    <div id={id} className="mb-12 md:mb-16">
      <h2 className="neo-title text-3xl md:text-5xl font-bold">{children}</h2>
    </div>
  );
}
