import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 text-center">
      <h1 className="text-6xl font-extrabold text-accent mb-4">404</h1>
      <p className="text-lg text-text-secondary mb-8">
        Mission failed. Hero not found. Try dispatching someone else.
      </p>
      <Link
        href="/"
        className="inline-block px-5 py-2.5 rounded-lg bg-accent text-white font-semibold hover:bg-accent/80 transition-colors"
      >
        Back to Base
      </Link>
    </div>
  );
}
