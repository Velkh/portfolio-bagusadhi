export default function SectionTitle({ children, id }) {
  return (
    <div id={id} className="mb-12 md:mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white">{children}</h2>
    </div>
  );
}
