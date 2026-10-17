function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 py-4 md:px-14 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          <span className="font-heading text-lg text-ink">PortfolioX</span>
          <span aria-hidden="true"> · </span>
          Portfolios for developers
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/nadamomtaz/PortfolioX"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm text-muted hover:text-ink hover:underline ${focusStyle}`}
          >
            GitHub ↗
          </a>
          <span className="font-mono text-xs text-muted">© 2026</span>
        </div>
      </div>
    </footer>
  );
}
