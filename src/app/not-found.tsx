import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <h1 className="text-6xl font-bold tracking-tight text-content font-mono">404</h1>
      <p className="mt-4 text-sm text-content-muted">
        This page could not be found.
      </p>
      <div className="mt-6 flex justify-center">
        <Link
          href="/"
          className="btn-chunky inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-xs font-semibold"
        >
          <ArrowLeft className="size-3.5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
