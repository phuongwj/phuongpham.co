import { useEffect, useState } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const pages = [
  { id: "home", href: "/", label: "Home" },
  { id: "projects", href: "/projects", label: "Projects" },
];

function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);

    const root = document.documentElement;
    // only the deliberate toggle animates the background; see .theme-anim
    root.classList.add("theme-anim");
    root.classList.toggle("dark", next);
    root.style.colorScheme = next ? "dark" : "light";
    localStorage.setItem("theme", next ? "dark" : "light");
    window.setTimeout(() => root.classList.remove("theme-anim"), 350);
  };

  return { dark, toggle };
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

/** True once the page has scrolled off the very top. */
function useScrolled(threshold = 16) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("astro:page-load", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("astro:page-load", onScroll);
    };
  }, [threshold]);

  return scrolled;
}

export function Navbar({ currentPage: initialPage }: { currentPage: string }) {
  const { dark, toggle } = useTheme();
  const currentPage = useCurrentPage(initialPage);
  const scrolled = useScrolled();

  return (
    // spans the content column, not the viewport
    <nav
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl transition-[padding,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
      style={{
        paddingTop: scrolled ? 8 : 40,
        paddingBottom: scrolled ? 8 : 18,
        background: "var(--c-nav-blur)",
        backdropFilter: "blur(12px) saturate(1.4)",
        WebkitBackdropFilter: "blur(12px) saturate(1.4)",
        // a hairline only once there is content behind it to separate from
        boxShadow: scrolled ? "0 1px 0 var(--c-divider)" : "none",
      }}
    >
      <div className="px-4 flex items-center gap-5">
        {pages.map(({ id, href, label }) => {
          const on = currentPage === id;
          return (
            <a
              key={id}
              href={href}
              data-page={id}
              aria-current={on ? "page" : undefined}
              className="nav-tab whitespace-nowrap"
              // active sits at the hover colour, not the section-heading colour
              style={{
                fontSize: scrolled ? 13 : 14,
                color: on ? "var(--c-nav-item-hover)" : "var(--c-muted)",
                fontWeight: 500,
              }}
            >
              {label}
            </a>
          );
        })}

        <div className="flex items-center ml-auto">
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
