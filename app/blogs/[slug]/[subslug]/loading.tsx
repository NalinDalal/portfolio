export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Back Button Skeleton */}
        <div className="skeleton h-4 w-28 mb-8" />

        {/* Header Skeleton */}
        <header className="mb-12 pb-8 border-b border-border">
          <div className="skeleton h-12 w-3/4 mb-3" />
          <div className="skeleton h-4 w-24 mb-4" />

          {/* Tags */}
          <div className="flex gap-2 mt-2 mb-4">
            <div className="skeleton h-6 w-18 rounded-full" />
            <div className="skeleton h-6 w-14 rounded-full" />
            <div className="skeleton h-6 w-20 rounded-full" />
          </div>

          {/* Description */}
          <div className="skeleton h-5 w-full mb-2" />
          <div className="skeleton h-5 w-2/3" />
        </header>

        {/* Content Skeleton */}
        <article className="space-y-4">
          <div className="skeleton h-8 w-2/5 mt-8" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-5/6" />

          <div className="skeleton h-28 w-full rounded-xl mt-6" />

          <div className="skeleton h-8 w-1/3 mt-8" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-3/4" />
          <div className="skeleton h-4 w-full" />

          <div className="skeleton h-40 w-full rounded-xl mt-6" />

          <div className="skeleton h-8 w-1/4 mt-8" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-4/5" />
        </article>

        {/* Footer Skeleton */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="skeleton h-4 w-32" />
        </footer>
      </div>
    </div>
  );
}
