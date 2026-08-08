import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  IoHomeOutline,
  IoBriefcaseOutline,
  IoCodeSlashOutline,
  IoSunnyOutline,
  IoMoonOutline,
} from "react-icons/io5";

const pages = [
  { id: "home", href: "/", icon: IoHomeOutline, label: "Home" },
  { id: "work", href: "/work", icon: IoBriefcaseOutline, label: "Work" },
  { id: "projects", href: "/projects", icon: IoCodeSlashOutline, label: "Projects" },
];

function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return { dark, toggle };
}

/**
 * The active pill slides between items of differing widths, so its position and
 * size have to be measured from the DOM rather than computed from the index.
 */
function useActiveRect(currentPage: string) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<{ left: number; width: number } | null>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const active = track?.querySelector<HTMLElement>(`[data-page="${currentPage}"]`);
    if (!track || !active) return;

    const measure = () =>
      setRect({ left: active.offsetLeft, width: active.offsetWidth });

    measure();

    // labels shift once the webfont swaps in, so re-measure when it settles
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, [currentPage]);

  return { trackRef, rect };
}

/**
 * The navbar persists across client-side navigations, so its `currentPage` prop
 * is frozen at whatever page first rendered it — the live value has to come
 * from the URL instead.
 */
function useCurrentPage(initial: string) {
  const [page, setPage] = useState(initial);

  useEffect(() => {
    const sync = () => {
      const path = window.location.pathname.replace(/\/$/, "");
      setPage(pages.find((p) => p.href.replace(/\/$/, "") === path)?.id ?? "home");
    };
    sync();
    document.addEventListener("astro:page-load", sync);
    return () => document.removeEventListener("astro:page-load", sync);
  }, []);

  return page;
}

export function Navbar({ currentPage: initialPage }: { currentPage: string }) {
  const { dark, toggle } = useTheme();
  const currentPage = useCurrentPage(initialPage);
  const { trackRef, rect } = useActiveRect(currentPage);

  return (
    <nav className="fixed top-12 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4 pointer-events-none">
      <div
        className="nav-glass inline-flex items-center gap-1 p-[3px] rounded-[10px] border pointer-events-auto"
        style={{
          borderColor: "var(--c-nav-glass-border)",
          background: "var(--c-nav-glass)",
          boxShadow: "var(--c-nav-glass-lift)",
          backdropFilter: "blur(20px) saturate(1.5)",
          WebkitBackdropFilter: "blur(20px) saturate(1.5)",
        }}
      >
        <div ref={trackRef} className="relative flex items-center">
          {rect && (
            <div
              className="absolute top-0 bottom-0 rounded-lg transition-[transform,width] duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)]"
              style={{
                background: "var(--c-nav-pill)",
                border: "1px solid var(--c-nav-pill-border)",
                boxShadow: "var(--c-nav-pill-lift)",
                width: rect.width,
                transform: `translateX(${rect.left}px)`,
              }}
            />
          )}
          {pages.map(({ id, href, icon: Icon, label }) => (
            <a
              key={id}
              href={href}
              data-page={id}
              aria-current={currentPage === id ? "page" : undefined}
              className="nav-item relative z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[12.5px] whitespace-nowrap transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{
                color:
                  currentPage === id
                    ? "var(--c-nav-item-active)"
                    : "var(--c-nav-item)",
                fontWeight: currentPage === id ? 500 : 400,
              }}
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          <span
            className="w-px h-4 mr-1"
            style={{ background: "var(--c-nav-divider)" }}
          />

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="nav-toggle w-6 h-6 flex items-center justify-center rounded-full cursor-pointer transition-[color,background,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-90"
            style={{
              color: "var(--c-nav-item)",
              background: "transparent",
              border: "none",
            }}
          >
            {dark ? <IoSunnyOutline size={15} /> : <IoMoonOutline size={15} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
