export default function ProjectCaseStudyLoading() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button Skeleton */}
        <div className="skeleton h-4 w-32 mb-8" />

        {/* Header Skeleton */}
        <header className="mb-12 pb-8 border-b border-border">
          <div className="skeleton h-12 w-3/4 mb-3" />
          <div className="skeleton h-4 w-24 mb-4" />

          {/* Tags */}
          <div className="flex gap-2 mt-2 mb-4">
            <div className="skeleton h-6 w-16 rounded-full" />
            <div className="skeleton h-6 w-20 rounded-full" />
            <div className="skeleton h-6 w-14 rounded-full" />
          </div>

          {/* Description */}
          <div className="skeleton h-5 w-full mb-2" />
          <div className="skeleton h-5 w-2/3" />

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <div className="skeleton h-10 w-40 rounded-lg" />
            <div className="skeleton h-10 w-44 rounded-lg" />
          </div>
        </header>

        {/* Content Skeleton */}
        <article className="space-y-4">
          <div className="skeleton h-8 w-1/3 mt-8" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-5/6" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-3/4" />

          <div className="skeleton h-32 w-full rounded-xl mt-6" />

          <div className="skeleton h-8 w-2/5 mt-8" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-4/5" />

          <div className="skeleton h-48 w-full rounded-xl mt-6" />

          <div className="skeleton h-8 w-1/4 mt-8" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-2/3" />
        </article>

        {/* Footer Skeleton */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="skeleton h-4 w-36" />
        </footer>
      </div>
    </div>
  );
}
