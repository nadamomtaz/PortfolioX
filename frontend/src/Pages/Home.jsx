import { useEffect, useState } from 'react';

function Home() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

// Close the mobile menu when Escape is pressed
useEffect(() => {
function handleKeyDown(event) {
if (event.key === 'Escape') {
setIsMenuOpen(false);
}
}

window.addEventListener('keydown', handleKeyDown);

return () => {
  window.removeEventListener('keydown', handleKeyDown);
};

}, []);

// Close the menu when a navigation link is selected
function closeMenu() {
setIsMenuOpen(false);
}

const focusStyle =
'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent';

return ( <div className="min-h-screen overflow-x-hidden bg-page text-text-primary">
{/* Skip Link: visible when focused */} <a
     href="#main-content"
     className="sr-only z-[100] rounded-md bg-accent px-4 py-3 font-semibold text-page focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
   >
Skip to main content </a>

  {/* Navbar */}
  <header className="sticky top-0 z-50 border-b border-white/10 bg-page/80 backdrop-blur-md">
    <nav
      className="mx-auto flex h-16 max-w-[1296px] items-center justify-between px-6 md:px-12"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <a
        href="/"
        onClick={closeMenu}
        className={`text-2xl font-bold tracking-tight ${focusStyle}`}
        aria-label="PortfolioX Home"
      >
        Portfolio<span className="text-accent">X</span>
      </a>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-8 md:flex">
        <a
          href="#features"
          className={`text-sm text-text-secondary transition-colors duration-200 hover:text-white hover:underline ${focusStyle}`}
        >
          Features
        </a>

        <a
          href="/login"
          className={`rounded-lg px-4 py-2 text-sm text-text-secondary transition-colors duration-200 hover:text-white ${focusStyle}`}
        >
          Log in
        </a>

        <a
          href="/signup"
          className={`rounded-[10px] bg-accent px-5 py-2.5 text-sm font-semibold text-page transition-colors duration-200 hover:bg-accent-hover active:scale-[0.98] ${focusStyle}`}
        >
          Sign up
        </a>
      </div>

      {/* Mobile Actions */}
      <div className="flex items-center gap-2 md:hidden">
        {/* Keep Sign up visible on mobile */}
        <a
          href="/signup"
          className={`inline-flex min-h-11 items-center justify-center rounded-[10px] bg-accent px-4 text-sm font-semibold text-page transition-colors duration-200 hover:bg-accent-hover ${focusStyle}`}
        >
          Sign up
        </a>

        <button
          type="button"
          className={`flex h-11 w-11 items-center justify-center rounded-lg text-2xl transition-colors duration-200 hover:bg-white/5 ${focusStyle}`}
          onClick={() => setIsMenuOpen((previous) => !previous)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true">
            {isMenuOpen ? '×' : '☰'}
          </span>
        </button>
      </div>
    </nav>

    {/* Mobile Navigation: remains in the DOM */}
    <div
      id="mobile-menu"
      aria-label="Mobile navigation"
      aria-hidden={!isMenuOpen}
      className={`border-t border-white/10 px-6 py-4 md:hidden ${
        isMenuOpen ? 'block' : 'hidden'
      }`}
    >
      <a
        href="#features"
        onClick={closeMenu}
        tabIndex={isMenuOpen ? 0 : -1}
        className={`block rounded-lg px-3 py-3 text-text-secondary transition-colors hover:bg-white/5 hover:text-white ${focusStyle}`}
      >
        Features
      </a>

      <a
        href="/login"
        onClick={closeMenu}
        tabIndex={isMenuOpen ? 0 : -1}
        className={`block rounded-lg px-3 py-3 text-text-secondary transition-colors hover:bg-white/5 hover:text-white ${focusStyle}`}
      >
        Log in
      </a>
    </div>
  </header>

  <main id="main-content" tabIndex={-1}>
    {/* Hero Section */}
    <section
      id="home"
      className="relative isolate scroll-mt-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-purple/10 blur-[120px]"
      />

      <div className="mx-auto grid min-h-[640px] max-w-[1296px] items-center gap-12 px-6 py-16 md:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-16">
        {/* Hero Content */}
        <div className="relative z-10 max-w-[600px]">
          <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/5 px-4 py-2 text-[13px] font-semibold text-accent">
            Built for junior developers
          </span>

          <h1
            id="hero-heading"
            className="mt-8 text-[40px] leading-[1.1] font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-[64px]"
          >
            Your projects deserve
            <br className="hidden sm:block" /> to be{' '}
            <span className="bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent">
              seen.
            </span>
          </h1>

          <p className="mt-6 max-w-[520px] text-base leading-[1.8] text-text-secondary sm:text-lg">
            Connect your GitHub and LinkedIn. Our AI turns your projects
            into a polished portfolio in minutes.
          </p>

          {/* Hero Actions */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/signup"
              className={`inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[10px] bg-accent px-7 font-semibold text-page transition-colors duration-200 hover:bg-accent-hover active:scale-[0.98] ${focusStyle}`}
            >
              Build my portfolio
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#how-it-works"
              className={`inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[10px] px-5 font-semibold transition-colors duration-200 hover:text-accent ${focusStyle}`}
            >
              How it works
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          {/* Privacy Message */}
          <p className="mt-5 flex items-center gap-2 text-sm text-text-secondary">
            <span aria-hidden="true">🔒</span>
            Public data only. We never change your GitHub.
          </p>
        </div>

        {/* Illustration */}
        <div
          className="relative mx-auto flex min-h-[380px] w-full max-w-[520px] items-center justify-center sm:min-h-[440px]"
          role="img"
          aria-label="Illustration of scattered project cards transforming into an organized portfolio"
        >
          {/* Decorative Glow */}
          <div
            aria-hidden="true"
            className="absolute h-64 w-64 rounded-full bg-accent/10 blur-[90px]"
          />

          {/* Scattered Project Card 1 */}
          <div
            aria-hidden="true"
            className="absolute left-1 top-8 w-28 -rotate-6 rounded-2xl border border-white/10 bg-card/90 p-3 opacity-70 sm:left-0 sm:top-12 sm:w-40 sm:p-4"
          >
            <div className="mb-3 h-7 w-7 rounded-lg bg-purple/20 sm:mb-4 sm:h-8 sm:w-8" />
            <div className="h-2 w-16 rounded-full bg-white/20 sm:w-20" />
            <div className="mt-3 h-2 w-12 rounded-full bg-white/10 sm:w-14" />
          </div>

          {/* Scattered Project Card 2 */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-0 w-28 rotate-3 rounded-2xl border border-white/10 bg-card/90 p-3 opacity-70 sm:bottom-14 sm:left-3 sm:w-40 sm:p-4"
          >
            <div className="mb-3 h-7 w-7 rounded-lg bg-accent/20 sm:mb-4 sm:h-8 sm:w-8" />
            <div className="h-2 w-20 rounded-full bg-white/20 sm:w-24" />
            <div className="mt-3 h-2 w-14 rounded-full bg-white/10 sm:w-16" />
          </div>

          {/* Scattered Project Card 3: repositioned */}
          <div
            aria-hidden="true"
            className="absolute right-1 top-8 w-24 rotate-3 rounded-2xl border border-white/10 bg-card/90 p-3 opacity-70 sm:right-0 sm:top-12 sm:w-36 sm:p-4"
          >
            <div className="mb-3 h-7 w-7 rounded-lg bg-success/15 sm:mb-4 sm:h-8 sm:w-8" />
            <div className="h-2 w-14 rounded-full bg-white/20 sm:w-16" />
            <div className="mt-3 h-2 w-10 rounded-full bg-white/10 sm:w-12" />
          </div>

          {/* AI Sparkle */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/50 bg-page text-xl text-accent shadow-[0_0_30px_rgba(34,211,238,0.12)]"
          >
            ✦
          </div>

          {/* Organized Portfolio Card */}
          <div className="absolute right-1 top-1/2 z-20 w-[200px] -translate-y-1/2 rounded-2xl border border-card-border bg-card p-4 shadow-xl sm:right-4 sm:w-[240px] sm:p-5 lg:right-2 lg:w-[260px] lg:p-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 sm:h-11 sm:w-11" />

              <div className="min-w-0 flex-1">
                <div className="h-3 w-24 max-w-full rounded-full bg-white/25" />
                <div className="mt-2 h-2 w-16 rounded-full bg-white/10" />
              </div>
            </div>

            <div className="mt-5 h-2.5 w-full rounded-full bg-white/20 sm:mt-6" />
            <div className="mt-3 h-2.5 w-4/5 rounded-full bg-white/10" />

            {/* Technology Tags */}
            <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
              <span className="rounded-md border border-accent/20 bg-accent/5 px-1.5 py-1 font-mono text-[10px] text-accent sm:px-2">
                React
              </span>
              <span className="rounded-md border border-purple/20 bg-purple/5 px-1.5 py-1 font-mono text-[10px] text-purple sm:px-2">
                .NET
              </span>
              <span className="rounded-md border border-white/10 px-1.5 py-1 font-mono text-[10px] text-text-secondary sm:px-2">
                SQL
              </span>
            </div>

            {/* Project Previews */}
            <div className="mt-5 space-y-3 sm:mt-6">
              <div className="rounded-xl border border-white/5 bg-page/70 p-3">
                <div className="h-2.5 w-3/5 rounded-full bg-white/20" />
                <div className="mt-3 h-2 w-full rounded-full bg-white/10" />
                <div className="mt-2 h-2 w-2/3 rounded-full bg-white/10" />
              </div>

              <div className="rounded-xl border border-white/5 bg-page/70 p-3">
                <div className="h-2.5 w-2/5 rounded-full bg-white/20" />
                <div className="mt-3 h-2 w-4/5 rounded-full bg-white/10" />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-text-secondary sm:mt-5">
              <span className="h-2 w-2 rounded-full bg-success" />
              Portfolio preview
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section
      id="how-it-works"
      className="scroll-mt-24 px-6 py-20 md:px-12 md:py-[120px]"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="how-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            How it works
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
            From scattered repos to a polished portfolio in three steps.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              number: '01',
              icon: '⌘',
              title: 'Connect',
              description:
                'Sign in and share your GitHub and LinkedIn.',
            },
            {
              number: '02',
              icon: '✦',
              title: 'Talk to the AI',
              description:
                'Answer a few questions about your projects.',
            },
            {
              number: '03',
              icon: '↗',
              title: 'Get your portfolio',
              description:
                'Preview it, edit it, and make it yours.',
            },
          ].map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-card-border bg-card p-6 transition-colors duration-200 hover:border-accent/30 sm:p-8"
            >
              <span className="font-mono text-3xl font-semibold text-accent">
                {step.number}
              </span>

              <div
                aria-hidden="true"
                className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/5 text-2xl text-accent"
              >
                {step.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section
      id="features"
      className="scroll-mt-24 px-6 py-20 md:px-12 md:py-[120px]"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="features-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Two tools, one goal
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
            Everything you need to present your work with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Portfolio Builder */}
          <article className="rounded-2xl border border-card-border bg-card p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/5 text-2xl text-accent"
            >
              ✦
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              Portfolio Builder
            </h3>

            <p className="mt-3 leading-relaxed text-text-secondary">
              Chat with an AI that understands your repos, and watch your
              portfolio take shape.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                'AI-written project descriptions',
                'Live preview',
                'Add experience, education, and skills',
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="font-semibold text-success"
                  >
                    ✓
                  </span>
                  <span className="text-text-primary">{feature}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* GitHub Profile Improver */}
          <article className="rounded-2xl border border-card-border bg-card p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple/20 bg-purple/5 text-2xl text-purple"
            >
              ↗
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              GitHub Profile Improver
            </h3>

            <p className="mt-3 leading-relaxed text-text-secondary">
              Get clear suggestions to improve your profile and a
              ready-to-use README for every repo.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                'Profile analysis',
                'Per-repo README help',
                'You stay in control',
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="font-semibold text-success"
                  >
                    ✓
                  </span>
                  <span className="text-text-primary">{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto flex min-h-[300px] max-w-[1200px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-purple/15 via-card to-accent/10 px-6 py-12 text-center sm:px-12">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to show your work?
        </h2>

        <p className="mt-4 max-w-xl leading-relaxed text-text-secondary sm:text-lg">
          It takes a few minutes. No design skills needed.
        </p>

        <a
          href="/signup"
          className={`mt-8 inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[10px] bg-accent px-7 font-semibold text-page transition-colors duration-200 hover:bg-accent-hover active:scale-[0.98] ${focusStyle}`}
        >
          Build my portfolio
          <span aria-hidden="true">→</span>
        </a>

        <p className="mt-5 text-sm text-text-secondary">
          Public data only. We never change your GitHub.
        </p>
      </div>
    </section>
  </main>

  {/* Footer */}
  <footer className="border-t border-white/10 bg-[#080C18] px-6 py-8 md:px-12">
    <div className="mx-auto flex max-w-[1200px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <a
          href="/"
          className={`text-xl font-bold tracking-tight ${focusStyle}`}
          aria-label="PortfolioX Home"
        >
          Portfolio<span className="text-accent">X</span>
        </a>

        <p className="mt-2 text-sm text-text-secondary">
          Built for DEPI · Front-End Development
        </p>
      </div>

      <nav aria-label="Footer navigation" className="flex flex-wrap gap-5">
        <a
          href="#features"
          className={`text-sm text-text-secondary transition-colors hover:text-white ${focusStyle}`}
        >
          Features
        </a>

        <a
          href="#how-it-works"
          className={`text-sm text-text-secondary transition-colors hover:text-white ${focusStyle}`}
        >
          How it works
        </a>

        <a
          href="https://github.com/nadamomtaz/PortfolioX"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm text-text-secondary transition-colors hover:text-white ${focusStyle}`}
        >
          GitHub ↗
        </a>
      </nav>
    </div>

    <div className="mx-auto mt-6 max-w-[1200px] border-t border-white/5 pt-5">
      <p className="text-xs text-text-secondary">
        © 2026 PortfolioX
      </p>
    </div>
  </footer>
</div>


);
}

export default Home;
