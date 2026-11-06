export default function LoadingSkeleton() {
  return (
    <div
      role="status"
      aria-label="Loading content"
      className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3"
    >
      <span className="sr-only">Loading content...</span>
      {Array.from({ length: 6 }, (_, index) => (
        <div
          key={index}
          aria-hidden="true"
          className="animate-pulse rounded-xl border border-gray-200 bg-white p-4"
        >
          <div className="h-48 rounded-lg bg-gray-200" />
          <div className="mt-4 h-5 w-3/4 rounded bg-gray-200" />
          <div className="mt-3 h-4 w-1/2 rounded bg-gray-200" />
          <div className="mt-5 h-10 rounded bg-gray-200" />
        </div>
      ))}
    </div>
  );
}
