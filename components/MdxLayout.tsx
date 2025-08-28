export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-lg prose-slate dark:prose-invert mx-auto py-8 px-4 bg-slate-950 rounded-xl shadow-lg">
      {children}
    </div>
  );
}
