export default function DotCluster({ className = "" }) {
  return (
    <div className={`hidden grid-cols-7 gap-2 md:grid ${className}`}>
      {Array.from({ length: 35 }).map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#2cbeff] opacity-75" />
      ))}
    </div>
  );
}
