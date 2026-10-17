import { useEffect, useRef, useState } from "react";

const focusStyle =
  "focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-accent";

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch {

    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
   }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return [theme, toggle];
}

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors duration-200 hover:bg-ink hover:text-page ${focusStyle}`}
    >
      {isDark ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          className="h-[18px] w-[18px]"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-[18px] w-[18px]"
        >
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
        </svg>
      )}
    </button>
  );
}
function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/85 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 md:px-14"
        aria-label="Main navigation"
      >
        <a
          href="/"
          aria-label="PortfolioX Home"
          className={`font-heading text-2xl leading-none sm:text-[28px] ${focusStyle}`}
        >
          PortfolioX
        </a>

        <div className="flex items-center gap-2 sm:gap-6">
          <a
            href="/login"
            className={`inline-flex min-h-11 items-center px-1 text-sm hover:underline sm:text-[15px] ${focusStyle}`}
          >
            Log in
          </a>

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <a
            href="/signup"
            className={`inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-4 text-sm font-semibold text-page transition-opacity duration-200 hover:opacity-85 sm:px-5 ${focusStyle}`}
          >
            Sign up
          </a>
        </div>
      </nav>
    </header>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full border border-hair px-2 py-1 font-mono text-xs sm:text-xs">
      {children}
    </span>
  );
}

function PanelLabel({ children }) {
  return (
    <span className="font-mono text-xs tracking-[0.18em] text-muted sm:text-xs">
      {children}
    </span>
  );
}

function Chrome({ url, children }) {
  return (
    <div className="mt-5 overflow-hidden rounded-md border border-hair sm:mt-6">
      <div className="flex items-center gap-2 border-b border-hair px-3 py-2">
        <span className="flex gap-1" aria-hidden="true">
          <i className="h-2 w-2 rounded-full bg-muted/40" />
          <i className="h-2 w-2 rounded-full bg-muted/40" />
          <i className="h-2 w-2 rounded-full bg-muted/40" />
        </span>
        <span className="truncate rounded bg-ink/5 px-2 py-0.5 font-mono text-xs text-muted">
          {url}
        </span>
      </div>
      <div className="p-3 sm:p-4">{children}</div>
    </div>
  );
}

function Dot({ className }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-2 w-2 rounded-full ${className}`}
    />
  );
}


function BeforePortfolio() {
  return (
    <>
      <PanelLabel>BEFORE</PanelLabel>

      <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
        <div className="-rotate-1 rounded-md border border-hair bg-page p-3 sm:p-4">
          <p className="font-mono text-xs text-muted">
            github.com/omar-hassan
          </p>
          <ul className="mt-3 space-y-2 font-mono text-xs sm:text-xs">
            <li>
              test123 <i className="text-muted">· no description</i>
            </li>
            <li>
              final-final-v2 <i className="text-muted">· no README</i>
            </li>
            <li>
              api-test-copy <i className="text-muted">· no README</i>
            </li>
            <li className="hidden sm:block">
              untitled-project <i className="text-muted">· no description</i>
            </li>
          </ul>
        </div>

        <div className="rotate-1 rounded-md border border-hair bg-page p-3 sm:mt-6 sm:p-4">
          <p className="font-mono text-xs text-muted">
            linkedin.com/in/omar-hassan
          </p>
          <p className="mt-3 text-xs font-semibold sm:text-sm">Omar Hassan</p>
          <p className="text-xs text-muted sm:text-xs">
            Junior Developer · Freelance
          </p>
          <p className="mt-2 text-xs italic text-muted sm:text-xs">
            About: (empty)
          </p>
          <p className="mt-2 text-xs sm:text-xs">
            C# · SQL · Word · Excel · HTML · Teamwork
          </p>
        </div>
      </div>

      <p className="mt-5 hidden w-fit rotate-[-2deg] rounded border border-dashed border-line/50 px-3 py-1.5 font-mono text-xs text-muted sm:block">
        CV_final_v3.pdf · last edited 2024
      </p>

      <p className="mt-5 text-xs italic text-muted sm:text-sm">
        Three places, no story. Nobody connects the dots for you.
      </p>
    </>
  );
}

function AfterPortfolio() {
  return (
    <>
      <PanelLabel>AFTER</PanelLabel>

      <Chrome url="omarhassan.dev">
        <div className="flex items-center justify-between text-xs sm:text-xs">
          <span className="font-heading text-base sm:text-lg">Omar Hassan</span>
          <span className="hidden gap-4 text-muted sm:flex">
            <span>Projects</span>
            <span>Experience</span>
            <span>Contact</span>
          </span>
        </div>

        <h3 className="mt-4 max-w-[330px] font-heading text-2xl leading-[1.05] sm:mt-5 sm:text-[34px]">
          Backend developer building reliable APIs and services.
        </h3>
        <p className="mt-2 max-w-[340px] text-xs leading-relaxed text-muted sm:text-sm">
          Based in Cairo. I design APIs and databases that stay simple as they grow.
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <Tag>.NET</Tag>
          <Tag>SQL</Tag>
          <Tag>Docker</Tag>
          <Tag>Git</Tag>
        </div>

        <div className="mt-4 border-t border-hair pt-3">
          <p className="font-mono text-xs tracking-widest text-muted">
            SELECTED WORK
          </p>

          <div className="mt-2 flex items-start justify-between gap-3 border-b border-hair pb-2">
            <div className="min-w-0">
              <p className="text-xs font-semibold sm:text-sm">Booking API</p>
              <p className="text-xs text-muted sm:text-xs">
                REST API with auth, roles and Swagger docs.
              </p>
            </div>
            <span className="shrink-0 font-mono text-xs text-accent">
              Docs ↗ Code ↗
            </span>
          </div>

          <div className="mt-2 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-semibold sm:text-sm">Inventory Service</p>
              <p className="text-xs text-muted sm:text-xs">
                Stock tracking service with PostgreSQL and tests.
              </p>
            </div>
            <span className="shrink-0 font-mono text-xs text-accent">
              Docs ↗ Code ↗
            </span>
          </div>
        </div>
      </Chrome>
    </>
  );
}


function BeforeGithub() {
  return (
    <>
      <PanelLabel>BEFORE</PanelLabel>

      <Chrome url="github.com/omar-hassan">
        <div className="flex items-center gap-3">
          <div
            aria-hidden="true"
            className="h-12 w-12 shrink-0 rounded-full bg-ink/10 sm:h-14 sm:w-14"
          />
          <div className="min-w-0">
            <p className="font-mono text-sm sm:text-base">omar-hassan</p>
            <p className="text-xs italic text-muted sm:text-xs">
              No bio · No location · No links
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-md border border-dashed border-line/50 p-3 text-center text-xs italic text-muted sm:text-xs">
          You don&apos;t have any pinned repositories yet.
        </div>

        <p className="mt-4 font-mono text-xs tracking-widest text-muted">
          REPOSITORIES
        </p>
        <ul className="mt-1 font-mono text-xs sm:text-xs">
          {[
            ["test123", "no description"],
            ["final-final-v2", "no README"],
            ["api-test-copy", "no README"],
            ["untitled-project", "no description"],
          ].map(([name, note], i) => (
            <li
              key={name}
              className={`flex items-center justify-between border-b border-hair py-2 ${
                i === 3 ? "hidden sm:flex" : ""
              }`}
            >
              <span>{name}</span>
              <span className="italic text-muted">{note}</span>
            </li>
          ))}
        </ul>
      </Chrome>
    </>
  );
}

function PinnedCard({ name, text, lang, dot, stars }) {
  return (
    <div className="rounded-md border border-hair p-3">
      <p className="font-mono text-xs font-medium text-accent sm:text-xs">
        {name}
      </p>
      <p className="mt-1 text-xs leading-relaxed text-muted sm:text-xs">
        {text}
      </p>
      <p className="mt-2 flex items-center gap-3 text-xs text-muted">
        <span className="flex items-center gap-1.5">
          <Dot className={dot} />
          {lang}
        </span>
        <span>★ {stars}</span>
      </p>
    </div>
  );
}

function AfterGithub() {
  return (
    <>
      <PanelLabel>AFTER</PanelLabel>

      <Chrome url="github.com/omar-hassan">
        <div className="flex items-center gap-3">
          <div
            aria-hidden="true"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line font-heading text-xl sm:h-14 sm:w-14 sm:text-2xl"
          >
            OH
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold sm:text-base">Omar Hassan</p>
            <p className="font-mono text-xs text-muted sm:text-xs">
              omar-hassan
            </p>
          </div>
        </div>

        <p className="mt-3 text-xs leading-relaxed sm:text-sm">
          Backend developer · .NET &amp; SQL. Building reliable APIs and
          services.
        </p>
        <p className="mt-1 text-xs text-muted sm:text-xs">
          Cairo, Egypt · omarhassan.dev
        </p>

        <div className="mt-3 rounded-md border border-hair">
          <p className="border-b border-hair px-3 py-1.5 font-mono text-xs tracking-widest text-muted">
            omar-hassan / README.md
          </p>
          <p className="px-3 py-2 text-xs leading-relaxed sm:text-xs">
            <span className="font-heading text-base sm:text-lg">Hi, I&apos;m Omar.</span>{" "}
            Currently learning Docker. Ask me about my projects below.
          </p>
        </div>

        <p className="mt-3 font-mono text-xs tracking-widest text-muted">
          PINNED
        </p>
        <div className="mt-1.5 grid grid-cols-2 gap-2">
          <PinnedCard
            name="booking-api"
            text="REST API with auth, roles and Swagger docs."
            lang="C#"
            dot="bg-accent"
            stars="12"
          />
          <PinnedCard
            name="inventory-service"
            text="Stock tracking service with PostgreSQL and tests."
            lang="Python"
            dot="bg-muted"
            stars="8"
          />
        </div>
      </Chrome>
    </>
  );
}

function HandleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M9 7l-5 5 5 5" />
      <path d="M15 7l5 5-5 5" />
    </svg>
  );
}

const VARIANTS = {
  portfolio: {
    label:
      "Comparison: a messy list of repositories versus an organized portfolio",
    Before: BeforePortfolio,
    After: AfterPortfolio,
  },
  github: {
    label:
      "Comparison: a repository with no README versus the same repository with a clear README",
    Before: BeforeGithub,
    After: AfterGithub,
  },
};

const REST_POSITION = 8;

function BeforeAfter({ variant }) {
  const { Before, After, label } = VARIANTS[variant];

  const [position, setPosition] = useState(100); // 100 = fully BEFORE
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef(null);
  const frame = useRef(null);
  const interacted = useRef(false);
  const dragging = useRef(false);

 useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced) {
      setPosition(REST_POSITION);
      return;
    }

    const start = performance.now();
    const duration = 2200;

    function animate(now) {
      if (interacted.current) return;
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setPosition(100 - eased * (100 - REST_POSITION));
      if (progress < 1) frame.current = requestAnimationFrame(animate);
    }

    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
  }, []);

  function stopIntro() {
    interacted.current = true;
    if (frame.current) cancelAnimationFrame(frame.current);
  }

  function updateFromX(clientX) {
    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const next = ((clientX - bounds.left) / bounds.width) * 100;
    setPosition(Math.max(0, Math.min(100, next)));
  }

  function onPointerDown(event) {
    stopIntro();
    dragging.current = true;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromX(event.clientX);
  }

  function onPointerMove(event) {
    if (dragging.current) updateFromX(event.clientX);
  }

  function onPointerUp() {
    dragging.current = false;
    setIsDragging(false);
  }

  function onKeyboardChange(event) {
    stopIntro();
    setPosition(Number(event.target.value));
  }

  const pos = { left: `${position}%` };
  const sliderValue = Math.round(position / 5) * 5;

  return (
    <div
      ref={containerRef}
      role="group"
      aria-label={label}
      className={`relative grid min-h-[420px] touch-pan-y select-none overflow-hidden rounded-md border border-line has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-[3px] has-[input:focus-visible]:outline-accent ${
        isDragging ? "cursor-grabbing" : "cursor-col-resize"
      }`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div className="col-start-1 row-start-1 overflow-hidden bg-before p-5 pb-10 sm:p-8 sm:pb-10">
        <Before />
      </div>

      <div
        className="col-start-1 row-start-1 overflow-hidden bg-surface p-5 pb-10 pl-8 sm:p-8 sm:pb-10 sm:pl-12"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        aria-hidden="true"
      >
        <After />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 top-0 z-10 w-0.5 -translate-x-1/2 bg-accent"
        style={pos}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-on-accent shadow-[0_2px_0_0_var(--line)] transition-transform duration-150 ${
          isDragging ? "scale-110" : ""
        }`}
        style={pos}
      >
        <HandleIcon />
      </div>

      <span className="pointer-events-none absolute bottom-3 right-4 z-10 font-mono text-xs text-muted">
        Sample data
      </span>

       <input
        type="range"
        min="0"
        max="100"
        step="5"
        value={sliderValue}
        onChange={onKeyboardChange}
        aria-label="Comparison divider"
        aria-valuetext={`Showing ${100 - sliderValue}% of the improved version`}
        className="sr-only"
      />
    </div>
  );
}
const TABS = [
  { id: "portfolio", label: "Portfolio" },
  { id: "github", label: "GitHub profile" },
];

function DemoTabs({ active, onChange }) {
  function onKeyDown(event) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next = active === "portfolio" ? "github" : "portfolio";
    onChange(next);
    document.getElementById(`tab-${next}`)?.focus();
  }

  return (
    <div
      role="tablist"
      aria-label="Choose what to preview"
      className="mb-4 inline-flex rounded-full border border-line p-1"
      onKeyDown={onKeyDown}
    >
      {TABS.map((tab) => {
        const selected = active === tab.id;
        return (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls="demo-panel"
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(tab.id)}
            className={`min-h-10 rounded-full px-5 font-mono text-xs tracking-[0.12em] transition-colors duration-200 ${focusStyle} ${
              selected ? "bg-ink text-page" : "text-muted hover:text-ink"
            }`}
          >
            {tab.label.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
function Hero() {
  const [tab, setTab] = useState("portfolio");

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 py-10 md:px-14 md:py-14 lg:min-h-[calc(100vh-121px)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:py-8"
    >
      <div>
        <h1
          id="hero-heading"
          className="font-heading text-[clamp(48px,6.4vw,96px)] leading-[0.97] tracking-[-0.025em]"
        >
          Turn your projects
          
          <br />
         into a professional <span className="mark italic">story </span>  worth telling.
        </h1>

        <p className="mt-6 max-w-[470px] text-base leading-[1.7] text-muted sm:text-lg">
   Build your portfolio and improve your GitHub presence with AI-powered tools.

        </p>



        <a
          href="/signup"
          className={`group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-ink px-7 font-semibold text-page transition-transform duration-150 hover:opacity-90 active:scale-[0.98] sm:w-auto ${focusStyle}`}
        >
          Get Started
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </a>

        <p className="mt-4 flex items-center gap-2 text-sm text-muted">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="h-4 w-4 shrink-0"
          >
            <rect x="5" y="10" width="14" height="11" rx="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          </svg>
          Public data only. We never change your GitHub.
        </p>
      </div>

      <div className="w-full">
        <DemoTabs active={tab} onChange={setTab} />
        <div id="demo-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
          <BeforeAfter key={tab} variant={tab} />
        </div>
      </div>
    </section>
  );
}


function Home() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-page text-ink">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-md bg-ink px-4 py-3 font-semibold text-page focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main id="main-content" tabIndex={-1} className="flex-1">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
