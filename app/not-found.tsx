import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found__panel">
        <p className="eyebrow">
          <span aria-hidden="true" />
          404 / Route not found
        </p>
        <h1
          id="not-found-title"
        >
          This page is not part of the current portfolio.
        </h1>
        <p>
          The link may have moved. Return to Muhammad Bilal&apos;s profile or continue to
          the selected project work.
        </p>

        <nav
          aria-label="Page recovery"
          className="not-found__actions"
        >
          <Link
            href="/"
            className="button button--primary"
          >
            Return home
          </Link>
          <Link
            href="/projects"
            className="button button--secondary"
          >
            Browse projects
          </Link>
        </nav>
      </div>
    </section>
  );
}
