export default function ProjectsLoading() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header Skeleton */}
        <div className="mb-12">
          <div className="skeleton h-10 w-48 mb-3" />
          <div className="skeleton h-5 w-80" />
        </div>

        {/* Tabs Skeleton */}
        <div className="flex gap-2 mb-8">
          <div className="skeleton h-9 w-20 rounded-lg" />
          <div className="skeleton h-9 w-24 rounded-lg" />
          <div className="skeleton h-9 w-16 rounded-lg" />
        </div>

        {/* Project Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border border-border bg-surface"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="skeleton h-6 w-36" />
                <div className="skeleton h-5 w-5 rounded" />
              </div>
              <div className="skeleton h-4 w-full mb-2" />
              <div className="skeleton h-4 w-3/4 mb-4" />
              <div className="flex gap-2">
                <div className="skeleton h-6 w-14 rounded-full" />
                <div className="skeleton h-6 w-18 rounded-full" />
                <div className="skeleton h-6 w-12 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
