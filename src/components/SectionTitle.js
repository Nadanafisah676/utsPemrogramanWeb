export default function SectionTitle({ children, sub }) {
  return (
    <div className="mb-8 border-l-4 border-gold-400 pl-4">
      <h2 className="font-display text-2xl font-bold text-brand-900 md:text-3xl">{children}</h2>
      {sub && <p className="mt-1 text-slate-600">{sub}</p>}
    </div>
  );
}
