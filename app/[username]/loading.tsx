import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen px-4 py-16" role="status" aria-live="polite">
      <span className="sr-only">Loading profile...</span>
      
      <div className="mx-auto max-w-md space-y-4">
        {/* Skeleton for the ProfileCard area */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <Skeleton aria-hidden="true" className="h-24 w-24 rounded-full" /> {/* Avatar */}
            <Skeleton aria-hidden="true" className="h-8 w-32" />              {/* Name */}
            <Skeleton aria-hidden="true" className="h-4 w-48" />              {/* Bio */}
          </div>
          
          <div className="space-y-3">
            <Skeleton aria-hidden="true" className="h-12 w-full rounded-lg" /> {/* Link 1 */}
            <Skeleton aria-hidden="true" className="h-12 w-full rounded-lg" /> {/* Link 2 */}
            <Skeleton aria-hidden="true" className="h-12 w-full rounded-lg" /> {/* Link 3 */}
          </div>
        </div>

        {/* Skeleton for the Save Contact / Download buttons */}
        <div className="flex gap-2 justify-center">
          <Skeleton aria-hidden="true" className="h-12 flex-1 rounded-lg" />
          <Skeleton aria-hidden="true" className="h-12 flex-1 rounded-lg" />
        </div>
      </div>
    </main>
  );
}